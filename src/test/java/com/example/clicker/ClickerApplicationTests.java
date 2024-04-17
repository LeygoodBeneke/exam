package com.example.clicker;

import com.example.clicker.Model.Item;
import com.example.clicker.Model.User;
import com.example.clicker.repository.ItemRepository;
import com.example.clicker.repository.OrdersRepository;
import com.example.clicker.repository.UsersRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Configuration;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.util.Assert;

import java.util.Optional;

@SpringBootTest
@ActiveProfiles("test")
class ClickerApplicationTests {
	@Autowired
    UsersRepository usersRepository;
	@Autowired
	OrdersRepository ordersRepository;
	@Autowired
	ItemRepository itemRepository;

	@BeforeEach
	public void setData() {
		usersRepository.save(User.builder()
				.username("Vasya")
				.password("String")
				.role("USER")
				.build());
		usersRepository.save(User.builder()
				.username("Admin")
				.password("Admin")
				.role("ADMIN")
				.build());
		itemRepository.save(Item.builder()
				.name("First test item")
				.description("First test item description")
				.build());
	}

	@Test
	public void testUserData() {
		Assert.isTrue(usersRepository.findAll().size() == 2, "2 users: Admin and Vasya");
		Assert.isTrue(usersRepository.findById(1L).get().getUsername().equals("Vasya"), "Vasya");
		Assert.isTrue(usersRepository.findById(2L).get().getUsername().equals("Admin"), "Admin");
	}
}
