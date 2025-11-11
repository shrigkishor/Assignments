# Front-End Coding Tasks - Evaluator Guide

This guide helps evaluators assess candidate submissions for front-end developer coding tasks.

---

## Quick Reference

### Task Distribution

| Level | Tasks | Total Points | Time Range |
|-------|-------|--------------|------------|
| **Fresher** | 3 tasks | 300 points | 3-4 hours |
| **Junior** | 3 tasks | 600 points | 6-7 hours |
| **Mid-Level** | 3 tasks | 1050 points | 10-12 hours |

---

## Fresher Level Evaluation

### Task 1: Interactive Todo List (100 points)

**Key Things to Check:**
- ✅ Todos can be added
- ✅ Todos can be marked complete (strikethrough)
- ✅ Todos can be deleted
- ✅ Empty todos are prevented
- ✅ Input clears after adding
- ✅ Responsive design
- ✅ Clean, readable code

**Common Issues:**
- ❌ No validation for empty inputs
- ❌ No visual feedback for completed todos
- ❌ Not responsive
- ❌ Poor variable naming
- ❌ No error handling

**Scoring Breakdown:**
- Functionality: 40 points
- Code Quality: 30 points
- Styling: 20 points
- Edge Cases: 10 points

---

### Task 2: Form Validation (80 points)

**Key Things to Check:**
- ✅ Real-time validation as user types
- ✅ All validation rules implemented
- ✅ Error messages are clear
- ✅ Submit button disabled when invalid
- ✅ Success message on valid submission
- ✅ Visual feedback (red borders, error messages)

**Common Issues:**
- ❌ Validation only on submit, not real-time
- ❌ Missing validation rules
- ❌ Unclear error messages
- ❌ No visual feedback
- ❌ Submit button not disabled

**Scoring Breakdown:**
- Validation Logic: 50 points
- User Experience: 30 points
- Code Quality: 20 points

---

### Task 3: Dynamic Card Grid (120 points)

**Key Things to Check:**
- ✅ Search functionality works
- ✅ Category filters work
- ✅ Search and filter can be combined
- ✅ Responsive grid (3/2/1 columns)
- ✅ "No results" message shown
- ✅ Smooth transitions

**Common Issues:**
- ❌ Search doesn't work correctly
- ❌ Filters don't work
- ❌ Not responsive
- ❌ No "no results" handling
- ❌ Poor performance with many items

**Scoring Breakdown:**
- Functionality: 40 points
- Responsive Design: 30 points
- Code Quality: 20 points
- UI/UX: 10 points

---

## Junior Level Evaluation

### Task 1: React Todo App with Local Storage (150 points)

**Key Things to Check:**
- ✅ React hooks used correctly (useState, useEffect)
- ✅ TypeScript types defined properly
- ✅ Components are well-structured
- ✅ LocalStorage persistence works
- ✅ Filtering works (All/Active/Completed)
- ✅ Edit functionality works
- ✅ Clear completed works
- ✅ Active count displayed

**Common Issues:**
- ❌ Not using TypeScript properly
- ❌ Poor component structure
- ❌ LocalStorage not syncing correctly
- ❌ Missing features
- ❌ Not following React best practices
- ❌ No custom hooks

**Scoring Breakdown:**
- React Best Practices: 30 points
- TypeScript: 25 points
- Functionality: 25 points
- Code Organization: 20 points

**Bonus Points (+10):**
- Custom hooks for localStorage
- Proper error boundaries
- Unit tests

---

### Task 2: API Integration - User Dashboard (200 points)

**Key Things to Check:**
- ✅ React Query used correctly (or proper fetch implementation)
- ✅ Loading states handled
- ✅ Error handling with retry
- ✅ TypeScript types for API responses
- ✅ Search functionality works
- ✅ Modal shows user details
- ✅ Debounced search (bonus)

**Common Issues:**
- ❌ No loading states
- ❌ No error handling
- ❌ Missing TypeScript types
- ❌ Not using React Query (if required)
- ❌ Search not working
- ❌ No retry mechanism

**Scoring Breakdown:**
- API Integration: 35 points
- React Query Usage: 25 points
- TypeScript: 20 points
- UX: 20 points

