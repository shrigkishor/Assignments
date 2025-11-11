# Node.js Coding Tasks - Evaluator Guide

This guide helps evaluators assess candidate submissions for Node.js developer coding tasks.

---

## Quick Reference

### Task Distribution

| Level | Tasks | Total Points | Time Range |
|-------|-------|--------------|------------|
| **Fresher** | 3 tasks | 300 points | 4-5 hours |
| **Junior** | 3 tasks | 750 points | 7-9 hours |
| **Mid-Level** | 3 tasks | 1350 points | 13-15 hours |

---

## Fresher Level Evaluation

### Task 1: RESTful API - Todo Management (100 points)

**Key Things to Check:**
- ✅ All CRUD endpoints work correctly
- ✅ Proper HTTP status codes (201, 200, 404, 400, 500)
- ✅ Input validation implemented
- ✅ Error handling for edge cases
- ✅ Clean code structure
- ✅ Proper request/response format

**Common Issues:**
- ❌ Wrong HTTP status codes
- ❌ No input validation
- ❌ Poor error handling
- ❌ No validation for required fields
- ❌ Inconsistent response format
- ❌ No error messages

**Scoring Breakdown:**
- Functionality: 40 points
- Code Quality: 30 points
- Error Handling: 20 points
- Validation: 10 points

---

### Task 2: File Operations API (80 points)

**Key Things to Check:**
- ✅ All file operations work correctly
- ✅ Path traversal prevention
- ✅ Filename validation
- ✅ Directory creation if doesn't exist
- ✅ Proper error handling
- ✅ Security measures implemented

**Common Issues:**
- ❌ Path traversal vulnerability
- ❌ No filename validation
- ❌ No directory creation
- ❌ Poor error handling
- ❌ Security vulnerabilities

**Scoring Breakdown:**
- Functionality: 50 points
- Security: 25 points
- Error Handling: 15 points
- Code Quality: 10 points

---

### Task 3: Data Processing Service (120 points)

**Key Things to Check:**
- ✅ Filtering works correctly
- ✅ Sorting works correctly
- ✅ Transformation works correctly
- ✅ All rules can be combined
- ✅ Input validation
- ✅ Error handling

**Common Issues:**
- ❌ Filtering not working
- ❌ Sorting not working correctly
- ❌ Transformation not working
- ❌ Rules can't be combined
- ❌ No validation

**Scoring Breakdown:**
- Functionality: 40 points
- Code Quality: 30 points
- Validation: 20 points
- Error Handling: 10 points

---

## Junior Level Evaluation

### Task 1: RESTful API with Database Integration (200 points)

**Key Things to Check:**
- ✅ Database models properly defined
- ✅ Relationships work correctly (populate/references)
- ✅ Password hashing implemented
- ✅ All CRUD operations work
- ✅ Input validation
- ✅ Error handling middleware
- ✅ Environment variables used
- ✅ Database connection handling

**Common Issues:**
- ❌ No password hashing
- ❌ Relationships not working
- ❌ No environment variables
- ❌ Hardcoded database credentials
- ❌ No error handling middleware
- ❌ Poor model definitions
- ❌ No input validation

**Scoring Breakdown:**
- Database Integration: 35 points
- Code Quality: 25 points
- Security: 20 points
- Error Handling: 20 points

**Bonus Points (+20):**
- Proper use of transactions
- Database indexes
- Query optimization
- Unit tests

---

### Task 2: Authentication & Authorization System (250 points)

**Key Things to Check:**
- ✅ JWT implementation correct
- ✅ Password hashing (bcrypt)
- ✅ Token refresh mechanism
- ✅ Password reset flow
- ✅ Protected routes work
- ✅ Role-based access control
- ✅ Rate limiting implemented
- ✅ Token expiration handling

**Common Issues:**
- ❌ No password hashing
- ❌ JWT not implemented correctly
- ❌ No token refresh
- ❌ Authorization not working
- ❌ No rate limiting
- ❌ Security vulnerabilities
- ❌ Token not validated properly

**Scoring Breakdown:**
- Authentication: 35 points
- Authorization: 25 points
- Security: 20 points
- Code Quality: 20 points

**Bonus Points (+25):**
- Rate limiting
- Token blacklisting
- Email verification
- Two-factor authentication

---

### Task 3: API with Caching and Rate Limiting (300 points)

**Key Things to Check:**
- ✅ Caching implemented correctly
- ✅ Cache invalidation on updates
- ✅ Multiple rate limiters implemented
- ✅ Cache hit/miss logging
- ✅ Graceful fallback if Redis unavailable
- ✅ Proper cache key structure
- ✅ Rate limit headers in response

**Common Issues:**
- ❌ Caching not working
- ❌ Cache not invalidated
- ❌ Only one rate limiter
- ❌ No fallback mechanism
- ❌ Poor cache key structure
- ❌ No cache logging

**Scoring Breakdown:**
- Caching Implementation: 40 points
- Rate Limiting: 25 points
- Code Quality: 20 points
- Error Handling: 15 points

