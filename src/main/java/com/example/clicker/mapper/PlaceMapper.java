package com.example.clicker.mapper;

import com.example.clicker.dto.place.CreatePlaceDto;
import com.example.clicker.dto.place.PlaceDto;
import com.example.clicker.dto.place.UpdatePlaceDto;
import com.example.clicker.entity.PlaceEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface PlaceMapper {

    @Mapping(target = "id", ignore = true)
    PlaceEntity toEntity(CreatePlaceDto createPlaceDto);

    @Mapping(target = "id", ignore = true)
    PlaceEntity toEntity(UpdatePlaceDto createPlaceDto);

    PlaceDto toDto(PlaceEntity place);

    PlaceDto toDto(UpdatePlaceDto updatePlaceDto);
}
