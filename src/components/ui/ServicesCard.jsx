
export default function ServicesCard({src, title, detail}) {


  return (
      <div className='relative w-5/5  lg:h-90 h-60 border-white border-5 box-border pb-0 rounded-4xl hover:scale-102 hover:border-[#17a2b8] hover:shadow-black hover:-mt-[5px] hover:shadow-lg cursor-pointer scale-85 lg:scale-100'>
            <div className='bg-cover w-full lg:h-3/5 h-2/4 rounded-4xl' style={{backgroundImage: `url(${src})`}}></div>
            <div className='px-3 py-0.5'>
                  <h3 className='font-semibold mt-3 lg:h-10'><button className="lg:text-[15px] text-xs text-left leading-4 cursor-pointer hover:text-[#17a2b8] text-[#17a2b8] lg:text-black uppercase">{title}</button></h3>
                  <p className='lg:text-[12px] text-[10px] lg:leading-4 leading-[9px] text-left'>{detail}</p>
            </div>
      </div>
  )
}
