

import React from 'react'
import SidebarOption from './SidebarOption'
import InboxIcon from "@mui/icons-material/Inbox"
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import NearMeIcon from '@mui/icons-material/NearMe';
import NoteIcon from '@mui/icons-material/Note';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useDispatch } from 'react-redux';
import { openSendMessage } from '../features/counter/mailSlice';

const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <div className='mt-2 flex-[0.3] max-w-[300px] pr-[20px]'>
        <button onClick={()=> dispatch(openSendMessage())} className='flex items-center mb-2 shadow-sm text-gray-600 font-semibold text-sm shadow-gray-400 justify-center p-4 rounded-full'>
            <span className='text-[20px] font-bold mr-2'>+</span>
            <span className=''>Compose</span>
        </button>
        <SidebarOption selected Icon={InboxIcon} title="Inbox" number={54} />

        <SidebarOption Icon={StarBorderIcon} title="Starred" number={0} />
        <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={0} />
        <SidebarOption Icon={LabelImportantIcon} title="Important" number={0} />
        <SidebarOption Icon={NearMeIcon} title="Sent" number={0} />
        <SidebarOption Icon={NoteIcon} title="Drafts" number={0} />
        <SidebarOption Icon={ExpandMoreIcon} title="More" number={0} />
    </div>
  )
}

export default Sidebar