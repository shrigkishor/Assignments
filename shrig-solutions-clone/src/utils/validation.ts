import { ValidationRule, ValidationError } from '@/types';

export class ValidationService {
  static validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  static validatePhone(phone: string): boolean {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone);
  }

  static validateRequired(value: unknown): boolean {
    if (value === null || value === undefined) return false;
    if (typeof value === 'string') return value.trim() !== '';
    if (typeof value === 'number' || typeof value === 'boolean') return true;
    return String(value).trim() !== '';
  }

  static validateMinLength(value: string, minLength: number): boolean {
    return value.length >= minLength;
  }

  static validateMaxLength(value: string, maxLength: number): boolean {
    return value.length <= maxLength;
  }

  static validatePattern(value: string, pattern: RegExp): boolean {
    return pattern.test(value);
  }

  static validateField(field: string, value: unknown, rule: ValidationRule): ValidationError | null {
    if (rule.required && !this.validateRequired(value)) {
      return { field, message: `${field} is required` };
    }

    if (rule.minLength && typeof value === 'string' && !this.validateMinLength(value, rule.minLength)) {
      return { field, message: `${field} must be at least ${rule.minLength} characters` };
    }

    if (rule.maxLength && typeof value === 'string' && !this.validateMaxLength(value, rule.maxLength)) {
      return { field, message: `${field} must be no more than ${rule.maxLength} characters` };
    }

    if (rule.pattern && typeof value === 'string' && !this.validatePattern(value, rule.pattern)) {
      return { field, message: `${field} format is invalid` };
    }

    if (rule.custom && !rule.custom(value)) {
      return { field, message: `${field} is invalid` };
    }

    return null;
  }
}
