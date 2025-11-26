import React from 'react'
import styled from 'styled-components';
import theme from './theme';

export default function CardContainer({children}) {
  return (
    <CardContainerStyled className='relative flex lg:flex-row flex-col gap-5 lg:gap-10 px-25 py-5 lg:py-0 bg-white box-border lg:before:block lg:before:absolute lg:before:w-full lg:before:h-[52px] lg:before:left-0 lg:before:top-0 md:flex-row'>
      {children}
    </CardContainerStyled>
  )
}

const CardContainerStyled = styled.div`
      
      &::before{
        background-color: ${theme.colors.secondaryLight};
      }
  
`;
