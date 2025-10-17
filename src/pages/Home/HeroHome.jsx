import React from 'react'

const HeroHome = () => {
  return (
    <section>
       <div className='relative w-full h-[500px] max-md:h-[400px] max-[600px]:h-[240px]'>
         <img src="/heroHome.webp" className='w-full h-full absolute z-0' />
         <div className='w-full h-full absolute inset-0 bg-black/40 z-10'></div>
       </div>
    </section>
  )
}

export default HeroHome
