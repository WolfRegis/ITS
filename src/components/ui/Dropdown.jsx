//import React, { useState } from 'react'
import styled from 'styled-components';
import theme from '../Theme';
export default function Dropdown({isHidden, children, onMouseLeave}) {

  return (
    <DropdownStyled className="flex flex-col justify-start gap-2 absolute top-10 w-60 right-0 bg-white shadow-lg p-2" hidden={isHidden} onMouseLeave={onMouseLeave} >
      {children}
    </DropdownStyled>
  )
}


const DropdownStyled = styled.ul`
  color: ${theme.colors.mainColor};
  li{
    font-size: 0.8rem;

    &:hover{
      color: ${theme.colors.primary};
    }
  }
`;
