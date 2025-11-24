import React from 'react'
import Navbar from '../../Navbar'
import Header from '../../Header'
import HomeHeader from './HomeHeader'
import CardContainer from '../../CardContainer'
import DevisContainer from './DevisContainer'
import Footer from '../../Footer'
import ItBan from '../../ui/ItBan'

export default function Home() {
  return (
    <div>
      <ItBan/>
      <Navbar></Navbar>
      <Header>
        <HomeHeader/>
      </Header>
      <CardContainer />
      <DevisContainer/>
      <Footer/>
    </div>
  )
}
