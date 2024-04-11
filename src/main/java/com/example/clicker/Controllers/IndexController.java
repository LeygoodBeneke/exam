package com.example.clicker.Controllers;

import com.example.clicker.DAO.ItemDAO;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("bye")
public class IndexController {
    @GetMapping
    public List<ItemDAO> bye() {
        ItemDAO itemDAO = new ItemDAO(23L, "item" + 1, "description of item" + 1);
        List<ItemDAO> itemDAOList = new ArrayList<>();
        itemDAOList.add(itemDAO);
        System.out.println("HELLO!!!");
        return itemDAOList;
    }
}
