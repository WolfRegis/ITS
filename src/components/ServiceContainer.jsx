import React from 'react'
import H2 from './ui/H2'
import ServicesCard from './ui/ServicesCard'
import fibre from '../assets/p8.jpg'

export default function ServiceContainer() {
  return (
    <div className='py-10'>
      <div className='mx-100'>
            <H2>Nos Services</H2>
            <p className='text-center text-[#777]'>La société ITS (Informations - Technologies - Services) est à votre services pour vous conseiller et vous aider à trouver des solutions à vos problèmes de technologies et autres.</p>
      </div>

      <section className='grid grid-cols-4 gap-y-5 px-20'>
            <ServicesCard src={fibre} title="fibre Optique" detail="Optez pour une connexion Internet à très haut débit,  grâce à la fibre optique, avec  ITS vous bénéficiez d'un réseau sécurisé et adapté aux besoins et au budget de la structure."/>
            <div className='w-4/4 h-50 border'><img src="" alt="" /><p><h3>titre</h3> <span>détail</span></p></div>
            <div className='w-4/4 border'><img src="" alt="" /><p><h3>titre</h3> <span>détail</span></p></div>
            <div className='w-4/4 border'><img src="" alt="" /><p><h3>titre</h3> <span>détail</span></p></div>
            <div className='w-4/4 border'><img src="" alt="" /><p><h3>titre</h3> <span>détail</span></p></div>
            <div className='w-4/4'><img src="" alt="" /><p><h3>titre</h3> <span>détail</span></p></div>
            <div className='w-4/4'><img src="" alt="" /><p><h3>titre</h3> <span>détail</span></p></div>
            <div className='w-4/4'><img src="" alt="" /><p><h3>titre</h3> <span>détail</span></p></div>
            <div className='w-4/4'><img src="" alt="" /><p><h3>titre</h3> <span>détail</span></p></div>

      </section>
      
    </div>
  )
}
