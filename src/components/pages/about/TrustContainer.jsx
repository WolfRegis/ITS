import H1 from '../../ui/H1'
import cfao from '../../../assets/clients/cfao.png'
import cdco from '../../../assets/clients/cdco.png'
import brasco from '../../../assets/clients/brasco.png'
import nsia from '../../../assets/clients/nsia.png'
import loxea from '../../../assets/clients/loxea.jpg'
import iesm from '../../../assets/clients/iesm.png'
import scab from '../../../assets/clients/scab.png'
import total from '../../../assets/clients/total.png'
import bourbon from '../../../assets/clients/bourbon.png'




export default function TrustContainer() {
  return (
    <section className='bg-[#777] overflow-x-hidden flex flex-col justify-center lg:gap-5 lg:h-140 pt-2 lg:pt-5 lg:px-2 mb-10 '>
      <H1>Ils nous font confiance</H1>
      <div className='grid grid-cols-4 lg:pl-40 pl-10 lg:pt-5 items-center gap-y-5 '>
            <img src={cdco} alt=""  className='lg:w-40 w-20 hover:scale-120 lg:grayscale-70 hover:grayscale-0'/>
            <img src={loxea} alt=""  className='lg:w-40 w-20 hover:scale-120 lg:grayscale-70 hover:grayscale-0'/>
            <img src={nsia} alt=""  className='lg:w-40 w-20 hover:scale-120 lg:grayscale-70 hover:grayscale-0'/>
            <img src={scab} alt=""  className='lg:w-40 w-20 hover:scale-120 lg:grayscale-70 hover:grayscale-0'/>
            <img src={cfao} alt=""  className='lg:w-40 w-20 hover:scale-120 lg:grayscale-70 hover:grayscale-0'/>
            <img src={iesm} alt=""  className='lg:w-40 w-20 hover:scale-120 lg:grayscale-70 hover:grayscale-0'/>
            <img src={brasco} alt=""  className='lg:w-40 w-20 hover:scale-120 lg:grayscale-70 hover:grayscale-0'/>
            <img src={bourbon} alt=""  className='lg:w-40 w-20 hover:scale-120 lg:grayscale-70 hover:grayscale-0 '/>
      </div>
            <img src={total} alt=""  className='lg:w-40 w-20 hover:scale-120 lg:grayscale-70 hover:grayscale-0 self-center'/>
    </section>
  )
}
