package com.example.clicker.repository;

import com.example.clicker.entity.ThingEntity;
import com.example.clicker.entity.UseEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface UseRepository extends JpaRepository<UseEntity, UUID> {
    Optional<UseEntity> findByThing(ThingEntity thing);
}
