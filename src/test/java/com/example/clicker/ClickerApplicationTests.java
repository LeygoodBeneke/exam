package com.example.clicker;

import com.example.clicker.Model.Item;
import com.example.clicker.repository.ItemRepository;
import com.example.clicker.repository.OrdersRepository;
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

	@Test
	public void contextLoads() {
		long counter = 1;
		Item item = Item.builder().name("haha").description("hehe").build();
		itemRepository.save(item);

		long itemsCount = itemRepository.findAll().size();
		Assert.isTrue(itemsCount == 1, "Items count must equals to 1.");
	}

}
