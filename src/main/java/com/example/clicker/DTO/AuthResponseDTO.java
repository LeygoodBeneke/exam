package com.example.clicker.DTO;

import lombok.Data;

@Data
public class AuthResponseDTO {
    private String token;
    private String tokenType = "Bearer ";

    public AuthResponseDTO(String token) {
        this.token = token;
    }
}
