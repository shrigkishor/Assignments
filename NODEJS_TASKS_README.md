# Node.js Developer Coding Tasks - Overview

This repository contains comprehensive HackerRank-style coding tasks for Node.js developers at three different levels: **Fresher**, **Junior**, and **Mid-Level**.

---

## 📚 Documentation Structure

### 1. [NODEJS_CODING_TASKS.md](./NODEJS_CODING_TASKS.md)
**Main task document** containing:
- Complete problem descriptions
- Requirements and specifications
- Test cases with expected outputs
- Evaluation criteria
- Scoring rubrics
- Time limits and point values

### 2. [NODEJS_TASK_TEMPLATES.md](./NODEJS_TASK_TEMPLATES.md)
**Starter templates** for each task including:
- Express.js server setup
- Database models and schemas
- Route handlers structure
- Middleware examples
- Setup instructions

### 3. [NODEJS_EVALUATOR_GUIDE.md](./NODEJS_EVALUATOR_GUIDE.md)
**Evaluation guide** for assessors with:
- Quick reference checklists
- Common issues to watch for
- Scoring guidelines
- Bonus point criteria
- Interview questions
- Feedback templates

---

## 🎯 Task Overview

### Fresher Level (3 tasks, 300 points total)

| Task | Points | Time | Difficulty |
|------|--------|------|------------|
| RESTful API - Todo Management | 100 | 90 min | ⭐ Easy |
| File Operations API | 80 | 75 min | ⭐ Easy |
| Data Processing Service | 120 | 90 min | ⭐⭐ Medium |

**Focus Areas:**
- Node.js and Express.js fundamentals
- RESTful API design
- Basic error handling
- Input validation
- File system operations

---

### Junior Level (3 tasks, 750 points total)

| Task | Points | Time | Difficulty |
|------|--------|------|------------|
| RESTful API with Database Integration | 200 | 120 min | ⭐⭐ Medium |
| Authentication & Authorization System | 250 | 150 min | ⭐⭐ Medium |
| API with Caching and Rate Limiting | 300 | 180 min | ⭐⭐⭐ Hard |

**Focus Areas:**
- Database integration (MongoDB/PostgreSQL)
- Authentication and authorization (JWT)
- Caching strategies (Redis)
- Rate limiting
- Security best practices
- Middleware usage

---

### Mid-Level (3 tasks, 1350 points total)

| Task | Points | Time | Difficulty |
|------|--------|------|------------|
| Microservices Architecture - User Service | 400 | 240 min | ⭐⭐⭐ Hard |
| High-Performance API with Database Optimization | 500 | 300 min | ⭐⭐⭐⭐ Very Hard |
| Real-time Data Processing Service | 450 | 300 min | ⭐⭐⭐⭐ Very Hard |

**Focus Areas:**
- Microservices architecture
- Performance optimization
- Database query optimization
- Message queues
- Real-time systems (WebSocket)
- Background job processing
- Advanced patterns (Repository, Service layers)

---

## 🚀 Quick Start

### For Candidates

1. **Read the task document:**
   - Open [NODEJS_CODING_TASKS.md](./NODEJS_CODING_TASKS.md)
   - Find your level (Fresher/Junior/Mid-Level)
   - Read the problem description carefully

2. **Get the starter template:**
   - Open [NODEJS_TASK_TEMPLATES.md](./NODEJS_TASK_TEMPLATES.md)
   - Copy the relevant starter template
   - Set up your project

3. **Implement the solution:**
   - Follow the requirements
   - Test your solution
   - Ensure it meets all test cases

4. **Submit your work:**
   - Include source code
   - Add a README with setup instructions
   - Provide API documentation if applicable

### For Evaluators

1. **Review the task document:**
   - Open [NODEJS_CODING_TASKS.md](./NODEJS_CODING_TASKS.md)
   - Understand requirements and test cases

2. **Use the evaluator guide:**
   - Open [NODEJS_EVALUATOR_GUIDE.md](./NODEJS_EVALUATOR_GUIDE.md)
   - Follow the checklists
   - Use the scoring guidelines

3. **Assess the submission:**
   - Check functionality
   - Evaluate code quality
   - Review architecture (for Junior/Mid)
   - Check security practices
   - Provide constructive feedback

---

## 📋 Task Categories

### Fresher Level Tasks

**Task 1: RESTful API - Todo Management**
- Express.js setup
- CRUD operations
- Input validation
- Error handling
- HTTP status codes

**Task 2: File Operations API**
- File system operations
- Security (path traversal prevention)
- Filename validation
- Error handling

**Task 3: Data Processing Service**
- Data filtering
- Sorting algorithms
- Data transformation
- Input validation

---

### Junior Level Tasks

**Task 1: RESTful API with Database Integration**
- Database models (MongoDB/PostgreSQL)
- Relationships and references
- Password hashing
- Environment variables
- Error handling middleware

**Task 2: Authentication & Authorization System**
- JWT implementation
- Password hashing (bcrypt)
- Token refresh mechanism
- Role-based access control
- Rate limiting

**Task 3: API with Caching and Rate Limiting**
- Redis caching
- Cache invalidation
- Multiple rate limiters
- Cache strategies
- Graceful fallbacks

---

### Mid-Level Tasks

**Task 1: Microservices Architecture - User Service**
- Repository pattern
- Service layer
- Event-driven communication
- Health checks
- Structured logging
- Circuit breaker pattern

**Task 2: High-Performance API with Database Optimization**
- Database indexes
- Query optimization
- Connection pooling
- Cursor-based pagination
- Multi-level caching
- Performance monitoring

**Task 3: Real-time Data Processing Service**
- WebSocket implementation
- Background job processing
- Message queues
- Real-time aggregation
- High throughput handling
- Event streaming

