import type { AuthenticatedUser } from "./user_types";

  
  // Payloaden vid login
  export interface LoginSuccessData {
    token: string;
    user: AuthenticatedUser;
  }
  
  // JSend Success Response
  export interface JSendSuccess<T> {
    status: 'success';
    data: T;
  }
  
  // JSend Error Response (för validering/felhantering)
  export interface JSendFail {
    status: 'fail';
    data: Record<string, any>; // typiskt valideringsfel eller liknande
  }
  
  export interface JSendError {
    status: 'error';
    message: string;
    code?: number;
    data?: any;
  }
  
  // Unionstyp (för hantering av alla möjliga svar)
  export type LoginResponse = JSendSuccess<LoginSuccessData> | JSendFail | JSendError;

