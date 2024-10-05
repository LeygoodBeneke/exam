package com.example.clicker.service;

import com.example.clicker.dto.thing.CreateThingDto;
import com.example.clicker.dto.thing.ThingDto;
import com.example.clicker.dto.thing.UpdateThingDto;
import com.example.clicker.entity.ThingEntity;
import com.example.clicker.entity.UseEntity;
import com.example.clicker.entity.UserEntity;
import com.example.clicker.mapper.ThingMapper;
import com.example.clicker.repository.PlaceRepository;
import com.example.clicker.repository.ThingRepository;
import com.example.clicker.repository.UseRepository;
import com.example.clicker.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ThingService {
    private final ThingRepository thingRepository;
    private final UserRepository userRepository;
    private final ThingMapper thingMapper;
    private final UseRepository useRepository;
    private final PlaceRepository placeRepository;

    public ThingDto createThing(CreateThingDto createThingDto) {
        var user = getUserAuthEntity();
        ThingEntity thing = thingMapper.toEntity(createThingDto);
        thing.setUser(user);
        thingRepository.save(thing);
        createUseEntity(thing, user, createThingDto.getPlaceId());
        return thingMapper.toDto(thing);
    }

    public ThingDto updateThing(UpdateThingDto updateThingDto) {

        var user = getUserAuthEntity();

        ThingEntity thing = thingMapper.toEntity(updateThingDto);
        thing.setUser(user);

        if (thingRepository.findById(thing.getId()).isEmpty()) {
            throw new RuntimeException("Вещь не найдена");
        }

        updateUseEntity(thing, user, updateThingDto.getPlaceId());

        thingRepository.save(thing);
        return thingMapper.toDto(thing);
    }

    public List<ThingDto> getThingList() {
        var user = getUserAuthEntity();
        return thingRepository.findAllByUser(user).stream().map(thingMapper::toDto).toList();
    }

    public ThingDto deleteThing(UUID id) {
        var user = getUserAuthEntity();
        var thing = thingRepository.findByUserAndId(user, id)
                .orElseThrow(() -> new RuntimeException("Вещь не найдена"));
        thingRepository.delete(thing);
        return thingMapper.toDto(thing);
    }

    public UserEntity getUserAuthEntity() {
        UserDetails userDetails =
                (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        return userRepository.findByUsername(userDetails.getUsername()).orElseThrow(
                () -> new RuntimeException("User not found")
        );
    }

    private void createUseEntity(ThingEntity thing, UserEntity user, UUID placeId) {
        var useEntity = new UseEntity();
        useEntity.setThing(thing);
        useEntity.setUser(user);
        useEntity.setPlaceEntity(placeRepository.findById(placeId)
                .orElseThrow(() -> new RuntimeException("Неверное место хранениния вещи")));
        useRepository.save(useEntity);
    }

    private void updateUseEntity(ThingEntity thing, UserEntity user, UUID placeId) {
        var useEntity = useRepository.findByThing(thing)
                .orElseThrow(() -> new RuntimeException("Такой вещи не существует"));

        useEntity.setUser(user);
        useEntity.setPlaceEntity(placeRepository.findById(placeId)
                .orElseThrow(() -> new RuntimeException("Неверное место хранениния вещи")));

        useRepository.save(useEntity);
    }
}
