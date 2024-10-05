package com.example.clicker.mapper;

import com.example.clicker.dto.thing.CreateThingDto;
import com.example.clicker.dto.thing.ThingDto;
import com.example.clicker.dto.thing.UpdateThingDto;
import com.example.clicker.entity.ThingEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface ThingMapper {

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "user", ignore = true)
    ThingEntity toEntity(CreateThingDto createThingDto);

    @Mapping(target = "user", ignore = true)
    ThingEntity toEntity(UpdateThingDto createThingDto);

    ThingDto toDto(ThingEntity thingEntity);
}
