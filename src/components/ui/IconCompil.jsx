import React from 'react'
import { FiFacebook, FiInstagram, FiLinkedin} from "react-icons/fi";

export default function IconCompil() {
  return (
    <ul className='flex flex-row justify-between items-center gap-3 h-full'>
      <li className='text-md text-white'><a href="https://www.facebook.com/informations.technologies.services/"><FiFacebook /></a></li>
      <li className='text-md text-white'><a href="#"><FiInstagram /></a></li>
      <li className='text-md text-white'><a href="#"><FiLinkedin  /></a></li>
    </ul>
  )
}