**Bonus Points (+15):**
- Debounced search
- Optimistic updates
- Error retry with exponential backoff

---

### Task 3: Form Builder Component (250 points)

**Key Things to Check:**
- ✅ Dynamic form rendering from config
- ✅ All field types supported
- ✅ Validation works correctly
- ✅ TypeScript interfaces well-defined
- ✅ Reusable component structure
- ✅ Form submission returns correct data
- ✅ Reset functionality works

**Common Issues:**
- ❌ Not truly dynamic (hardcoded fields)
- ❌ Missing field types
- ❌ Validation not working
- ❌ Poor TypeScript typing
- ❌ Not reusable

**Scoring Breakdown:**
- Component Reusability: 30 points
- TypeScript: 25 points
- Validation Logic: 25 points
- Code Quality: 20 points

**Bonus Points (+20):**
- Custom validation functions
- Field dependencies
- Conditional field rendering

---

## Mid-Level Evaluation

### Task 1: Performance-Optimized Data Table (300 points)

**Key Things to Check:**
- ✅ Virtualization implemented (only visible rows rendered)
- ✅ Sorting works correctly
- ✅ Filtering works (search + column filters)
- ✅ Pagination implemented
- ✅ Performance targets met (< 100ms initial render for 1000 rows)
- ✅ Memoization used appropriately
- ✅ Debounced search
- ✅ TypeScript generics used
- ✅ Custom hooks for table logic

**Common Issues:**
- ❌ No virtualization (renders all rows)
- ❌ Poor performance with large datasets
- ❌ Not using memoization
- ❌ Missing features
- ❌ Not using TypeScript generics
- ❌ No custom hooks

**Scoring Breakdown:**
- Performance: 40 points
- Code Architecture: 25 points
- TypeScript: 20 points
- Feature Completeness: 15 points

**Bonus Points (+30):**
- Export to CSV
- Row selection
- Column resizing
- Performance monitoring

---

### Task 2: Real-time Chat Component (400 points)

**Key Things to Check:**
- ✅ WebSocket connection handling
- ✅ Reconnection logic implemented
- ✅ Optimistic updates
- ✅ Message history with pagination
- ✅ Typing indicators (bonus)
- ✅ Online user list (bonus)
- ✅ React Query for message caching
- ✅ Error handling
- ✅ Smooth UI/UX

**Common Issues:**
- ❌ No reconnection logic
- ❌ No optimistic updates
- ❌ Poor error handling
- ❌ Not using React Query
- ❌ Messages not persisting
- ❌ Poor state management

**Scoring Breakdown:**
- WebSocket Integration: 30 points
- State Management: 25 points
- Performance: 20 points
- Code Quality: 15 points
- UX: 10 points

**Bonus Points (+40):**
- Typing indicators
- Online user list
- Read receipts
- Message grouping
- Emoji picker

---

### Task 3: Multi-step Form Wizard (350 points)

**Key Things to Check:**
- ✅ Multi-step navigation works
- ✅ Progress indicator
- ✅ Step validation before proceeding
- ✅ Conditional field rendering
- ✅ Field dependencies work
- ✅ Form data persistence (localStorage)
- ✅ Summary step shows all data
- ✅ Can go back and edit
- ✅ TypeScript interfaces well-defined
- ✅ Clean component architecture

**Common Issues:**
- ❌ No validation between steps
- ❌ Conditional logic not working
- ❌ No persistence
- ❌ Poor state management
- ❌ Not using React Hook Form or proper form management
- ❌ Missing summary step

**Scoring Breakdown:**
- Form Logic: 35 points
- State Management: 25 points
- Validation: 20 points
- Code Architecture: 20 points

**Bonus Points (+35):**
- React Hook Form integration
- Zod/Yup validation schema
- Step progress animation
- Form analytics

---

## General Evaluation Tips

### Code Quality Checklist

**All Levels:**
- [ ] Code is readable and well-organized
- [ ] Variable names are descriptive
- [ ] Functions are focused and single-purpose
- [ ] Comments are used appropriately (not over-commented)
- [ ] No obvious bugs or errors
- [ ] Edge cases are handled

