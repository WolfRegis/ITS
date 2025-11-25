import React from 'react'
import H2 from './ui/H2'
import ServicesCard from './ui/ServicesCard'
import reseau from '../assets/p1.jpg'
import maintenance from '../assets/p2.jpg'
import geo from '../assets/p3.jpg'
import camera from '../assets/p4.jpg'
import acces from '../assets/p5.jpg'
import alarme from '../assets/p6.jpg'
import data from '../assets/p7.jpg'
import fibre from '../assets/p8.jpg'

export default function ServiceContainer() {
  return (
    <div className='lg:pt-10 pt-1 lg:mt-20 mt-10 w-full overflow-hidden'>
      <div className='lg:mx-100 mb-10'>
            <H2 className="">Nos Services</H2>
            <p className='text-center text-[#777] text-[10px] lg:text-[18px]'>La société ITS (Informations - Technologies - Services) est à votre services pour vous conseiller et vous aider à trouver des solutions à vos problèmes de technologies et autres.</p>
      </div>

      <section className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-3 lg:px-20 pt-4 pb-8 bg-[#ddd]'>
            <ServicesCard src={reseau} title="Réseaux informatiques & télécoms " detail=" La société ITS  intervient au cœur du réseau de vos entreprises  et vous guide  dans vos projets d'évolutions d'infrastructures Informatiques."/>
            <ServicesCard src={maintenance} title="Maintenance informatique" detail=" La société ITS  intervient au cœur du réseau de vos entreprises  et vous guide  dans vos projets d'évolutions d'infrastructures Informatiques."/>
            <ServicesCard src={geo} title="Géolocalisation véhicules & transporteurs" detail="Spécialiste en mobilité, ITS vous propose des solutions de géolocalisation pour les particuliers et les professionnels."/>
            <ServicesCard src={camera} title="Vidéo surveillance " detail="ITS propose une large gamme de caméras IP, couplées à des serveurs d'enregistrement et d'exploitation afin de tirer le meilleur profit d'une vidéosurveillance globale ou locale."/>
            <ServicesCard src={acces} title="Contrôl d'accès " detail="ITS propose une solution adaptée, qui corresponde avec exactitude à vos attentes et à vos exigences,	 la société intervient tout au long de votre projet."/>
            <ServicesCard src={alarme} title="Alarme intrusion & détection" detail="Protéger votre entreprise  de toutes les formes de dégradations, d’intrusions ou de vols qui pourraient nuire à sa bonne marche."/>
            <ServicesCard src={data} title="Data protection" detail="Protégez les données de vos entreprises avec une protection des données simple et puissante du datacenter vers les départements, en passant par le Cloud."/>
            <ServicesCard src={fibre} title="fibre Optique" detail="Optez pour une connexion Internet à très haut débit,  grâce à la fibre optique, avec  ITS vous bénéficiez d'un réseau sécurisé et adapté aux besoins et au budget de la structure."/>
            
      </section>
      
    </div>
  )
}
