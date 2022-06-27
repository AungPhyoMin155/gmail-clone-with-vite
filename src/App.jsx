import React, { useEffect } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Mail from './components/Mail';
import EmailList from './components/EmailList';
import SendMail from './components/SendMail';
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/counter/mailSlice';
import { login, selectUser } from './features/counter/userSlice';
import Login from './components/Login';
import { auth } from '../firebase';

const App = () => {

  const user = useSelector(selectUser);

  

  const dispatch = useDispatch();

  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      if(user){
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL,
        }))
      }
    })
  },[])
  
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)

  return (
    <Router>
      {
        !user ? <Login /> :

        <div className='h-full'>
          <Header />
          <div className='flex h-full'>
            <Sidebar />
            <Routes>
              <Route path="/mail" element={<Mail />} />
              <Route path="/" element={<EmailList />} />
            </Routes>
          </div>
          {sendMessageIsOpen && <SendMail />}
          
        </div>
      }
      
    </Router>
    
    )
}

export default App