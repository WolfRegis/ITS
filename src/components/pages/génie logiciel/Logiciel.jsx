import ItBan from '../../ui/ItBan'
import Navbar from '../../Navbar'
import Header from '../../Header'
import Footer from '../../Footer'
import { useParams } from 'react-router-dom'
import GenericHeader from '../../ui/GenericHeader'




export default function Logiciel() {
  
  const name="génie logiciel"
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
