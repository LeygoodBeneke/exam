package com.example.clicker.service;

import com.example.clicker.dto.place.CreatePlaceDto;
import com.example.clicker.dto.place.PlaceDto;
import com.example.clicker.dto.place.UpdatePlaceDto;
import com.example.clicker.mapper.PlaceMapper;
import com.example.clicker.repository.PlaceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class PlaceService {

    private final PlaceRepository placeRepository;
    private final PlaceMapper placeMapper;

    public PlaceDto createPlace(CreatePlaceDto createPlaceDto) {
        var placeEntity = placeMapper.toEntity(createPlaceDto);

        System.err.println(createPlaceDto.getRepair().toString());
        placeRepository.save(placeEntity);
        return placeMapper.toDto(placeEntity);
    }

    public List<PlaceDto> getPlaces() {
        return placeRepository.findAll().stream().map(placeMapper::toDto).toList();
    }

    public PlaceDto updatePlace(UpdatePlaceDto updatePlaceDto) {
        if (placeRepository.findById(updatePlaceDto.getId()).isEmpty())
            throw new RuntimeException("Такого места не существует");
        var updatedEntity = placeMapper.toEntity(updatePlaceDto);
        placeRepository.save(updatedEntity);
        return placeMapper.toDto(updatedEntity);
    }

    public PlaceDto deletePlace(UUID id) {
        var entity = placeRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Такого места не существует"));

        placeRepository.delete(entity);
        return placeMapper.toDto(entity);
    }
}
