package com.example.clicker.repository;

import com.example.clicker.entity.ThingEntity;
import com.example.clicker.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface ThingRepository extends JpaRepository<ThingEntity, UUID> {

    List<ThingEntity> findAllByUser(UserEntity user);

    Optional<ThingEntity> findByUserAndId(UserEntity user, UUID id);
}
