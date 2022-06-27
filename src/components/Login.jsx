import { Button } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux';
import {auth, provider} from "../../firebase"
import { login } from '../features/counter/userSlice';



const Login = () => {
    const dispatch = useDispatch();
    const signIn = ()=> {
        auth.signInWithPopup(provider).then(({user})=> {
            dispatch(login({
                displayName: user.displayName,
                email: user.email,
                photoUrl: user.photoURL
            })).catch(error=> alert(error))
        })
    }
  return (
    <div className='flex items-center justify-center bg-[#f2f2f2] h-[100vh]'>
        <div className='flex flex-col'>
            <img className='h-[200px] object-contain' src="https://cdn.arstechnica.net/wp-content/uploads/2020/12/gmail-760x380.jpg" alt="gmail logo" />
            <Button onClick={signIn}>Sign in</Button>
        </div>
    </div>
  )
}

export default Login