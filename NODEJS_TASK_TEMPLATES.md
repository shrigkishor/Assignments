# Node.js Coding Task Starter Templates

This document provides starter templates for each Node.js coding task to help candidates get started quickly.

---

## Fresher Level Templates

### Task 1: RESTful API - Todo Management - Starter Template

```javascript
// package.json
{
  "name": "todo-api",
  "version": "1.0.0",
  "description": "Todo Management API",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}

// server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory storage
let todos = [];
let nextId = 1;

// TODO: Implement routes

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// routes/todos.js
const express = require('express');
const router = express.Router();

// TODO: Implement CRUD operations
// POST /api/todos - Create todo
// GET /api/todos - Get all todos
// GET /api/todos/:id - Get todo by ID
// PUT /api/todos/:id - Update todo
// DELETE /api/todos/:id - Delete todo

module.exports = router;
```

---

### Task 2: File Operations API - Starter Template

```javascript
// package.json
{
  "name": "file-operations-api",
  "version": "1.0.0",
  "description": "File Operations API",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}

// server.js
const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const STORAGE_DIR = path.join(__dirname, 'storage');

// Middleware
app.use(cors());
app.use(express.json());

// Ensure storage directory exists
async function ensureStorageDir() {
  try {
    await fs.access(STORAGE_DIR);
  } catch {
    await fs.mkdir(STORAGE_DIR, { recursive: true });
  }
}

// TODO: Implement file operations
// POST /api/files - Create/write file
// GET /api/files/:filename - Read file
// GET /api/files - List all files
// DELETE /api/files/:filename - Delete file

// Helper function to validate filename
function isValidFilename(filename) {
  // TODO: Implement filename validation
  // Prevent path traversal, allow only alphanumeric, hyphens, underscores
  return true;
}

// Start server
ensureStorageDir().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
```

---

### Task 3: Data Processing Service - Starter Template

```javascript
// package.json
{
  "name": "data-processing-service",
  "version": "1.0.0",
  "description": "Data Processing Service",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}

// server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// TODO: Implement data processing
// POST /api/process - Process and transform data

// Helper functions
function validateUser(user) {
  // TODO: Validate user has required fields: id, name, email, age, active
  return true;
}

function filterUsers(users, filterRule) {
  // TODO: Implement filtering logic
  return users;
}

function sortUsers(users, sortRule) {
  // TODO: Implement sorting logic
  return users;
}

function transformUsers(users, transformFields) {
  // TODO: Implement transformation logic (select only specified fields)
  return users;
}

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

---

## Junior Level Templates

### Task 1: RESTful API with Database Integration - Starter Template

```javascript
// package.json
{
  "name": "blog-api",
  "version": "1.0.0",
  "description": "Blog API with Database",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "mongoose": "^7.5.0",
    "bcrypt": "^5.1.1",
    "dotenv": "^16.3.1",
    "cors": "^2.8.5"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}

// .env.example
PORT=3000
MONGODB_URI=mongodb://localhost:27017/blogdb
JWT_SECRET=your-secret-key

// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/blogdb')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/posts', require('./routes/posts'));
app.use('/api/posts/:postId/comments', require('./routes/comments'));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
}, {
  timestamps: true,
});

// TODO: Add password hashing middleware
// TODO: Add method to compare passwords

module.exports = mongoose.model('User', userSchema);

// models/Post.js
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    required: true,
  },
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Post', postSchema);

// models/Comment.js
const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
    trim: true,
  },
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
    required: true,
  },
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Comment', commentSchema);

// routes/users.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

// TODO: Implement routes
// POST /api/users - Create user
// GET /api/users/:id - Get user by ID

module.exports = router;

// routes/posts.js
const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// TODO: Implement routes
// POST /api/posts - Create post
// GET /api/posts - Get all posts (with author info)
// GET /api/posts/:id - Get post with comments
// PUT /api/posts/:id - Update post
// DELETE /api/posts/:id - Delete post

module.exports = router;

// routes/comments.js
const express = require('express');
const router = express.Router({ mergeParams: true });
const Comment = require('../models/Comment');

