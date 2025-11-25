import React from 'react'
import H1 from '../../ui/H1'
import SubTitle from '../../ui/SubTitle'
import styled from 'styled-components';
import banner from '../../../assets/top-banner.jpg'

export default function AboutHeader() {
  return (
    <AboutHeaderStyled className='relative w-full py-25'>

      <div className='relative z-20'>
            <H1>à propos</H1>
            <SubTitle from="Accueil" to="à propos" />
      </div>

    </AboutHeaderStyled>
  )
}


const AboutHeaderStyled = styled.div`

      &::before{
            display: block;
            position: absolute;
            content: "";
            width: 1351px;
            height: 150%;
            background: url(${banner}) rgba(0,0,0, 0.7);
            background-blend-mode: darken;
            opacity: 1;
            z-index: 0;
            top: -75px;
            left: -120px;
      }
  
`;