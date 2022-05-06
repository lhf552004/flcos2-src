package com.enisco.flcos.server.beans;

import com.enisco.flcos.server.documents.LogisticUnitLogDocument;
import com.enisco.flcos.server.dto.job.MessageDto;
import com.enisco.flcos.server.dto.job.NewJobDto;
import com.enisco.flcos.server.entities.IngredientEntity;
import com.enisco.flcos.server.entities.LogisticUnitEntity;
import com.enisco.flcos.server.entities.ProductEntity;
import com.enisco.flcos.server.entities.RecipeEntity;
import com.enisco.flcos.server.entities.bin.BinType;
import com.enisco.flcos.server.entities.bin.LayerEntity;
import com.enisco.flcos.server.entities.enums.JobStatus;
import com.enisco.flcos.server.entities.job.JobEntity;
import com.enisco.flcos.server.exceptions.FLCosException;
import com.enisco.flcos.server.repository.mongodb.LogisticUnitLogRepository;
import com.enisco.flcos.server.repository.relational.BinRepository;
import com.enisco.flcos.server.repository.relational.LayerRepository;
import com.enisco.flcos.server.repository.relational.LogisticUnitRepository;
import com.enisco.flcos.server.repository.relational.RecipeRepository;
import com.enisco.flcos.server.util.RepositoryUtil;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class IntakeJobManagementBean extends AbstractJobManagement {
    Logger logger = LoggerFactory.getLogger(IntakeJobManagementBean.class);
    private final double deviation = 0.02;

    private final LogisticUnitRepository logisticUnitRepository;
    private final LogisticUnitLogRepository logisticUnitLogRepository;
    private final BinRepository binRepository;
    private final LayerRepository layerRepository;
    private final RecipeRepository recipeRepository;

    @Autowired
    public IntakeJobManagementBean(LogisticUnitRepository logisticUnitRepository,
                                   LogisticUnitLogRepository logisticUnitLogRepository,
                                   BinRepository binRepository,
                                   LayerRepository layerRepository,
                                   RecipeRepository recipeRepository
    ) {
        this.logisticUnitLogRepository = logisticUnitLogRepository;
        this.logisticUnitRepository = logisticUnitRepository;
        this.binRepository = binRepository;
        this.layerRepository = layerRepository;
        this.recipeRepository = recipeRepository;
    }

    @Override
    public Logger getLogger() {
        return logger;
    }

    @Override
    public JobEntity createJob(NewJobDto newJobDto) {
        var jobEntity = modelMapper.map(newJobDto, JobEntity.class);
        var line = jobEntity.getLine();
        if (line == null) {
            throw new FLCosException("Line is not set.");
        }
        if (jobEntity.getRecipe() == null) {
            if (newJobDto.getProduct() != null) {
                var productEntity = modelMapper.map(newJobDto.getProduct(), ProductEntity.class);
                var availableSenders = binRepository.findByLineNameAndType(line.getName(), BinType.Virtual);
                var availableReceivers = binRepository.findByProductAndIsUsing(productEntity, false);
                if (availableSenders.isEmpty()) {
                    throw new FLCosException("No available senders.");
                }
                if (availableReceivers.isEmpty()) {
                    throw new FLCosException("No available receivers.");
                }
                var newIngredient = new IngredientEntity();
                newIngredient.setSender(availableSenders.get(0));
                newIngredient.setProduct(productEntity);
                newIngredient.setPercentage(1);
                newIngredient.setReceiver(availableReceivers.get(0));
                var newRecipe = new RecipeEntity();
                newRecipe.setJob(jobEntity);
                newRecipe.setTemplate(false);
                newRecipe.setProduct(productEntity);
                newRecipe.setLine(jobEntity.getLine());
                newRecipe.setIngredients(List.of(newIngredient));
                jobEntity.setRecipe(newRecipe);
            } else {
                throw new FLCosException("Recipe and Product are not set.");
            }
        }
        jobEntity.setStatus(JobStatus.Created);
        RepositoryUtil.create(jobRepository, jobEntity);
        if (jobEntity.getName() == null || jobEntity.getName().isEmpty()) {
            jobEntity.setName(jobEntity.getLine().getName() + ":" + jobEntity.getId());
        }
        RepositoryUtil.update(jobRepository, jobEntity);
        return jobEntity;
    }

    @Override
    public MessageDto checkJob(JobEntity job) {
        var message = super.checkJob(job);
        if (message.getErrors().isEmpty()) {
            if (job.getRecipe().getIngredients().size() != 1) {
                message.getErrors().add("Ingredient size should be only one, as it is a intake job.");
            } else {
                var ingredient = job.getRecipe().getIngredients().get(0);
                if (ingredient.getSender() == null) {
                    message.getErrors().add("Sender is not set");
                } else {
                    var availableReceivers = binRepository.findByProductAndIsUsing(job.getRecipe().getProduct(), false);
                    if (availableReceivers.isEmpty()) {
                        message.getErrors().add("No bins is available as receiver for product " + job.getRecipe().getProduct().getName());
                    } else {
                        // Set first bin as default receiver
                        ingredient.setReceiver(availableReceivers.get(0));
                        RepositoryUtil.update(jobRepository, job);
                    }
                }

            }
        }
        return message;
    }

    /**
     * One logistic unit should have unique batch number
     *
     * @param job         intake job
     * @param batchNumber batch number of bag
     * @return message indicate whether error occurs
     */
    public MessageDto intake(JobEntity job, String batchNumber) {
        var logisticUnits = logisticUnitRepository.findByBatchNumber(batchNumber);
        var messageDto = new MessageDto();
        var errors = new ArrayList<String>();
        var infos = new ArrayList<String>();
        messageDto.setErrors(errors);
        messageDto.setInfos(infos);
        // Find existed logistic units
        if (!logisticUnits.isEmpty()) {
            var logisticUnit = logisticUnits.get(0);
            // If remain is less than deviation, consider it is empty, remove it
            if (logisticUnit.isOpened() && logisticUnit.getActualWeight() <= deviation) {
                logisticUnitRepository.delete(logisticUnit);
                errors.add("Bag is empty with batch number: " + batchNumber);
                return messageDto;
            }
            if (job.getStatus().equals(JobStatus.Done)) {
                errors.add("Job has finished.");
                return messageDto;
            } else if (job.getStatus() == JobStatus.Created) {
                startJob(job);
                return messageDto;
            }
            job.setActualWeight(job.getActualWeight() + logisticUnit.getActualWeight());
            RepositoryUtil.update(jobRepository, job);
            createLayer(job, logisticUnit);
            createLogisticUnitLog(logisticUnit);
            logisticUnitRepository.delete(logisticUnit);
        } else {
            errors.add("Bag is not found with batch number: " + batchNumber);
            return messageDto;
        }
        return messageDto;
    }

    private void createLogisticUnitLog(LogisticUnitEntity logisticUnitEntity) {
        var logisticUnitDocument = new LogisticUnitLogDocument();
        logisticUnitDocument.setLogisticUnitId(logisticUnitEntity.getId());
        logisticUnitDocument.setActualWeight(logisticUnitEntity.getActualWeight());
        RepositoryUtil.create(logisticUnitLogRepository, logisticUnitDocument);
    }

    private void createLayer(JobEntity jobEntity, LogisticUnitEntity logisticUnitEntity) {
        var ingredient = jobEntity.getRecipe().getIngredients().get(0);
        var receiver = ingredient.getReceiver();
        var newLayer = new LayerEntity();
        newLayer.setBin(receiver);
        newLayer.setBatchNumber(logisticUnitEntity.getBatchNumber());
        newLayer.setActualWeight(logisticUnitEntity.getActualWeight());
        RepositoryUtil.create(layerRepository, newLayer);
    }

}
