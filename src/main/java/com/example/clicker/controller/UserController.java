package com.example.clicker.controller;

import com.example.clicker.dto.UserDto;
import com.example.clicker.dto.UsernameDto;
import com.example.clicker.mapper.UserMapper;
import com.example.clicker.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {

    private final UserRepository userRepository;
    private final UserMapper userMapper;

    @GetMapping
    private ResponseEntity<UsernameDto> getUserLogin() {

        try {
            UserDetails userDetails =
                    (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

            var user = userRepository.findByUsername(userDetails.getUsername()).orElseThrow(
                    () -> new RuntimeException("User not found")
            );
            UsernameDto usernameDto = new UsernameDto();
            usernameDto.setName(user.getUsername());
            return new ResponseEntity<>(usernameDto, HttpStatus.OK);
        } catch (RuntimeException ex) {
            return new ResponseEntity<>(null, HttpStatus.OK);
        }
    }

    @GetMapping("/list")
    private ResponseEntity<List<UserDto>> getUserList() {
        var userEntityList = userRepository.findAll();
        System.err.println(userEntityList);
        return new ResponseEntity<>(userEntityList.stream().map(userMapper::toDto).collect(Collectors.toList()), HttpStatus.OK);
    }



}