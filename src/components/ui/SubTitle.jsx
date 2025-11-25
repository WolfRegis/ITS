import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

export default function SubTitle({from, to}) {
  return (
    <p className='flex gap-2 items-center justify-center text-white font-semibold mt-5'>
      <button className='cursor-pointer hover:text-[#17a2b8]'>{from}</button> <FaArrowRightLong /> <button className='cursor-pointer'>{to}</button>
    </p>
  )
}
