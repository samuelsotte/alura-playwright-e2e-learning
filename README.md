# Alura Playwright E2E Learning

Playwright E2E Learning — Alura

End-to-end (E2E) testing project developed during the Alura course [Angular: Escreva testes end-to-end com Playwright](https://cursos.alura.com.br/course/angular-escreva-testes-end-to-end-playwright).

## About the Project

This repository contains automated end-to-end tests created to practice software testing with Playwright and TypeScript, simulating user interactions in a web application.

The project focuses on validating key application features and user journeys.

## Concepts and Technologies

- **Playwright** — End-to-end test automation
- **TypeScript** — Test implementation
- **Page Object Model (POM)** — Test organization and code reusability
- **Locators and Assertions** — Element interaction and result validation
- **Fixtures** — Shared setup and reusable test context
- **User Journeys** — Testing complete user flows

## Test Scenarios

The test suite includes scenarios for:

- Visiting the home page and validating page elements
- User registration
- Successful and invalid login attempts
- Searching for travel tickets
- Validating user journeys and application behavior

## Project Structure

```text
e2e/
├── fixtures/
│   └── fixturePaginaPrincipal.ts
├── page-objects/
│   ├── PaginaCadastro.ts
│   ├── PaginaLogin.ts
│   └── PaginaPrincipal.ts
├── example.spec.ts
├── fazerCadastro.spec.ts
├── fazerLogin.spec.ts
├── jornadaBuscarPassagens.spec.ts
└── visitarPaginaInicial.spec.ts
```

## Learning Objectives

This project was developed to strengthen my knowledge of test automation, including E2E test design, the Page Object Model, reusable fixtures, assertions, and user journey validation.

## Course

- **Provider:** [Alura](https://www.alura.com.br/)
- **Course:** [Angular: Escreva testes end-to-end com Playwright](https://cursos.alura.com.br/course/angular-escreva-testes-end-to-end-playwright)
- **Status:** Completed

## Disclaimer

This is a learning project based on the Alura course. The repository contains test files for educational and portfolio purposes. The application source code and API are not included in this repository.
