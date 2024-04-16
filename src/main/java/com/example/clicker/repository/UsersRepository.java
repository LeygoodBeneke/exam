package com.example.clicker.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.clicker.Model.User;

public interface UsersRepository extends JpaRepository<User, Long> {
}
