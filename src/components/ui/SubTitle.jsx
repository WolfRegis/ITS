import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'

export default function SubTitle({from, to}) {
  const navigate = useNavigate()

  console.log('je viens de :'+from)
  console.log('je je suis sur :'+to)

  let lien =""

  switch (from){
    case "Accueil":
        lien="/";
        break
    case "Contactez-nous":
        lien=`/contact/${to}`
        break
    case "à propos":
        lien=`/about/${to}`
        break

    default :
        lien ="/"
  }

  return (
    <p className='flex gap-2 items-center justify-center text-white font-semibold mt-5'>
      <button className='cursor-pointer hover:text-[#17a2b8]' onClick={()=>navigate(lien)}>{from}</button> <FaArrowRightLong /> <button>{to}</button>
    </p>
  )
}
