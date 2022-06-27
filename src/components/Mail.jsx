import { ArrowBack, CheckCircle, Delete, Email, Error, ExitToApp, InfoOutlined, LabelImportant, MoreVert, MoveToInbox, Print, UnfoldMore, Watch, WatchLater } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { selectOpenMail } from '../features/counter/mailSlice';
import { useSelector } from 'react-redux';

const Mail = () => {
  const history = useNavigate();
  const selectedMail = useSelector(selectOpenMail);
  return (
    <div className='flex-1 bg-gray-50'>
      
      {/* Mail Tools */}
      <div className='flex justify-between bg-white'>
        {/* Left */}
        <div className=''>
          <IconButton onClick={()=> history('/')}>
            <ArrowBack />
          </IconButton>

          <IconButton>
            <MoveToInbox />
          </IconButton>

          <IconButton>
            <Error />
          </IconButton>

          <IconButton>
            <Delete />
          </IconButton>

          <IconButton>
            <Email />
          </IconButton>

          <IconButton>
            <WatchLater />
          </IconButton>

          <IconButton>
            <CheckCircle />
          </IconButton>

          <IconButton>
            <LabelImportant />
          </IconButton>

          <IconButton>
            <MoreVert /> 
          </IconButton>

          <IconButton>
            
          </IconButton>

        </div>
       
        {/* Right */}
        <div className=''>
          <IconButton>
            <UnfoldMore />
          </IconButton>

          <IconButton>
            <Print />
          </IconButton>

          <IconButton>
            <ExitToApp />
          </IconButton>
        </div>
      </div>
      {/* Mail Body */}
      <div className='m-[30px] shadow-md bg-white h-[100vh] flex flex-col p-[20px]'>
        {/* Header */}
        <div className='flex items-center p-5 border-b border-gray-100 relative'>
          <h2 className='font-bold mr-5'>{selectedMail?.subject}</h2>
          <LabelImportant className='text-[#e8ab02]' />
          <p className='mx-5'>{selectedMail?.title}</p>
          <p className='absolute top-[24px] right-0 text-[12px] text-gray-500'>{selectedMail?.time}</p>
        </div>

        {/* Message */}
        <div>
          <p className='p-[10px] mr-5 break-words'>
            {selectedMail?.description}
          </p>
        </div>
        
      </div>
       
    </div>
  )
}

export default Mail