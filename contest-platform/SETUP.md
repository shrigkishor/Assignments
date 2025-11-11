# Setup Guide - Contest Platform

## Prerequisites

- Node.js (v18 or higher)
- MongoDB (v6 or higher)
- pnpm (recommended) or npm
- Git

## Installation

### 1. Install Dependencies

```bash
cd contest-platform
pnpm install
```

### 2. Environment Configuration

Create a `.env` file in the root directory:

```bash
# Server Configuration
PORT=3000
NODE_ENV=development

# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017/contest-platform

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRES_IN=15m
JWT_REFRESH_SECRET=your-super-secret-refresh-jwt-key
JWT_REFRESH_EXPIRES_IN=7d

# Payment Gateway (Stripe)
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key

# Application
APP_URL=http://localhost:3000
API_PREFIX=api

# CORS
CORS_ORIGIN=http://localhost:3001
```

### 3. Start MongoDB

Make sure MongoDB is running:

```bash
# If using local MongoDB
mongod

# Or if using Docker
docker run -d -p 27017:27017 --name mongodb mongo:latest
```

### 4. Run the Application

```bash
# Development mode
pnpm run start:dev

# Production build
pnpm run build
pnpm run start:prod
```

## API Endpoints

Once the server is running:
- Base URL: http://localhost:3000/api
- Swagger Documentation: http://localhost:3000/api/docs

## Key Features

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user
- `POST /api/auth/switch-mode` - Switch between USER/ORGANIZATION mode

### Users
- `GET /api/users/profile` - Get user profile
- `PATCH /api/users/profile` - Update profile

### Organizations
- `POST /api/organizations` - Create organization (Organization mode)
- `GET /api/organizations/my-organization` - Get my organization
- `GET /api/organizations/:id/stats` - Get organization statistics

### Contests
- `GET /api/contests` - List all published contests
- `GET /api/contests/:id` - Get contest details
- `POST /api/contests` - Create contest (Organization mode)
- `POST /api/contests/:id/publish` - Publish contest (Organization mode)
- `GET /api/contests/:id/leaderboard` - Get leaderboard

### Enrollments
- `POST /api/enrollments` - Enroll in contest (User mode)
- `GET /api/enrollments/my-enrollments` - Get my enrollments
- `POST /api/enrollments/:id/submit` - Submit answer
- `POST /api/enrollments/:id/complete` - Complete contest

### Payments
- `POST /api/payments/create-intent` - Create payment intent
- `POST /api/payments/:id/confirm` - Confirm payment
- `POST /api/payments/:id/refund` - Refund payment

## Testing the API

### 1. Register a User

```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "password123",
    "firstName": "John",
    "lastName": "Doe"
  }'
```

### 2. Login

```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "password123"
  }'
```

### 3. Switch to Organization Mode

```bash
curl -X POST http://localhost:3000/api/auth/switch-mode \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "mode": "ORGANIZATION"
  }'
```

### 4. Create Organization

```bash
curl -X POST http://localhost:3000/api/organizations \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "name": "Tech Solutions Inc",
    "slug": "tech-solutions",
    "description": "Leading tech solutions provider",
    "contactEmail": "contact@techsolutions.com"
  }'
```

### 5. Create Contest

```bash
curl -X POST http://localhost:3000/api/contests \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "title": "Web Development Quiz 2024",
    "slug": "web-dev-quiz-2024",
    "description": "Test your web development knowledge",
    "category": "Programming",
    "type": "QUIZ",
    "pricingType": "FREE",
    "registrationStart": "2024-01-01T00:00:00Z",
    "registrationEnd": "2024-01-15T00:00:00Z",
    "contestStart": "2024-01-16T00:00:00Z",
    "contestEnd": "2024-01-31T23:59:59Z"
  }'
```

## Project Structure

```
contest-platform/
├── src/
│   ├── auth/                 # Authentication module
│   ├── users/                # User module
│   ├── organizations/        # Organization module
│   ├── contests/             # Contest module
│   ├── enrollments/         # Enrollment module
│   ├── payments/            # Payment module
│   ├── common/              # Shared utilities, guards, decorators
│   ├── config/              # Configuration
│   ├── app.module.ts        # Root module
│   └── main.ts              # Application entry point
├── SYSTEM_DESIGN.md         # System design documentation
├── package.json
└── tsconfig.json
```

## Development

### Code Structure

- **Modules**: Each feature is a separate module
- **Schemas**: MongoDB schemas using Mongoose
- **DTOs**: Data Transfer Objects for validation
- **Services**: Business logic
- **Controllers**: HTTP request handlers
- **Guards**: Authentication and authorization guards

### Best Practices

- Follow SOLID principles
- Use dependency injection
- Implement proper error handling
- Validate all inputs
- Use TypeScript strictly
- Follow NestJS conventions

## Next Steps

1. Integrate Stripe/PayPal for payments
2. Add email notifications
3. Implement real-time leaderboard updates
4. Add contest question management UI
5. Implement certificate generation
6. Add analytics dashboard
7. Deploy to production

## License

MIT

