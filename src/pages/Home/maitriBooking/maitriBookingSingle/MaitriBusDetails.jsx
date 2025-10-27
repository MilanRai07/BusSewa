import React, { useState } from 'react'
import { ReactComponent as Star } from '../../../../assets/svg/bookingSvg/star.svg'
import { motion } from 'framer-motion'
import BusPhotos from './BusPhotos'
import BusRoute from './BusRoute'
import BusAmenities from './BusAmenities'
import BusSpecification from './BusSpecification'
import BusCancellation from './BusCancellation'
import BusPolicy from './BusPolicy'


const MaitriBusDetails = () => {
    const menus = [
        'Photos',
        'Bus Route',
        'Amenties',
        'Specifications',
        'Cancellation Policy',
        'Other Policies'
    ]
    const [selectedMenu, setSelectedMenu] = useState(0)
    return (
        <div className='flex justify-between gap-7 bg-[#F0F0F0] mt-14'>
            <div className='w-[40%] h-[500px]'>

            </div>
            <div className='w-[60%] p-5 shadow-[0px_0px_10px_2px_rgba(0,0,0,0.1)] bg-white rounded-[10px]'>
                <div className='flex justify-between items-center'>
                    <div className='space-y-2'>
                        <h1 className='text-[18px] font-bold'>Maitri Bus</h1>
                        <p className='font-semibold text-sm text-mainBlue'>NP-01-BA-1234</p>
                        <p className='text-[13px] text-[#00000080]'>Ac Sleeper | 06:00AM - 10:00PM</p>
                    </div>
                    <div className='flex gap-3 items-center p-1 px-2 bg-[#FFBB000D] rounded-[3px] border border-[#FFBB00]'>
                        <Star />
                        <p>4.5</p>
                    </div>
                </div>

                {/* menu */}
                <div className='w-full flex justify-between items-center mt-9 border-b-[0.5px] border-b-black/30 pb-9'>
                    {
                        menus.map((item, index) => {
                            return (
                                <p key={index}
                                    onClick={() => setSelectedMenu(index)}
                                    className={`font-semibold text-sm relative cursor-pointer ${selectedMenu === index ? 'text-mainBlue text-[15px]' : 'text-[15px] text-black/50'}`}
                                >{item}
                                    {
                                        selectedMenu == index && (
                                            <motion.div
                                                layoutId="underline"
                                                className="absolute -bottom-[4px] left-0 h-[2px] w-[30%] bg-mainBlue"
                                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                            />
                                        )
                                    }
                                </p>
                            )
                        })
                    }
                </div>

                {/* contents */}
                <div className='mt-10 space-y-14'>
                    {/* photos */}
                    <div>
                        <h2 className='text-base font-bold mb-3'>Photos</h2>
                        <BusPhotos />
                    </div>

                    {/* Routes */}
                    <BusRoute />

                    {/* Amenities */}
                    <BusAmenities />

                    {/* specifications   */}
                    <BusSpecification />

                    {/* cancellation policy*/}
                    <BusCancellation />

                    {/* policy */}
                    <BusPolicy />
                </div>
            </div>
        </div>
    )
}

export default MaitriBusDetails
