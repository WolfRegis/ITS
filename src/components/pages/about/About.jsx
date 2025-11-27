import ItBan from '../../ui/ItBan'
import Navbar from '../../Navbar'
import Header from '../../Header'
import CardContainer from '../../CardContainer'
import Footer from '../../Footer'
import { useParams } from 'react-router-dom'
import GenericHeader from '../../ui/GenericHeader'
import Card from '../../ui/Card'
import AboutContainer from './AboutContainer'
import MapContainer from './MapContainer'




export default function About() {
  
  const name="à propos"
  const {from}=useParams();

  return (
    <div>
      <ItBan/>

      <Navbar from={name}></Navbar>

      <Header>
            <GenericHeader name={name} from={from} />
      </Header>

      <CardContainer>
        <Card titre="Notre vision" details="Notre vision est d'aider les entreprises dans l'atteinte de leurs résultats dans leurs fonctionnement." ></Card>
        <Card titre="Notre Mission " details="Notre mission est d'apporter de la valeur aux entreprises et organisations qui utilisent notre technologie informatique."></Card>
        <Card titre="Nos Objectifs " details="Nos objectifs est de répondre aux nouveaux défis informatiques et de Gérer des entrepises de taille importante."></Card>
      </CardContainer>
      
      <AboutContainer />
      <MapContainer />

      <Footer/>
    </div>
  )
}
