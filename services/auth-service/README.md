# ShopVerse Auth Service

Authentication and authorization microservice for ShopVerse.

## Features

- User registration
- User login
- JWT authentication
- Refresh token support
- Password hashing with bcrypt
- PostgreSQL
- Prisma ORM

---

## Tech Stack

- Node.js
- Express
- PostgreSQL
- Prisma
- JWT
- Zod
- Docker

---

## Running Locally

Install dependencies

```bash
npm install
```

Copy environment variables

```bash
cp .env.example .env
```

Generate Prisma Client

```bash
npx prisma generate
```

Run migrations

```bash
npx prisma migrate dev
```

Start the service

```bash
npm run dev
```

---

## Health Check

```
GET /health
```

---

## Authentication Endpoints

### Register

```
POST /api/auth/register
```

### Login

```
POST /api/auth/login
```

### Logout

```
POST /api/auth/logout
```

Requires:

```
Authorization: Bearer <access_token>
```

### Current User

```
GET /api/auth/me
```

Requires:

```
Authorization: Bearer <access_token>
```