# Front-End Developer Coding Tasks - Overview

This repository contains comprehensive HackerRank-style coding tasks for front-end developers at three different levels: **Fresher**, **Junior**, and **Mid-Level**.

---

## 📚 Documentation Structure

### 1. [FRONTEND_CODING_TASKS.md](./FRONTEND_CODING_TASKS.md)
**Main task document** containing:
- Complete problem descriptions
- Requirements and specifications
- Test cases with expected outputs
- Evaluation criteria
- Scoring rubrics
- Time limits and point values

### 2. [CODING_TASK_TEMPLATES.md](./CODING_TASK_TEMPLATES.md)
**Starter templates** for each task including:
- HTML/CSS/JavaScript templates (Fresher level)
- React + TypeScript component templates (Junior/Mid level)
- Type definitions and interfaces
- Hook templates
- Setup instructions

### 3. [EVALUATOR_GUIDE.md](./EVALUATOR_GUIDE.md)
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
| Interactive Todo List | 100 | 60 min | ⭐ Easy |
| Form Validation | 80 | 45 min | ⭐ Easy |
| Dynamic Card Grid | 120 | 75 min | ⭐⭐ Medium |

**Focus Areas:**
- HTML/CSS/JavaScript fundamentals
- DOM manipulation
- Event handling
- Responsive design
- Basic validation

---

### Junior Level (3 tasks, 600 points total)

| Task | Points | Time | Difficulty |
|------|--------|------|------------|
| React Todo App with Local Storage | 150 | 90 min | ⭐⭐ Medium |
| API Integration - User Dashboard | 200 | 120 min | ⭐⭐ Medium |
| Form Builder Component | 250 | 150 min | ⭐⭐⭐ Hard |

**Focus Areas:**
- React fundamentals
- TypeScript basics
- Component composition
- State management
- API integration
- Custom hooks

---

### Mid-Level (3 tasks, 1050 points total)

| Task | Points | Time | Difficulty |
|------|--------|------|------------|
| Performance-Optimized Data Table | 300 | 180 min | ⭐⭐⭐ Hard |
| Real-time Chat Component | 400 | 240 min | ⭐⭐⭐⭐ Very Hard |
| Multi-step Form Wizard | 350 | 210 min | ⭐⭐⭐⭐ Very Hard |

**Focus Areas:**
- Advanced React patterns
- Performance optimization
- Complex state management
- Architecture decisions
- TypeScript advanced features
- WebSocket integration

---

## 🚀 Quick Start

### For Candidates

1. **Read the task document:**
   - Open [FRONTEND_CODING_TASKS.md](./FRONTEND_CODING_TASKS.md)
   - Find your level (Fresher/Junior/Mid-Level)
   - Read the problem description carefully

2. **Get the starter template:**
   - Open [CODING_TASK_TEMPLATES.md](./CODING_TASK_TEMPLATES.md)
   - Copy the relevant starter template
   - Set up your project

3. **Implement the solution:**
   - Follow the requirements
   - Test your solution
   - Ensure it meets all test cases

4. **Submit your work:**
   - Include source code
   - Add a README with setup instructions
   - Provide screenshots/demo if possible

### For Evaluators

1. **Review the task document:**
   - Open [FRONTEND_CODING_TASKS.md](./FRONTEND_CODING_TASKS.md)
   - Understand requirements and test cases

2. **Use the evaluator guide:**
   - Open [EVALUATOR_GUIDE.md](./EVALUATOR_GUIDE.md)
   - Follow the checklists
   - Use the scoring guidelines

3. **Assess the submission:**
   - Check functionality
   - Evaluate code quality
   - Review architecture (for Junior/Mid)
   - Provide constructive feedback

---

## 📋 Task Categories

### Fresher Level Tasks

**Task 1: Interactive Todo List**
- Basic DOM manipulation
- Event handling
- CSS styling
- Responsive design

**Task 2: Form Validation**
- Input validation
- Real-time feedback
- Error handling
- User experience

**Task 3: Dynamic Card Grid**
- Data filtering
- Search functionality
- Responsive grid layout
- State management basics

---

### Junior Level Tasks

**Task 1: React Todo App**
- React hooks (useState, useEffect)
- TypeScript interfaces
- Component structure
- LocalStorage persistence

**Task 2: API Integration**
- React Query or fetch API
- Loading states
- Error handling
- TypeScript types for API

**Task 3: Form Builder**
- Dynamic component rendering
- Configuration-driven development
- Validation logic
- Reusable components

---

### Mid-Level Tasks

**Task 1: Performance-Optimized Data Table**
- Virtualization
- Memoization
- Complex state management
- TypeScript generics

