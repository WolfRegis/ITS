import React from 'react'
import styled from 'styled-components';
import theme from './theme.js';

export default function Header({children}) {
  return (
    <HeaderStyled className='flex items-center justify-between relative w-12/12 lg:h-1/2 p-4 lg:px-30 overflow-hidden'>
      {children}
    </HeaderStyled>
  )
}


const HeaderStyled = styled.div`
      background-color: ${theme.colors.secondaryLight};
`;