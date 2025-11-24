import React from 'react'
import ItBan from './ItBan'
import IconCompil from './IconCompil'

export default function CopyrightBan() {
  return (
    <div className='flex flex-row justify-around py-5 lg:justify-between w-full'>
      <p className='text-xs'>Copyright ©2025 <i className='text-[#17a2b8]'>ITS-groupe</i> All rights reserved</p>
      <IconCompil/>
    </div>
  )
}
