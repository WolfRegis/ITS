import React from 'react'
import Navbar from '../../Navbar'
import Header from '../../Header'
import HomeHeader from './HomeHeader'
import CardContainer from '../../CardContainer'
import DevisContainer from './DevisContainer'
import Footer from '../../Footer'
import ItBan from '../../ui/ItBan'
import ServiceCard from '../../ServiceContainer'
import ServiceContainer from '../../ServiceContainer'
import Card from '../../ui/Card'

export default function Home() {

  const name ="accueil"


  return (
    <div>
      <ItBan/>
      <Navbar from={name}></Navbar>
      <Header>
        <HomeHeader/>
      </Header>
      <CardContainer>
        <Card titre="Sécurité" details="Sécurisez les infrastructures réseaux de vos entreprises pour prévenir, détecter et récupérer en cas de menaces." ></Card>
        <Card titre="Cloud computing" details="Cloud computing, une solution largement utilisée pour sauvegarder des données de votre entreprise"></Card>
        <Card titre="Assistance technique" details="Support technique ITS | Une équipe à votre écoute pour vous conseiller | Une assistance de maintenance à distance"></Card>
      </CardContainer>
      <ServiceContainer/>
      <DevisContainer/>
      <Footer/>
    </div>
  )
}
