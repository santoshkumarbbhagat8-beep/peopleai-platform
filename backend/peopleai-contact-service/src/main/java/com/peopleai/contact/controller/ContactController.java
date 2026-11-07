package com.peopleai.contact.controller;

import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api")
public class ContactController {

    @GetMapping("/health")
    public Map<String, String> health() {
        return Map.of("status", "UP", "service", "peopleai-contact-service");
    }

    @PostMapping("/contact/lead")
    public Map<String, Object> submitLead(@RequestBody Map<String, String> payload) {
        String name = payload.getOrDefault("name", "New client");
        String email = payload.getOrDefault("email", "contact@example.com");
        String company = payload.getOrDefault("company", "Unknown");

        return Map.of(
                "success", true,
                "message", "Your request has been received. Our team will contact you shortly.",
                "lead", Map.of(
                        "name", name,
                        "email", email,
                        "company", company,
                        "status", "Queued"
                )
        );
    }
}
