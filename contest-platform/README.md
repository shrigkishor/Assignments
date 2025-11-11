# Contest Platform API

A NestJS-based contest platform with Organization and User roles, similar to Fishtechy/Udemy model.

## Features

- **Dual Role System**: Users can switch between Organization and User modes
- **Organization Features**: Create and manage contests, set pricing, manage participants
- **User Features**: Browse contests, enroll in contests (paid/free), participate and track progress
- **Authentication & Authorization**: JWT-based authentication with role-based access control
- **Payment Support**: Built-in payment system for paid contests
- **MongoDB Integration**: Document-based storage for flexible data modeling

## System Architecture

See [SYSTEM_DESIGN.md](./SYSTEM_DESIGN.md) for detailed system design.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (v6 or higher)
- pnpm (recommended) or npm

### Installation

```bash
# Install dependencies
pnpm install

# Copy environment file
cp .env.example .env

# Update .env with your MongoDB connection string
```

### Running the Application

```bash
# Development mode
pnpm run start:dev

# Production mode
pnpm run build
pnpm run start:prod
```

### API Documentation

Once the server is running, visit:
- Swagger UI: http://localhost:3000/api

## Project Structure

```
src/
├── common/           # Shared utilities, guards, decorators
├── config/           # Configuration files
├── auth/             # Authentication module
├── users/            # User module
├── organizations/    # Organization module
├── contests/         # Contest module
├── enrollments/      # Enrollment module
├── payments/         # Payment module
└── main.ts          # Application entry point
```

## License

MIT

