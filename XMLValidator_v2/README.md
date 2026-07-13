# XMLValidator API (NestJS + TypeScript Migration)

This project is a 100% equivalent rewrite of the ASP.NET Core XMLCheck project to Node.js using NestJS and TypeScript.

## Technologies Used

- **Node.js LTS** (version 20)
- **NestJS** (version 10)
- **TypeScript**
- **@xmldom/xmldom** for strict XML parsing
- **Swagger / OpenAPI** for API documentation
- **Docker & Docker Compose** for containerization
- **compression**, **helmet**, **cors** for performance, security, and access control

## Getting Started

### Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file (see `.env.example` as a template):
   ```bash
   cp .env.example .env
   ```

3. Run in development watch mode:
   ```bash
   npm run start:dev
   ```

4. Open Swagger documentation in your browser:
   [http://localhost:5038/swagger](http://localhost:5038/swagger)

### Run via Docker Compose

1. Build and start the container:
   ```bash
   docker-compose up -d --build
   ```

2. The service is exposed on port `5038`. Healthcheck endpoint is at `http://localhost:5038/health`.

## API Endpoints

- `POST /api/check/check-xml`: Validate base64 encoded XML files.
  - Requires `X-API-Key` header.
- `GET /health`: Healthcheck.
- `GET /swagger`: OpenAPI Documentation.
