
import './App.scss'
import { Route, Routes } from 'react-router'
import IndexPage from './pages/IndexPage'
import { LoginPage } from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import UserPage from './pages/UserPage'
import Navigation from './components/Navigation'
import NotFoundPage from './pages/NotFoundPage'
import { useState } from 'react'
import type { AuthenticatedUser } from './types/user_types'
import { ToastContainer } from "react-toastify";

function App() {
	const [user, setUser] = useState<AuthenticatedUser | null>(null)
	return (
    <>
		<Navigation/>
		<h1>Welcome  {user ?user?.first_name : ""}</h1>
    	<Routes>
		<Route path='/' element={<IndexPage/>} />
		<Route path='/login' element={<LoginPage login={(user)=>setUser(user) }/>} />
		<Route path='/register' element={<RegisterPage/>} />
		<Route path='/users/:userId' element={<UserPage/>}/>
		<Route path='*' element={<NotFoundPage /> } />
    	</Routes>
		<ToastContainer
				// position="bottom-right"
				// autoClose={3000}  // close automatically after 3 seconds instead of 5
				// autoClose={false}
				// pauseOnFocusLoss={false}  // continue to autoclose even if the user has lost focus
				closeOnClick
				theme="colored"
				limit={5}
			/>
   	</>
  )
}

export default App
