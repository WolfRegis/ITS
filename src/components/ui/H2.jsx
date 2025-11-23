import React from 'react'
import styled from 'styled-components';

export default function H2({children, color}) {

  return <H2Styled className={color=="white" ? "text-white" : "text-black"}>{children}</H2Styled>
}

const H2Styled = styled.h2`
      font-size: xx-large;
      font-weight: bold;
  
`;