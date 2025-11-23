import React from 'react'
import styled from 'styled-components';
import theme from '../../theme.js';
import BtnPrimary from '../../ui/BtnPrimary.jsx';

export default function HomeHeader() {
  return (
    <HomeHeaderStyled>
      <h1><i>I</i>nformations <br /> <i>T</i>echnologies <br /> <i>S</i>ervices </h1>
      <p>Depuis plus de 7 ans, ITS vous permet d’être toujours plus innovant et plus réactif.
ITS dispose d’une offre complète de services, allant du conseil jusqu'à l'exploitation.</p>
      <BtnPrimary inverse={false} >Contactez-nous</BtnPrimary>
    </HomeHeaderStyled>
  )
}

const HomeHeaderStyled = styled.div`
  color:white;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 50%;
  margin: 50px 0 50px 0;


  h1{
    font-size: xxx-large;
    font-weight: bold;
    text-transform: uppercase;
    line-height: 3.5rem;

    i{
      font-style:normal;
      color: ${theme.colors.primary};
    }

  }

  p{
    font-size: smaller;
    color: ${theme.colors.other};
  }

  button{
    align-self: start;
  }

`;