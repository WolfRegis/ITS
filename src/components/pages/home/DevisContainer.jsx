import React from 'react'
import H2 from '../../ui/H2'
import styled from 'styled-components';
import cta from '../../../assets/cta-bg.jpg'
import BtnPrimary from '../../ui/BtnPrimary.jsx';

export default function DevisContainer() {
  return (
    <DevisContainerStyled className='flex flex-col gap-7 items-center justify-around px-80 py-15 border-box'>
        <H2 color="white" >Votre satisfaction notre est notre objectif</H2>
        <p className='text-white text-center'>Nous intervenons pour l'installation et le cablage réseaux pour entreprises, mais aussi pour l'ensemble des besoins au niveau de la sécurité de votre bâtiment. N'hésitez pas à nous contacter pour bénéficier de devis concernant le réseau télécom de votre activité.</p>
        <BtnPrimary inverse={true} >demandez votre devis gratuit</BtnPrimary>
    </DevisContainerStyled>
  )
}


const DevisContainerStyled = styled.div`
    background: url(${cta}) rgb(0, 0, 0, 0.6);
    background-size: cover;
    background-blend-mode: overlay;

    button{
      text-transform: uppercase;
    }
  
`;