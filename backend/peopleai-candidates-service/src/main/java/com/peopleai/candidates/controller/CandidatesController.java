package com.peopleai.candidates.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class CandidatesController {

    @GetMapping("/health")
    public Map<String, String> health() {
        return Map.of("status", "UP", "service", "peopleai-candidates-service");
    }

    @GetMapping("/candidates")
    public List<Map<String, Object>> candidates() {
        return List.of(
                Map.of("id", "C-701", "name", "Priya Shah", "role", "Frontend Engineer", "score", 96, "location", "San Francisco"),
                Map.of("id", "C-702", "name", "Luis Ortega", "role", "AI Product Manager", "score", 92, "location", "Remote"),
                Map.of("id", "C-703", "name", "Mika Chen", "role", "Data Engineer", "score", 94, "location", "Seattle"),
                Map.of("id", "C-704", "name", "Amara Bell", "role", "ML Ops Engineer", "score", 90, "location", "Chicago")
        );
    }
}
