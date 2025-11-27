import { AiOutlineHome } from "react-icons/ai";
import { SlPhone } from "react-icons/sl";
import { CiMail } from "react-icons/ci";
import BtnPrimary from "../../ui/BtnPrimary";




export default function ContactContainer() {
  return (
    <section className="w-full overflow-x-hidden flex lg:flex-row flex-col justify-around lg:px-30 lg:py-20 lg:gap-10">
            <aside className="flex flex-col lg:gap-2 box-border w-2/5  ">
                  <div className="flex flex-row justify-between items-center gap-x-7 w-full ">
                        <AiOutlineHome className="text-[#17a2b8] lg:scale-230 w-15 "  />
                        <div className="">
                              <h6 className="font-semibold">Pointe-noire, Rép. du Congo</h6>
                              <p className="text-[#777]">Avenue Jaques Opangault, Zone Industrielle en face de la Foire</p>
                        </div>

                  </div >

                  <div className="flex flex-row justify-between items-center gap-x-5">
                        <SlPhone className="text-[#17a2b8] lg:scale-230 w-15"  />
                        <div>
                              <h6 className="font-semibold">00 (242) 06 829 39 63</h6>
                              <p className="text-[#777]">Contactez-nous par notre Numéro standard </p>
                        </div>

                  </div>

                  <div className="flex flex-row justify-between items-center gap-x-5">
                        <CiMail className="text-[#17a2b8] lg:scale-230 w-15" />
                        <div>
                              <h6 className="font-semibold">contact.tech@its-groupe.net</h6>
                              <p className="text-[#777]">Envoyez-nous votre requête à tout moment!</p>
                        </div>

                  </div>
            </aside>
            <form action="" className=" lg:w-3/4 box-border flex flex-col  gap-5">
                  <div className=" lg:w-full box-border flex flex-row  gap-10">
                        <div className="w-1/2 flex flex-col gap-10 justify-between">
                              <input type="text" name="nom" id="name" placeholder="Votre nom" className="border h-12 pl-5 border-[#ccc] " />
                              <input type="text" name="Email" id="email" placeholder="votre adresse mail" className="border h-12 pl-5 border-[#ccc]" />
                              <input type="text" name="Objet" id="objet" placeholder="Objet du mail" className="border h-12 pl-5 border-[#ccc]" />
                        </div>
                        <textarea name="message" id="msg" className="border w-1/2 pl-5 pt-3 border-[#ccc]" placeholder="Votre message"></textarea>
                  </div>
                  <span className="self-end">
                        <BtnPrimary>envoyer</BtnPrimary>     
                  </span>
            </form>
    </section>
  )
  
}

