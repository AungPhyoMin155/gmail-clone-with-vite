import { CheckBox, CheckBoxOutlineBlank, LabelImportant, StarBorder } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { selectMail } from '../features/counter/mailSlice';
import { useDispatch } from 'react-redux';

const EmailRow = ({ id ,title ,subject , description, time }) => {
    
    const history = useNavigate();
    const dispatch = useDispatch();

    const openMail = () => {
        dispatch(selectMail({
            id,title,subject, description,time,
        }))

        history("/mail");
    }
  
    return (
    <div onClick={openMail} className='flex items-center cursor-pointer h-[50px] border-b z-40 hover:border-t hover:border-l hover:shadow-md hover:border-l-gray-300 hover:border-t-gray-300 border-b-gray-300'>
        {/* EmailRow Options */}
        <div className='flex items-center'>
            <CheckBoxOutlineBlank />
            <IconButton>
                <StarBorder />
            </IconButton>
            <IconButton>
                <LabelImportant />
            </IconButton>
        </div>

        {/* EmailRow title */}
        <h3 className='text-[13px] flex-[0.3] font-bold'>{title}</h3>

        {/* EmailRow message */}
        <div className='flex items-center flex-[0.8] text-[13px]'>
            <h4 className='w-[400px] font-bold whitespace-nowrap overflow-hidden px-[5px] text-ellipsis'>
                {subject}
                <span className='font-normal text-gray-500'>-{description}</span>
            </h4>
        </div>
        {/* EmailRow description */}
        {/* EmailRow time */}
        <div className='pr-[15px] text-[9px] font-bold'>{time}</div>
    </div>
  )
}

export default EmailRow