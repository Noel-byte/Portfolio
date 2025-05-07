import React from 'react'
import { Projects } from './Projects'

export const CheckOutWork = ({handleClick,label}) => {

  return (
   <button onClick={handleClick} 
   className='rounded bg-stone-50 px-8 py-3 w-100 block m-auto mt-6 hover:cursor-pointer hover:bg-backcolor hover:text-stone-50 font-buttons'>
    {label}
    </button>
  )
}
