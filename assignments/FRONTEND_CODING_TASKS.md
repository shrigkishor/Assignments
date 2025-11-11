# Front-End Developer Coding Tasks

## Table of Contents

- [Fresher Level Tasks](#fresher-level-tasks)
- [Junior Level Tasks](#junior-level-tasks)
- [Mid-Level Tasks](#mid-level-tasks)
- [Evaluation Criteria](#evaluation-criteria)

---

## Fresher Level Tasks

### Task 1: Interactive Todo List

**Difficulty:** ⭐ Easy  
**Time Limit:** 60 minutes  
**Points:** 100

#### Problem Description

Create a simple Todo List application using vanilla JavaScript, HTML, and CSS. The application should allow users to add, remove, and mark todos as complete.

#### Requirements

1. **HTML Structure:**

   - An input field to add new todos
   - A button to submit/add todos
   - A container to display the list of todos
   - Each todo item should have:
     - A checkbox to mark as complete
     - The todo text
     - A delete button

2. **Functionality:**

   - Add a new todo when the user clicks the submit button or presses Enter
   - Mark a todo as complete (strikethrough text when checked)
   - Delete a todo item
   - Prevent adding empty todos
   - Clear the input field after adding a todo

3. **Styling:**
   - Use CSS to style the application
   - Completed todos should have strikethrough text and a different color
   - Add hover effects on buttons
   - Make it responsive (mobile-friendly)

#### Test Cases

**Test Case 1:**

- Input: Add "Buy groceries"
- Expected: Todo appears in the list

**Test Case 2:**

- Input: Add empty string
- Expected: No todo is added

**Test Case 3:**

- Input: Check the checkbox of a todo
- Expected: Todo text becomes strikethrough

**Test Case 4:**

- Input: Click delete button
- Expected: Todo is removed from the list

**Test Case 5:**

- Input: Add 5 todos, complete 2, delete 1
- Expected: 4 todos remain (2 completed, 2 active)

#### Sample Output

```
[✓] Buy groceries
[ ] Write code
[✓] Read documentation
```

#### Evaluation Criteria

- **Functionality (40%):** All features work correctly
- **Code Quality (30%):** Clean, readable code with proper variable names
- **Styling (20%):** Professional appearance and responsive design
- **Edge Cases (10%):** Handles empty inputs and edge cases

---

### Task 2: Form Validation

**Difficulty:** ⭐ Easy  
**Time Limit:** 45 minutes  
**Points:** 80

#### Problem Description

Create a registration form with real-time validation. Display error messages for invalid inputs.

#### Requirements

1. **Form Fields:**

   - Name (required, min 2 characters)
   - Email (required, valid email format)
   - Password (required, min 8 characters, at least one number)
   - Confirm Password (must match password)
   - Phone Number (optional, 10 digits if provided)

2. **Validation Rules:**

   - Show error messages in real-time as user types
   - Disable submit button if form is invalid
   - Show success message on valid submission

3. **Styling:**
   - Error messages in red
   - Success state in green
   - Highlight invalid input fields with red border

#### Test Cases

**Test Case 1:**

- Input: Name = "A"
- Expected: Error: "Name must be at least 2 characters"

**Test Case 2:**

- Input: Email = "invalid-email"
- Expected: Error: "Please enter a valid email address"

**Test Case 3:**

- Input: Password = "short"
- Expected: Error: "Password must be at least 8 characters and contain a number"

**Test Case 4:**

- Input: Password = "password123", Confirm = "password456"
- Expected: Error: "Passwords do not match"

**Test Case 5:**

- Input: All valid fields
- Expected: Submit button enabled, form submits successfully

#### Evaluation Criteria

- **Validation Logic (50%):** All validation rules implemented correctly
- **User Experience (30%):** Real-time feedback and clear error messages
- **Code Quality (20%):** Well-structured, maintainable code

---

### Task 3: Dynamic Card Grid

**Difficulty:** ⭐⭐ Medium  
**Time Limit:** 75 minutes  
**Points:** 120

#### Problem Description

Create a responsive card grid that displays items with filtering and search functionality.

#### Requirements

1. **Data Structure:**

   - Use a hardcoded array of at least 10 items
   - Each item should have: id, title, category, description, image URL

2. **Features:**

   - Display items in a responsive grid (3 columns on desktop, 2 on tablet, 1 on mobile)
   - Search bar to filter by title
   - Category filter buttons (All, Category1, Category2, etc.)
   - "No results found" message when no items match

3. **Styling:**
   - Card design with hover effects
   - Smooth transitions
   - Responsive layout

#### Test Cases

**Test Case 1:**

- Input: Search "React"
- Expected: Only items with "React" in title are shown

**Test Case 2:**

- Input: Click "Technology" category filter
- Expected: Only items in Technology category are shown

**Test Case 3:**

- Input: Search "XYZ" (non-existent)
- Expected: "No results found" message displayed

**Test Case 4:**

- Input: Combine search and category filter
- Expected: Items matching both criteria are shown

#### Evaluation Criteria

- **Functionality (40%):** Search and filter work correctly
- **Responsive Design (30%):** Works on all screen sizes
- **Code Quality (20%):** Efficient filtering logic
- **UI/UX (10%):** Professional card design

---

## Junior Level Tasks

### Task 1: React Todo App with Local Storage

**Difficulty:** ⭐⭐ Medium  
**Time Limit:** 90 minutes  
**Points:** 150

#### Problem Description

Build a React Todo application with TypeScript that persists data to localStorage and includes filtering capabilities.

#### Requirements

1. **Tech Stack:**

   - React with TypeScript
   - Functional components with hooks
   - Tailwind CSS for styling

2. **Features:**

   - Add, edit, delete todos
   - Mark todos as complete/incomplete
   - Filter todos: All, Active, Completed
   - Persist todos to localStorage
   - Show count of active todos
   - Clear all completed todos button

3. **Component Structure:**

   - Separate components for TodoItem, TodoList, TodoForm, TodoFilter
   - Use TypeScript interfaces for type safety
   - Custom hooks for localStorage management

4. **State Management:**
   - Use useState for local state
   - Use useEffect for localStorage sync

#### Test Cases

**Test Case 1:**

- Input: Add 3 todos, refresh page
- Expected: Todos persist and are displayed

**Test Case 2:**

- Input: Filter by "Active"
- Expected: Only incomplete todos shown

**Test Case 3:**

- Input: Complete 2 todos, click "Clear Completed"
- Expected: Only active todos remain

**Test Case 4:**

- Input: Edit a todo's text
- Expected: Todo updates correctly

#### Sample Code Structure

```typescript
interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
}
```

#### Evaluation Criteria

- **React Best Practices (30%):** Proper use of hooks, component structure
- **TypeScript (25%):** Type safety, interfaces, proper typing
- **Functionality (25%):** All features work correctly
- **Code Organization (20%):** Clean component structure, separation of concerns

---

### Task 2: API Integration - User Dashboard

**Difficulty:** ⭐⭐ Medium  
**Time Limit:** 120 minutes  
**Points:** 200

#### Problem Description

Create a user dashboard that fetches data from a REST API and displays it with loading states and error handling.

#### Requirements

1. **API Endpoint:**

   - Use JSONPlaceholder API: `https://jsonplaceholder.typicode.com/users`
   - Fetch user data and display in cards

2. **Features:**

   - Display user cards with: name, email, phone, website
   - Loading spinner while fetching
   - Error handling with retry button
   - Search functionality to filter users
   - Click on user card to show detailed modal

3. **Tech Stack:**

   - React with TypeScript
   - React Query (or fetch with proper error handling)
   - Tailwind CSS

4. **Requirements:**
   - Use React Query for data fetching (preferred) or useEffect with proper cleanup
   - Implement proper TypeScript types for API responses
   - Handle loading, error, and success states
   - Debounce search input (optional but preferred)

#### Test Cases

**Test Case 1:**

- Input: Component mounts
- Expected: Loading spinner shown, then users displayed

**Test Case 2:**

- Input: Search "Leanne"
- Expected: Only users matching "Leanne" are shown

**Test Case 3:**

- Input: Click on a user card
- Expected: Modal opens with user details

**Test Case 4:**

- Input: Simulate API error
- Expected: Error message with retry button displayed

#### Evaluation Criteria

- **API Integration (35%):** Proper data fetching, error handling
- **React Query Usage (25%):** Correct implementation of React Query (if used)
- **TypeScript (20%):** Proper typing of API responses
- **UX (20%):** Loading states, error handling, smooth interactions

---

### Task 3: Form Builder Component

**Difficulty:** ⭐⭐⭐ Hard  
**Time Limit:** 150 minutes  
**Points:** 250

#### Problem Description

Build a reusable form builder component that can dynamically render different input types based on configuration.

#### Requirements

1. **Form Configuration:**

   - Accept a configuration array that defines form fields
   - Support field types: text, email, number, select, checkbox, textarea
   - Each field should have: type, name, label, placeholder, validation rules

2. **Features:**

   - Dynamic form rendering based on config
   - Real-time validation
   - Form submission with all values
   - Reset form functionality
   - Show validation errors

3. **Component Structure:**

   - FormBuilder component (main)
   - FormField component (individual field)
   - Custom validation hook
   - TypeScript interfaces for configuration

4. **Validation:**
   - Required fields
   - Email format
   - Min/max length
   - Custom validation functions

#### Sample Configuration

```typescript
interface FormFieldConfig {
  type: "text" | "email" | "number" | "select" | "checkbox" | "textarea";
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  validation?: {
    minLength?: number;
    maxLength?: number;
    pattern?: RegExp;
    custom?: (value: any) => string | null;
  };
  options?: string[]; // For select fields
}

const formConfig: FormFieldConfig[] = [
  {
    type: "text",
    name: "firstName",
    label: "First Name",
    required: true,
    validation: { minLength: 2 },
  },
  {
    type: "email",
    name: "email",
    label: "Email",
    required: true,
  },
  // ... more fields
];
```

#### Test Cases

**Test Case 1:**

- Input: Render form with provided config
- Expected: All fields rendered correctly

**Test Case 2:**

- Input: Submit form with invalid data
- Expected: Validation errors displayed

**Test Case 3:**

- Input: Submit form with valid data
- Expected: Form data returned correctly

**Test Case 4:**

- Input: Change field type in config
- Expected: Form updates dynamically

#### Evaluation Criteria

- **Component Reusability (30%):** Generic, reusable component
- **TypeScript (25%):** Strong typing, interfaces
- **Validation Logic (25%):** Comprehensive validation
- **Code Quality (20%):** Clean, maintainable code

---

## Mid-Level Tasks

### Task 1: Performance-Optimized Data Table

**Difficulty:** ⭐⭐⭐ Hard  
**Time Limit:** 180 minutes  
**Points:** 300

#### Problem Description

Build a high-performance data table component that can handle large datasets (1000+ rows) with sorting, filtering, and pagination.

#### Requirements

1. **Performance Requirements:**

   - Render only visible rows (virtualization)
   - Debounce search/filter inputs
   - Memoize expensive computations
   - Optimize re-renders

2. **Features:**

   - Sortable columns (ascending/descending)
   - Global search across all columns
   - Column-specific filters
   - Pagination (configurable page size)
   - Row selection (single/multiple)
   - Export to CSV functionality

3. **Tech Stack:**

   - React with TypeScript
   - React Query for data management
   - Tailwind CSS
   - Consider using react-window or react-virtualized for virtualization

4. **Component Architecture:**
   - Separate components: DataTable, TableHeader, TableRow, TableCell
   - Custom hooks: useTableSort, useTableFilter, useTablePagination
   - Proper TypeScript generics for type safety

#### Performance Targets

- Initial render: < 100ms for 1000 rows
- Filter/Sort: < 50ms
- Smooth scrolling at 60fps

#### Test Cases

**Test Case 1:**

- Input: Load 1000 rows
- Expected: Table renders quickly, only visible rows in DOM

**Test Case 2:**

- Input: Sort by column
- Expected: Rows sorted correctly, smooth transition

**Test Case 3:**

- Input: Filter + Sort + Pagination
- Expected: All features work together correctly

**Test Case 4:**

- Input: Select multiple rows, export
- Expected: CSV contains only selected rows

#### Evaluation Criteria

- **Performance (40%):** Meets performance targets, virtualization implemented
- **Code Architecture (25%):** Clean separation, reusable hooks
- **TypeScript (20%):** Generic types, type safety
- **Feature Completeness (15%):** All features implemented correctly

---

### Task 2: Real-time Chat Component

**Difficulty:** ⭐⭐⭐⭐ Very Hard  
**Time Limit:** 240 minutes  
**Points:** 400

#### Problem Description

Build a real-time chat component with WebSocket integration, message history, and advanced features.

#### Requirements

1. **Core Features:**

   - Real-time message sending/receiving
   - Message history with pagination
   - Typing indicators
   - Online user list
   - Message timestamps
   - Read receipts (optional)

2. **Tech Stack:**

   - React with TypeScript
   - WebSocket client (Socket.io or native WebSocket)
   - React Query for message caching
   - Tailwind CSS

3. **Architecture:**

   - Custom WebSocket hook
   - Message state management
   - Optimistic updates
   - Error handling and reconnection logic
   - Message caching strategy

4. **UI/UX:**
   - Auto-scroll to latest message
   - Smooth animations
   - Responsive design
   - Message grouping by sender and time
   - Emoji picker (optional)

#### WebSocket Mock Server

```typescript
// Mock WebSocket server endpoint
const WS_URL = "wss://echo.websocket.org"; // For testing
// Or use Socket.io mock server
```

#### Test Cases

**Test Case 1:**

- Input: Send a message
- Expected: Message appears immediately (optimistic update), then confirmed

**Test Case 2:**

- Input: Receive message from another user
- Expected: Message appears in correct position with timestamp

**Test Case 3:**

- Input: WebSocket disconnects
- Expected: Reconnection attempt, messages queued

**Test Case 4:**

- Input: Load message history
- Expected: Previous messages loaded, scroll position maintained

#### Evaluation Criteria

- **WebSocket Integration (30%):** Proper connection handling, reconnection logic
- **State Management (25%):** Efficient state updates, optimistic updates
- **Performance (20%):** Smooth rendering, efficient message handling
- **Code Quality (15%):** Clean architecture, error handling
- **UX (10%):** Smooth interactions, good user experience

---

### Task 3: Advanced Form with Multi-step Wizard

**Difficulty:** ⭐⭐⭐⭐ Very Hard  
**Time Limit:** 210 minutes  
**Points:** 350

#### Problem Description

Create a multi-step form wizard with conditional logic, field dependencies, and form state persistence.

#### Requirements

1. **Wizard Features:**

   - Multiple steps (at least 3)
   - Progress indicator
   - Navigation between steps (Next/Previous)
   - Step validation before proceeding
   - Save progress to localStorage
   - Conditional field rendering based on previous answers

2. **Form Features:**

   - Dynamic field visibility
   - Field dependencies (e.g., show field B only if field A = "Yes")
   - Cross-step validation
   - Form data persistence
   - Summary step showing all entered data

3. **Tech Stack:**

   - React with TypeScript
   - React Hook Form (preferred) or custom form management
   - Tailwind CSS
   - Zustand or Context API for state management

4. **Architecture:**
   - Wizard component with step management
   - Individual step components
   - Form validation schema (Zod or Yup)
   - Custom hooks for form logic

#### Example Flow

```
Step 1: Personal Information
  - Name, Email, Phone
  - Question: "Do you have a company?" (Yes/No)

Step 2: Company Details (only if Step 1 = Yes)
  - Company Name, Industry, Size

Step 3: Preferences
  - Newsletter subscription
  - Communication preferences

Step 4: Summary
  - Review all entered data
  - Submit button
```

#### Test Cases

**Test Case 1:**

- Input: Fill Step 1, refresh page
- Expected: Data persists, can continue from Step 2

**Test Case 2:**

- Input: Select "No" for company question
- Expected: Step 2 skipped, goes to Step 3

**Test Case 3:**

- Input: Try to proceed with invalid data
- Expected: Validation errors shown, cannot proceed

**Test Case 4:**

- Input: Go back and change answer
- Expected: Dependent fields update correctly

#### Evaluation Criteria

- **Form Logic (35%):** Conditional rendering, dependencies work correctly
- **State Management (25%):** Proper state handling, persistence
- **Validation (20%):** Comprehensive validation across steps
- **Code Architecture (20%):** Clean, maintainable, reusable components

---

## Evaluation Criteria

### General Evaluation Standards

#### Code Quality (All Levels)

- **Readability:** Clear variable names, comments where needed
- **Structure:** Logical organization, separation of concerns
- **Best Practices:** Follows language/framework conventions
- **Error Handling:** Proper error handling and edge cases

#### Functionality

- **Completeness:** All requirements implemented
- **Correctness:** Features work as expected
- **Edge Cases:** Handles edge cases and errors gracefully

#### Technical Skills

**Fresher:**

- Basic HTML/CSS/JavaScript
- DOM manipulation
- Event handling
- Responsive design basics

**Junior:**

- React fundamentals
- TypeScript basics
- Component composition
- State management
- API integration
- Custom hooks

**Mid-Level:**

- Advanced React patterns
- Performance optimization
- Complex state management
- Architecture decisions
- TypeScript advanced features
- Testing considerations

#### Bonus Points

- **Accessibility:** ARIA labels, keyboard navigation
- **Testing:** Unit tests or test considerations
- **Documentation:** Code comments, README
- **Performance:** Optimizations beyond requirements
- **Creativity:** Additional features or polish

### Scoring Rubric

| Criteria      | Fresher | Junior | Mid-Level |
| ------------- | ------- | ------ | --------- |
| Functionality | 40%     | 35%    | 30%       |
| Code Quality  | 30%     | 25%    | 20%       |
| Architecture  | 10%     | 20%    | 30%       |
| TypeScript    | 0%      | 20%    | 20%       |
| Performance   | 0%      | 0%     | 20%       |
| Styling/UX    | 20%     | 0%     | 0%        |

### Time Management Guidelines

- **Fresher:** Focus on getting it working, then improve
- **Junior:** Balance functionality with code quality
- **Mid-Level:** Plan architecture first, then implement

### Common Pitfalls to Avoid

1. **Not reading requirements carefully**
2. **Over-engineering simple solutions**
3. **Ignoring edge cases**
4. **Poor code organization**
5. **Not testing the solution**
6. **Missing TypeScript types (Junior/Mid)**
7. **Performance issues with large datasets (Mid)**

---

## Submission Guidelines

### What to Submit

1. **Source Code:** All files in a structured format
2. **README.md:**
   - Setup instructions
   - How to run the project
   - Brief explanation of approach
3. **Screenshots/Demo:** Visual proof of working solution

### Code Structure

```
project-name/
├── src/
│   ├── components/
│   ├── hooks/
│   ├── types/
│   ├── utils/
│   └── App.tsx
├── package.json
├── README.md
└── ...
```

### Notes for Evaluators

- Look for understanding of concepts, not just working code
- Consider time constraints
- Evaluate based on level-appropriate expectations
- Provide constructive feedback

---

## Additional Resources

### Recommended Reading

- React Documentation: https://react.dev
- TypeScript Handbook: https://www.typescriptlang.org/docs/
- MDN Web Docs: https://developer.mozilla.org

### Practice Platforms

- HackerRank: https://www.hackerrank.com
- LeetCode: https://leetcode.com
- Frontend Mentor: https://www.frontendmentor.io

---

**Good luck! 🚀**