// TODO: Implement routes
// POST /api/posts/:postId/comments - Add comment
// GET /api/posts/:postId/comments - Get comments for post

module.exports = router;
```

---

### Task 2: Authentication & Authorization System - Starter Template

```javascript
// package.json
{
  "name": "auth-system",
  "version": "1.0.0",
  "description": "Authentication & Authorization System",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "mongoose": "^7.5.0",
    "bcrypt": "^5.1.1",
    "jsonwebtoken": "^9.0.2",
    "dotenv": "^16.3.1",
    "cors": "^2.8.5",
    "express-rate-limit": "^6.10.0"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}

// .env.example
PORT=3000
MONGODB_URI=mongodb://localhost:27017/authdb
JWT_SECRET=your-secret-key
JWT_REFRESH_SECRET=your-refresh-secret-key
JWT_EXPIRES_IN=15m
JWT_REFRESH_EXPIRES_IN=7d

// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/authdb')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/admin', require('./routes/admin'));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  refreshToken: String,
  passwordResetToken: String,
  passwordResetExpires: Date,
}, {
  timestamps: true,
});

// TODO: Add password hashing middleware
// TODO: Add method to compare passwords
// TODO: Add method to generate password reset token

module.exports = mongoose.model('User', userSchema);

// middleware/auth.js
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// TODO: Implement authentication middleware
exports.authenticate = async (req, res, next) => {
  // TODO: Verify JWT token
  // TODO: Attach user to request
  next();
};

// TODO: Implement authorization middleware
exports.authorize = (...roles) => {
  return (req, res, next) => {
    // TODO: Check if user has required role
    next();
  };
};

// routes/auth.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const rateLimit = require('express-rate-limit');

// Rate limiting for auth endpoints
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 requests per window
});

// TODO: Implement routes
// POST /api/auth/register - Register user
// POST /api/auth/login - Login user
// POST /api/auth/refresh - Refresh token
// POST /api/auth/forgot-password - Request password reset
// POST /api/auth/reset-password - Reset password
// GET /api/auth/me - Get current user (protected)

// Helper function to generate tokens
function generateTokens(user) {
  const accessToken = jwt.sign(
    { userId: user._id, email: user.email, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || '15m' }
  );

  const refreshToken = jwt.sign(
    { userId: user._id },
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: process.env.JWT_REFRESH_EXPIRES_IN || '7d' }
  );

  return { accessToken, refreshToken };
}

module.exports = router;

// routes/admin.js
const express = require('express');
const router = express.Router();
const { authenticate, authorize } = require('../middleware/auth');

// TODO: Implement admin routes
// GET /api/admin/users - Get all users (Admin only)

// Apply authentication and authorization middleware
router.use(authenticate);
router.use(authorize('admin'));

module.exports = router;
```

---

### Task 3: API with Caching and Rate Limiting - Starter Template

```javascript
// package.json
{
  "name": "cached-api",
  "version": "1.0.0",
  "description": "API with Caching and Rate Limiting",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "mongoose": "^7.5.0",
    "redis": "^4.6.7",
    "express-rate-limit": "^6.10.0",
    "dotenv": "^16.3.1",
    "cors": "^2.8.5"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}

// .env.example
PORT=3000
MONGODB_URI=mongodb://localhost:27017/productdb
REDIS_URL=redis://localhost:6379

// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const redis = require('redis');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Redis client
const redisClient = redis.createClient({
  url: process.env.REDIS_URL || 'redis://localhost:6379',
});

redisClient.on('error', (err) => console.error('Redis Client Error', err));
redisClient.on('connect', () => console.log('Connected to Redis'));

// Connect to Redis
redisClient.connect().catch(console.error);

// Database connection
mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/productdb')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/products', require('./routes/products'));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// middleware/cache.js
const redisClient = require('../config/redis');

// TODO: Implement caching middleware
exports.cache = (duration = 300) => {
  return async (req, res, next) => {
    // TODO: Check cache
    // TODO: If cache hit, return cached data
    // TODO: If cache miss, proceed and cache response
    next();
  };
};

// middleware/rateLimiter.js
const rateLimit = require('express-rate-limit');

