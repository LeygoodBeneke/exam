package com.example.clicker.dto.thing;

import lombok.Data;

import java.time.LocalDateTime;
import java.util.UUID;

@Data
public class ThingDto {
    private UUID id;
    private String name;
    private String description;
    private LocalDateTime warranty;
}