**Bonus Points (+30):**
- Multi-level caching
- Cache warming
- Advanced rate limiting strategies
- Cache analytics

---

## Mid-Level Evaluation

### Task 1: Microservices Architecture - User Service (400 points)

**Key Things to Check:**
- ✅ Repository pattern implemented
- ✅ Service layer for business logic
- ✅ Event publishing works
- ✅ Health check endpoint
- ✅ Structured logging
- ✅ Error handling with circuit breaker
- ✅ Dependency injection
- ✅ Environment-based configuration

**Common Issues:**
- ❌ No repository pattern
- ❌ Business logic in controllers
- ❌ Events not published
- ❌ No health checks
- ❌ Poor logging
- ❌ No circuit breaker
- ❌ Hardcoded dependencies

**Scoring Breakdown:**
- Architecture: 35 points
- Event System: 25 points
- Code Quality: 20 points
- Observability: 20 points

**Bonus Points (+40):**
- Docker containerization
- Service discovery
- API Gateway implementation
- Distributed tracing
- Metrics endpoint

---

### Task 2: High-Performance API with Database Optimization (500 points)

**Key Things to Check:**
- ✅ Database indexes created
- ✅ Query optimization implemented
- ✅ Connection pooling configured
- ✅ Pagination implemented (cursor-based preferred)
- ✅ Caching strategy effective
- ✅ Performance targets met
- ✅ Batch operations supported
- ✅ Query logging/analysis

**Common Issues:**
- ❌ No database indexes
- ❌ N+1 query problems
- ❌ No connection pooling
- ❌ Poor pagination
- ❌ Ineffective caching
- ❌ Performance not optimized
- ❌ No query optimization

**Scoring Breakdown:**
- Performance: 40 points
- Database Optimization: 25 points
- Caching: 20 points
- Code Quality: 15 points

**Bonus Points (+50):**
- Cursor-based pagination
- Database query analysis
- Performance monitoring
- Load testing results
- Query optimization documentation

---

### Task 3: Real-time Data Processing Service (450 points)

**Key Things to Check:**
- ✅ WebSocket implementation correct
- ✅ Background job processing works
- ✅ Real-time updates broadcasted
- ✅ Job queue implemented
- ✅ Job retry mechanism
- ✅ High throughput handling
- ✅ Room-based subscriptions
- ✅ Connection handling

**Common Issues:**
- ❌ WebSocket not working
- ❌ No background jobs
- ❌ Updates not broadcasted
- ❌ No job retry
- ❌ Can't handle high throughput
- ❌ No room subscriptions
- ❌ Poor connection handling

**Scoring Breakdown:**
- Real-time Processing: 35 points
- Background Jobs: 25 points
- Performance: 20 points
- Architecture: 20 points

**Bonus Points (+45):**
- Job priority handling
- Job status tracking
- WebSocket authentication
- Horizontal scaling considerations
- Load balancing

---

## General Evaluation Tips

### Code Quality Checklist

**All Levels:**
- [ ] Code is readable and well-organized
- [ ] Variable names are descriptive
- [ ] Functions are focused and single-purpose
- [ ] Comments are used appropriately
- [ ] No obvious bugs or errors
- [ ] Edge cases are handled
- [ ] Error handling is comprehensive

**Junior/Mid-Level:**
- [ ] Proper project structure
- [ ] Separation of concerns
- [ ] Environment variables used
- [ ] No hardcoded values
- [ ] Proper error handling middleware
- [ ] Logging implemented
- [ ] Database connection handling

### Security Checklist

**All Levels:**
- [ ] Input validation
- [ ] SQL injection prevention (if using SQL)
- [ ] Path traversal prevention
- [ ] No sensitive data in logs
- [ ] Proper error messages (no stack traces in production)

**Junior/Mid-Level:**
- [ ] Password hashing
- [ ] JWT implementation secure
- [ ] Rate limiting
- [ ] CORS configured properly
- [ ] Environment variables for secrets
- [ ] Authentication/Authorization
- [ ] HTTPS considerations

### Red Flags

**Fresher Level:**
- ❌ Copy-pasted code without understanding
- ❌ No error handling
- ❌ Security vulnerabilities
- ❌ Poor code organization

**Junior Level:**
- ❌ No password hashing
- ❌ Hardcoded credentials
- ❌ No environment variables
- ❌ Poor database integration
- ❌ No authentication/authorization
- ❌ Security vulnerabilities

**Mid-Level:**
- ❌ No architecture patterns
- ❌ Poor performance
- ❌ No optimization
- ❌ No observability
- ❌ Monolithic code structure
- ❌ No separation of concerns

### Green Flags

**Fresher Level:**
- ✅ Clean, readable code
- ✅ Good understanding of basics
- ✅ Proper error handling
- ✅ Security awareness

**Junior Level:**
- ✅ Proper database integration
- ✅ Security best practices
- ✅ Environment variables
- ✅ Clean architecture
- ✅ Error handling middleware

**Mid-Level:**
- ✅ Microservices patterns
- ✅ Performance optimizations
- ✅ Clean architecture
- ✅ Comprehensive error handling
- ✅ Observability (logging, metrics)
- ✅ Scalability considerations

