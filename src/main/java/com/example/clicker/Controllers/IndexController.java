package com.example.clicker.Controllers;

import com.example.clicker.Model.Item;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("bye")
public class IndexController {
    @GetMapping
    public List<Item> bye() {
        Item item = new Item(23L, "item" + 1, "description of item" + 1);
        List<Item> itemList = new ArrayList<>();
        itemList.add(item);
        System.out.println("HELLO!!!");
        return itemList;
    }
}