// TODO: Implement different rate limiters
// General API rate limiter
exports.generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // 100 requests per window
  message: 'Too many requests from this IP, please try again later.',
});

// Search endpoint rate limiter
exports.searchLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 20, // 20 requests per minute
  message: 'Too many search requests, please try again later.',
});

// routes/products.js
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const { cache } = require('../middleware/cache');
const { generalLimiter, searchLimiter } = require('../middleware/rateLimiter');

// TODO: Implement routes with caching and rate limiting
// GET /api/products - Get all products (cached, general rate limit)
// GET /api/products/:id - Get product by ID (cached)
// POST /api/products - Create product (invalidate cache)
// PUT /api/products/:id - Update product (invalidate cache)
// DELETE /api/products/:id - Delete product (invalidate cache)
// GET /api/products/search?q=keyword - Search products (cached, search rate limit)

// Helper function to invalidate cache
async function invalidateCache(pattern) {
  // TODO: Invalidate cache keys matching pattern
}

module.exports = router;

// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  category: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
    min: 0,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Product', productSchema);
```

---

## Mid-Level Templates

### Task 1: Microservices Architecture - User Service - Starter Template

```javascript
// package.json
{
  "name": "user-service",
  "version": "1.0.0",
  "description": "User Microservice",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "mongoose": "^7.5.0",
    "amqplib": "^0.10.3",
    "winston": "^3.10.0",
    "dotenv": "^16.3.1",
    "cors": "^2.8.5"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}

// .env.example
PORT=3001
MONGODB_URI=mongodb://localhost:27017/userservice
RABBITMQ_URL=amqp://localhost:5672
SERVICE_NAME=user-service

// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const logger = require('./utils/logger');
const eventPublisher = require('./services/eventPublisher');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(require('./middleware/requestLogger'));

// Database connection
mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/userservice')
  .then(() => logger.info('Connected to MongoDB'))
  .catch((err) => logger.error('MongoDB connection error:', err));

// Routes
app.use('/api/users', require('./routes/users'));
app.use('/health', require('./routes/health'));
app.use('/metrics', require('./routes/metrics'));

// Error handling middleware
app.use(require('./middleware/errorHandler'));

// Start server
app.listen(PORT, () => {
  logger.info(`User Service running on port ${PORT}`);
});

// services/eventPublisher.js
const amqp = require('amqplib');
const logger = require('../utils/logger');

class EventPublisher {
  constructor() {
    this.connection = null;
    this.channel = null;
  }

  async connect() {
    try {
      this.connection = await amqp.connect(process.env.RABBITMQ_URL || 'amqp://localhost:5672');
      this.channel = await this.connection.createChannel();
      await this.channel.assertExchange('user-events', 'topic', { durable: true });
      logger.info('Connected to RabbitMQ');
    } catch (error) {
      logger.error('RabbitMQ connection error:', error);
    }
  }

  async publish(event, data) {
    // TODO: Implement event publishing
    // Publish events: user.created, user.updated, user.deleted
  }
}

module.exports = new EventPublisher();

// repositories/userRepository.js
const User = require('../models/User');

class UserRepository {
  async create(userData) {
    // TODO: Implement create with repository pattern
  }

  async findById(id) {
    // TODO: Implement find by ID
  }

  async update(id, updateData) {
    // TODO: Implement update
  }

  async delete(id) {
    // TODO: Implement delete
  }
}

module.exports = new UserRepository();

// services/userService.js
const userRepository = require('../repositories/userRepository');
const eventPublisher = require('./eventPublisher');

class UserService {
  async createUser(userData) {
    // TODO: Implement business logic
    // Create user, publish event
  }

  async getUserById(id) {
    // TODO: Implement get user
  }

  async updateUser(id, updateData) {
    // TODO: Implement update user, publish event
  }

  async deleteUser(id) {
    // TODO: Implement delete user, publish event
  }
}

module.exports = new UserService();

// routes/users.js
const express = require('express');
const router = express.Router();
const userService = require('../services/userService');
const { authenticate } = require('../middleware/auth');

// TODO: Implement routes
// POST /api/users - Create user
// GET /api/users/:id - Get user
// PUT /api/users/:id - Update user
// DELETE /api/users/:id - Delete user
// POST /api/users/:id/verify - Verify user email

