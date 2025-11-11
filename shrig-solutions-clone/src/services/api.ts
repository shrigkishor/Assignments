import { ApiResponse, ContactForm } from '@/types';

export interface IApiService {
  get<T>(endpoint: string): Promise<ApiResponse<T>>;
  post<T>(endpoint: string, data: unknown): Promise<ApiResponse<T>>;
  put<T>(endpoint: string, data: unknown): Promise<ApiResponse<T>>;
  delete<T>(endpoint: string): Promise<ApiResponse<T>>;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  socialMedia: {
    linkedin: string;
    github: string;
    facebook: string;
    instagram: string;
  };
}

export interface IContactService {
  submitContactForm(form: ContactForm): Promise<ApiResponse<{ success: boolean }>>;
  getContactInfo(): Promise<ApiResponse<ContactInfo>>;
}

export class ApiService implements IApiService {
  private baseUrl: string;

  constructor(baseUrl: string = '/api') {
    this.baseUrl = baseUrl;
  }

  async get<T>(endpoint: string): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`);
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Request failed');
      }

      return {
        data,
        success: true
      };
    } catch (error) {
      return {
        data: null as T,
        success: false,
        message: error instanceof Error ? error.message : 'Unknown error',
        errors: [error instanceof Error ? error.message : 'Unknown error']
      };
    }
  }

  async post<T>(endpoint: string, data: unknown): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      const responseData = await response.json();
      
      if (!response.ok) {
        throw new Error(responseData.message || 'Request failed');
      }

      return {
        data: responseData,
        success: true
      };
    } catch (error) {
      return {
        data: null as T,
        success: false,
        message: error instanceof Error ? error.message : 'Unknown error',
        errors: [error instanceof Error ? error.message : 'Unknown error']
      };
    }
  }

  async put<T>(endpoint: string, data: unknown): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      const responseData = await response.json();
      
      if (!response.ok) {
        throw new Error(responseData.message || 'Request failed');
      }

      return {
        data: responseData,
        success: true
      };
    } catch (error) {
      return {
        data: null as T,
        success: false,
        message: error instanceof Error ? error.message : 'Unknown error',
        errors: [error instanceof Error ? error.message : 'Unknown error']
      };
    }
  }

  async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method: 'DELETE',
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Request failed');
      }

      return {
        data,
        success: true
      };
    } catch (error) {
      return {
        data: null as T,
        success: false,
        message: error instanceof Error ? error.message : 'Unknown error',
        errors: [error instanceof Error ? error.message : 'Unknown error']
      };
    }
  }
}

export class ContactService implements IContactService {
  private apiService: IApiService;

  constructor(apiService: IApiService) {
    this.apiService = apiService;
  }

  async submitContactForm(form: ContactForm): Promise<ApiResponse<{ success: boolean }>> {
    return this.apiService.post<{ success: boolean }>('/contact', form);
  }

  async getContactInfo(): Promise<ApiResponse<ContactInfo>> {
    return this.apiService.get<ContactInfo>('/contact-info');
  }
}

// Factory for creating service instances
export class ServiceFactory {
  private static apiService: IApiService;
  private static contactService: IContactService;

  static getApiService(): IApiService {
    if (!this.apiService) {
      this.apiService = new ApiService();
    }
    return this.apiService;
  }

  static getContactService(): IContactService {
    if (!this.contactService) {
      this.contactService = new ContactService(this.getApiService());
    }
    return this.contactService;
  }
}
