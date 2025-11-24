import React from 'react'
import styled from 'styled-components';
import theme from './theme';
import Card from './ui/Card';

export default function CardContainer() {
  return (
    <CardContainerStyled className='relative flex row gap-10 px-30 bg-white box-border before:block before:absolute before:w-full before:h-[52px] before:left-0'>
      <Card titre="Sécurité" details="Sécurisez les infrastructures réseaux de vos entreprises pour prévenir, détecter et récupérer en cas de menaces." ></Card>
      <Card titre="Cloud computing" details="Cloud computing, une solution largement utilisée pour sauvegarder des données de votre entreprise"></Card>
      <Card titre="Assistance technique" details="Support technique ITS | Une équipe à votre écoute pour vous conseiller | Une assistance de maintenance à distance"></Card>
    </CardContainerStyled>
  )
}

const CardContainerStyled = styled.div`
      
      &::before{
        background-color: ${theme.colors.secondaryLight};
      }
  
`;
