export interface NewUser {
    email: string;
    first_name: string;
    last_name: string;
    password: string;
  }
  
  export interface User {
    id: string;
    email: string;
    first_name: string;
    last_name: string;
  }
  
  export interface AuthenticatedUser extends NewUser {
    id: string;
  }
  
  export interface LoginCredentials {
    email: string;
    password: string;
  }