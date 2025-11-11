# Coding Task Starter Templates

This document provides starter templates for each coding task to help candidates get started quickly.

---

## Fresher Level Templates

### Task 1: Interactive Todo List - Starter Template

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Todo List</title>
    <style>
      /* Add your CSS here */
    </style>
  </head>
  <body>
    <div class="container">
      <h1>Todo List</h1>
      <div class="input-section">
        <input type="text" id="todoInput" placeholder="Add a new todo..." />
        <button id="addBtn">Add</button>
      </div>
      <ul id="todoList">
        <!-- Todos will be added here -->
      </ul>
    </div>
    <script>
      // Add your JavaScript here
    </script>
  </body>
</html>
```

---

### Task 2: Form Validation - Starter Template

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Registration Form</title>
    <style>
      /* Add your CSS here */
    </style>
  </head>
  <body>
    <div class="container">
      <h1>Registration Form</h1>
      <form id="registrationForm">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" />
          <span class="error" id="nameError"></span>
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" />
          <span class="error" id="emailError"></span>
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" name="password" />
          <span class="error" id="passwordError"></span>
        </div>

        <div class="form-group">
          <label for="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" name="confirmPassword" />
          <span class="error" id="confirmPasswordError"></span>
        </div>

        <div class="form-group">
          <label for="phone">Phone Number (Optional)</label>
          <input type="tel" id="phone" name="phone" />
          <span class="error" id="phoneError"></span>
        </div>

        <button type="submit" id="submitBtn" disabled>Submit</button>
      </form>
      <div id="successMessage" class="success hidden"></div>
    </div>
    <script>
      // Add your JavaScript here
    </script>
  </body>
</html>
```

---

### Task 3: Dynamic Card Grid - Starter Template

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Card Grid</title>
    <style>
      /* Add your CSS here */
    </style>
  </head>
  <body>
    <div class="container">
      <h1>Product Catalog</h1>
      <div class="controls">
        <input type="text" id="searchInput" placeholder="Search..." />
        <div class="filters">
          <button class="filter-btn active" data-category="all">All</button>
          <!-- Filter buttons will be added dynamically -->
        </div>
      </div>
      <div id="cardGrid" class="card-grid">
        <!-- Cards will be added here -->
      </div>
      <div id="noResults" class="no-results hidden">No results found</div>
    </div>
    <script>
      // Sample data - replace with your own
      const items = [
        {
          id: 1,
          title: "React Course",
          category: "Technology",
          description: "Learn React",
          image: "https://via.placeholder.com/300",
        },
        {
          id: 2,
          title: "JavaScript Book",
          category: "Education",
          description: "Master JavaScript",
          image: "https://via.placeholder.com/300",
        },
        // Add more items here
      ];

      // Add your JavaScript here
    </script>
  </body>
</html>
```

---

## Junior Level Templates

### Task 1: React Todo App - Starter Template

```typescript
// src/types/todo.ts
export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
}

// src/components/TodoForm.tsx
import React, { useState } from "react";

interface TodoFormProps {
  onAdd: (text: string) => void;
}

export const TodoForm: React.FC<TodoFormProps> = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement add functionality
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo..."
        className="todo-input"
      />
      <button type="submit" className="add-btn">
        Add
      </button>
    </form>
  );
};

// src/components/TodoItem.tsx
import React from "react";
import { Todo } from "../types/todo";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, text: string) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onToggle,
  onDelete,
  onEdit,
}) => {
  // TODO: Implement component
  return <div className="todo-item">{/* Add your implementation here */}</div>;
};

// src/components/TodoList.tsx
import React from "react";
import { Todo } from "../types/todo";
import { TodoItem } from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, text: string) => void;
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  onToggle,
  onDelete,
  onEdit,
}) => {
  // TODO: Implement component
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
};

// src/components/TodoFilter.tsx
import React from "react";

export type FilterType = "all" | "active" | "completed";

interface TodoFilterProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

export const TodoFilter: React.FC<TodoFilterProps> = ({
  currentFilter,
  onFilterChange,
}) => {
  // TODO: Implement component
  return <div className="todo-filter">{/* Add filter buttons here */}</div>;
};

// src/hooks/useLocalStorage.ts
import { useState, useEffect } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  // TODO: Implement localStorage hook
  const [storedValue, setStoredValue] = useState<T>(initialValue);

  // Add your implementation here

  return [storedValue, setStoredValue] as const;
}

