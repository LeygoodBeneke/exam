package com.example.clicker;

import com.example.clicker.Model.Item;
import com.example.clicker.repository.ItemRepository;
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

	@Test
	void contextLoads() {
		long counter = 1;
		Item item = new Item(counter, "item" + counter, "description of item" + counter);
		itemRepository.save(item);

		long itemsCount = itemRepository.findAll().size();
		Assert.isTrue(itemsCount == 1, "Items count must equals to 1.");
	}

}
