# ShopVerse API Gateway

## Overview

The API Gateway is the single entry point into the ShopVerse microservices platform.

It is responsible for:

- Routing requests
- Request logging
- Health monitoring
- Readiness checks
- Security middleware
- Future authentication
- Future rate limiting

---

## Requirements

- Node.js 22 LTS
- npm 11+

---

## Installation

```bash
npm install
```

---

## Environment

Copy:

```bash
cp .env.example .env
```

---

## Start Development

```bash
npm run dev
```

---

## Start Production

```bash
npm start
```

---

## Endpoints

| Method | Endpoint |
|----------|---------------------------|
| GET | / |
| GET | /health |
| GET | /ready |
| GET | /info |
| GET | /api/v1/auth |
| GET | /api/v1/products |
| GET | /api/v1/inventory |
| GET | /api/v1/orders |
| GET | /api/v1/notifications |

---

## Project Structure

See `/docs`.

---

## License

MIT