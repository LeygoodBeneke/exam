package com.example.clicker;

import com.example.clicker.Model.Item;
import com.example.clicker.Model.User;
import com.example.clicker.repository.ItemRepository;
import com.example.clicker.repository.OrdersRepository;
import com.example.clicker.repository.UsersRepository;
import org.junit.jupiter.api.BeforeAll;
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
	ItemRepository itemRepository;
	@Autowired
	OrdersRepository ordersRepository;
	@Autowired
    UsersRepository usersRepository;

	@Autowired
	ClickerApplicationTests(UsersRepository usersRepository,
							OrdersRepository ordersRepository,
							ItemRepository itemRepository) {
		this.usersRepository = usersRepository;
		this.ordersRepository = ordersRepository;
		this.itemRepository = itemRepository;
	}

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
	}

	@Test
	public void testUserData() {
		Assert.isTrue(usersRepository.findAll().size() == 2, "2 users: Admin and Vasya");
		Assert.isTrue(usersRepository.findById(1L).get().getUsername().equals("Vasya"), "Vasya");
		Assert.isTrue(usersRepository.findById(2L).get().getUsername().equals("Admin"), "Admin");
	}

	@Test
	public void contextLoads() {
		long counter = 1;
		Item item = Item.builder().name("haha").description("hehe").build();
		itemRepository.save(item);

		long itemsCount = itemRepository.findAll().size();
		Assert.isTrue(itemsCount == 1, "Items count must equals to 1.");
	}

}
