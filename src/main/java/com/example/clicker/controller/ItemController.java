package com.example.clicker.controller;

import com.example.clicker.Model.Item;
import com.example.clicker.Model.Prices;
import com.example.clicker.repository.ItemRepository;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/items")
public class ItemController {

    final ItemRepository itemRepository;

    public ItemController(ItemRepository itemRepository) {
        this.itemRepository = itemRepository;
    }

    @GetMapping
    public List<Item> getItems() {
        return itemRepository.findAll();
    }

    @GetMapping("{id}")
    public Optional<Item> getItem(@PathVariable Long id) {
        return itemRepository.findById(id);
    }

    @PostMapping("delete/{id}")
    public void deleteItem(@PathVariable Long id) {
        itemRepository.deleteById(id);
    }

    @PostMapping("create")
    public void createItem(@RequestBody ObjectNode json) {
        String name = json.get("name").asText();
        String description = json.get("description").asText();

        Item newItem = Item.builder()
                .name(name)
                .description(description)
                .build();
        itemRepository.save(newItem);
    }

    @PostMapping("updatePrice")
    public void updatePrice(@RequestBody ObjectNode json) {
        Long itemId = json.get("itemId").asLong();
        Long newPrice = json.get("newPrice").asLong();
        Optional<Item> itemOptional = itemRepository.findById(itemId);

        if (itemOptional.isPresent()) {
            itemOptional.get().getPrices().add(Prices.builder()
                    .itemId(itemId)
                    .price(newPrice)
                    .build());
            itemRepository.save(itemOptional.get());
        }
    }

    @GetMapping("image")
    public byte[] imageTest() throws IOException {

        Path signaturesFilePath = Path.of("test.jpeg");

        InputStream inputStream = Files.newInputStream(signaturesFilePath);
        return inputStream.readAllBytes();
    }
}
