import React, { useState } from 'react'
import type { NewUser } from '../types/user_types';

const RegisterForm = () => {
    const [inputMail, setInputMail] = useState("");
    const [inputFirstname, setInputFirstname] = useState("");
    const [inputLastname, setinputLastname] = useState("");
    const [inputPassWord, setInputPassword]= useState("");
    const [inputConfirmPassword, setinputConfirmPassword] = useState("");
    const handleSubmit = ()=> {
        const newUserdata: NewUser = {
            email: inputMail.trim(),
            first_name: inputFirstname.trim(),
            last_name: inputLastname.trim(),
            password: inputPassWord.trim(),
    
        }
        console.log("Registered user with the following data: ", newUserdata);
    }
  return (
    <form onSubmit={handleSubmit}>
    <label >Enter Email
        <input type="text"  onChange={(e)=> setInputMail(e.target.value)} value={inputMail}/>
    </label>
    <label >
        First name
        <input type="text"  onChange={(e)=> setInputFirstname(e.target.value)} value={inputFirstname}/>
    </label>
    <label >
        Last name
        <input type="text"  onChange={(e)=> setinputLastname(e.target.value)} value={inputLastname}/>
    </label>
    <label >
        Password
        <input type="password" onChange={(e)=> setInputPassword(e.target.value)} value={inputPassWord}/>
    </label>
    <label >
        re-enter password
        <input type="password"  onChange={(e)=> setinputConfirmPassword(e.target.value)} value={inputConfirmPassword}/>
    </label>
    <button disabled={inputPassWord !== inputConfirmPassword || inputPassWord.trim().length <= 6} type="submit">Register!</button>
</form>
  )
}

export default RegisterForm