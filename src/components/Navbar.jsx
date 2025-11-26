import logo from '../assets/logo.png'
import styled from 'styled-components';
import theme from './theme.js';
import NavItem from './ui/NavItem';
import Dropdown from './ui/Dropdown';
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { FaMapLocationDot, FaCode  } from "react-icons/fa6";
import { MdSecurity, MdTextsms, MdMapsHomeWork   } from "react-icons/md";
import { FaTools, FaServer, FaIndustry  } from "react-icons/fa";
import { PiNetworkFill } from "react-icons/pi";
import { TfiWorld } from "react-icons/tfi";
import { useEffect, useState } from 'react';
import {useNavigate } from 'react-router-dom';


export default function Navbar({from}) {

      const [inactive1, setInactive1] = useState(true);
      const [inactive2, setInactive2] = useState(true);
      const [inactive3, setInactive3] = useState(true);

      const navigate = useNavigate()

      var menu;
      let lienMaintenance=`/maintenance/${from}`
      let lienReseau=`/reseau/${from}`
      let lienSecurite=`/securite/${from}`
      let lienGeo=`/géolocalisation/${from}`
      let lienSite=`/site_internet/${from}`
      let lienVps=`/vps/${from}`
      let lienSMS=`/sms_marketing/${from}`
      let lienLogiciel=`/génie_logiciel/${from}`
      let lienElecIndus=`/électricité_industrielle/${from}`
      let lienElecBAT=`/électricité_batiment/${from}`



      const dropdownItemsIt = [
            <li key={Date.now + 10} ><span className='flex flex-row items-center gap-2' onClick={(e)=>{e.stopPropagation();navigate(lienReseau)}}><PiNetworkFill /> Réseaux & télécoms </span></li>,
            <li key={Date.now + 11} ><span className='flex flex-row items-center gap-2' onClick={(e)=>{e.stopPropagation();navigate(lienMaintenance)}}><FaTools /> Maintenance </span></li>,
            <li key={Date.now + 12} ><span className='flex flex-row items-center gap-2' onClick={(e)=>{e.stopPropagation();navigate(lienSecurite)}}><MdSecurity /> Sécurité </span></li>,
            <li key={Date.now + 13} ><span className='flex flex-row items-center gap-2' onClick={(e)=>{e.stopPropagation();navigate(lienGeo)}}><FaMapLocationDot /> Géolocalisation </span></li>
      ];
      const dropdownItemsDev = [
            <li key={Date.now + 14} ><span className='flex flex-row items-center gap-2' onClick={(e)=>{e.stopPropagation();navigate(lienSite)}}><TfiWorld /> Site internet </span></li>,
            <li key={Date.now + 15} ><span className='flex flex-row items-center gap-2' onClick={(e)=>{e.stopPropagation();navigate(lienVps)}}><FaServer /> VPS-server </span></li>,
            <li key={Date.now + 16} ><span className='flex flex-row items-center gap-2' onClick={(e)=>{e.stopPropagation();navigate(lienSMS)}}><MdTextsms /> sms marketing </span></li>,
            <li key={Date.now + 17} ><span className='flex flex-row items-center gap-2' onClick={(e)=>{e.stopPropagation();navigate(lienLogiciel)}}><FaCode /> Génie logiciel </span></li>
      ];
      const dropdownItemsElec = [
            <li key={Date.now + 18} ><span className='flex flex-row items-center gap-2' onClick={(e)=>{e.stopPropagation();navigate(lienElecIndus)}}><FaIndustry /> électricité industrielle </span></li>,
            <li key={Date.now + 19} ><span className='flex flex-row items-center gap-2' onClick={(e)=>{e.stopPropagation();navigate(lienElecBAT)}}><MdMapsHomeWork />  électricité batiment </span></li>,
          ];


const handleUlLeave = (e)=>{
      e.preventDefault()
      setInactive1(true)
      setInactive2(true)
      setInactive3(true)
}


const handleHover = (e) => {

      menu.map(li=>{
            if(li.props.isDropdown){
                  //console.log(e.target.classList.contains("it"))
                  //console.log(li.props.children.props.className)
                  if(e.target.classList.contains("it")){
                        //console.log("survol sur ménu "+ li.props.children.props.children[0])
                        setInactive1(false)
                        setInactive2(true)
                        setInactive3(true)

                  }else if(e.target.classList.contains("dev")){
                              setInactive1(true)
                              setInactive2(false)
                              setInactive3(true)

                  }else if(e.target.classList.contains("elect")){
                              setInactive1(true)
                              setInactive2(true)
                              setInactive3(false)
                  }
            }
            
       })

      
}

const handleMouseLeave = (e) => {
         menu.map(li=>{
            if(li.props.isDropdown){
                  if(e.target.classList.contains("it")){
                        setInactive1(true)

                  }else if(e.target.classList.contains("dev")){
                        setInactive2(true)

                  }else if(e.target.classList.contains("elect")){
                        setInactive3(true)
                  }


            }
            
       })


}



const handleScroll =()=> {

    if(window.scrollY==0){
          
          document.getElementById("navbar").style.transition="all 0.5s ease";
          document.getElementById("navbar").style.backgroundColor=theme.colors.secondaryLight;
    }else{
          document.getElementById("navbar").style.transition="all 0.5s ease";
          document.getElementById("navbar").style.backgroundColor="rgba(4, 9, 30, 0.9)";
    }
}


useEffect(() => {
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll, {passive:true});
}, []);








  return (
    <NavbarStyled id="navbar" className="sticky top-0 left-0 w-full h-auto z-50 flex items-center justify-between py-4 shadow-md lg:px-30 px-3" onMouseLeave={(e)=>handleUlLeave(e)} >
      <span >
            <img src={logo} alt="ITS Logo" className="lg:w-10 w-5" />
      </span>
      <nav className='lg:visible relative'>
            <ul className="relative flex flex-row gap-2 lg:gap-5 text-white items-center font-semibold cursor-pointer text-[5px] lg:text-sm ">
                  {
                        menu =[
                  <NavItem isDropdown={false} key={Date.now + 1} lien="/">Accueil</NavItem>,

                  <NavItem isDropdown={false} key={Date.now + 2} lien={`/about/${from}`}>à propos</NavItem>,

                  <NavItem isDropdown={true} key={Date.now + 3}  onHover={handleHover} dropdown={<Dropdown isHidden={inactive1} onMouseLeave={handleMouseLeave}> {dropdownItemsIt} </Dropdown>}>
                        <span className='flex flex-row lg:items-center items-start  lg:gap-1 it'>It & Télécoms <IoMdArrowDropdownCircle className='lg:text-sm text-[6px]' /></span>
                  </NavItem>,

                  <NavItem isDropdown={true} key={Date.now + 4} onHover={handleHover} dropdown={<Dropdown isHidden={inactive2} onMouseLeave={handleMouseLeave}> {dropdownItemsDev} </Dropdown>}>
                        <span className='flex flex-row lg:items-center items-start  lg:gap-1 dev'>Développement <IoMdArrowDropdownCircle className='lg:text-sm text-[6px]' /></span>
                  </NavItem>,

                  <NavItem isDropdown={true} key={Date.now + 5} onHover={handleHover} dropdown={<Dropdown isHidden={inactive3} onMouseLeave={handleMouseLeave}> {dropdownItemsElec} </Dropdown>}>
                        <span className='flex flex-row lg:items-center items-start lg:gap-1 elect'>électricité <IoMdArrowDropdownCircle className='lg:text-sm text-[6px]' /></span>
                  </NavItem>,

                  <NavItem isDropdown={false} key={Date.now + 6} lien={`/formation/${from}`}>formation</NavItem>, 

                  <NavItem isDropdown={false} key={Date.now + 7} lien={`/contact/${from}`}>Contact</NavItem>
      ]
                  }   
                  
            </ul>
      </nav>
    </NavbarStyled>
  )
}


const NavbarStyled = styled.div`
      background-color: ${theme.colors.secondaryLight};
`;