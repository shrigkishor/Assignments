# Node.js Developer Coding Tasks

## Table of Contents

- [Fresher Level Tasks](#fresher-level-tasks)
- [Junior Level Tasks](#junior-level-tasks)
- [Mid-Level Tasks](#mid-level-tasks)
- [Evaluation Criteria](#evaluation-criteria)

---

## Fresher Level Tasks

### Task 1: RESTful API - Todo Management

**Difficulty:** ⭐ Easy  
**Time Limit:** 90 minutes  
**Points:** 100

#### Problem Description

Create a RESTful API using Node.js and Express for managing todos. The API should support CRUD operations (Create, Read, Update, Delete) for todo items.

#### Requirements

1. **Tech Stack:**

   - Node.js
   - Express.js
   - In-memory storage (array) - no database required
   - JSON for request/response

2. **API Endpoints:**

   - `POST /api/todos` - Create a new todo
   - `GET /api/todos` - Get all todos
   - `GET /api/todos/:id` - Get a specific todo by ID
   - `PUT /api/todos/:id` - Update a todo
   - `DELETE /api/todos/:id` - Delete a todo

3. **Todo Model:**

   ```javascript
   {
     id: string (unique),
     title: string (required),
     description: string (optional),
     completed: boolean (default: false),
     createdAt: Date,
     updatedAt: Date
   }
   ```

4. **Validation:**

   - Title is required and must be at least 3 characters
   - Description is optional
   - Return appropriate error messages for invalid data

5. **Error Handling:**

   - Return 404 if todo not found
   - Return 400 for validation errors
   - Return 500 for server errors

#### Test Cases

**Test Case 1:**

- Request: `POST /api/todos` with `{ "title": "Learn Node.js" }`
- Expected: Status 201, returns created todo with id

**Test Case 2:**

- Request: `GET /api/todos`
- Expected: Status 200, returns array of all todos

**Test Case 3:**

- Request: `GET /api/todos/:id` with valid ID
- Expected: Status 200, returns specific todo

**Test Case 4:**

- Request: `POST /api/todos` with `{ "title": "Hi" }`
- Expected: Status 400, returns validation error

**Test Case 5:**

- Request: `GET /api/todos/:id` with invalid ID
- Expected: Status 404, returns error message

**Test Case 6:**

- Request: `PUT /api/todos/:id` with `{ "completed": true }`
- Expected: Status 200, returns updated todo

**Test Case 7:**

- Request: `DELETE /api/todos/:id` with valid ID
- Expected: Status 200, returns success message

#### Sample Request/Response

```bash
# Create Todo
POST /api/todos
Content-Type: application/json

{
  "title": "Complete assignment",
  "description": "Finish Node.js task"
}

# Response (201)
{
  "id": "1",
  "title": "Complete assignment",
  "description": "Finish Node.js task",
  "completed": false,
  "createdAt": "2024-01-15T10:00:00Z",
  "updatedAt": "2024-01-15T10:00:00Z"
}
```

#### Evaluation Criteria

- **Functionality (40%):** All endpoints work correctly
- **Code Quality (30%):** Clean, readable code with proper structure
- **Error Handling (20%):** Proper error responses and status codes
- **Validation (10%):** Input validation implemented correctly

---

### Task 2: File Operations API

**Difficulty:** ⭐ Easy  
**Time Limit:** 75 minutes  
**Points:** 80

#### Problem Description

Create an API that handles file operations - reading, writing, and listing files in a directory. Use Node.js built-in `fs` module.

#### Requirements

1. **Tech Stack:**

   - Node.js
   - Express.js
   - Built-in `fs` module (promises or callbacks)

2. **API Endpoints:**

   - `POST /api/files` - Create/write a file
   - `GET /api/files/:filename` - Read a file
   - `GET /api/files` - List all files in directory
   - `DELETE /api/files/:filename` - Delete a file

3. **File Operations:**

   - Store files in a `./storage` directory
   - Create directory if it doesn't exist
   - Validate filename (no path traversal, valid characters)
   - Return file content as JSON or text

4. **Validation:**

   - Filename must be valid (alphanumeric, hyphens, underscores only)
   - Prevent path traversal attacks
   - File content is required for POST

5. **Error Handling:**

   - Return 404 if file not found
   - Return 400 for invalid filenames
   - Return 500 for file system errors

#### Test Cases

**Test Case 1:**

- Request: `POST /api/files` with `{ "filename": "test.txt", "content": "Hello World" }`
- Expected: Status 201, file created successfully

**Test Case 2:**

- Request: `GET /api/files/test.txt`
- Expected: Status 200, returns file content

**Test Case 3:**

- Request: `GET /api/files`
- Expected: Status 200, returns array of filenames

**Test Case 4:**

- Request: `POST /api/files` with `{ "filename": "../../etc/passwd" }`
- Expected: Status 400, returns validation error

**Test Case 5:**

- Request: `DELETE /api/files/test.txt`
- Expected: Status 200, file deleted successfully

#### Sample Request/Response

```bash
# Create File
POST /api/files
Content-Type: application/json

{
  "filename": "data.json",
  "content": "{\"key\": \"value\"}"
}

# Response (201)
{
  "message": "File created successfully",
  "filename": "data.json"
}
```

#### Evaluation Criteria

- **Functionality (50%):** All file operations work correctly
- **Security (25%):** Path traversal prevention, filename validation
- **Error Handling (15%):** Proper error responses
- **Code Quality (10%):** Clean, readable code

---

### Task 3: Data Processing Service

**Difficulty:** ⭐⭐ Medium  
**Time Limit:** 90 minutes  
**Points:** 120

#### Problem Description

Create a service that processes and transforms data. The service should accept JSON data, validate it, transform it according to rules, and return the processed result.

#### Requirements

1. **Tech Stack:**

   - Node.js
   - Express.js
   - Built-in modules only

2. **API Endpoints:**

   - `POST /api/process` - Process and transform data

3. **Input Data Format:**

   ```json
   {
     "users": [
       {
         "id": 1,
         "name": "John Doe",
         "email": "john@example.com",
         "age": 25,
         "active": true
       }
     ],
     "rules": {
       "filter": { "active": true },
       "sort": { "field": "age", "order": "desc" },
       "transform": ["name", "email", "age"]
     }
   }
   ```

4. **Processing Rules:**

   - **Filter:** Filter users based on criteria
   - **Sort:** Sort by field (ascending/descending)
   - **Transform:** Select only specified fields
   - **Validate:** Ensure all required fields exist

5. **Validation:**

   - Users array is required
   - Each user must have: id, name, email, age, active
   - Rules are optional but must be valid if provided

#### Test Cases

**Test Case 1:**

- Input: Users array with filter rule `{ "active": true }`
- Expected: Returns only active users

**Test Case 2:**

- Input: Users array with sort rule `{ "field": "age", "order": "desc" }`
- Expected: Returns users sorted by age descending

**Test Case 3:**

- Input: Users array with transform rule `["name", "email"]`
- Expected: Returns users with only name and email fields

**Test Case 4:**

- Input: Users array with all rules applied
- Expected: Returns filtered, sorted, and transformed data

**Test Case 5:**

- Input: Invalid user data (missing required fields)
- Expected: Status 400, returns validation error

#### Sample Request/Response

```bash
POST /api/process
Content-Type: application/json

{
  "users": [
    { "id": 1, "name": "Alice", "email": "alice@example.com", "age": 30, "active": true },
    { "id": 2, "name": "Bob", "email": "bob@example.com", "age": 25, "active": false }
  ],
  "rules": {
    "filter": { "active": true },
    "sort": { "field": "age", "order": "desc" },
    "transform": ["name", "email", "age"]
  }
}

# Response (200)
{
  "processed": [
    {
      "name": "Alice",
      "email": "alice@example.com",
      "age": 30
    }
  ],
  "count": 1
}
```

#### Evaluation Criteria

- **Functionality (40%):** All processing rules work correctly
- **Code Quality (30%):** Clean, modular code
- **Validation (20%):** Proper input validation
- **Error Handling (10%):** Error responses for invalid data

---

## Junior Level Tasks

### Task 1: RESTful API with Database Integration

**Difficulty:** ⭐⭐ Medium  
**Time Limit:** 120 minutes  
**Points:** 200

#### Problem Description

Build a RESTful API for a blog system with database integration. Use MongoDB with Mongoose or PostgreSQL with a query builder. Implement CRUD operations with proper relationships.

#### Requirements

1. **Tech Stack:**

   - Node.js
   - Express.js
   - MongoDB (Mongoose) OR PostgreSQL (pg/Prisma)
   - Environment variables for configuration

2. **Database Models:**

   - **User Model:**
     - id, name, email, password (hashed), createdAt
   - **Post Model:**
     - id, title, content, authorId (reference to User), createdAt, updatedAt
   - **Comment Model:**
     - id, content, postId (reference to Post), authorId (reference to User), createdAt

3. **API Endpoints:**

   - `POST /api/users` - Create user (hash password)
   - `GET /api/users/:id` - Get user by ID
   - `POST /api/posts` - Create post (requires authorId)
   - `GET /api/posts` - Get all posts (with author info)
   - `GET /api/posts/:id` - Get post with comments
   - `PUT /api/posts/:id` - Update post
   - `DELETE /api/posts/:id` - Delete post
   - `POST /api/posts/:id/comments` - Add comment to post
   - `GET /api/posts/:id/comments` - Get comments for post

4. **Features:**

   - Password hashing (bcrypt)
   - Input validation
   - Error handling middleware
   - Database connection handling
   - Environment variables for config

5. **Validation:**

   - Email format validation
   - Password strength (min 6 characters)
   - Required fields validation
   - Foreign key validation

#### Test Cases

**Test Case 1:**

- Request: `POST /api/users` with valid data
- Expected: Status 201, user created with hashed password

**Test Case 2:**

- Request: `POST /api/posts` with valid authorId
- Expected: Status 201, post created with author reference

**Test Case 3:**

- Request: `GET /api/posts/:id`
- Expected: Status 200, returns post with populated author and comments

**Test Case 4:**

- Request: `POST /api/posts/:id/comments` with valid data
- Expected: Status 201, comment created and linked to post

**Test Case 5:**

- Request: `POST /api/users` with invalid email
- Expected: Status 400, returns validation error

#### Sample Request/Response

```bash
# Create User
POST /api/users
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepass123"
}

# Response (201)
{
  "id": "507f1f77bcf86cd799439011",
  "name": "John Doe",
  "email": "john@example.com",
  "createdAt": "2024-01-15T10:00:00Z"
}
```

#### Evaluation Criteria

- **Database Integration (35%):** Proper models, relationships, queries
- **Code Quality (25%):** Clean architecture, separation of concerns
- **Security (20%):** Password hashing, input validation
- **Error Handling (20%):** Proper error responses and middleware

---

### Task 2: Authentication & Authorization System

**Difficulty:** ⭐⭐ Medium  
**Time Limit:** 150 minutes  
**Points:** 250

#### Problem Description

Implement a complete authentication and authorization system using JWT tokens. Include user registration, login, password reset, and role-based access control.

#### Requirements

1. **Tech Stack:**

   - Node.js
   - Express.js
   - JWT (jsonwebtoken)
   - bcrypt for password hashing
   - Database (MongoDB or PostgreSQL)

2. **Features:**

   - User registration
   - User login (returns JWT token)
   - Password reset (token-based)
   - Protected routes middleware
   - Role-based access control (Admin, User)
   - Token refresh mechanism

3. **API Endpoints:**

   - `POST /api/auth/register` - Register new user
   - `POST /api/auth/login` - Login user
   - `POST /api/auth/refresh` - Refresh access token
   - `POST /api/auth/forgot-password` - Request password reset
   - `POST /api/auth/reset-password` - Reset password with token
   - `GET /api/auth/me` - Get current user (protected)
   - `GET /api/admin/users` - Get all users (Admin only)

4. **Security Requirements:**

   - Passwords must be hashed
   - JWT tokens with expiration
   - Refresh tokens stored securely
   - Password reset tokens expire after 1 hour
   - Rate limiting on auth endpoints (optional but preferred)

5. **Middleware:**

   - Authentication middleware (verify JWT)
   - Authorization middleware (check roles)
   - Error handling middleware

#### Test Cases

**Test Case 1:**

- Request: `POST /api/auth/register` with valid data
- Expected: Status 201, user created

**Test Case 2:**

- Request: `POST /api/auth/login` with valid credentials
- Expected: Status 200, returns access token and refresh token

**Test Case 3:**

- Request: `GET /api/auth/me` with valid JWT token
- Expected: Status 200, returns user data

**Test Case 4:**

- Request: `GET /api/auth/me` without token
- Expected: Status 401, returns unauthorized error

**Test Case 5:**

- Request: `GET /api/admin/users` as regular user
- Expected: Status 403, returns forbidden error

**Test Case 6:**

- Request: `POST /api/auth/reset-password` with valid token
- Expected: Status 200, password reset successfully

#### Sample Request/Response

```bash
# Login
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securepass123"
}

# Response (200)
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user"
  }
}
```

#### Evaluation Criteria

- **Authentication (35%):** JWT implementation, password hashing
- **Authorization (25%):** Role-based access control
- **Security (20%):** Token management, password reset security
- **Code Quality (20%):** Clean middleware, error handling

---

### Task 3: API with Caching and Rate Limiting

**Difficulty:** ⭐⭐⭐ Hard  
**Time Limit:** 180 minutes  
**Points:** 300

#### Problem Description

Build an API that implements caching strategies and rate limiting. The API should cache frequently accessed data and limit requests per user/IP.

#### Requirements

1. **Tech Stack:**

   - Node.js
   - Express.js
   - Redis for caching (or in-memory cache)
   - express-rate-limit for rate limiting
   - Database (MongoDB or PostgreSQL)

2. **API Endpoints:**

   - `GET /api/products` - Get all products (cached)
   - `GET /api/products/:id` - Get product by ID (cached)
   - `POST /api/products` - Create product (invalidate cache)
   - `PUT /api/products/:id` - Update product (invalidate cache)
   - `DELETE /api/products/:id` - Delete product (invalidate cache)
   - `GET /api/products/search?q=keyword` - Search products (cached)

3. **Caching Strategy:**

   - Cache product list for 5 minutes
   - Cache individual products for 10 minutes
   - Cache search results for 3 minutes
   - Invalidate cache on create/update/delete
   - Cache key structure: `products:all`, `products:id:123`, `products:search:keyword`

4. **Rate Limiting:**

   - General API: 100 requests per 15 minutes per IP
   - Search endpoint: 20 requests per minute per IP
   - Create/Update/Delete: 10 requests per minute per authenticated user

5. **Features:**

   - Cache hit/miss logging
   - Rate limit headers in response
   - Graceful cache fallback (if Redis unavailable)

#### Test Cases

**Test Case 1:**

- Request: `GET /api/products` (first time)
- Expected: Status 200, data from database, cache miss

**Test Case 2:**

- Request: `GET /api/products` (within 5 minutes)
- Expected: Status 200, data from cache, cache hit

**Test Case 3:**

- Request: `POST /api/products` then `GET /api/products`
- Expected: Status 200, fresh data (cache invalidated)

**Test Case 4:**

- Request: 101 requests to `/api/products` within 15 minutes
- Expected: Status 429 on 101st request (rate limited)

**Test Case 5:**

- Request: `GET /api/products/search?q=laptop` multiple times
- Expected: First request from DB, subsequent from cache

#### Sample Request/Response

```bash
# First Request (Cache Miss)
GET /api/products

# Response (200)
X-Cache: MISS
{
  "products": [...],
  "count": 10
}

# Second Request (Cache Hit)
GET /api/products

# Response (200)
X-Cache: HIT
{
  "products": [...],
  "count": 10
}
```

#### Evaluation Criteria

- **Caching Implementation (40%):** Proper cache strategy, invalidation
- **Rate Limiting (25%):** Multiple rate limit rules implemented
- **Code Quality (20%):** Clean middleware, reusable code
- **Error Handling (15%):** Graceful fallbacks, proper error responses

---

## Mid-Level Tasks

### Task 1: Microservices Architecture - User Service

**Difficulty:** ⭐⭐⭐ Hard  
**Time Limit:** 240 minutes  
**Points:** 400

#### Problem Description

Design and implement a microservice for user management following microservices best practices. Include service discovery, inter-service communication, and proper error handling.

#### Requirements

1. **Tech Stack:**

   - Node.js
   - Express.js
   - MongoDB or PostgreSQL
   - Message Queue (RabbitMQ or Redis Pub/Sub)
   - Docker (optional but preferred)

2. **Service Architecture:**

   - User Service (main service)
   - Event-driven communication
   - Service health checks
   - API Gateway pattern (simple implementation)

3. **Features:**

   - User CRUD operations
   - User authentication
   - Event publishing on user actions
   - Service health endpoint
   - Request logging and monitoring
   - Error handling with circuit breaker pattern

4. **API Endpoints:**

   - `POST /api/users` - Create user
   - `GET /api/users/:id` - Get user
   - `PUT /api/users/:id` - Update user
   - `DELETE /api/users/:id` - Delete user
   - `POST /api/users/:id/verify` - Verify user email
   - `GET /health` - Health check endpoint
   - `GET /metrics` - Service metrics

5. **Event System:**

   - Publish events: `user.created`, `user.updated`, `user.deleted`
   - Event payload structure
   - Event validation

6. **Best Practices:**

   - Repository pattern for data access
   - Service layer for business logic
   - Dependency injection
   - Environment-based configuration
   - Structured logging

#### Test Cases

**Test Case 1:**

- Request: `POST /api/users` with valid data
- Expected: Status 201, user created, `user.created` event published

**Test Case 2:**

- Request: `GET /health`
- Expected: Status 200, returns service health status

**Test Case 3:**

- Request: `PUT /api/users/:id` then check events
- Expected: Status 200, user updated, `user.updated` event published

**Test Case 4:**

- Request: `GET /api/users/:id` with non-existent ID
- Expected: Status 404, proper error response

**Test Case 5:**

- Request: Multiple requests to test circuit breaker
- Expected: Circuit breaker activates after threshold

#### Sample Event Structure

```json
{
  "event": "user.created",
  "timestamp": "2024-01-15T10:00:00Z",
  "data": {
    "userId": "507f1f77bcf86cd799439011",
    "email": "john@example.com",
    "name": "John Doe"
  }
}
```

#### Evaluation Criteria

- **Architecture (35%):** Microservices patterns, separation of concerns
- **Event System (25%):** Event-driven communication implemented
- **Code Quality (20%):** Repository pattern, service layer, DI
- **Observability (20%):** Health checks, logging, metrics

---

### Task 2: High-Performance API with Database Optimization

**Difficulty:** ⭐⭐⭐⭐ Very Hard  
**Time Limit:** 300 minutes  
**Points:** 500

#### Problem Description

Build a high-performance API that handles large datasets efficiently. Implement database query optimization, connection pooling, indexing, and pagination.

#### Requirements

1. **Tech Stack:**

   - Node.js
   - Express.js
   - PostgreSQL with proper indexing
   - Redis for caching
   - Connection pooling

2. **Performance Requirements:**

   - Handle 10,000+ records efficiently
   - Response time < 100ms for cached queries
   - Response time < 500ms for database queries
   - Support pagination (cursor-based preferred)
   - Database query optimization

3. **API Endpoints:**

   - `GET /api/orders` - Get orders with pagination
   - `GET /api/orders/:id` - Get order by ID
   - `GET /api/orders/stats` - Get order statistics (aggregated)
   - `POST /api/orders` - Create order (batch insert support)
   - `GET /api/orders/search?q=keyword&page=1&limit=20` - Search with pagination

4. **Database Optimization:**

   - Proper indexes on frequently queried fields
   - Query optimization (avoid N+1 queries)
   - Connection pooling configuration
   - Database query logging and analysis
   - Use of database views for complex queries

5. **Caching Strategy:**

   - Cache frequently accessed data
   - Cache invalidation strategy
   - Cache warming for stats endpoint
   - Multi-level caching (memory + Redis)

6. **Features:**

   - Pagination (offset-based or cursor-based)
   - Filtering and sorting
   - Full-text search
   - Aggregation queries optimized
   - Batch operations

#### Test Cases

**Test Case 1:**

- Request: `GET /api/orders?page=1&limit=50` with 10,000 records
- Expected: Status 200, returns 50 records, response time < 500ms

**Test Case 2:**

- Request: `GET /api/orders/stats` (cached)
- Expected: Status 200, response time < 100ms

**Test Case 3:**

- Request: `GET /api/orders/search?q=laptop&page=1`
- Expected: Status 200, uses database index, fast response

**Test Case 4:**

- Request: `POST /api/orders` with batch of 100 orders
- Expected: Status 201, uses batch insert, efficient

**Test Case 5:**

- Request: Multiple concurrent requests
- Expected: Connection pooling handles efficiently

#### Sample Database Schema

```sql
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL,
  product_id INTEGER NOT NULL,
  quantity INTEGER NOT NULL,
  total_amount DECIMAL(10,2) NOT NULL,
  status VARCHAR(50) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_orders_user_id ON orders(user_id);
CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_orders_created_at ON orders(created_at);
CREATE INDEX idx_orders_user_status ON orders(user_id, status);
```

#### Evaluation Criteria

- **Performance (40%):** Meets performance targets, optimized queries
- **Database Optimization (25%):** Proper indexes, query optimization
- **Caching (20%):** Effective caching strategy
- **Code Quality (15%):** Clean architecture, maintainable code

---

### Task 3: Real-time Data Processing Service

**Difficulty:** ⭐⭐⭐⭐ Very Hard  
**Time Limit:** 300 minutes  
**Points:** 450

#### Problem Description

Build a real-time data processing service that handles streaming data, processes it, and stores results. Implement WebSocket support, event streaming, and background job processing.

#### Requirements

1. **Tech Stack:**

   - Node.js
   - Express.js
   - WebSocket (Socket.io or ws)
   - Message Queue (RabbitMQ or Redis)
   - Background job processor (Bull or similar)
   - Database (MongoDB or PostgreSQL)

2. **Features:**

   - WebSocket server for real-time updates
   - Data ingestion endpoint (accepts streaming data)
   - Background job processing
   - Real-time data aggregation
   - Event streaming to clients
   - Data persistence

3. **API Endpoints:**

   - `POST /api/data/ingest` - Ingest data (batch or stream)
   - `GET /api/data/stats` - Get real-time statistics
   - `GET /api/data/history` - Get historical data
   - WebSocket: `/ws` - Real-time updates connection

4. **Data Processing:**

   - Process incoming data in background jobs
   - Aggregate data in real-time
   - Calculate statistics (count, sum, average)
   - Filter and transform data
   - Handle high throughput (1000+ messages/second)

5. **Real-time Features:**

   - Broadcast updates to connected clients
   - Room-based subscriptions
   - Client authentication for WebSocket
   - Handle connection drops and reconnection

6. **Background Jobs:**

   - Job queue for data processing
   - Job retry mechanism
   - Job priority handling
   - Job status tracking

#### Test Cases

**Test Case 1:**

- Action: Send 1000 data points via `POST /api/data/ingest`
- Expected: Data processed in background, status returned immediately

**Test Case 2:**

- Action: Connect via WebSocket, send data
- Expected: Connected clients receive real-time updates

**Test Case 3:**

- Action: Multiple WebSocket connections, send data
- Expected: All clients receive broadcast updates

**Test Case 4:**

- Action: Check job queue status
- Expected: Jobs processed, status tracked correctly

**Test Case 5:**

- Action: High throughput (1000 messages/second)
- Expected: System handles load, no data loss

#### Sample Data Flow

```javascript
// Ingest Data
POST /api/data/ingest
{
  "sensorId": "sensor-001",
  "value": 25.5,
  "timestamp": "2024-01-15T10:00:00Z"
}

// WebSocket Message (broadcasted)
{
  "type": "data.update",
  "data": {
    "sensorId": "sensor-001",
    "value": 25.5,
    "stats": {
      "count": 1000,
      "average": 24.8,
      "max": 30.0,
      "min": 20.0
    }
  }
}
```

#### Evaluation Criteria

- **Real-time Processing (35%):** WebSocket implementation, event streaming
- **Background Jobs (25%):** Job queue, processing, retry mechanism
- **Performance (20%):** Handles high throughput efficiently
- **Architecture (20%):** Clean separation, scalable design

---

## Evaluation Criteria

### General Evaluation Standards

#### Code Quality (All Levels)

- **Readability:** Clear variable names, comments where needed
- **Structure:** Logical organization, separation of concerns
- **Best Practices:** Follows Node.js/Express conventions
- **Error Handling:** Proper error handling and edge cases

#### Functionality

- **Completeness:** All requirements implemented
- **Correctness:** Features work as expected
- **Edge Cases:** Handles edge cases and errors gracefully

#### Technical Skills

**Fresher:**

- Basic Node.js and Express
- RESTful API design
- Basic error handling
- Input validation

**Junior:**

- Database integration
- Authentication/Authorization
- Middleware usage
- Environment configuration
- Testing basics

**Mid-Level:**

- Microservices architecture
- Performance optimization
- Advanced patterns (Repository, Service layers)
- Message queues
- Database optimization
- Real-time systems

#### Bonus Points

- **Testing:** Unit tests or integration tests
- **Documentation:** API documentation (Swagger/OpenAPI)
- **Docker:** Containerization
- **CI/CD:** GitHub Actions or similar
- **Monitoring:** Logging and monitoring setup

### Scoring Rubric

| Criteria       | Fresher | Junior | Mid-Level |
| -------------- | ------- | ------ | --------- |
| Functionality  | 40%     | 35%    | 30%       |
| Code Quality   | 30%     | 25%    | 20%       |
| Architecture   | 10%     | 20%    | 30%       |
| Security       | 10%     | 15%    | 10%       |
| Performance    | 0%      | 0%     | 20%       |
| Error Handling | 10%     | 5%     | 0%        |

### Time Management Guidelines

- **Fresher:** Focus on getting it working, then improve
- **Junior:** Balance functionality with code quality and security
- **Mid-Level:** Plan architecture first, then implement

### Common Pitfalls to Avoid

1. **Not reading requirements carefully**
2. **Poor error handling**
3. **Security vulnerabilities (SQL injection, XSS)**
4. **No input validation**
5. **Poor database query optimization**
6. **No connection pooling**
7. **Missing environment variables**
8. **Hardcoded values**

---

## Submission Guidelines

### What to Submit

1. **Source Code:** All files in a structured format
2. **README.md:**
   - Setup instructions
   - How to run the project
   - Environment variables needed
   - API documentation
   - Brief explanation of approach
3. **package.json:** With all dependencies
4. **.env.example:** Example environment variables

### Code Structure

```
project-name/
├── src/
│   ├── controllers/     # Route handlers
│   ├── services/        # Business logic
│   ├── models/         # Database models
│   ├── middleware/     # Custom middleware
│   ├── utils/          # Utility functions
│   ├── routes/         # Route definitions
│   └── app.js          # Express app setup
├── tests/              # Test files
├── .env.example        # Environment variables example
├── package.json        # Dependencies
├── README.md           # Project documentation
└── ...
```

### Notes for Evaluators

- Look for understanding of concepts, not just working code
- Consider time constraints
- Evaluate based on level-appropriate expectations
- Provide constructive feedback
- Check for security best practices

---

## Additional Resources

### Recommended Reading

- Node.js Documentation: https://nodejs.org/docs
- Express.js Guide: https://expressjs.com/en/guide/routing.html
- MongoDB Manual: https://docs.mongodb.com
- PostgreSQL Documentation: https://www.postgresql.org/docs

### Practice Platforms

- HackerRank: https://www.hackerrank.com
- LeetCode: https://leetcode.com
- Codewars: https://www.codewars.com

---

**Good luck! 🚀**
