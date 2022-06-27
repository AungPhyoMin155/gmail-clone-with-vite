import { ArrowDownward, ArrowDownwardOutlined, ArrowDropDown, CheckBox, ChevronLeft, ChevronRight, Inbox, KeyboardHide, LocalOffer, MoreVertOutlined, People, RedoOutlined, Settings } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase'
import EmailRow from './EmailRow'
import SectionOption from './SectionOption'

const EmailList = () => {
    const [emails, setEmails] = useState([]);
    

    useEffect(()=>{
        db.collection('emails').orderBy('timestamp' , 'desc').onSnapshot(snapshot=>{
            setEmails(snapshot.docs.map(doc=>({
                id: doc.id,
                data: doc.data(),
            })))
        })
    },[])

  return (
    <div className='flex-1 overflow-scroll h-[100vh]'>
        {/* EmialList Setting */}
        <div className='flex justify-between bg-white sticky top-0 shadow-sm'>
            {/* EmailList Setting Left */}
            <div>
                <CheckBox />
                <IconButton>
                    <ArrowDropDown />
                </IconButton>
                <IconButton>
                    <RedoOutlined />
                </IconButton>
                <IconButton>
                    <MoreVertOutlined />
                </IconButton>
            </div>

            {/* EmailList Setting Right */}
            <div>
                <IconButton>
                    <ChevronLeft />
                </IconButton>
                <IconButton>
                    <ChevronRight />
                </IconButton>
                <IconButton>
                    <KeyboardHide />
                </IconButton>
                <IconButton>
                    <Settings />
                </IconButton>
            </div>

        </div>

        {/* EmailList Sections */}
        <div className='flex shadow-sm mt-[1px] bg-white sticky top-0 z-20'>
            <SectionOption Icon={Inbox} title="Primary" color="#ce3a16" selected />
            <SectionOption Icon={People} title="Social" color="#1622ce" />
            <SectionOption Icon={LocalOffer} title="Promotions" color="#2cce16" />
        </div>

        {/* Email List List */}
        <div>
            {
                emails.map(({id,data:{to, subject, message,timestamp}})=>(
                    <EmailRow 
                        key={id}
                        id={id}
                        title={to}
                        subject={subject}
                        description={message}
                        time={new Date(timestamp?.seconds * 1000).toUTCString()}
                    />
                ))
            }
          
        </div>
    </div>
  )
}

export default EmailList