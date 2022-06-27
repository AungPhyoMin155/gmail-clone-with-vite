import React from 'react'

const SectionOption = ({Icon , title ,color ,selected}) => {

  return (
    <div className={`flex border-b-0 hover:border-b-[3px] hover:bg-gray-200 p-[15px] min-w-[200px] cursor-pointer ${selected && `bg-gray-200` }`} style={{color:`${selected && color}`,borderBottomColor:`${color}`,
    borderBottom:`${selected && `3px solid ${color}`}`}}>
        <Icon />
        <h1>{title}</h1>
    </div>
  )
}

export default SectionOption