// src/App.tsx
import React, { useState } from "react";
import { Todo } from "./types/todo";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { TodoFilter, FilterType } from "./components/TodoFilter";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [todos, setTodos] = useLocalStorage<Todo[]>("todos", []);
  const [filter, setFilter] = useState<FilterType>("all");

  // TODO: Implement all handlers
  const handleAdd = (text: string) => {
    // Implement add logic
  };

  const handleToggle = (id: string) => {
    // Implement toggle logic
  };

  const handleDelete = (id: string) => {
    // Implement delete logic
  };

  const handleEdit = (id: string, text: string) => {
    // Implement edit logic
  };

  const handleClearCompleted = () => {
    // Implement clear completed logic
  };

  const filteredTodos = todos.filter((todo) => {
    // TODO: Implement filtering logic
    return true;
  });

  const activeTodosCount = todos.filter((todo) => !todo.completed).length;

  return (
    <div className="app">
      <h1>Todo App</h1>
      <TodoForm onAdd={handleAdd} />
      <TodoFilter currentFilter={filter} onFilterChange={setFilter} />
      <TodoList
        todos={filteredTodos}
        onToggle={handleToggle}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
      <div className="todo-stats">
        <span>{activeTodosCount} active todos</span>
        <button onClick={handleClearCompleted}>Clear Completed</button>
      </div>
    </div>
  );
}

export default App;
```

---

### Task 2: API Integration - User Dashboard - Starter Template

```typescript
// src/types/user.ts
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

// src/components/UserCard.tsx
import React from "react";
import { User } from "../types/user";

interface UserCardProps {
  user: User;
  onClick: (user: User) => void;
}

export const UserCard: React.FC<UserCardProps> = ({ user, onClick }) => {
  // TODO: Implement component
  return (
    <div className="user-card" onClick={() => onClick(user)}>
      {/* Add your implementation here */}
    </div>
  );
};

// src/components/UserModal.tsx
import React from "react";
import { User } from "../types/user";

interface UserModalProps {
  user: User | null;
  onClose: () => void;
}

export const UserModal: React.FC<UserModalProps> = ({ user, onClose }) => {
  if (!user) return null;

  // TODO: Implement modal component
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Add your implementation here */}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

// src/components/UserDashboard.tsx
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { User } from "../types/user";
import { UserCard } from "./UserCard";
import { UserModal } from "./UserModal";

const API_URL = "https://jsonplaceholder.typicode.com/users";

async function fetchUsers(): Promise<User[]> {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  return response.json();
}

export const UserDashboard: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  // TODO: Implement React Query hook
  const {
    data: users,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  // TODO: Implement search filtering
  const filteredUsers =
    users?.filter((user) => {
      // Add search logic here
      return true;
    }) || [];

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return (
      <div className="error">
        <p>Error loading users</p>
        <button onClick={() => refetch()}>Retry</button>
      </div>
    );
  }

  return (
    <div className="user-dashboard">
      <h1>User Dashboard</h1>
      <input
        type="text"
        placeholder="Search users..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />
      <div className="user-grid">
        {filteredUsers.map((user) => (
          <UserCard key={user.id} user={user} onClick={setSelectedUser} />
        ))}
      </div>
      <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} />
    </div>
  );
};
```

---

### Task 3: Form Builder Component - Starter Template

```typescript
// src/types/form.ts
export type FieldType =
  | "text"
  | "email"
  | "number"
  | "select"
  | "checkbox"
  | "textarea";

export interface ValidationRule {
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: any) => string | null;
}

export interface FormFieldConfig {
  type: FieldType;
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  validation?: ValidationRule;
  options?: string[]; // For select fields
}

export interface FormData {
  [key: string]: any;
}

// src/components/FormField.tsx
import React from "react";
import { FormFieldConfig } from "../types/form";

interface FormFieldProps {
  config: FormFieldConfig;
  value: any;
  onChange: (name: string, value: any) => void;
  error?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  config,
  value,
  onChange,
  error,
}) => {
  // TODO: Implement field rendering based on type
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const newValue =
      config.type === "checkbox"
        ? (e.target as HTMLInputElement).checked
        : e.target.value;
    onChange(config.name, newValue);
  };

  return (
    <div className="form-field">
      <label htmlFor={config.name}>
        {config.label}
        {config.required && <span className="required">*</span>}
      </label>
      {/* TODO: Render appropriate input based on config.type */}
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

// src/hooks/useFormValidation.ts
import { useState } from "react";
import { FormFieldConfig, FormData } from "../types/form";

export function useFormValidation(config: FormFieldConfig[]) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateField = (
    name: string,
    value: any,
    fieldConfig: FormFieldConfig
  ): string | null => {
    // TODO: Implement validation logic
    return null;
  };

  const validateForm = (data: FormData): boolean => {
    // TODO: Implement form validation
    return true;
  };

  return { errors, validateField, validateForm, setErrors };
}

