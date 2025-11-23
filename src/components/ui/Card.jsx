import React, { useRef } from 'react'
import styled from 'styled-components';
import theme from '../theme';

export default function Card({titre, details}) {

      const h2 = useRef(null)
      const btn = useRef(null)





      const handleMouseEnter = ()=>{
            //console.log(e.target)
            //console.log(h2.current.classList)
            h2.current.classList +=" activeH2"
            btn.current.classList +=" activeBtn"
            
      }
      const handleMouseLeave = ()=>{
            h2.current.classList.remove("activeH2")
            btn.current.classList.remove("activeBtn")
      }






  return (
    <CardStyled className='relative flex flex-col gap-6 justify-center w-90 ' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <h2 className='flex justify-center items-center h-13' ref={h2}>{titre}</h2>
      <p className='mx-5'>{details}</p>
      <button className='grow-0 mb-6' ref={btn} >En savoir plus</button>
    </CardStyled>
  )
}


const CardStyled = styled.div`

      box-shadow: 0px 10px 30px 0px rgba(153, 153, 153, 0.1);

      h2{
            font-size: large;
            font-weight: bold;
            color: white;
            background-color: ${theme.colors.other};
      }
      .activeH2{
            background-color: ${theme.colors.primary};
      }

      button{
            align-self:center;
            cursor: pointer;
            font-weight: bold;
            font-size: small;
      }
      .activeBtn{ 
            color: ${theme.colors.primary};
      }

      p{
            font-size: 14px;
            text-align: center;
            color :${theme.colors.other};
      }
`;