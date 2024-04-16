package com.example.clicker.Controllers;

import com.example.clicker.Model.Item;
import com.example.clicker.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("bye")
public class IndexController {
    @Autowired
    private ItemRepository itemRepository;

    @GetMapping
    public List<Item> bye() {
        System.out.println("HELLO!!!");
        return itemRepository.findAll();
    }
}
