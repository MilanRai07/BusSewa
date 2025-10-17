import React from 'react'
import BusSlider from '../../components/slider/BusSlider'

const Bus = () => {
    return (
        <section>
            <h1 className="font-bold text-[20px] max-md:text-[18px] max-sm:text-base tracking-wide mb-8 max-[800px]:mb-7">
                Buses
            </h1>
            <BusSlider/>
        </section>
    )
}

export default Bus
