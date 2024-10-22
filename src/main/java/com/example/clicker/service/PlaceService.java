package com.example.clicker.service;

import com.example.clicker.dto.place.CreatePlaceDto;
import com.example.clicker.dto.place.PlaceDto;
import com.example.clicker.dto.place.UpdatePlaceDto;
import com.example.clicker.dto.thing.ThingDto;
import com.example.clicker.entity.UseEntity;
import com.example.clicker.mapper.PlaceMapper;
import com.example.clicker.mapper.ThingMapper;
import com.example.clicker.repository.PlaceRepository;
import com.example.clicker.repository.UseRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class PlaceService {

    private final PlaceRepository placeRepository;
    private final UseRepository useRepository;
    private final PlaceMapper placeMapper;
    private final ThingMapper thingMapper;


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

        var oldPlace = placeRepository.findById(updatePlaceDto.getId())
                .orElseThrow(() -> new RuntimeException("Такого места не существует"));

        var updatedEntity = placeMapper.toEntity(updatePlaceDto);
        updatedEntity.setId(oldPlace.getId());

        placeRepository.save(updatedEntity);
        return placeMapper.toDto(updatedEntity);
    }

    public PlaceDto deletePlace(UUID id) {
        var entity = placeRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Такого места не существует"));

        placeRepository.delete(entity);
        return placeMapper.toDto(entity);
    }

    public List<ThingDto> getPlaceThings(UUID placeId) {
        var place = placeRepository.findById(placeId).orElseThrow();

        var use = useRepository.findAllByPlaceEntity(place);

        return use.stream().map(UseEntity::getThing).map(thingMapper::toDto).toList();
    }
}
