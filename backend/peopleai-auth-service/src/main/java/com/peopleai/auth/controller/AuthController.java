package com.peopleai.auth.controller;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @GetMapping("/health")
    public Map<String, String> health() {
        return Map.of("status", "UP", "service", "peopleai-auth-service");
    }

    @PostMapping("/login")
    public Map<String, Object> login(@RequestBody Map<String, String> payload) {
        String email = payload.getOrDefault("email", "demo@peopleai.app");
        String password = payload.getOrDefault("password", "");

        if (password.isBlank()) {
            return Map.of("success", false, "message", "Password is required");
        }

        return Map.of(
                "success", true,
                "token", "demo.jwt.token",
                "user", Map.of(
                        "id", "u-1001",
                        "name", "Adele Morgan",
                        "email", email,
                        "role", "Admin",
                        "company", "PeopleAI"
                )
        );
    }

    @GetMapping("/profile")
    public Map<String, Object> profile() {
        return Map.of(
                "id", "u-1001",
                "name", "Adele Morgan",
                "email", "adele@peopleai.app",
                "roles", List.of("Admin", "Talent Partner"),
                "company", "PeopleAI"
        );
    }
}
