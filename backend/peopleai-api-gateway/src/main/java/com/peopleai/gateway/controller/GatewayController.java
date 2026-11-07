package com.peopleai.gateway.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class GatewayController {

    @GetMapping("/health")
    public Map<String, String> health() {
        return Map.of("status", "UP", "service", "peopleai-api-gateway");
    }

    @GetMapping("/dashboard")
    public Map<String, Object> dashboard() {
        return Map.of(
                "stats", List.of(
                        Map.of("label", "Interviews completed", "value", "12.4k"),
                        Map.of("label", "Hiring velocity", "value", "3.2x"),
                        Map.of("label", "AI score accuracy", "value", "96%"),
                        Map.of("label", "Client retention", "value", "89%")
                ),
                "services", List.of(
                        Map.of("name", "AI Talent Matching", "description", "Search, screen, and shortlist top engineering talent."),
                        Map.of("name", "Assessment Automation", "description", "Standardized interviews and AI-powered scoring workflows."),
                        Map.of("name", "Growth Advisory", "description", "Build product teams that scale with your roadmap."),
                        Map.of("name", "Custom Data Services", "description", "Human-feedback workflows for LLM evaluation and training." )
                ),
                "clients", List.of(
                        "OpenAI", "Notion", "Scale AI", "Stripe", "Cohere"
                ),
                "pipeline", List.of(
                        Map.of("name", "Senior Frontend Engineer", "status", "Shortlist ready", "count", 18),
                        Map.of("name", "AI Product Manager", "status", "In review", "count", 9),
                        Map.of("name", "ML Ops Engineer", "status", "Interviewing", "count", 14)
                )
        );
    }
}
