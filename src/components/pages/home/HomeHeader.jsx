import BtnPrimary from '../../ui/BtnPrimary.jsx';

export default function HomeHeader() {
  return (
    <div className='text-white relative flex flex-col gap-2 w-[50%] my-[50px] '>
      <h1 className='text-6xl uppercase leading-14 font-bold h-46 align-center'><i className='not-italic text-[#17a2b8]'>I</i>nformations <br /> <i className='not-italic text-[#17a2b8]'>T</i>echnologies <br /> <i className='not-italic text-[#17a2b8]'>S</i>ervices </h1>
      <p className='text-sm text-[#777] '>Depuis plus de 7 ans, ITS vous permet d’être toujours plus innovant et plus réactif.
ITS dispose d’une offre complète de services, allant du conseil jusqu'à l'exploitation.</p>
      <span className='self-start'>
        <BtnPrimary inverse={false} >Contactez-nous</BtnPrimary>
      </span>
    </div>
  )
}

