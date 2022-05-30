package com.enisco.flcos.server.beans;

import com.enisco.flcos.server.dto.job.MessageDto;
import com.enisco.flcos.server.dto.job.NewJobDto;
import com.enisco.flcos.server.entities.MixerEntity;
import com.enisco.flcos.server.entities.ProductEntity;
import com.enisco.flcos.server.entities.SectionEntity;
import com.enisco.flcos.server.entities.enums.JobStatus;
import com.enisco.flcos.server.entities.job.JobEntity;
import com.enisco.flcos.server.exceptions.FLCosException;
import com.enisco.flcos.server.repository.relational.ProcessStationRepository;
import com.enisco.flcos.server.util.RepositoryUtil;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.stream.Collectors;

@Component
public class ProduceJobManagementBean extends AbstractJobManagement {
    Logger logger = LoggerFactory.getLogger(ProduceJobManagementBean.class);
    private final ProcessStationRepository processStationRepository;

    @Autowired
    public ProduceJobManagementBean(ProcessStationRepository processStationRepository
    ) {
        this.processStationRepository = processStationRepository;
    }

    @Override
    public Logger getLogger() {
        return logger;
    }

    @Override
    public MessageDto checkJob(JobEntity job) {
        var message = super.checkJob(job);
        if (message.getErrors().isEmpty()) {
            var mixingSections = job.getLine().getSections().stream().filter(s -> !s.getMixers().isEmpty()).collect(Collectors.toList());
            SectionEntity mixingSection;
            if (!mixingSections.isEmpty()) {
                mixingSection = mixingSections.get(0);
            } else {
                message.getErrors().add("Mixing section is not found");
                return message;
            }

            var mixer = mixingSection.getMixers().get(0);

            job.getRecipe().getIngredients().forEach(ingredientEntity -> {
                var rawMaterial = ingredientEntity.getProduct();
                if (rawMaterial != null) {
                    message.getErrors().add(String.format("Product of the ingredient with id %d is not set", ingredientEntity.getId()));
                }
                var storage = ingredientEntity.getSender();
                if (storage != null) {
                    var matched = mixer.getFillers().stream().filter(fillerEntity -> fillerEntity.getPreviousDischargerId().equals(storage.getDischarger().getId())).collect(Collectors.toList());
                    if (matched.isEmpty()) {
                        message.getErrors().add(String.format("Could not find matched filler with discharger of sender bin. %s", storage.getName()));
                    }
                } else {
                    //If sender not set, assign it
                    var availableSenders = binRepository.findByProductAndIsUsing(rawMaterial, false);
                    var matched = availableSenders.stream().filter(binEntity -> mixer.getFillers().stream().anyMatch(fillerEntity -> fillerEntity.getPreviousDischargerId().equals(binEntity.getDischarger().getId()))).collect(Collectors.toList());
                    if (!matched.isEmpty()) {
                        ingredientEntity.setSender(matched.get(0));
                    } else {
                        message.getErrors().add(String.format("Could not find matched bin for product %s", rawMaterial != null ? rawMaterial.getName() : ""));
                    }

                }
            });
            // Check packing stations
            mixer.getDischargers().forEach(dischargerEntity -> {
                if(dischargerEntity.getNextFillerId() == null) {
                    message.getErrors().add("Packing station is not set for discharger of mixer.");
                }
            });
        }
        return message;
    }

    @Override
    public JobEntity createJob(NewJobDto newJobDto) {
        var lineDto = newJobDto.getLine();
        if (lineDto == null) {
            throw new FLCosException("Line is not set.");
        }
        var jobEntity = modelMapper.map(newJobDto, JobEntity.class);

        var lineOptional = lineRepository.findById(lineDto.getId());
        if (lineOptional.isPresent()) {
            var lineEntity = lineOptional.get();
            if (!lineEntity.isProduction()) {
                throw new FLCosException("Line is not production line.");
            }
            if (jobEntity.getRecipe() == null) {
                if (newJobDto.getProduct() != null) {
                    var productEntity = modelMapper.map(newJobDto.getProduct(), ProductEntity.class);
                    var result = recipeRepository.findByProductAndIsTemplate(productEntity, true);
                    if (result.isPresent()) {
                        var recipeTemplate = result.get();
                        var newRecipe = cloneRecipe(recipeTemplate, jobEntity);
                        jobEntity.setRecipe(newRecipe);
                    } else {
                        throw new FLCosException("Recipe template is not found.");
                    }
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
        return jobEntity;
    }
}