module.exports = router;

// routes/health.js
const express = require('express');
const router = express.Router();

// TODO: Implement health check endpoint
// GET /health - Service health status

module.exports = router;

// middleware/circuitBreaker.js
// TODO: Implement circuit breaker pattern

// utils/logger.js
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    })
  );
}

module.exports = logger;
```

---

### Task 2: High-Performance API with Database Optimization - Starter Template

```javascript
// package.json
{
  "name": "high-performance-api",
  "version": "1.0.0",
  "description": "High-Performance API",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "pg": "^8.11.3",
    "redis": "^4.6.7",
    "dotenv": "^16.3.1",
    "cors": "^2.8.5"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}

// .env.example
PORT=3000
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_DB=orderdb
POSTGRES_USER=postgres
POSTGRES_PASSWORD=password
REDIS_URL=redis://localhost:6379
DB_POOL_MIN=2
DB_POOL_MAX=10

// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const redis = require('redis');

const app = express();
const PORT = process.env.PORT || 3000;

// Database connection pool
const pool = new Pool({
  host: process.env.POSTGRES_HOST || 'localhost',
  port: process.env.POSTGRES_PORT || 5432,
  database: process.env.POSTGRES_DB || 'orderdb',
  user: process.env.POSTGRES_USER || 'postgres',
  password: process.env.POSTGRES_PASSWORD || 'password',
  min: parseInt(process.env.DB_POOL_MIN || '2'),
  max: parseInt(process.env.DB_POOL_MAX || '10'),
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

// Redis client
const redisClient = redis.createClient({
  url: process.env.REDIS_URL || 'redis://localhost:6379',
});

redisClient.on('error', (err) => console.error('Redis Client Error', err));
redisClient.connect().catch(console.error);

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/orders', require('./routes/orders'));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// database/schema.sql
-- TODO: Create orders table with proper indexes
CREATE TABLE IF NOT EXISTS orders (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL,
  product_id INTEGER NOT NULL,
  quantity INTEGER NOT NULL,
  total_amount DECIMAL(10,2) NOT NULL,
  status VARCHAR(50) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- TODO: Create indexes for optimization
-- CREATE INDEX idx_orders_user_id ON orders(user_id);
-- CREATE INDEX idx_orders_status ON orders(status);
-- CREATE INDEX idx_orders_created_at ON orders(created_at);
-- CREATE INDEX idx_orders_user_status ON orders(user_id, status);

// repositories/orderRepository.js
const pool = require('../config/database');

class OrderRepository {
  async findAll(options = {}) {
    // TODO: Implement pagination (cursor-based or offset-based)
    // TODO: Optimize query with proper indexes
  }

  async findById(id) {
    // TODO: Implement find by ID with caching
  }

  async create(orderData) {
    // TODO: Implement create with batch insert support
  }

  async search(keyword, options = {}) {
    // TODO: Implement full-text search with pagination
  }

  async getStats() {
    // TODO: Implement aggregation query
  }
}

module.exports = new OrderRepository();

// services/cacheService.js
const redisClient = require('../config/redis');

class CacheService {
  async get(key) {
    // TODO: Implement cache get
  }

  async set(key, value, expiration = 300) {
    // TODO: Implement cache set with expiration
  }

  async invalidate(pattern) {
    // TODO: Implement cache invalidation
  }

  async warmCache() {
    // TODO: Implement cache warming for stats
  }
}

module.exports = new CacheService();

// routes/orders.js
const express = require('express');
const router = express.Router();
const orderRepository = require('../repositories/orderRepository');
const cacheService = require('../services/cacheService');

// TODO: Implement routes with caching and optimization
// GET /api/orders - Get orders with pagination
// GET /api/orders/:id - Get order by ID (cached)
// GET /api/orders/stats - Get statistics (cached, warmed)
// POST /api/orders - Create order (batch support)
// GET /api/orders/search?q=keyword&page=1&limit=20 - Search with pagination

module.exports = router;
```

---

### Task 3: Real-time Data Processing Service - Starter Template

```javascript
// package.json
{
  "name": "realtime-processing",
  "version": "1.0.0",
  "description": "Real-time Data Processing Service",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "worker": "node worker.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "socket.io": "^4.6.1",
    "bull": "^4.11.3",
    "redis": "^4.6.7",
    "mongoose": "^7.5.0",
    "dotenv": "^16.3.1",
    "cors": "^2.8.5"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}

// .env.example
PORT=3000
MONGODB_URI=mongodb://localhost:27017/realtimedb
REDIS_URL=redis://localhost:6379
JWT_SECRET=your-secret-key

// server.js
require('dotenv').config();
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const mongoose = require('mongoose');
const redis = require('redis');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/realtimedb')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Redis connection
const redisClient = redis.createClient({
  url: process.env.REDIS_URL || 'redis://localhost:6379',
});

redisClient.on('error', (err) => console.error('Redis Client Error', err));
redisClient.connect().catch(console.error);

// WebSocket connection handling
io.on('connection', (socket) => {
  console.log('Client connected:', socket.id);

  // TODO: Implement WebSocket authentication
  // TODO: Handle room subscriptions
  // TODO: Handle disconnection

  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

// Routes
app.use('/api/data', require('./routes/data'));

// Start server
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Export io for use in other modules
module.exports = { io };

// services/jobQueue.js
const Queue = require('bull');
const redis = require('redis');

// TODO: Create job queues
const dataProcessingQueue = new Queue('data-processing', {
  redis: {
    host: 'localhost',
    port: 6379,
  },
});

// TODO: Add job processors
dataProcessingQueue.process(async (job) => {
  // TODO: Process data
  // TODO: Aggregate statistics
  // TODO: Broadcast updates via WebSocket
});

module.exports = { dataProcessingQueue };

// services/dataProcessor.js
const { dataProcessingQueue } = require('./jobQueue');
const { io } = require('../server');
const DataPoint = require('../models/DataPoint');

class DataProcessor {
  async ingest(data) {
    // TODO: Add data to job queue
    // TODO: Store data in database
  }

  async processData(data) {
    // TODO: Process and aggregate data
    // TODO: Calculate statistics
    // TODO: Broadcast to WebSocket clients
  }

  async getStats() {
    // TODO: Get real-time statistics
  }

  async getHistory(filters = {}) {
    // TODO: Get historical data
  }
}

module.exports = new DataProcessor();

// models/DataPoint.js
const mongoose = require('mongoose');

const dataPointSchema = new mongoose.Schema({
  sensorId: {
    type: String,
    required: true,
    index: true,
  },
  value: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
    index: true,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('DataPoint', dataPointSchema);

// routes/data.js
const express = require('express');
const router = express.Router();
const dataProcessor = require('../services/dataProcessor');

// TODO: Implement routes
// POST /api/data/ingest - Ingest data (batch or stream)
// GET /api/data/stats - Get real-time statistics
// GET /api/data/history - Get historical data

module.exports = router;
```

---

## Setup Instructions

### For Fresher Level Tasks

1. Create a new directory:
```bash
mkdir task-name
cd task-name
```

2. Initialize npm:
```bash
npm init -y
```

3. Install dependencies:
```bash
npm install express cors
npm install --save-dev nodemon
```

4. Copy the starter template code
5. Run the server:
```bash
npm run dev
```

### For Junior/Mid-Level Tasks

1. Create a new directory:
```bash
mkdir task-name
cd task-name
```

2. Initialize npm:
```bash
npm init -y
```

3. Install dependencies:
```bash
# For MongoDB
npm install express mongoose bcrypt dotenv cors

# For PostgreSQL
npm install express pg dotenv cors

# For Redis
npm install redis

# For Authentication
npm install jsonwebtoken bcrypt

# For Message Queue
npm install amqplib

# For Job Queue
npm install bull

# For WebSocket
npm install socket.io

# Dev dependencies
npm install --save-dev nodemon
```

4. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your configuration
```

5. Set up database:
```bash
# For MongoDB: Ensure MongoDB is running
# For PostgreSQL: Create database and run schema.sql
```

6. Copy the starter template code
7. Run the server:
```bash
npm run dev
```

---

**Good luck with your implementation! 🚀**

