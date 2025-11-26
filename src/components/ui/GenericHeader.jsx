import React from 'react'
import H1 from './H1'
import SubTitle from './SubTitle'
import styled from 'styled-components';
import banner from '../../assets/top-banner.jpg'

export default function GenericHeader({name, from}) {
  return (
    <AboutHeaderStyled className='relative w-full lg:py-25 py-10   before:block'>

      <div className='relative z-20'>
            <H1>{name}</H1>
            <SubTitle from={from} to={name} />
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
            height: 135%;
            background: url(${banner}) rgba(0,0,0, 0.4);
            background-blend-mode: darken;
            opacity: 1;
            z-index: 0;
            top: -75px;
            left: -120px;
      }
  
`;