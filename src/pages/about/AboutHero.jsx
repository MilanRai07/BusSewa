import React from 'react'

const AboutHero = () => {
  return (
    <section className="relative w-full h-[430px] max-md:h-[360px] max-sm:h-[300px] overflow-hidden">
      {/* Background Image */}
      <img
        src="/heroHome.webp"
        alt="Bus travel hero"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* Center Content */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center px-6 w-[60%] max-md:w-[80%] max-sm:w-[90%]">
        <h1 className="text-3xl max-lg:text-2xl max-sm:text-xl font-bold text-white leading-snug">
          Making Bus Travel Easy, Reliable & Accessible
        </h1>
        <p className="font-medium text-base max-sm:text-sm text-white mt-4 leading-relaxed">
          Powered by Maitri Bus Service, connecting Nepal to India with comfort.
          Book your seats anytime, anywhere with just a few taps.
        </p>
      </div>
    </section>
  )
}

export default AboutHero
