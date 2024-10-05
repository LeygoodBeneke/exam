package com.example.clicker.dto.place;

import com.example.clicker.dto.place.enumirate.RepairType;
import lombok.Data;

import java.util.UUID;

@Data
public class PlaceDto {
    private UUID id;
    private String description;
    private RepairType repair;
    private Boolean work;
}
