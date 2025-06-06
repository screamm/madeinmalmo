
import type { AuthenticatedUser, LoginCredentials } from '../types/user_types';
import LoginForm from '../components/LoginForm';
import { Dummyusers } from '../dummyData/users';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

type LoginPageProps = {
    login: (user: AuthenticatedUser) => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({login}) => {
    const navigate = useNavigate()
    const loginUser = (data: LoginCredentials)=> {
        const user = Dummyusers.find((user: AuthenticatedUser)=> user.email === data.email)
        if (!user) {
            return
        }
        
        login(user)
        navigate("/users/" + user.id)
        toast.success("Login successful!", { icon: () => "🤩" });
        
    }
  return (
    

    <LoginForm onsubmit={(credentials)=>  loginUser(credentials)}/>
  )
}
