import React, { useState } from 'react'
import type { LoginCredentials } from '../types/user_types';
type LoginFormProps = {
    onsubmit: (credentials: LoginCredentials)=> void;
}
const LoginForm: React.FC<LoginFormProps> = ({onsubmit}) => {
    const [userMailInput, setuserMailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const handleSubmit = (e: React.FormEvent)=> {
        e.preventDefault();
        const inputCredentials:LoginCredentials = {
            email: userMailInput.trim(),
            password: passwordInput.trim()
        }
        onsubmit(inputCredentials)
        console.log("Logging in with the following input: " ,inputCredentials )
        setuserMailInput("");
        setPasswordInput("");
    }
  return (
    <form onSubmit={handleSubmit}>
    <label >
        email
        <input type="text" name="" id="" onChange={(e)=> setuserMailInput(e.target.value)} value={userMailInput}/>
    </label>
    <label>
        password
        <input type="password" name="" id="" onChange={(e)=> setPasswordInput(e.target.value)} value={passwordInput}/>
    </label>
    <button type="submit">Login</button>
</form>
  )
}

export default LoginForm