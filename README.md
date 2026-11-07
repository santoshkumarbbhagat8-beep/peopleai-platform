# PeopleAI Platform

This repository contains a full-stack implementation inspired by the Kodiva AI website and platform experience.

## Tech stack
- Frontend: React + Vite
- Backend: Java 17 + Spring Boot 3 + Maven multi-module microservices
- Messaging/infra: not used (no Kafka, no Docker)

## Project structure
- `frontend/` - React UI for landing page, pricing, contact, and dashboard experience
- `backend/` - Maven multi-module Java microservices

## Run frontend
```bash
cd frontend
npm install
npm run dev
```
Open http://localhost:3000

## Run backend
From repo root:
```bash
cd backend
mvn clean install
```
Then start each service individually:
```bash
cd backend/peopleai-auth-service
mvn spring-boot:run

cd ../peopleai-jobs-service
mvn spring-boot:run

cd ../peopleai-candidates-service
mvn spring-boot:run

cd ../peopleai-contact-service
mvn spring-boot:run

cd ../peopleai-api-gateway
mvn spring-boot:run
```

## API notes
Main API endpoints:
- `GET http://localhost:8080/api/health`
- `GET http://localhost:8080/api/dashboard`
- `POST http://localhost:8081/api/auth/login`
- `GET http://localhost:8082/api/jobs`
- `GET http://localhost:8083/api/candidates`
- `POST http://localhost:8084/api/contact/lead`

## Notes
This is a demo-ready implementation with mock data fallback for the frontend, plus full Java microservice scaffolding for backend APIs.
