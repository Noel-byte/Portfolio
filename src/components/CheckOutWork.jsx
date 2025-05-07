import React from 'react'
import { Projects } from './Projects'

export const CheckOutWork = ({handleClick,label}) => {

  return (
   <button onClick={handleClick} 
   className='rounded bg-stone-200 px-8 text-lg py-3 sm:w-1/2 block m-auto mt-6 hover:cursor-pointer hover:bg-dark hover:text-stone-50 font-buttons'>
    {label}
    </button>
  )
}
