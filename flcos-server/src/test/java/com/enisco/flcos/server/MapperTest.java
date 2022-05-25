package com.enisco.flcos.server;

import com.enisco.flcos.server.dto.receipt.ReceiptDto;
import com.enisco.flcos.server.dto.recipe.RecipeDto;
import com.enisco.flcos.server.entities.RecipeEntity;
import com.enisco.flcos.server.entities.job.JobEntity;
import lombok.Getter;
import lombok.Setter;
import org.junit.jupiter.api.Test;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeMap;

import java.nio.file.Paths;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class MapperTest {
    protected ModelMapper mapper = new ModelMapper();

    @Test
    void file_test() {
        var address = new Address();
        address.setCity("Wuxi");
        address.setStreet("Zhongshu Road");
        var shippingAddress = new Address();
        shippingAddress.setCity("Guangzhou");
        shippingAddress.setStreet("test Road");
        var customer = new Customer();
        customer.setName("ENisco");
        var order = new Order();
        order.setBillingAddress(address);
        order.setShippingAddress(shippingAddress);
        order.setCustomer(customer);
        ModelMapper modelMapper = new ModelMapper();
        OrderDTO dto = modelMapper.map(order, OrderDTO.class);
        assert dto.getCustomerName().equals(order.getCustomer().getName());
        assert dto.getShippingStreetAddress().equals(order.getShippingAddress().getStreet());
        assert dto.getShippingCity().equals(order.getShippingAddress().getCity());
        assert dto.getBillingStreetAddress().equals(order.getBillingAddress().getStreet());
        assert dto.getBillingCity().equals(order.getBillingAddress().getCity());
    }

    @Test
    public void whenMapGameWithDeepMapping_thenConvertsToDTO() {
        // setup
        TypeMap<Game, GameDTO> propertyMapper = this.mapper.createTypeMap(Game.class, GameDTO.class);
        // add deep mapping to flatten source's Player object into a single field in destination
        propertyMapper.addMappings(
                mapper -> mapper.map(src -> src.getCreator().getName(), GameDTO::setCreator)
        );

        // when map between different hierarchies
        Game game = new Game(1L, "Game 1");
        game.setCreator(new Player(1L, "John"));
        GameDTO gameDTO = this.mapper.map(game, GameDTO.class);

        // then
        assertEquals(game.getCreator().getName(), gameDTO.getCreator());
    }

    @Test
    public void recipe_to_dto() {
        // setup
        mapper.typeMap(RecipeEntity.class, RecipeDto.class).addMappings(mapper -> {
            mapper.map(src -> src.getJob().getId(),
                    (des, v) -> des.getJob().setId((Long) v));
            mapper.map(src -> src.getJob().getName(),
                    (des, v) -> des.getJob().setName((String) v));
        });

        JobEntity jobEntity = new JobEntity();
        jobEntity.setId(1L);
        jobEntity.setName("My job");
        RecipeEntity recipeEntity = new RecipeEntity();
        recipeEntity.setJob(jobEntity);
        var recipeDto = mapper.map(recipeEntity, RecipeDto.class);
        assertEquals(recipeEntity.getJob().getName(), recipeDto.getJob().getName());
    }
}
@Getter
@Setter
class Player {

    private Long id;
    private String name;
    public Player(Long id, String name) {
        this.id = id;
        this.name = name;
    }
    // constructors, getters and setters
}
@Getter
@Setter
 class Game {
    // ...
    private Long id;
    private String name;
    private Player creator;
    public Game(Long id, String name) {
        this.id = id;
        this.name = name;
    }
    // ...
}

@Getter
@Setter
class GameDTO {
    // ...

    private String creator;

    // ...
}

@Getter
@Setter
class Order {
    Customer customer;
    Address shippingAddress;
    Address billingAddress;
}

@Getter
@Setter
class Customer {
    String name;
}

@Getter
@Setter
class Address {
    String street;
    String city;
}

@Getter
@Setter
class OrderDTO {
    String customerName;
    String shippingStreetAddress;
    String shippingCity;
    String billingStreetAddress;
    String billingCity;

    // Assume getters and setters
}