---

## 🎓 Learning Path

### Fresher → Junior
**Prerequisites:**
- Node.js and Express.js fundamentals
- Basic database understanding
- HTTP protocol knowledge

**Skills to Develop:**
- Database integration
- Authentication/Authorization
- Security best practices
- Caching strategies
- Middleware usage
- Environment configuration

---

### Junior → Mid-Level
**Prerequisites:**
- Database expertise
- Authentication/Authorization experience
- Caching experience
- Security awareness

**Skills to Develop:**
- Microservices architecture
- Performance optimization
- Database query optimization
- Message queues
- Real-time systems
- Advanced patterns

---

## 📊 Evaluation Criteria

### General Criteria (All Levels)
- **Functionality:** Does it work correctly?
- **Code Quality:** Is it clean and maintainable?
- **Best Practices:** Follows Node.js/Express conventions?
- **Error Handling:** Handles edge cases?
- **Security:** Security best practices followed?

### Level-Specific Criteria

**Fresher:**
- Basic functionality
- Code readability
- Error handling
- Input validation

**Junior:**
- Database integration
- Security practices
- Middleware usage
- Environment variables
- Caching strategies

**Mid-Level:**
- Architecture patterns
- Performance optimization
- Database optimization
- Scalability considerations
- Observability

---

## 🛠️ Tech Stack

### Fresher Level
- Node.js
- Express.js
- Built-in modules (fs, path, etc.)

### Junior Level
- Node.js
- Express.js
- MongoDB (Mongoose) OR PostgreSQL (pg/Prisma)
- Redis
- JWT (jsonwebtoken)
- bcrypt
- express-rate-limit

### Mid-Level
- Node.js
- Express.js
- MongoDB/PostgreSQL
- Redis
- RabbitMQ or Redis Pub/Sub
- Socket.io or ws
- Bull (job queue)
- Docker (optional)

---

## 📝 Submission Guidelines

### What to Submit

1. **Source Code:**
   - All project files
   - Proper file structure
   - No node_modules

2. **README.md:**
   - Setup instructions
   - How to run the project
   - Environment variables needed
   - API documentation
   - Brief explanation of approach

3. **package.json:**
   - All dependencies listed
   - Scripts defined

4. **.env.example:**
   - Example environment variables

### Project Structure

```
project-name/
├── src/
│   ├── controllers/     # Route handlers
│   ├── services/        # Business logic
│   ├── models/         # Database models
│   ├── middleware/     # Custom middleware
│   ├── routes/         # Route definitions
│   ├── utils/          # Utility functions
│   └── config/         # Configuration files
├── tests/              # Test files
├── .env.example        # Environment variables example
├── package.json        # Dependencies
├── README.md           # Project documentation
└── ...
```

---

## ⏱️ Time Management

### Recommended Approach

1. **Read & Understand (10%):**
   - Read requirements carefully
   - Understand test cases
   - Plan your approach

2. **Setup (10%):**
   - Set up project structure
   - Install dependencies
   - Configure environment

3. **Implementation (70%):**
   - Implement core functionality first
   - Add features incrementally
   - Test as you go

4. **Polish (10%):**
   - Fix bugs
   - Improve error handling
   - Add security measures
   - Write documentation

### Time Allocation Tips

- **Fresher:** Focus on getting it working, then improve
- **Junior:** Balance functionality with code quality and security
- **Mid-Level:** Plan architecture first, then implement

---

## 🎯 Success Criteria

### Fresher Level
- ✅ All endpoints work correctly
- ✅ Proper HTTP status codes
- ✅ Input validation
- ✅ Error handling
- ✅ Clean, readable code

### Junior Level
- ✅ All features implemented
- ✅ Database integration working
- ✅ Security best practices
- ✅ Environment variables used
- ✅ Clean architecture
- ✅ Error handling middleware

### Mid-Level
- ✅ All features implemented
- ✅ Performance optimized
- ✅ Clean architecture
- ✅ Database optimized
- ✅ Comprehensive error handling
- ✅ Observability implemented
- ✅ Meets performance targets

---

## 🔒 Security Best Practices

### All Levels
- Input validation
- SQL injection prevention
- Path traversal prevention
- Proper error messages

### Junior/Mid-Level
- Password hashing (bcrypt)
- JWT security
- Rate limiting
- CORS configuration
- Environment variables for secrets
- Authentication/Authorization

---

## 📚 Additional Resources

### Documentation
- [Node.js Documentation](https://nodejs.org/docs)
- [Express.js Guide](https://expressjs.com/en/guide/routing.html)
- [MongoDB Manual](https://docs.mongodb.com)
- [PostgreSQL Documentation](https://www.postgresql.org/docs)

### Practice Platforms
- [HackerRank](https://www.hackerrank.com)
- [LeetCode](https://leetcode.com)
- [Codewars](https://www.codewars.com)

### Learning Resources
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)
- [Express.js Security](https://expressjs.com/en/advanced/best-practice-security.html)
- [JWT.io](https://jwt.io)

---

## 🤝 Support

### For Candidates
- Read requirements carefully
- Start with the starter template
- Test your solution thoroughly
- Ask questions if unclear
- Focus on security best practices

### For Evaluators
- Use the evaluator guide
- Be fair and constructive
- Provide actionable feedback
- Consider time constraints
- Check for security best practices

---

## 📄 License

These coding tasks are provided for assessment purposes. Feel free to use and modify as needed for your hiring process.

---

## 🔄 Updates

**Version 1.0** (Current)
- Initial release
- 9 tasks across 3 levels
- Complete documentation
- Starter templates
- Evaluator guide

---

**Good luck with your coding assessment! 🚀**

