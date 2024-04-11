package com.example.clicker;

import com.example.clicker.DAO.ItemDAO;
import com.example.clicker.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class ClickerApplication {
	long counter = 0;

	@Autowired
	ItemRepository itemRepository;

	public static void main(String[] args) {
		SpringApplication.run(ClickerApplication.class, args);
	}

	@GetMapping("/hello")
	public ItemDAO hello(@RequestParam(value = "name", defaultValue = "World") String name) {
		counter++;
		ItemDAO itemDAO = new ItemDAO(counter, "item" + counter, "description of item" + counter);

		itemRepository.save(itemDAO);
		System.out.println("HELLO!!!");
		return itemDAO;
	}
}
