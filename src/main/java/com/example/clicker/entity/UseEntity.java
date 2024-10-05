package com.example.clicker.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Entity
@Getter
@Setter
@Table(name = "use")
public class UseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @OneToOne
    @JoinColumn(name = "thing_id")
    private ThingEntity thing;

    @ManyToOne
    @JoinColumn(name = "place_id")
    private PlaceEntity placeEntity;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private UserEntity user;
}