**Junior/Mid-Level:**
- [ ] TypeScript types are properly defined
- [ ] Components are reusable
- [ ] Custom hooks are used where appropriate
- [ ] State management is efficient
- [ ] No unnecessary re-renders
- [ ] Error handling is comprehensive

### Red Flags

**Fresher Level:**
- ❌ Copy-pasted code without understanding
- ❌ No attempt at responsive design
- ❌ No validation or error handling
- ❌ Poor code organization

**Junior Level:**
- ❌ Not using TypeScript properly
- ❌ Not following React best practices
- ❌ Poor component structure
- ❌ No error handling
- ❌ Not using hooks correctly

**Mid-Level:**
- ❌ No performance considerations
- ❌ Poor architecture decisions
- ❌ Not using TypeScript generics
- ❌ No custom hooks
- ❌ Missing advanced features

### Green Flags

**Fresher Level:**
- ✅ Clean, readable code
- ✅ Good understanding of basics
- ✅ Responsive design
- ✅ Handles edge cases

**Junior Level:**
- ✅ Proper TypeScript usage
- ✅ Good React patterns
- ✅ Custom hooks
- ✅ Error handling
- ✅ Clean component structure

**Mid-Level:**
- ✅ Performance optimizations
- ✅ Clean architecture
- ✅ Advanced TypeScript features
- ✅ Comprehensive error handling
- ✅ Well-thought-out solutions

---

## Scoring Guidelines

### Point Deductions

**Functionality Issues:**
- Missing required feature: -20% of task points
- Feature partially working: -10% of task points
- Feature has bugs: -5% of task points

**Code Quality Issues:**
- Poor code organization: -10% of task points
- No TypeScript (where required): -15% of task points
- Poor variable naming: -5% of task points
- No error handling: -10% of task points

**Performance Issues (Mid-Level):**
- No virtualization (where required): -20% of task points
- Poor performance: -15% of task points
- No memoization: -10% of task points

### Bonus Points

**All Levels:**
- Excellent UI/UX: +5-10 points
- Comprehensive error handling: +5 points
- Good documentation: +5 points
- Unit tests: +10 points

**Junior/Mid-Level:**
- Advanced TypeScript features: +10 points
- Performance optimizations: +10-15 points
- Clean architecture: +10 points
- Additional features: +5-15 points

---

## Interview Questions to Ask

### After Fresher Tasks
1. "How did you approach this problem?"
2. "What would you do differently if you had more time?"
3. "How would you make this more accessible?"
4. "What challenges did you face?"

### After Junior Tasks
1. "Why did you choose this approach?"
2. "How would you test this component?"
3. "What performance considerations did you make?"
4. "How would you handle errors in production?"
5. "Explain your TypeScript type definitions."

### After Mid-Level Tasks
1. "Walk me through your architecture decisions."
2. "How did you optimize for performance?"
3. "How would you scale this solution?"
4. "What trade-offs did you make?"
5. "How would you monitor this in production?"
6. "Explain your state management strategy."

---

## Time Management Assessment

### Expected Completion Times

**Fresher:**
- Task 1: 45-60 minutes
- Task 2: 30-45 minutes
- Task 3: 60-75 minutes

**Junior:**
- Task 1: 75-90 minutes
- Task 2: 90-120 minutes
- Task 3: 120-150 minutes

**Mid-Level:**
- Task 1: 150-180 minutes
- Task 2: 180-240 minutes
- Task 3: 150-210 minutes

### Time Management Red Flags
- ❌ Taking 2x longer than expected
- ❌ Not completing basic requirements
- ❌ Spending too much time on styling vs functionality

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
- Shows understanding of React basics
- Good TypeScript usage

**Junior → Mid-Level:**
- Score > 85% on all junior tasks
- Shows performance awareness
- Clean architecture decisions
- Advanced TypeScript usage

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
- Separation of concerns
- Reusable components
- Custom hooks for logic
- Proper error boundaries
- Type safety
- Performance optimizations
- Accessibility considerations

### Bad Patterns ❌
- Everything in one component
- No separation of concerns
- Inline styles everywhere
- No error handling
- Any types everywhere
- No performance considerations
- No accessibility

---

**Remember:** The goal is to assess problem-solving ability, code quality, and technical skills appropriate for the level. Be fair, constructive, and provide actionable feedback.

