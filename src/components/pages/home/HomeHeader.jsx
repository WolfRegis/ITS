import React from 'react'
import styled from 'styled-components';
import theme from '../../Theme';

export default function HomeHeader() {
  return (
    <HomeHeaderStyled>
      <h1><i>I</i>nformations <br /> <i>T</i>echnologies <br /> <i>S</i>ervices </h1>
      <p>Depuis plus de 7 ans, ITS vous permet d’être toujours plus innovant et plus réactif.
ITS dispose d’une offre complète de services, allant du conseil jusqu'à l'exploitation.</p>
<button>CONTACTEZ-NOUS</button>
    </HomeHeaderStyled>
  )
}

const HomeHeaderStyled = styled.div`
  color:white;
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  gap: 2rem;
  width: 50%;
  margin: 50px 0 80px 0;


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
    width: 180px;
    height: 40px;
    border-radius: 20px;
    background-color: ${theme.colors.primary};
    font-weight: bold;
    font-size: small;

    &:hover{
      background-color: white;
      color: ${theme.colors.primary};

    }

  }
  
`;