// src/components/FormBuilder.tsx
import React, { useState } from "react";
import { FormFieldConfig, FormData } from "../types/form";
import { FormField } from "./FormField";
import { useFormValidation } from "../hooks/useFormValidation";

interface FormBuilderProps {
  config: FormFieldConfig[];
  onSubmit: (data: FormData) => void;
  initialData?: FormData;
}

export const FormBuilder: React.FC<FormBuilderProps> = ({
  config,
  onSubmit,
  initialData = {},
}) => {
  const [formData, setFormData] = useState<FormData>(initialData);
  const { errors, validateField, validateForm, setErrors } =
    useFormValidation(config);

  const handleFieldChange = (name: string, value: any) => {
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }

    // Validate field
    const fieldConfig = config.find((f) => f.name === name);
    if (fieldConfig) {
      const error = validateField(name, value, fieldConfig);
      if (error) {
        setErrors((prev) => ({ ...prev, [name]: error }));
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm(formData)) {
      onSubmit(formData);
    }
  };

  const handleReset = () => {
    setFormData(initialData);
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="form-builder">
      {config.map((fieldConfig) => (
        <FormField
          key={fieldConfig.name}
          config={fieldConfig}
          value={formData[fieldConfig.name] || ""}
          onChange={handleFieldChange}
          error={errors[fieldConfig.name]}
        />
      ))}
      <div className="form-actions">
        <button type="submit" className="submit-btn">
          Submit
        </button>
        <button type="button" onClick={handleReset} className="reset-btn">
          Reset
        </button>
      </div>
    </form>
  );
};
```

---

## Mid-Level Templates

### Task 1: Performance-Optimized Data Table - Starter Template

```typescript
// src/types/table.ts
export interface TableColumn<T> {
  key: keyof T;
  label: string;
  sortable?: boolean;
  filterable?: boolean;
  render?: (value: any, row: T) => React.ReactNode;
}

export type SortDirection = "asc" | "desc" | null;

export interface SortConfig<T> {
  column: keyof T;
  direction: SortDirection;
}

// src/hooks/useTableSort.ts
import { useState, useMemo } from "react";
import { SortConfig, SortDirection } from "../types/table";

export function useTableSort<T>(data: T[]) {
  const [sortConfig, setSortConfig] = useState<SortConfig<T> | null>(null);

  const sortedData = useMemo(() => {
    // TODO: Implement sorting logic
    return data;
  }, [data, sortConfig]);

  const handleSort = (column: keyof T) => {
    // TODO: Implement sort handler
  };

  return { sortedData, sortConfig, handleSort };
}

// src/hooks/useTableFilter.ts
import { useState, useMemo, useCallback } from "react";
import { debounce } from "../utils/debounce";

export function useTableFilter<T>(data: T[], searchableColumns: (keyof T)[]) {
  const [searchQuery, setSearchQuery] = useState("");
  const [columnFilters, setColumnFilters] = useState<Record<string, string>>(
    {}
  );

  const debouncedSearch = useCallback(
    debounce((query: string) => {
      setSearchQuery(query);
    }, 300),
    []
  );

  const filteredData = useMemo(() => {
    // TODO: Implement filtering logic
    return data;
  }, [data, searchQuery, columnFilters, searchableColumns]);

  return {
    filteredData,
    searchQuery,
    setSearchQuery: debouncedSearch,
    columnFilters,
    setColumnFilters,
  };
}

// src/components/DataTable.tsx
import React, { useMemo } from "react";
import { TableColumn, SortConfig } from "../types/table";
import { useTableSort } from "../hooks/useTableSort";
import { useTableFilter } from "../hooks/useTableFilter";

interface DataTableProps<T> {
  data: T[];
  columns: TableColumn<T>[];
  pageSize?: number;
  onRowSelect?: (rows: T[]) => void;
}

