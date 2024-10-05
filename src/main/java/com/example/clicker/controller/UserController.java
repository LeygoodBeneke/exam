package com.example.clicker.controller;

import com.example.clicker.dto.UsernameDto;
import com.example.clicker.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {

    private final UserRepository userRepository;

    @GetMapping
    private ResponseEntity<UsernameDto> getUserLogin() {
        UserDetails userDetails =
                (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        var user = userRepository.findByUsername(userDetails.getUsername()).orElseThrow(
                () -> new RuntimeException("User not found")
        );
        UsernameDto usernameDto = new UsernameDto();
        usernameDto.setName(user.getUsername());
        return new ResponseEntity<>(usernameDto, HttpStatus.OK);
    }


}