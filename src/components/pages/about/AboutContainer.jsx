
import logo from '../../../assets/logo.png'
import { FcAbout } from "react-icons/fc";
import { PiPhoneCallThin } from "react-icons/pi";
import H1Black from '../../ui/H1Black';



export default function AboutContainer() {
  return (
    <section className='relative w-full  flex lg:gap-15 lg:flex-row lg:justify-between flex-col justify-center box-border lg:px-25 px-5 py-10'>
      <aside className={`lg:block hidden relative lg:w-2/5 w-1/5 box-border bg-contain bg-no-repeat bg-center shadow-2xl shadow-[rgba(21, 40, 76, 0.08)]`} style={{backgroundImage: `url(${logo})`}}></aside>
      <aside className='px-2 relative lg:w-3/5 lg:h-120 box-border py-3 flex flex-col lg:gap-5 gap-2'>
            <span className=''> <b className='uppercase text-[#17a2b8] lg:text-lg'>à propos</b> <FcAbout className='inline text-2xl relative -top-3 text-[#17a2b8]' /></span>

            <H1Black>qui sommes-nous ?</H1Black>

            <p className='text-[#777] font-semibold'>
                  Depuis sa création en 2012, ITS Groupe s'est imposé comme un acteur majeur en fournissant des solutions informatiques efficaces pour accompagner des entreprises dans un monde numérique en constante évolution. Au fil des années, nous avons élargi notre champ d'expertise pour répondre aux besoins variés de nos clients, en integrant notament l'électricité industrielle, l'électricité batiment, les énergies renouvellables et l'instrumentation.
            </p>

            <p className='text-[#777] font-semibold'>
                  Notre engagement envers l'exellence et l'innovation reste le moteur de notre parcours, faisant de nous le partenaire privilègié pour accompagner nos clients vers le succès dans le paysage dynamique du monde numerique et de l'industrie
            </p>

            <div className='self-start scale-110 box-border flex flex-row items-center gap-2 lg:h-200 rounded-md ring-blue-100 rring-2 shadow-[0_0_55px_rgba(21,40,76,0.08)] p-2'>
                  <div className='h-full w-1/3 flex justify-center bg-[#ddd] rounded-md'>
                        <PiPhoneCallThin   className='h-full text-5xl text-[#17a2b8] ' />
                  </div>
                  <div>
                        <p className='uppercase font-bold text-[#777] text-sm'>
                              appellez nous à tous moment
                        </p>
                        <a href="tel:068293963" className='hover:text-[#17a2b8] font-bold text-[#17a2b8] lg:text-black'>(+242) 06 829 39 63</a>
                  </div>
            </div>
      </aside>
    </section>
  )
}
