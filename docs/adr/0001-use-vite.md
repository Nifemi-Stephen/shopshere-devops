# ADR-0001: Use Vite as the Frontend Build Tool

* **Status:** Accepted
* **Date:** 2026-07-13
* **Decision Makers:** ShopSphere Engineering Team

---

## Context

The ShopSphere frontend requires a modern build tool that provides a fast development experience, efficient production builds, and an excellent developer experience.

As the project is intended to simulate a production-style microservices application, the selected tooling should align with current industry practices while remaining easy for contributors to set up and use.

---

## Decision

The frontend application will use **Vite** as its build tool.

---

## Alternatives Considered

### Create React App (CRA)

**Pros**

* Mature ecosystem
* Large community
* Extensive documentation

**Cons**

* Slower development server
* Slower build times
* Increasingly less common for new React projects
* Official React documentation recommends modern alternatives

---

### Next.js

**Pros**

* Server-side rendering
* Static site generation
* Excellent performance features
* Rich ecosystem

**Cons**

* Introduces additional complexity
* Better suited for full-stack React applications
* Does not align with the scope of this project, where the frontend is a client application communicating with backend microservices

---

## Rationale

Vite was selected because it offers:

* Fast startup time
* Instant Hot Module Replacement (HMR)
* Optimized production builds
* Excellent React support
* Simple configuration
* Strong community adoption
* Lightweight developer experience

These characteristics make it well suited for a modern microservices frontend while keeping the project approachable for contributors.

---

## Consequences

### Positive

* Faster local development
* Improved developer productivity
* Smaller configuration surface
* Modern tooling
* Easier onboarding for contributors

### Negative

* Contributors unfamiliar with Vite may require a short learning period.
* Some legacy React tutorials are based on Create React App rather than Vite.

---

## References

* React Documentation
* Vite Documentation

---

## Notes

This decision will be revisited if future project requirements necessitate server-side rendering or another frontend architecture.
