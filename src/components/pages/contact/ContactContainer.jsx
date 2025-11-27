import { AiOutlineHome } from "react-icons/ai";
import { SlPhone } from "react-icons/sl";
import { CiMail } from "react-icons/ci";
import BtnPrimary from "../../ui/BtnPrimary";




export default function ContactContainer() {
  return (
    <section className="w-full overflow-x-hidden flex lg:flex-row flex-col lg:px-30 px-5 lg:py-20 lg:gap-10 ">
            <aside className="flex flex-col self-start -ml-[45px] lg:gap-2 gap-3 box-border lg:w-2/5 lg:scale-100  scale-80 ">
                  <div className="flex flex-row lg:justify-between lg:items-center lg:gap-x-7 gap-x-2 w-full ">
                        <AiOutlineHome className="text-[#17a2b8] lg:scale-230 scale-130 w-15 mt-1 "  />
                        <div className="">
                              <h6 className="font-semibold">Pointe-noire, Rép. du Congo</h6>
                              <p className="text-[#777] lg:block inline">Avenue Jaques Opangault, Zone Industrielle en face de la Foire</p>
                        </div>

                  </div >

                  <div className="flex flex-row lg:justify-between lg:items-center lg:gap-x-5 w-full">
                        <SlPhone className="text-[#17a2b8] lg:scale-230 scale-130 w-15 mt-1 "  />
                        <div>
                              <h6 className="font-semibold">00 (242) 06 829 39 63</h6>
                              <p className="text-[#777] lg:block hidden">Contactez-nous par notre Numéro standard </p>
                        </div>

                  </div>

                  <div className="flex flex-row lg:justify-between lg:items-center lg:gap-x-5 w-full">
                        <CiMail className="text-[#17a2b8] lg:scale-230 scale-130 w-15 mt-1 " />
                        <div>
                              <h6 className="font-semibold">contact.tech@its-groupe.net</h6>
                              <p className="text-[#777] lg:block hidden">Envoyez-nous votre requête à tout moment!</p>
                        </div>

                  </div>
            </aside>
            <form action="" className=" lg:w-3/4 box-border flex flex-col  gap-5">
                  <div className=" lg:w-full box-border flex flex-row  lg:gap-10 gap-5">
                        <div className="w-1/2 flex flex-col gap-4 lg:gap-10 justify-between">
                              <input type="text" name="nom" id="name" placeholder="Votre nom" className="border lg:h-12 h-8 pl-5 border-[#ccc] lg:text-lg text-xs outline-0" />
                              <input type="text" name="Email" id="email" placeholder="votre adresse mail" className="border lg:h-12 h-8 pl-5 border-[#ccc] lg:text-lg text-xs outline-0" />
                              <input type="text" name="Objet" id="objet" placeholder="Objet du mail" className="border lg:h-12 h-8 pl-5 border-[#ccc] lg:text-lg text-xs outline-0" />
                        </div>
                        <textarea name="message" id="msg" className="border w-1/2 pl-5 pt-3 border-[#ccc] lg:text-lg text-xs outline-0" placeholder="Votre message"></textarea>
                  </div>
                  <span className="self-end lg:scale-100 scale-60 lg:mt-0 -mt-5 lg:mr-0 -mr-9">
                        <BtnPrimary>envoyer</BtnPrimary>     
                  </span>
            </form>
    </section>
  )
  
}

