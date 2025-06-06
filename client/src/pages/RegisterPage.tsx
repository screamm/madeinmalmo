import { useState } from 'react'
import type { NewUser } from '../types/user_types';
import RegisterForm from '../components/RegisterForm';


const RegisterPage = () => {


    return (
        <RegisterForm />
  )
}

export default RegisterPage

/**
 * export interface NewUser {
    email: string;
    first_name: string;
    last_name: string;
    password: string;
  }
 * 
 * 
 */