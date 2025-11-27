import { FaLocationDot } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { IoMdAlarm } from "react-icons/io";



export default function MapContainer() {
  return (
    <section className="w-full h-[450] flex lg:flex-row flex-col justify-around px-4">
               <aside className='px-2 relative lg:w-3/5 lg:h-120 box-border py-3 flex flex-col lg:gap-5 gap-2'>
                        <span className=''> <b className='uppercase text-[#17a2b8] lg:text-lg'>Localisation</b> <IoHome   className='inline text-lg -top-1 relative text-[#17a2b8]' /></span>
            
                        <h1 className='text-black font-black uppercase lg:text-4xl'>Nous retrouver ?</h1>
            
                        <div className='self-start scale-100 box-border flex flex-row items-center gap-2 lg:h-40 w-120 rounded-md ring-blue-100 rring-2 shadow-[0_0_55px_rgba(21,40,76,0.08)] p-2'>
                              <div className='h-full w-1/3 flex justify-center bg-[#ddd] rounded-md'>
                                    <IoMdAlarm     className='h-full text-5xl text-[#17a2b8] ' />
                              </div>
                              <div>
                                    <p className='uppercase font-bold text-[#777] text-sm'>
                                          Horaire de travail
                                    </p>
                                    <p href="tel:068293963" className='hover:text-[#17a2b8] font-bold text-[#17a2b8] lg:text-black'>Lundi 08h - 12h | 14h - 17h</p>
                                    <p href="tel:068293963" className='hover:text-[#17a2b8] font-bold text-[#17a2b8] lg:text-black'>Vendredi 08h - 12h | 14h - 17h</p>
                              </div>
                        </div>
                        <div className='self-start scale-100 box-border flex flex-row items-center gap-2 lg:h-40 w-120 rounded-md ring-blue-100 rring-2 shadow-[0_0_55px_rgba(21,40,76,0.08)] p-2'>
                              <div className='h-full w-1/3 flex justify-center bg-[#ddd] rounded-md'>
                                    <FaLocationDot    className='h-full text-5xl text-[#17a2b8] ' />
                              </div>
                              <div>
                                    <p className='uppercase font-bold text-[#777] text-sm'>
                                          appellez nous à tous moment
                                    </p>
                                    <a href="tel:068293963" className='hover:text-[#17a2b8] font-bold text-[#17a2b8] lg:text-black'>(+242) 06 829 39 63</a>
                              </div>
                        </div>
                  </aside>
      <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d938.4643114154927!2d11.85825799790342!3d-4.784381871688632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a60a5d8227b3069%3A0x3ebe75e224beeab1!2sITS%20Congo%20SARLU!5e0!3m2!1sfr!2scg!4v1764170452967!5m2!1sfr!2scg"
            height="450"
            className="border-white border-2 rounded-lg shadow-2xl shadow-[rgba(21, 40, 76, 0.1)] lg:w-[600px]"
            allowFullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
      </iframe>
    </section>
  )
}
