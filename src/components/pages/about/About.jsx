import ItBan from '../../ui/ItBan'
import Navbar from '../../Navbar'
import Header from '../../Header'
import CardContainer from '../../CardContainer'
import Footer from '../../Footer'
import AboutHeader from './AboutHeader'

export default function About() {
  return (
    <div>
      <ItBan/>
      <Navbar></Navbar>
      <Header>
            <AboutHeader />
      </Header>
      <CardContainer/>
      <Footer/>
    </div>
  )
}
