# Contest Platform - System Design

## Overview

A contest platform similar to Fishtechy/Udemy where users can switch between Organization and User roles. Organizations can create and manage contests, while Users can browse, enroll, and participate in contests.

## Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                      Client Layer                            │
│  (Web App, Mobile App, Admin Dashboard)                     │
└────────────────────┬────────────────────────────────────────┘
                     │
                     │ HTTPS/REST API
                     │
┌────────────────────▼────────────────────────────────────────┐
│                  API Gateway / Load Balancer                │
└────────────────────┬────────────────────────────────────────┘
                     │
         ┌───────────┴───────────┐
         │                       │
┌────────▼────────┐    ┌─────────▼─────────┐
│  NestJS API     │    │   NestJS API      │
│  (Primary)      │    │   (Replica)       │
└────────┬────────┘    └─────────┬─────────┘
         │                       │
         └───────────┬───────────┘
                     │
         ┌───────────▼───────────┐
         │    MongoDB Cluster    │
         │  (Primary + Replicas) │
         └───────────────────────┘
```

## Core Entities

### 1. User
- Basic user information
- Authentication credentials
- Role management (User/Organization mode)
- Profile information
- Payment information
- Contest participation history

### 2. Organization
- Organization profile
- Created contests
- Organization settings
- Revenue tracking
- Member management (if needed)

### 3. Contest
- Contest details (title, description, rules)
- Pricing (free/paid)
- Duration (start/end dates)
- Status (draft, published, active, completed, cancelled)
- Categories/Tags
- Organization owner
- Participant count
- Prizes/Rewards
- Questions/Challenges

### 4. Enrollment
- User enrollment in contest
- Payment status (for paid contests)
- Participation status
- Progress tracking
- Submission records

### 5. Payment
- Transaction records
- Payment method
- Amount
- Status (pending, completed, failed, refunded)
- Related to enrollment

## Database Schema Design

### User Schema
```typescript
{
  _id: ObjectId,
  email: string (unique, indexed),
  password: string (hashed),
  firstName: string,
  lastName: string,
  phone?: string,
  avatar?: string,
  role: 'USER' | 'ORGANIZATION' | 'BOTH',
  currentMode: 'USER' | 'ORGANIZATION', // Current active mode
  organizationId?: ObjectId, // If has organization
  isActive: boolean,
  emailVerified: boolean,
  createdAt: Date,
  updatedAt: Date,
  lastLoginAt?: Date
}
```

### Organization Schema
```typescript
{
  _id: ObjectId,
  userId: ObjectId (ref: User),
  name: string,
  slug: string (unique, indexed),
  description: string,
  logo?: string,
  website?: string,
  contactEmail: string,
  contactPhone?: string,
  address?: {
    street: string,
    city: string,
    state: string,
    zipCode: string,
    country: string
  },
  isVerified: boolean,
  settings: {
    allowPublicContests: boolean,
    paymentEnabled: boolean,
    notificationPreferences: object
  },
  stats: {
    totalContests: number,
    totalParticipants: number,
    totalRevenue: number
  },
  createdAt: Date,
  updatedAt: Date
}
```

### Contest Schema
```typescript
{
  _id: ObjectId,
  organizationId: ObjectId (ref: Organization),
  title: string,
  slug: string (unique, indexed),
  description: string,
  shortDescription?: string,
  image?: string,
  category: string,
  tags: string[],
  type: 'QUIZ' | 'CODING' | 'DESIGN' | 'ESSAY' | 'OTHER',
  pricing: {
    type: 'FREE' | 'PAID',
    amount?: number,
    currency?: string
  },
  schedule: {
    registrationStart: Date,
    registrationEnd: Date,
    contestStart: Date,
    contestEnd: Date
  },
  rules: string[],
  prizes: [{
    rank: number,
    title: string,
    description: string,
    reward?: {
      type: 'CASH' | 'CREDENTIALS' | 'GOODIES',
      amount?: number,
      currency?: string
    }
  }],
  questions: [{
    _id: ObjectId,
    type: 'MULTIPLE_CHOICE' | 'SHORT_ANSWER' | 'LONG_ANSWER' | 'CODE',
    question: string,
    options?: string[],
    correctAnswer?: string | number,
    points: number,
    order: number
  }],
  settings: {
    maxParticipants?: number,
    minAge?: number,
    maxAge?: number,
    allowLateSubmission: boolean,
    showLeaderboard: boolean,
    requireEmailVerification: boolean
  },
  status: 'DRAFT' | 'PUBLISHED' | 'ACTIVE' | 'COMPLETED' | 'CANCELLED',
  stats: {
    views: number,
    enrollments: number,
    submissions: number
  },
  createdAt: Date,
  updatedAt: Date,
  publishedAt?: Date
}
```

### Enrollment Schema
```typescript
{
  _id: ObjectId,
  userId: ObjectId (ref: User),
  contestId: ObjectId (ref: Contest),
  status: 'PENDING' | 'ENROLLED' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED',
  paymentId?: ObjectId (ref: Payment),
  enrolledAt: Date,
  startedAt?: Date,
  completedAt?: Date,
  submissions: [{
    questionId: ObjectId,
    answer: string | number | object,
    submittedAt: Date,
    score?: number,
    isCorrect?: boolean
  }],
  totalScore?: number,
  rank?: number,
  certificateIssued: boolean,
  certificateId?: string
}
```

### Payment Schema
```typescript
{
  _id: ObjectId,
  userId: ObjectId (ref: User),
  enrollmentId: ObjectId (ref: Enrollment),
  contestId: ObjectId (ref: Contest),
  amount: number,
  currency: string,
  method: 'STRIPE' | 'PAYPAL' | 'BANK_TRANSFER' | 'OTHER',
  status: 'PENDING' | 'COMPLETED' | 'FAILED' | 'REFUNDED',
  transactionId?: string,
  gatewayResponse?: object,
  refundedAt?: Date,
  refundAmount?: number,
  createdAt: Date,
  updatedAt: Date
}
```

## API Design

### Authentication Endpoints
- `POST /auth/register` - Register new user
- `POST /auth/login` - Login user
- `POST /auth/logout` - Logout user
- `POST /auth/refresh` - Refresh token
- `POST /auth/switch-mode` - Switch between USER/ORGANIZATION mode
- `GET /auth/me` - Get current user info

### User Endpoints
- `GET /users/profile` - Get user profile
- `PUT /users/profile` - Update user profile
- `GET /users/enrollments` - Get user enrollments
- `GET /users/contests` - Get contests user created (in org mode)

### Organization Endpoints
- `POST /organizations` - Create organization
- `GET /organizations/:id` - Get organization details
- `PUT /organizations/:id` - Update organization
- `GET /organizations/:id/contests` - Get organization contests
- `GET /organizations/:id/stats` - Get organization statistics

### Contest Endpoints
- `GET /contests` - List contests (with filters)
- `GET /contests/:id` - Get contest details
- `POST /contests` - Create contest (Organization only)
- `PUT /contests/:id` - Update contest (Organization only)
- `DELETE /contests/:id` - Delete contest (Organization only)
- `POST /contests/:id/publish` - Publish contest (Organization only)
- `GET /contests/:id/leaderboard` - Get contest leaderboard
- `GET /contests/:id/questions` - Get contest questions (after enrollment)

### Enrollment Endpoints
- `POST /enrollments` - Enroll in contest
- `GET /enrollments/:id` - Get enrollment details
- `POST /enrollments/:id/submit` - Submit answer
- `GET /enrollments/:id/progress` - Get enrollment progress
- `POST /enrollments/:id/complete` - Mark enrollment as complete

### Payment Endpoints
- `POST /payments/create-intent` - Create payment intent
- `POST /payments/confirm` - Confirm payment
- `GET /payments/:id` - Get payment details
- `POST /payments/:id/refund` - Refund payment (Organization only)

## Authentication & Authorization

### JWT Strategy
- Access Token (short-lived, 15 minutes)
- Refresh Token (long-lived, 7 days)
- Token contains: userId, role, currentMode

### Role-Based Access Control (RBAC)
- **USER Mode**: Can browse, enroll, participate in contests
- **ORGANIZATION Mode**: Can create, manage contests
- **Admin**: System administration (future)

### Guards
- `JwtAuthGuard` - Validates JWT token
- `RolesGuard` - Checks user role
- `ModeGuard` - Validates current mode

## Payment Integration

### Payment Flow
1. User enrolls in paid contest
2. System creates payment intent
3. User redirected to payment gateway
4. On success, enrollment is activated
5. Payment webhook updates payment status

### Supported Gateways
- Stripe (primary)
- PayPal (future)
- Bank Transfer (manual)

## Key Features

### 1. Dual Role System
- User can have both roles
- Easy switching between modes
- Separate dashboards for each mode

### 2. Contest Management
- Draft mode for preparing contests
- Scheduling (registration & contest dates)
- Question management
- Prize management
- Participant management

### 3. Participation System
- Enrollment tracking
- Question answering
- Progress tracking
- Leaderboard
- Certificate generation

### 4. Payment System
- Paid contests
- Secure payment processing
- Refund management
- Revenue tracking for organizations

## Scalability Considerations

### Database
- Indexes on frequently queried fields
- Read replicas for read-heavy operations
- Sharding strategy for large collections

### Caching
- Redis for session management
- Cache contest listings
- Cache leaderboards

### Load Balancing
- Horizontal scaling
- API rate limiting
- CDN for static assets

## Security

- Password hashing (bcrypt)
- JWT token security
- Rate limiting
- Input validation
- SQL injection prevention (NoSQL injection)
- XSS protection
- CORS configuration

## Monitoring & Logging

- Request logging
- Error tracking
- Performance monitoring
- Payment transaction logging
- User activity logging

## Future Enhancements

- Real-time notifications (WebSocket)
- Email notifications
- Contest templates
- AI-powered question generation
- Analytics dashboard
- Multi-language support
- Mobile apps

