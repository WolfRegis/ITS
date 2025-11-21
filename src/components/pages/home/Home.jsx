import React from 'react'
import Navbar from '../../Navbar'
import Header from '../../Header'
import HomeHeader from './HomeHeader'

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Header>
        <HomeHeader></HomeHeader>
      </Header>
    </div>
  )
}
