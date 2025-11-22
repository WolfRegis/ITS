import React from 'react'
import styled from 'styled-components';
import theme from '../theme';

export default function Card() {






      const handleMouseEnter = (e)=>{
            console.log(e.target)
      }






  return (
    <CardStyled className='relative flex flex-col gap-6 justify-center w-90 ' onMouseEnter={handleMouseEnter}>
      <h2 className='flex justify-center items-center h-13'>Sécurité</h2>
      <p className='mx-5'>Sécurisez les infrastructures réseaux de vos entreprises pour prévenir, détecter et récupérer en cas de menaces.</p>
      <button className='grow-0 mb-6'>En savoir plus</button>
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
      button{
            align-self:center;
      }
      p{
            font-size: 14px;
            text-align: center;
            color :${theme.colors.other};
      }
`;