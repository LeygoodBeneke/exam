package com.example.clicker;

import com.example.clicker.Model.Item;
import com.example.clicker.entity.UserEntity;
import com.example.clicker.repository.ItemRepository;
import com.example.clicker.repository.OrdersRepository;
import com.example.clicker.repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.util.Assert;


@SpringBootTest
@ActiveProfiles("test")
class ClickerApplicationTests {
	@Autowired
    UserRepository userRepository;
	@Autowired
	OrdersRepository ordersRepository;
	@Autowired
	ItemRepository itemRepository;

	@BeforeEach
	public void setData() {
		userRepository.save(UserEntity.builder()
				.username("Vasya")
				.password("String")
				.build());
		userRepository.save(UserEntity.builder()
				.username("Admin")
				.password("Admin")
				.build());
		itemRepository.save(Item.builder()
				.name("First test item")
				.description("First test item description")
				.build());
	}

	@Test
	public void testUserData() {
		Assert.isTrue(userRepository.findAll().size() == 2, "2 users: Admin and Vasya");
		Assert.isTrue(userRepository.findById(1L).get().getUsername().equals("Vasya"), "Vasya");
		Assert.isTrue(userRepository.findById(2L).get().getUsername().equals("Admin"), "Admin");
	}
}
