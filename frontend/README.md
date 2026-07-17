# ShopSphere Frontend

The ShopSphere Frontend is a React-based single-page application (SPA) that serves as the user interface for the ShopSphere e-commerce platform.

It communicates with backend microservices through the API Gateway and provides features such as user authentication, product browsing, shopping cart management, and order tracking.

---

## Purpose

The frontend is responsible for:

* Rendering the user interface
* Managing client-side routing
* Handling user authentication
* Consuming backend APIs
* Managing client-side state
* Providing a responsive user experience

---

## Technology Stack

| Technology       | Purpose             |
| ---------------- | ------------------- |
| React            | User Interface      |
| Vite             | Build Tool          |
| React Router DOM | Client-side Routing |
| Axios            | HTTP Client         |
| React Hook Form  | Form Management     |
| Zod              | Input Validation    |
| Lucide React     | Icons               |

---

## Prerequisites

Before running the frontend locally, ensure the following are installed:

* Node.js (v20 or later)
* npm (v10 or later)

---

## Installation

Clone the repository:

```bash
git clone https://github.com/Nifemi-Stephen/shopshere-devops.git
```

Navigate to the frontend directory:

```bash
cd shopsphere/frontend
```

Install dependencies:

```bash
npm install
```

---

## Running the Development Server

Start the development server:

```bash
npm run dev
```

By default, the application will be available at:

```text
http://localhost:5173
```

---

## Environment Variables

Create a `.env` file in the `frontend` directory.

Example:

```env
VITE_API_BASE_URL=http://localhost:8080/api
```

A complete list of required environment variables can be found in `.env.example`.

---

## Project Structure

```text
frontend/
│
├── public/
├── src/
│   ├── api/
│   ├── assets/
│   ├── components/
│   ├── contexts/
│   ├── hooks/
│   ├── pages/
│   ├── routes/
│   ├── services/
│   ├── styles/
│   ├── utils/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .env.example
├── package.json
├── vite.config.js
└── README.md
```

---

## Available Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the development server         |
| `npm run build`   | Build the application for production |
| `npm run preview` | Preview the production build locally |

---

## API Communication

The frontend communicates exclusively with the API Gateway.

The frontend does **not** communicate directly with individual backend microservices.

This abstraction simplifies frontend development and centralizes request routing.

---

## Development Notes

* All API endpoints should be accessed through the configured API Gateway.
* Secrets and sensitive information must never be committed to the repository.
* All environment-specific configuration should be managed through environment variables.

---

## Future Enhancements

The following features will be added in future sprints:

* Authentication pages
* Product catalog
* Shopping cart
* Order history
* User profile
* Responsive layout
* Error boundaries
* Loading states
* Route protection
* Unit and integration testing

---

## Maintainers

ShopSphere Engineering Team
