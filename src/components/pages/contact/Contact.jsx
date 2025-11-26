import ItBan from '../../ui/ItBan'
import Navbar from '../../Navbar'
import Header from '../../Header'
import CardContainer from '../../CardContainer'
import Footer from '../../Footer'
import { useParams } from 'react-router-dom'
import GenericHeader from '../../ui/GenericHeader'
import Card from '../../ui/Card'




export default function Contact() {
  
  const name="Contactez-nous"
  const {from}=useParams();

  return (
    <div>
      <ItBan/>
      <Navbar from={name}></Navbar>
      <Header>
            <GenericHeader name={name} from={from} />
      </Header>
      <Footer/>
    </div>
  )
}
