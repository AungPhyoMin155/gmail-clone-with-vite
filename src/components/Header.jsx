import React from 'react'
import MenuIcon from "@mui/icons-material/Menu"
import SearchIcon from "@mui/icons-material/Search"
import { Avatar, IconButton } from '@mui/material'
import { AppBlockingOutlined, Apps, ArrowDropDown, Notifications } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from '../features/counter/userSlice'
import { auth } from '../../firebase'

const Header = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const signOut = () => {
        auth.signOut().then(()=>{
            dispatch(logout())
        })
        
    }
  return (
    <div className='flex items-center justify-between bg-[#f2f2f2] p-2 shadow-sm'>
        <div className='flex items-center'>
            <IconButton>
                <MenuIcon />
            </IconButton>
            <img className='h-10 object-contain' src="https://cdn.arstechnica.net/wp-content/uploads/2020/12/gmail-760x380.jpg" alt="gmail logo" />
            
        </div>

        <div className='flex flex-[0.7] bg-gray-300 items-center'>
            <SearchIcon className='text-gray-400 ml-2' />
            <input className='p-2 h-auto font-medium outline-0 bg-transparent border-none w-full' type="text" placeholder='Search amil' />
            <ArrowDropDown className='text-gray-400' />
        </div>

        <div className='flex items-center pr-2'>
            <IconButton>
                <Apps />
            </IconButton>
            <IconButton>
                <Notifications />
            </IconButton>

            <Avatar onClick={signOut} src={user?.photoUrl} />
        </div>
    </div>
  )
}

export default Header