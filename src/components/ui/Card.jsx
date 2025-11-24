import React, { useRef } from 'react'
import styled from 'styled-components';
import theme from '../theme';

export default function Card({titre, details}) {

      const h2 = useRef(null)
      const btn = useRef(null)





      const handleMouseEnter = ()=>{
            h2.current.classList +=" activeH2"
            btn.current.classList +=" activeBtn"
            
      }
      const handleMouseLeave = ()=>{
            h2.current.classList.remove("activeH2")
            btn.current.classList.remove("activeBtn")
      }






  return (
    <CardStyled className='relative flex flex-col lg:gap-6 gap-3 justify-center lg:w-90 sm:w-90 shadow-lg' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <h2 className='flex justify-center items-center h-13 text-lg font-bold text-white' ref={h2}>{titre}</h2>
      <p className='mx-5 text-[14px] text-center'>{details}</p>
      <button className='grow-0 mb-6 self-center cursor-pointer font-bold text-sm' ref={btn} >En savoir plus</button>
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