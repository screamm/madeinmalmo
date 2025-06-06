import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import type { AuthenticatedUser, User } from '../types/user_types';
import { Dummyusers } from '../dummyData/users';
import BlogpostForm from '../components/BlogpostForm';

const UserPage = () => {
    const {userId} = useParams();
    const [user, setUser] = useState<AuthenticatedUser | null>(null)
    useEffect(()=> {
        const findUser =  Dummyusers.find((user)=> user.id === userId );
        if (!findUser) {
            setUser(null);
            return;
        }
        setUser(findUser);
    },[userId])
  return (
    
    <div>
        {user && <p>{user.first_name}</p>}

        <BlogpostForm onsubmit={(blogData)=> console.log(blogData)}/>
    </div>
  )
}

export default UserPage