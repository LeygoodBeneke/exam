package com.example.clicker.Controllers;

import com.example.clicker.Model.Item;
import com.example.clicker.repository.ItemRepository;
import org.springframework.web.bind.annotation.*;

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
    public void createItem(@RequestBody Item item) {
        long simpleId = itemRepository.findAll().size();
        item.setId(simpleId);
        itemRepository.save(item);
    }
}
