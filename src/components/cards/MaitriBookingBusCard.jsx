import React from 'react'
import { ReactComponent as Star } from '../../assets/svg/bookingSvg/star.svg'
import { ReactComponent as People } from '../../assets/svg/bookingSvg/people.svg'


const MaitriBookingBusCard = ({ setShowSingle }) => {
    return (
        <div
            onClick={() => setShowSingle(true)}
            className='w-full shadow-[0px_0px_5px_1px_rgba(0,0,0,0.1)] p-6 rounded-[10px]'>
            <div className='flex justify-between items-stretch max-sm:flex-col max-sm:justify-start max-sm:gap-3'>
                <div className='max-sm:flex max-sm:justify-between max-sm:items-center'>
                    <h1 className='max-sm:text-xs'>Maitri Comfort</h1>
                    <div className='max-sm:w-[30%] p-1 bg-[#1565C01A] rounded-[3px] grid place-items-center font-medium text-[11px] text-mainBlue mt-3'>
                        <p>NP-BA-1682</p>
                    </div>
                </div>

                <div>
                    <div className='p-3 max-sm:p-1 max-sm:w-[50%] bg-[#C628281A] rounded-[3px] grid place-items-center font-medium text-[11px] text-[#C62828]'>
                        <p>
                            Offer: Rs 149 off per seat
                        </p>
                    </div>
                    <div className='flex gap-2 text-[13px] max-sm:text-xs font-medium mt-3 '>
                        <Star />
                        <p className='text-black/45'>4.5 <span className='text-[#FF9800]'>Sleeper AC</span></p>
                    </div>
                </div>


            </div>
            <div className='flex justify-between items-center mt-6 gap-3'>
                <div>
                    <p className='text-base font-semibold max-sm:text-sm'>06:00 AM</p>
                    <p className='text-[11px] font-semibold text-black/50'>Kathmandu</p>
                </div>
                <div className='w-[30%] max-sm:w-[20%] max-[470px]:w-[10%] h-[0.2px] bg-black/20 max-[444px]:hidden'></div>
                <div className='bg-[#F4F4F4] max-sm:text-xs max-sm:p-1 rounded-[3px] text-xs grid place-items-center p-2 text-black/40'>
                    16h
                </div>
                <div className='w-[30%] max-sm:w-[20%] max-[470px]:w-[10%] h-[0.2px] bg-black/20 max-[444px]:hidden'></div>
                <div>
                    <p className='text-base font-semibold max-sm:text-xs'>06:00 AM</p>
                    <p className='text-[11px] font-semibold text-black/50'>Pokhara</p>
                </div>
            </div>

            <div className='flex justify-between items-center mt-6 '>
                <div className='flex items-center gap-2'>
                    <People />
                    <p className='font-medium text-[13px] max-sm:text-xs text-black/50'>12 seats available</p>
                </div>
                <div className='flex items-center gap-2'>
                    <del className='font-medium text-[13px] text-black/50 max-sm:text-xs'>Rs. 1300</del>
                    <p className='font-semibold text-[24px] text-mainBlue max-sm:text-base'>Rs. 1099</p>
                </div>
            </div>
        </div>
    )
}

export default MaitriBookingBusCard
