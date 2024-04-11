package com.example.clicker;

import com.example.clicker.Model.Item;
import com.example.clicker.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

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
	public Item hello(@RequestParam(value = "name", defaultValue = "World") String name) {
		counter++;
		Item item = Item.builder()
				.name("Item" + counter)
				.description("description of item" + counter)
				.build();

		itemRepository.save(item);
		System.out.println("HELLO!!!");
		return item;
	}

	@GetMapping("/items")
	public List<Item> items() {
		System.out.println(itemRepository.findAll());
		return itemRepository.findAll();
	}
}