export function DataTable<T extends { id: string | number }>({
  data,
  columns,
  pageSize = 10,
  onRowSelect,
}: DataTableProps<T>) {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [selectedRows, setSelectedRows] = React.useState<Set<string | number>>(
    new Set()
  );

  const searchableColumns = useMemo(
    () =>
      columns.filter((col) => col.filterable !== false).map((col) => col.key),
    [columns]
  );

  const { filteredData, searchQuery, setSearchQuery } = useTableFilter(
    data,
    searchableColumns
  );
  const { sortedData, sortConfig, handleSort } = useTableSort(filteredData);

  // TODO: Implement pagination
  const paginatedData = sortedData;

  // TODO: Implement virtualization for large datasets
  // Consider using react-window or react-virtualized

  return (
    <div className="data-table">
      <div className="table-controls">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              {columns.map((column) => (
                <th
                  key={String(column.key)}
                  onClick={() => column.sortable && handleSort(column.key)}
                  className={column.sortable ? "sortable" : ""}
                >
                  {column.label}
                  {/* TODO: Add sort indicators */}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row) => (
              <tr key={row.id}>
                {columns.map((column) => (
                  <td key={String(column.key)}>
                    {column.render
                      ? column.render(row[column.key], row)
                      : String(row[column.key])}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* TODO: Add pagination controls */}
    </div>
  );
}
```

---

### Task 2: Real-time Chat Component - Starter Template

```typescript
// src/types/chat.ts
export interface Message {
  id: string;
  text: string;
  senderId: string;
  senderName: string;
  timestamp: Date;
  read: boolean;
}

export interface User {
  id: string;
  name: string;
  online: boolean;
}

// src/hooks/useWebSocket.ts
import { useEffect, useRef, useState, useCallback } from "react";
import { Message } from "../types/chat";

export function useWebSocket(url: string) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const wsRef = useRef<WebSocket | null>(null);
  const reconnectTimeoutRef = useRef<NodeJS.Timeout>();

  const connect = useCallback(() => {
    try {
      const ws = new WebSocket(url);
      wsRef.current = ws;

      ws.onopen = () => {
        setIsConnected(true);
        setError(null);
      };

      ws.onmessage = (event) => {
        const message: Message = JSON.parse(event.data);
        setMessages((prev) => [...prev, message]);
      };

      ws.onerror = () => {
        setError("WebSocket error occurred");
      };

      ws.onclose = () => {
        setIsConnected(false);
        // TODO: Implement reconnection logic
      };
    } catch (err) {
      setError("Failed to connect to WebSocket");
    }
  }, [url]);

  const sendMessage = useCallback(
    (message: Omit<Message, "id" | "timestamp">) => {
      if (wsRef.current?.readyState === WebSocket.OPEN) {
        const fullMessage: Message = {
          ...message,
          id: Date.now().toString(),
          timestamp: new Date(),
        };
        wsRef.current.send(JSON.stringify(fullMessage));

        // Optimistic update
        setMessages((prev) => [...prev, fullMessage]);
      }
    },
    []
  );

  useEffect(() => {
    connect();
    return () => {
      if (wsRef.current) {
        wsRef.current.close();
      }
      if (reconnectTimeoutRef.current) {
        clearTimeout(reconnectTimeoutRef.current);
      }
    };
  }, [connect]);

  return { messages, isConnected, error, sendMessage, reconnect: connect };
}

// src/components/ChatMessage.tsx
import React from "react";
import { Message } from "../types/chat";

interface ChatMessageProps {
  message: Message;
  currentUserId: string;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({
  message,
  currentUserId,
}) => {
  const isOwnMessage = message.senderId === currentUserId;

  return (
    <div className={`chat-message ${isOwnMessage ? "own" : "other"}`}>
      <div className="message-header">
        <span className="sender-name">{message.senderName}</span>
        <span className="timestamp">
          {message.timestamp.toLocaleTimeString()}
        </span>
      </div>
      <div className="message-text">{message.text}</div>
    </div>
  );
};

// src/components/ChatComponent.tsx
import React, { useState, useRef, useEffect } from "react";
import { useWebSocket } from "../hooks/useWebSocket";
import { ChatMessage } from "./ChatMessage";
import { Message } from "../types/chat";

const WS_URL = "wss://echo.websocket.org"; // Replace with actual WebSocket URL

export const ChatComponent: React.FC = () => {
  const [inputText, setInputText] = useState("");
  const [currentUserId] = useState("user1"); // In real app, get from auth
  const [currentUserName] = useState("You");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { messages, isConnected, error, sendMessage, reconnect } =
    useWebSocket(WS_URL);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputText.trim() && isConnected) {
      sendMessage({
        text: inputText,
        senderId: currentUserId,
        senderName: currentUserName,
        read: false,
      });
      setInputText("");
    }
  };

  return (
    <div className="chat-component">
      <div className="chat-header">
        <h2>Chat</h2>
        <div
          className={`connection-status ${
            isConnected ? "connected" : "disconnected"
          }`}
        >
          {isConnected ? "Connected" : "Disconnected"}
        </div>
      </div>

      {error && (
        <div className="error-banner">
          {error}
          <button onClick={reconnect}>Reconnect</button>
        </div>
      )}

      <div className="messages-container">
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            message={message}
            currentUserId={currentUserId}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSend} className="chat-input-form">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type a message..."
          disabled={!isConnected}
          className="chat-input"
        />
        <button type="submit" disabled={!isConnected || !inputText.trim()}>
          Send
        </button>
      </form>
    </div>
  );
};
```

---

### Task 3: Multi-step Form Wizard - Starter Template

```typescript
// src/types/wizard.ts
export interface WizardStep {
  id: string;
  title: string;
  component: React.ComponentType<WizardStepProps>;
  validation?: (data: FormData) => boolean;
}

export interface WizardStepProps {
  data: FormData;
  updateData: (data: Partial<FormData>) => void;
  errors: Record<string, string>;
}

export interface FormData {
  [key: string]: any;
}

// src/components/WizardStep.tsx
import React from "react";
import { WizardStepProps } from "../types/wizard";

export const PersonalInfoStep: React.FC<WizardStepProps> = ({
  data,
  updateData,
  errors,
}) => {
  return (
    <div className="wizard-step">
      <h2>Personal Information</h2>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          value={data.name || ""}
          onChange={(e) => updateData({ name: e.target.value })}
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>
      {/* Add more fields */}
    </div>
  );
};

// src/components/Wizard.tsx
import React, { useState, useEffect } from "react";
import { WizardStep, FormData } from "../types/wizard";

interface WizardProps {
  steps: WizardStep[];
  onComplete: (data: FormData) => void;
  initialData?: FormData;
}

export const Wizard: React.FC<WizardProps> = ({
  steps,
  onComplete,
  initialData = {},
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // TODO: Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("wizardData");
    if (saved) {
      setFormData(JSON.parse(saved));
    }
  }, []);

  // TODO: Save to localStorage on data change
  useEffect(() => {
    localStorage.setItem("wizardData", JSON.stringify(formData));
  }, [formData]);

  const updateData = (newData: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...newData }));
    // Clear errors for updated fields
    setErrors((prev) => {
      const newErrors = { ...prev };
      Object.keys(newData).forEach((key) => delete newErrors[key]);
      return newErrors;
    });
  };

  const validateStep = (): boolean => {
    const step = steps[currentStep];
    if (step.validation) {
      const isValid = step.validation(formData);
      if (!isValid) {
        setErrors({ general: "Please fill all required fields" });
        return false;
      }
    }
    return true;
  };

  const handleNext = () => {
    if (validateStep()) {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
    }
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handleComplete = () => {
    if (validateStep()) {
      onComplete(formData);
      localStorage.removeItem("wizardData");
    }
  };

  const CurrentStepComponent = steps[currentStep].component;
  const isLastStep = currentStep === steps.length - 1;
  const isFirstStep = currentStep === 0;

  return (
    <div className="wizard">
      <div className="wizard-progress">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`progress-step ${index <= currentStep ? "active" : ""}`}
          >
            {index + 1}. {step.title}
          </div>
        ))}
      </div>

      <div className="wizard-content">
        <CurrentStepComponent
          data={formData}
          updateData={updateData}
          errors={errors}
        />
      </div>

      <div className="wizard-actions">
        {!isFirstStep && (
          <button onClick={handlePrevious} className="btn-secondary">
            Previous
          </button>
        )}
        {!isLastStep ? (
          <button onClick={handleNext} className="btn-primary">
            Next
          </button>
        ) : (
          <button onClick={handleComplete} className="btn-primary">
            Submit
          </button>
        )}
      </div>
    </div>
  );
};
```

---

## Setup Instructions

### For Fresher Level Tasks

1. Create an HTML file
2. Add CSS in `<style>` tag or separate CSS file
3. Add JavaScript in `<script>` tag or separate JS file
4. Open in browser to test

### For Junior/Mid-Level Tasks

1. Create a new React project:

```bash
pnpm create vite@latest task-name --template react-ts
cd task-name
pnpm install
```

2. Install additional dependencies as needed:

```bash
# For React Query
pnpm add @tanstack/react-query

# For Tailwind CSS
pnpm add -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

3. Copy the starter template code into your project
4. Implement the TODO sections
5. Run the development server:

```bash
pnpm dev
```

---

**Good luck with your implementation! 🚀**
