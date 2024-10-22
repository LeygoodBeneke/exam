package com.example.clicker.controller;

import com.example.clicker.dto.AuthResponseDto;
import com.example.clicker.dto.ErrorMessageDto;
import com.example.clicker.dto.LoginDto;
import com.example.clicker.dto.RegisterDto;
import com.example.clicker.entity.Role;
import com.example.clicker.entity.UserEntity;
import com.example.clicker.repository.RoleRepository;
import com.example.clicker.repository.UserRepository;
import com.example.clicker.security.JWTGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;
    private final JWTGenerator jwtGenerator;


    @Autowired
    public AuthController(AuthenticationManager authenticationManager, UserRepository userRepository,
                          RoleRepository roleRepository, PasswordEncoder passwordEncoder,
                          JWTGenerator jwtGenerator) {
        this.authenticationManager = authenticationManager;
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtGenerator = jwtGenerator;
    }

    @PostMapping("login")
    public ResponseEntity<AuthResponseDto> login(@RequestBody LoginDto loginDto){
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginDto.getUsername(),
                        loginDto.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String token = jwtGenerator.generateToken(authentication);
        return new ResponseEntity<>(new AuthResponseDto(token), HttpStatus.OK);
    }

    @PostMapping("register")
    public ResponseEntity<ErrorMessageDto> registerUser(@RequestBody RegisterDto registerDTO) {

        ErrorMessageDto errorMessageDto = new ErrorMessageDto();
        errorMessageDto.setMessage("User registered successfully");

        if (userRepository.existsByUsername(registerDTO.getUsername())) {
            errorMessageDto.setMessage("Username is taken");
            return new ResponseEntity<>(errorMessageDto, HttpStatus.OK);
        }
        UserEntity user = new UserEntity();
        user.setUsername(registerDTO.getUsername());
        user.setPassword(passwordEncoder.encode(registerDTO.getPassword()));
        Role roles = roleRepository.findByName("USER").orElse(null);
        user.setRoles(Collections.singletonList(roles));
        userRepository.save(user);
        return new ResponseEntity<>(errorMessageDto, HttpStatus.OK);
    }
}
