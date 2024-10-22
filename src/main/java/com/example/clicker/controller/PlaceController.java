package com.example.clicker.controller;

import com.example.clicker.dto.place.CreatePlaceDto;
import com.example.clicker.dto.place.PlaceDto;
import com.example.clicker.dto.place.UpdatePlaceDto;
import com.example.clicker.dto.thing.ThingDto;
import com.example.clicker.service.PlaceService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/place")
public class PlaceController {
    private final PlaceService placeService;

    @GetMapping
    public ResponseEntity<List<PlaceDto>> getPlaces() {
        return new ResponseEntity<>(placeService.getPlaces(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<PlaceDto> createPlace(@RequestBody CreatePlaceDto createPlaceDto) {
        return new ResponseEntity<>(placeService.createPlace(createPlaceDto), HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<PlaceDto> updatePlace(@RequestBody UpdatePlaceDto updatePlaceDto) {
        return new ResponseEntity<>(placeService.updatePlace(updatePlaceDto), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    private ResponseEntity<PlaceDto> deleteThing(@PathVariable UUID id) {
        return new ResponseEntity<>(placeService.deletePlace(id), HttpStatus.OK);
    }

    @GetMapping("/{placeId}")
    public ResponseEntity<List<ThingDto>> getPlaceThings(@PathVariable UUID placeId) {
        return new ResponseEntity<>(placeService.getPlaceThings(placeId), HttpStatus.OK);
    }
}
