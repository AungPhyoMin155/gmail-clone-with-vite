import React from 'react'

const SidebarOption = ({ Icon , title , number ,selected}) => {
  return (
    <div className={`flex p-2 hover:text-red-500 hover:bg-red-200 hover:rounded-r-full ${selected && `bg-red-200 rounded-r-full text-red-500`}`} style={{}}>
        <Icon />
        <h3 className='font-semibold ml-2 flex-1'>{title}</h3>
        <p className='font-semibold'>{number}</p>
    </div>
  )
}

export default SidebarOption