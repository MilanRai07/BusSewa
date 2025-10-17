import React from 'react'
import bus from '../../assets/image/bus.webp'
import { WhyChooseUs } from '../../localData/WhyChooseUs'

const WhyChoose = () => {
  return (
    <section className="">
      <h1 className="font-bold text-[20px] max-md:text-[18px] max-sm:text-base tracking-wide mb-8 max-[800px]:mb-7">
        Why Choose Maitri Bus?
      </h1>

      <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {WhyChooseUs.map((item, index) => (
          <div
            key={index}
            className="shadow-[0_0_10px_2px_rgba(0,0,0,0.08)] hover:shadow-[0_0_12px_3px_rgba(0,0,0,0.15)] transition-shadow duration-300 bg-white p-6 rounded-2xl flex items-center gap-6 max-md:p-5 max-sm:gap-4"
          >
            <div className="flex-shrink-0 w-[70px] h-[70px] max-sm:w-[60px] max-sm:h-[60px]">
              <img
                src={bus}
                alt="bus"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            <div className="flex-1">
              <h2 className="font-medium text-[18px] max-md:text-[16px] max-sm:text-[14px] text-[#2C5530] leading-snug">
                {item.title}
              </h2>
              <p className="text-[14px] max-md:text-[13px] max-sm:text-xs leading-[22px] text-gray-600 text-justify mt-2">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhyChoose
