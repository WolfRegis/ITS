import React from 'react'

export default function ServicesCard({src, title, detail}) {

let backgroundImage=`bg-[url(${src})]`
  return (
      <div className='w-4/4 h-90 border-3'>
            <div className={`${backgroundImage} bg-cover w-full h-2/3 border`}></div>
            <p className='px-2 py-0.5 leading-5'>
                  <h3 className='text-md uppercase font-semibold'>{title}</h3>
                  <span className='text-xs leading-0 text-center'>{detail}</span>
            </p>
      </div>
  )
}