**Task 2: Real-time Chat**
- WebSocket integration
- Optimistic updates
- Message caching
- Reconnection logic

**Task 3: Multi-step Form Wizard**
- Conditional rendering
- Form state persistence
- Cross-step validation
- Complex form logic

---

## 🎓 Learning Path

### Fresher → Junior
**Prerequisites:**
- HTML/CSS/JavaScript fundamentals
- Basic React understanding
- TypeScript basics

**Skills to Develop:**
- React hooks mastery
- Component composition
- State management
- API integration
- TypeScript proficiency

---

### Junior → Mid-Level
**Prerequisites:**
- React expertise
- TypeScript proficiency
- State management experience
- API integration experience

**Skills to Develop:**
- Performance optimization
- Architecture design
- Advanced TypeScript
- Complex state management
- WebSocket/real-time features

---

## 📊 Evaluation Criteria

### General Criteria (All Levels)
- **Functionality:** Does it work correctly?
- **Code Quality:** Is it clean and maintainable?
- **Best Practices:** Follows framework conventions?
- **Error Handling:** Handles edge cases?

### Level-Specific Criteria

**Fresher:**
- Basic functionality
- Code readability
- Responsive design
- Edge case handling

**Junior:**
- React best practices
- TypeScript usage
- Component structure
- API integration

**Mid-Level:**
- Performance optimization
- Architecture decisions
- Advanced TypeScript
- Complex state management

---

## 🛠️ Tech Stack

### Fresher Level
- HTML5
- CSS3
- Vanilla JavaScript (ES6+)

### Junior Level
- React 19+
- TypeScript 5+
- Tailwind CSS
- React Query (for API tasks)

### Mid-Level
- React 19+
- TypeScript 5+
- Tailwind CSS
- React Query
- WebSocket (for chat task)
- React Hook Form (for wizard task)

---

## 📝 Submission Guidelines

### What to Submit

1. **Source Code:**
   - All project files
   - Proper file structure
   - No build artifacts (node_modules, dist, etc.)

2. **README.md:**
   - Setup instructions
   - How to run the project
   - Brief explanation of approach
   - Any assumptions made

3. **Screenshots/Demo:**
   - Visual proof of working solution
   - Key features demonstrated
   - Responsive design shown

### Project Structure

```
project-name/
├── src/
│   ├── components/     # React components (Junior/Mid)
│   ├── hooks/          # Custom hooks (Junior/Mid)
│   ├── types/          # TypeScript types (Junior/Mid)
│   ├── utils/          # Utility functions
│   └── App.tsx         # Main component
├── public/             # Static assets
├── package.json        # Dependencies
├── README.md           # Project documentation
└── ...                 # Other config files
```

---

## ⏱️ Time Management

### Recommended Approach

1. **Read & Understand (10%):**
   - Read requirements carefully
   - Understand test cases
   - Plan your approach

2. **Setup (5%):**
   - Set up project structure
   - Install dependencies
   - Get starter template working

3. **Implementation (70%):**
   - Implement core functionality first
   - Add features incrementally
   - Test as you go

4. **Polish (15%):**
   - Fix bugs
   - Improve styling
   - Handle edge cases
   - Add error handling

### Time Allocation Tips

- **Fresher:** Focus on getting it working, then improve
- **Junior:** Balance functionality with code quality
- **Mid-Level:** Plan architecture first, then implement

---

## 🎯 Success Criteria

### Fresher Level
- ✅ All features implemented
- ✅ Works correctly
- ✅ Responsive design
- ✅ Clean, readable code

### Junior Level
- ✅ All features implemented
- ✅ TypeScript types defined
- ✅ React best practices followed
- ✅ Clean component structure
- ✅ Error handling

### Mid-Level
- ✅ All features implemented
- ✅ Performance optimized
- ✅ Clean architecture
- ✅ Advanced TypeScript usage
- ✅ Comprehensive error handling
- ✅ Meets performance targets

---

## 📚 Additional Resources

### Documentation
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [MDN Web Docs](https://developer.mozilla.org)

### Practice Platforms
- [HackerRank](https://www.hackerrank.com)
- [LeetCode](https://leetcode.com)
- [Frontend Mentor](https://www.frontendmentor.io)
- [Codewars](https://www.codewars.com)

### Learning Resources
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app)
- [Web.dev](https://web.dev)
- [JavaScript.info](https://javascript.info)

---

## 🤝 Support

### For Candidates
- Read requirements carefully
- Start with the starter template
- Test your solution thoroughly
- Ask questions if unclear

### For Evaluators
- Use the evaluator guide
- Be fair and constructive
- Provide actionable feedback
- Consider time constraints

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

