package com.example.clicker.controller;

import com.example.clicker.dto.thing.CreateThingDto;
import com.example.clicker.dto.thing.GiveThingDto;
import com.example.clicker.dto.thing.ThingDto;
import com.example.clicker.dto.thing.UpdateThingDto;
import com.example.clicker.service.ThingService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/thing")
@RequiredArgsConstructor
public class ThingController {

    private final ThingService thingService;

    @PostMapping
    private ResponseEntity<ThingDto> createThink(@RequestBody CreateThingDto createThingDto) {
        return new ResponseEntity<>(thingService.createThing(createThingDto), HttpStatus.CREATED);
    }

    @PutMapping
    private ResponseEntity<ThingDto> updateThink(@RequestBody UpdateThingDto updateThingDto) {
        return new ResponseEntity<>(thingService.updateThing(updateThingDto), HttpStatus.CREATED);
    }

    @GetMapping
    private ResponseEntity<List<ThingDto>> getThingList() {
        return new ResponseEntity<>(thingService.getThingList(), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    private ResponseEntity<ThingDto> deleteThing(@PathVariable UUID id) {
        return new ResponseEntity<>(thingService.deleteThing(id), HttpStatus.OK);
    }

    @PostMapping("/give")
    private ResponseEntity<ThingDto> giveThink(@RequestBody GiveThingDto giveThingDto) {
        return new ResponseEntity<>(thingService.giveThing(giveThingDto), HttpStatus.CREATED);
    }

}
