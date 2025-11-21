import React from 'react'
import styled from 'styled-components';

export default function NavItem({isDropdown, dropdown, onHover,children}) {


  return( 
  <NavItemStyled className={isDropdown ? "relative group" : ""} onMouseEnter={(e)=>isDropdown && onHover(e)}   >
            {children}
            {isDropdown && dropdown}
  </NavItemStyled>

)}


const NavItemStyled = styled.li`
      text-transform: uppercase;
`;