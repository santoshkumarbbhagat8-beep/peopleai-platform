package com.peopleai.jobs.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class JobsController {

    @GetMapping("/health")
    public Map<String, String> health() {
        return Map.of("status", "UP", "service", "peopleai-jobs-service");
    }

    @GetMapping("/jobs")
    public List<Map<String, Object>> jobs() {
        return List.of(
                Map.of("id", "J-101", "title", "Senior Frontend Engineer", "location", "Remote", "salary", "$130k-$180k", "status", "Open"),
                Map.of("id", "J-102", "title", "AI Product Manager", "location", "New York", "salary", "$150k-$200k", "status", "Screening"),
                Map.of("id", "J-103", "title", "ML Ops Engineer", "location", "Austin", "salary", "$140k-$190k", "status", "Open"),
                Map.of("id", "J-104", "title", "Platform Engineer", "location", "Remote", "salary", "$160k-$220k", "status", "Interviewing")
        );
    }
}
