import React from 'react'
import styled from 'styled-components';
import theme from '../theme';




export default function BtnPrimary({children, inverse}) {

      
      let color
      let backgroundColor
      !inverse ? color= "white": color=theme.colors.primary
      !inverse ? backgroundColor = theme.colors.primary : backgroundColor="white"




  return <BtnPrimaryStyled className='min-w-45 h-10 rounded-[30px] shrink-0 self-start px-5' color={color} background={backgroundColor} >{children}</BtnPrimaryStyled>

}


const BtnPrimaryStyled = styled.button`

    background-color: ${({background})=>(background)};
    color: ${({color})=>(color)};
    font-weight: bold;
    font-size: small;

    &:hover{
      background-color: ${({color})=>(color)};
      color: ${({background})=>(background)};

    }
`;