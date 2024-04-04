package com.example.clicker;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class ClickerApplication {
	int counter = 0;

	public static void main(String[] args) {
		SpringApplication.run(ClickerApplication.class, args);
	}

	@GetMapping("/hello")
	public String hello(@RequestParam(value = "name", defaultValue = "World") String name) {
		counter++;
		System.out.println("HELLO!!!");
		return String.format("Hello %s! Counter: %d", name, counter);
	}

}
