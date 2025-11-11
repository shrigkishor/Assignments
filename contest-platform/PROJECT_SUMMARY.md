# Contest Platform - Project Summary

## Overview

A complete NestJS-based contest platform with dual role system (User/Organization), similar to Fishtechy/Udemy model. Organizations can create and manage contests (paid/free), while Users can browse, enroll, and participate in contests.

## Key Features

### ✅ Dual Role System
- Users can switch between **USER** and **ORGANIZATION** modes
- Separate dashboards and permissions for each mode
- Role-based access control (RBAC)

### ✅ Organization Features
- Create and manage contests
- Set contest pricing (Free/Paid)
- Manage contest questions
- Set up prizes and rewards
- Track participants and revenue
- Publish/unpublish contests

### ✅ User Features
- Browse available contests
- Enroll in contests (free or paid)
- Participate in contests
- Submit answers
- Track progress and scores
- View leaderboards
- Receive certificates

### ✅ Contest Management
- Contest types: QUIZ, CODING, DESIGN, ESSAY, OTHER
- Scheduling (registration & contest dates)
- Question management (multiple choice, short answer, etc.)
- Prize management
- Participant limits and settings
- Leaderboard support

### ✅ Payment Integration
- Support for paid contests
- Payment intent creation
- Payment confirmation
- Refund management
- Transaction tracking

### ✅ Authentication & Security
- JWT-based authentication
- Password hashing (bcrypt)
- Role-based guards
- Mode-based guards
- Input validation

## Project Structure

```
contest-platform/
├── src/
│   ├── auth/                 # Authentication module
│   │   ├── strategies/       # JWT & Local strategies
│   │   ├── dto/              # Auth DTOs
│   │   └── auth.service.ts   # Auth business logic
│   │
│   ├── users/                # User module
│   │   ├── schemas/          # User MongoDB schema
│   │   ├── dto/              # User DTOs
│   │   └── users.service.ts  # User business logic
│   │
│   ├── organizations/        # Organization module
│   │   ├── schemas/          # Organization schema
│   │   ├── dto/              # Organization DTOs
│   │   └── organizations.service.ts
│   │
│   ├── contests/             # Contest module
│   │   ├── schemas/          # Contest schema
│   │   ├── dto/              # Contest DTOs
│   │   └── contests.service.ts
│   │
│   ├── enrollments/          # Enrollment module
│   │   ├── schemas/          # Enrollment schema
│   │   ├── dto/              # Enrollment DTOs
│   │   └── enrollments.service.ts
│   │
│   ├── payments/             # Payment module
│   │   ├── schemas/          # Payment schema
│   │   ├── dto/              # Payment DTOs
│   │   └── payments.service.ts
│   │
│   ├── common/               # Shared utilities
│   │   ├── decorators/      # Custom decorators
│   │   │   ├── current-user.decorator.ts
│   │   │   ├── roles.decorator.ts
│   │   │   ├── mode.decorator.ts
│   │   │   └── public.decorator.ts
│   │   └── guards/          # Custom guards
│   │       ├── jwt-auth.guard.ts
│   │       ├── roles.guard.ts
│   │       └── mode.guard.ts
│   │
│   ├── config/               # Configuration
│   ├── app.module.ts         # Root module
│   └── main.ts              # Application entry
│
├── SYSTEM_DESIGN.md         # Detailed system design
├── SETUP.md                 # Setup instructions
├── README.md                # Project README
├── package.json
└── tsconfig.json
```

## Database Schema

### User
- Basic user info (email, name, password)
- Role (USER, ORGANIZATION, BOTH)
- Current mode (USER, ORGANIZATION)
- Profile settings

### Organization
- Organization profile
- Settings (payment, notifications)
- Statistics (contests, participants, revenue)
- Linked to User

### Contest
- Contest details (title, description, category)
- Pricing (Free/Paid)
- Schedule (registration & contest dates)
- Questions array
- Prizes array
- Settings (participant limits, etc.)
- Status (DRAFT, PUBLISHED, ACTIVE, COMPLETED)

### Enrollment
- User enrollment in contest
- Payment reference
- Submissions array
- Progress tracking
- Scores and ranking

### Payment
- Payment transactions
- Amount and currency
- Payment method
- Status (PENDING, COMPLETED, FAILED, REFUNDED)

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login
- `GET /api/auth/me` - Get current user
- `POST /api/auth/switch-mode` - Switch mode

### Users
- `GET /api/users/profile` - Get profile
- `PATCH /api/users/profile` - Update profile

### Organizations
- `POST /api/organizations` - Create organization (Org mode)
- `GET /api/organizations/my-organization` - Get my org
- `GET /api/organizations/:id/stats` - Get stats

### Contests
- `GET /api/contests` - List contests
- `GET /api/contests/:id` - Get contest
- `POST /api/contests` - Create contest (Org mode)
- `POST /api/contests/:id/publish` - Publish contest
- `GET /api/contests/:id/leaderboard` - Leaderboard

### Enrollments
- `POST /api/enrollments` - Enroll in contest (User mode)
- `GET /api/enrollments/my-enrollments` - My enrollments
- `POST /api/enrollments/:id/submit` - Submit answer
- `POST /api/enrollments/:id/complete` - Complete contest

### Payments
- `POST /api/payments/create-intent` - Create payment
- `POST /api/payments/:id/confirm` - Confirm payment
- `POST /api/payments/:id/refund` - Refund payment

## Technology Stack

- **Framework**: NestJS (Node.js)
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (Passport.js)
- **Validation**: class-validator, class-transformer
- **Documentation**: Swagger/OpenAPI
- **Language**: TypeScript

## Getting Started

1. **Install dependencies**:
   ```bash
   pnpm install
   ```

2. **Configure environment**:
   - Copy `.env.example` to `.env`
   - Update MongoDB URI and JWT secrets

3. **Start MongoDB**:
   ```bash
   mongod
   ```

4. **Run the application**:
   ```bash
   pnpm run start:dev
   ```

5. **Access API**:
   - Base URL: http://localhost:3000/api
   - Swagger: http://localhost:3000/api/docs

## Features Comparison

| Feature | Udemy | Fishtechy | This Platform |
|---------|-------|-----------|---------------|
| Dual Role | ✅ Instructor/Student | ✅ Organization/User | ✅ Organization/User |
| Paid Courses | ✅ | ✅ | ✅ Paid Contests |
| Free Content | ✅ | ✅ | ✅ Free Contests |
| Certificates | ✅ | ✅ | ✅ (Planned) |
| Leaderboards | ❌ | ✅ | ✅ |
| Contest Model | ❌ | ✅ | ✅ |
| Role Switching | ❌ | ✅ | ✅ |

## Next Steps / Future Enhancements

1. **Payment Integration**
   - Integrate Stripe/PayPal
   - Webhook handling
   - Automated refunds

2. **Advanced Features**
   - Real-time leaderboard updates (WebSocket)
   - Email notifications
   - Certificate generation
   - Question templates
   - AI-powered question generation

3. **Analytics**
   - Dashboard for organizations
   - Participation analytics
   - Revenue tracking
   - User engagement metrics

4. **Scalability**
   - Redis caching
   - Database sharding
   - Load balancing
   - CDN integration

5. **Mobile Support**
   - Mobile API endpoints
   - Push notifications
   - Mobile-optimized responses

## Documentation

- **SYSTEM_DESIGN.md** - Detailed system design and architecture
- **SETUP.md** - Setup and installation guide
- **README.md** - Project overview
- **Swagger UI** - Interactive API documentation at `/api/docs`

## License

MIT

