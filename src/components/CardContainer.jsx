import React from 'react'
import styled from 'styled-components';
import theme from './theme';
import Card from './ui/Card';

export default function CardContainer() {
  return (
    <CardContainerStyled className='px-30'>
      <Card></Card>
    </CardContainerStyled>
  )
}

const CardContainerStyled = styled.div`
      /* background-color: ${theme.colors.secondaryLight}; */
      background-color: white;
      
  
`;