---

## Scoring Guidelines

### Point Deductions

**Functionality Issues:**
- Missing required feature: -20% of task points
- Feature partially working: -10% of task points
- Feature has bugs: -5% of task points

**Code Quality Issues:**
- Poor code organization: -10% of task points
- No error handling: -15% of task points
- Poor variable naming: -5% of task points
- Hardcoded values: -10% of task points

**Security Issues:**
- Security vulnerability: -20% of task points
- No input validation: -15% of task points
- No password hashing (where required): -25% of task points

**Performance Issues (Mid-Level):**
- No database optimization: -20% of task points
- Poor performance: -15% of task points
- No caching (where required): -20% of task points

### Bonus Points

**All Levels:**
- Excellent error handling: +5-10 points
- Good documentation: +5 points
- Unit tests: +10 points
- Security best practices: +5-10 points

**Junior/Mid-Level:**
- Advanced patterns: +10-15 points
- Performance optimizations: +10-15 points
- Clean architecture: +10 points
- Docker containerization: +10 points
- CI/CD setup: +10 points
- API documentation (Swagger): +10 points

---

## Interview Questions to Ask

### After Fresher Tasks
1. "How did you approach this problem?"
2. "What would you do differently if you had more time?"
3. "How would you secure this API?"
4. "What challenges did you face?"
5. "How would you test this API?"

### After Junior Tasks
1. "Why did you choose this database?"
2. "How would you test this API?"
3. "What security considerations did you make?"
4. "How would you handle errors in production?"
5. "Explain your authentication flow."
6. "How would you scale this application?"

### After Mid-Level Tasks
1. "Walk me through your architecture decisions."
2. "How did you optimize for performance?"
3. "How would you scale this solution?"
4. "What trade-offs did you make?"
5. "How would you monitor this in production?"
6. "Explain your caching strategy."
7. "How would you handle failures in a distributed system?"

---

## Time Management Assessment

### Expected Completion Times

**Fresher:**
- Task 1: 75-90 minutes
- Task 2: 60-75 minutes
- Task 3: 75-90 minutes

**Junior:**
- Task 1: 100-120 minutes
- Task 2: 120-150 minutes
- Task 3: 150-180 minutes

**Mid-Level:**
- Task 1: 200-240 minutes
- Task 2: 250-300 minutes
- Task 3: 250-300 minutes

### Time Management Red Flags
- ❌ Taking 2x longer than expected
- ❌ Not completing basic requirements
- ❌ Spending too much time on one feature

### Time Management Green Flags
- ✅ Completing within expected time
- ✅ Prioritizing core functionality
- ✅ Good time allocation across features

---

## Final Assessment

### Overall Score Calculation

```
Total Score = (Sum of Task Scores) + Bonus Points - Deductions
```

### Level Recommendation

**Fresher → Junior:**
- Score > 80% on all fresher tasks
- Shows understanding of database integration
- Good security awareness
- Clean code structure

**Junior → Mid-Level:**
- Score > 85% on all junior tasks
- Shows performance awareness
- Clean architecture decisions
- Microservices understanding
- Advanced patterns implemented

### Feedback Template

**Strengths:**
- [List 2-3 strengths]

**Areas for Improvement:**
- [List 2-3 areas]

**Recommendation:**
- [Hire / Hire with mentorship / Not a fit]

**Next Steps:**
- [Technical interview / System design / Final round]

---

## Common Patterns to Look For

### Good Patterns ✅
- Repository pattern
- Service layer
- Dependency injection
- Middleware usage
- Error handling middleware
- Environment variables
- Structured logging
- Connection pooling
- Database indexes
- Caching strategies

### Bad Patterns ❌
- Everything in one file
- Business logic in controllers
- No separation of concerns
- Hardcoded values
- No error handling
- No input validation
- No security measures
- Poor database queries
- No connection pooling

---

## Security Evaluation Checklist

### Critical Security Checks

- [ ] **Input Validation:** All inputs validated
- [ ] **SQL Injection:** Parameterized queries used
- [ ] **Path Traversal:** Filenames validated
- [ ] **Password Security:** Passwords hashed (bcrypt)
- [ ] **JWT Security:** Tokens properly validated
- [ ] **Rate Limiting:** Implemented on sensitive endpoints
- [ ] **CORS:** Properly configured
- [ ] **Error Messages:** No sensitive data exposed
- [ ] **Environment Variables:** Secrets not hardcoded
- [ ] **Authentication:** Properly implemented
- [ ] **Authorization:** Role-based access control

### Security Red Flags

- ❌ SQL injection vulnerabilities
- ❌ No password hashing
- ❌ JWT not validated
- ❌ No rate limiting
- ❌ Sensitive data in logs
- ❌ Hardcoded credentials
- ❌ No input validation
- ❌ Path traversal vulnerabilities

---

**Remember:** The goal is to assess problem-solving ability, code quality, security awareness, and technical skills appropriate for the level. Be fair, constructive, and provide actionable feedback.

