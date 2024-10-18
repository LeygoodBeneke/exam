package com.example.clicker.mapper;

import com.example.clicker.dto.UserDto;
import com.example.clicker.entity.UserEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface UserMapper {


    UserDto toDto(UserEntity user);
}
