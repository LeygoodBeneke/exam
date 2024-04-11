package com.example.clicker.repository;

import com.example.clicker.DAO.ItemDAO;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemRepository extends JpaRepository<ItemDAO, Long> {
}
