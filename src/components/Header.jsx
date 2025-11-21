import React from 'react'
import styled from 'styled-components';
import theme from './Theme';

export default function Header() {
  return (
    <HeaderStyled className='flex relative w-12/12 h-1/2'>
      mon header
    </HeaderStyled>
  )
}


const HeaderStyled = styled.div`
      background-color: ${theme.colors.secondary};
`;