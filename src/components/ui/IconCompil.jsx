import React from 'react'
import { FiFacebook, FiInstagram, FiLinkedin} from "react-icons/fi";

export default function IconCompil() {
  return (
    <ul className='flex flex-row justify-evenly items-center lg:gap-3 gap-0.5 h-full'>
      <li className='lg:text-lg text-xs text-white'><a href="https://www.facebook.com/informations.technologies.services/"><FiFacebook /></a></li>
      <li className='lg:text-lg text-xs text-white'><a href="#"><FiInstagram /></a></li>
      <li className='lg:text-lg text-xs text-white'><a href="#"><FiLinkedin  /></a></li>
    </ul>
  )
}
