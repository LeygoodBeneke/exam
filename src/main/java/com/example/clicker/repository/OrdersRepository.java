package com.example.clicker.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.clicker.Model.Orders;

public interface OrdersRepository extends JpaRepository<Orders, Long> {
}
