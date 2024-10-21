package com.example.clicker.dto.thing;

import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.UUID;

@Data
public class CreateThingDto {
    private String name;
    private String description;
    private LocalDate warranty;
    private UUID placeId;
}
