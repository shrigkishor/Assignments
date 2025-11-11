import { useState, useCallback } from 'react';
import { ValidationRule, ValidationError } from '@/types';

interface ValidationRules {
  [key: string]: ValidationRule;
}

export const useFormValidation = <T extends Record<string, unknown>>(
  initialData: T,
  validationRules: ValidationRules
) => {
  const [data, setData] = useState<T>(initialData);
  const [errors, setErrors] = useState<ValidationError[]>([]);
  const [isValid, setIsValid] = useState(false);

  const validateField = useCallback((field: string, value: unknown): ValidationError | null => {
    const rule = validationRules[field];
    if (!rule) return null;

    if (rule.required && (value === null || value === undefined || (typeof value === 'string' && value.trim() === ''))) {
      return { field, message: `${field} is required` };
    }

    if (rule.minLength && typeof value === 'string' && value.length < rule.minLength) {
      return { field, message: `${field} must be at least ${rule.minLength} characters` };
    }

    if (rule.maxLength && typeof value === 'string' && value.length > rule.maxLength) {
      return { field, message: `${field} must be no more than ${rule.maxLength} characters` };
    }

    if (rule.pattern && typeof value === 'string' && !rule.pattern.test(value)) {
      return { field, message: `${field} format is invalid` };
    }

    if (rule.custom && !rule.custom(value)) {
      return { field, message: `${field} is invalid` };
    }

    return null;
  }, [validationRules]);

  const validateForm = useCallback(() => {
    const newErrors: ValidationError[] = [];
    
    Object.keys(validationRules).forEach(field => {
      const error = validateField(field, data[field]);
      if (error) {
        newErrors.push(error);
      }
    });

    setErrors(newErrors);
    setIsValid(newErrors.length === 0);
    return newErrors.length === 0;
  }, [data, validationRules, validateField]);

  const updateField = useCallback((field: keyof T, value: unknown) => {
    setData(prev => ({ ...prev, [field]: value }));
    
    // Clear field error when user starts typing
    setErrors(prev => prev.filter(error => error.field !== field));
  }, []);

  const clearErrors = useCallback(() => {
    setErrors([]);
    setIsValid(false);
  }, []);

  const getFieldError = useCallback((field: string) => {
    return errors.find(error => error.field === field)?.message;
  }, [errors]);

  return {
    data,
    errors,
    isValid,
    updateField,
    validateForm,
    validateField,
    clearErrors,
    getFieldError,
    setData
  };
};

// Predefined validation rules for contact form
export const contactFormValidationRules: ValidationRules = {
  firstName: {
    required: true,
    minLength: 2,
    maxLength: 50
  },
  lastName: {
    required: true,
    minLength: 2,
    maxLength: 50
  },
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  },
  company: {
    required: true,
    minLength: 2,
    maxLength: 100
  },
  message: {
    required: true,
    minLength: 10,
    maxLength: 1000
  },
  phone: {
    pattern: /^[\+]?[1-9][\d]{0,15}$/
  }
};
