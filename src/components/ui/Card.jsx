import React, { useRef } from 'react'
import styled from 'styled-components';
import theme from '../theme';
import { IoIosArrowDown } from 'react-icons/io';

export default function Card({titre, details}) {

      const card = useRef(null)




      const handleMouseEnter = ()=>{
            card.current.childNodes[0].classList +=" activeH2"
            card.current.childNodes[2].classList +=" activeBtn" 
            card.current.childNodes[1].classList.remove("hidden")
            card.current.childNodes[2].classList.remove("hidden")
            
      }
      const handleMouseLeave = ()=>{
            card.current.childNodes[0].classList.remove("activeH2")
            card.current.childNodes[1].classList.add("hidden")
            card.current.childNodes[2].classList.add("hidden")
            card.current.childNodes[2].classList.remove("activeBtn")
      }






  return (
    <CardStyled className='relative flex flex-col lg:gap-6 gap-3 justify-center lg:w-90 w-50 shadow-lg h-full' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} ref={card}>
      <h2 className='flex lg:justify-center justify-between items-center lg:h-13 h-8 lg:text-lg text-xs font-bold text-white px-2.5'>{titre} <IoIosArrowDown className='relative lg:hidden' /></h2>
      <p className='mx-5 lg:text-[14px] text-xs text-center lg:block hidden'>{details}</p>
      <button className='grow-0 mb-6 self-center cursor-pointer font-bold lg:text-sm text-xs lg:block hidden' >En savoir plus</button>
    </CardStyled>
  )
}


const CardStyled = styled.div`

      h2{
            background-color: ${theme.colors.other};
      }
      .activeH2{
            background-color: ${theme.colors.primary};
      }

      .activeBtn{ 
            color: ${theme.colors.primary};
      }

      p{

            color :${theme.colors.other};
      }
`;