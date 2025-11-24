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





import { useState } from 'react';


export default function Navbar() {

      const [inactive1, setInactive1] = useState(true);
      const [inactive2, setInactive2] = useState(true);
      const [inactive3, setInactive3] = useState(true);

      var menu;


      const dropdownItemsIt = [
            <li><span className='flex flex-row items-center gap-2'><PiNetworkFill /> Réseaux & télécoms </span></li>,
            <li><span className='flex flex-row items-center gap-2'><FaTools /> Maintenance </span></li>,
            <li><span className='flex flex-row items-center gap-2'><MdSecurity /> Sécurité </span></li>,
            <li><span className='flex flex-row items-center gap-2'><FaMapLocationDot /> Géolocalisation </span></li>
      ];
      const dropdownItemsDev = [
            <li><span className='flex flex-row items-center gap-2'><TfiWorld /> Site internet </span></li>,
            <li><span className='flex flex-row items-center gap-2'><FaServer /> VPS-server </span></li>,
            <li><span className='flex flex-row items-center gap-2'><MdTextsms /> sms marketing </span></li>,
            <li><span className='flex flex-row items-center gap-2'><FaCode /> Génie logiciel </span></li>
      ];
      const dropdownItemsElec = [
            <li><span className='flex flex-row items-center gap-2'><FaIndustry /> électricité industrielle </span></li>,
            <li><span className='flex flex-row items-center gap-2'><MdMapsHomeWork />  électricité batiment </span></li>,
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
          
          document.getElementById("navabar").style.transition="all 0.5s ease";
          document.getElementById("navabar").style.backgroundColor=theme.colors.secondaryLight;
    }else{
          document.getElementById("navabar").style.transition="all 0.5s ease";
          document.getElementById("navabar").style.backgroundColor="rgba(4, 9, 30, 0.9)";
    }
}

  window.addEventListener('scroll', handleScroll)








  return (
    <NavbarStyled id="navabar" className="sticky top-0 left-0 w-full h-auto z-2 flex items-center justify-between p-4 shadow-md px-30 border-b-[1px solid #39353e]" onMouseLeave={(e)=>handleUlLeave(e)} >
      <span>
            <img src={logo} alt="ITS Logo" className="w-10" />
      </span>
      <nav>
            <ul className="flex space-x-6 text-white font-semibold cursor-pointer gap-& text-xs">
                  {
                        menu =[
                  <NavItem isDropdown={false} onHover={handleHover}>Accueil</NavItem>,

                  <NavItem isDropdown={false}>à propos</NavItem>,

                  <NavItem isDropdown={true} onHover={handleHover} dropdown={<Dropdown isHidden={inactive1} onMouseLeave={handleMouseLeave}> {dropdownItemsIt} </Dropdown>}>
                        <span className='flex flex-row items-center gap-1 it'>It & Télécoms <IoMdArrowDropdownCircle /></span>
                  </NavItem>,

                  <NavItem isDropdown={true} onHover={handleHover} dropdown={<Dropdown isHidden={inactive2} onMouseLeave={handleMouseLeave}> {dropdownItemsDev} </Dropdown>}>
                        <span className='flex flex-row items-center gap-1 dev'>Développement <IoMdArrowDropdownCircle /></span>
                  </NavItem>,

                  <NavItem isDropdown={true} onHover={handleHover} dropdown={<Dropdown isHidden={inactive3} onMouseLeave={handleMouseLeave}> {dropdownItemsElec} </Dropdown>}>
                        <span className='flex flex-row items-center gap-1 elect'>électricité <IoMdArrowDropdownCircle /></span>
                  </NavItem>,

                  <NavItem isDropdown={false}>formation</NavItem>,

                  <NavItem isDropdown={false}>Contact</NavItem>
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