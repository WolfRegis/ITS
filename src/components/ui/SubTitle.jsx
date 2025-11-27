import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'

export default function SubTitle({from, to}) {
  const navigate = useNavigate()

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
    case "formation":
        lien=`/formation/${to}`
        break
    case "maintenance":
        lien=`/maintenance/${to}`
        break
    case "réseau":
        lien=`/réseau/${to}`
        break
    case "sécurite":
        lien=`/sécurité/${to}`
        break
    case "géolocalisation":
        lien=`/géolocalisation/${to}`
        break
    case "site internet":
        lien=`/site_internet/${to}`
        break
    case "VPS-server":
        lien=`/vps/${to}`
        break
    case "sms marketing":
        lien=`/sms_marketing/${to}`
        break
    case "génie logiciel":
        lien=`/génie_logiciel/${to}`
        break
    case "électricité industrielle":
        lien=`/électricité_industrielle/${to}`
        break
    case "électricité batiment":
        lien=`/électricité_batiment/${to}`
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
