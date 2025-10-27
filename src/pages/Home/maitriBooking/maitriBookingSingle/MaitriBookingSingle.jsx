import React, { useState } from 'react'
import { ReactComponent as Cross } from '../../../../assets/svg/cross.svg'
import { motion } from 'framer-motion'
import MaitriBusDetails from './MaitriBusDetails'

const MaitriBookingSingle = ({ dropOff = 'Kathmandu', pickUp = 'Pokhara', setShowSingle }) => {
    const menus = [
        'Select Seat',
        'Passenger Details',
        'Payments'
    ]
    const [selectedMenu, setSelectedMenu] = useState(0);
    return (
        <main className='px-16 max-[800px]:px-10 max-sm:px-8 my-14  w-full'>
            <div className='flex gap-3 items-center pb-7 justify-between border-b-[0.5px] border-b-black/30'>
                <div>
                    {
                        (dropOff || pickUp) && (
                            <p className='font-bold text-base'>{pickUp} - {dropOff}</p>
                        )
                    }
                    <p className='text-[11px]'>12 Aug, Tue</p>
                </div>
                <div className='p-2 bg-black/60 rounded-full'>
                    <Cross className='w-[20px] h-[20px] max-sm:w-[18px] max-sm:h-[18px] cursor-pointer stroke-white' onClick={() => setShowSingle(false)} />
                </div>
            </div>

            {/* menu */}
            <div className='w-full flex justify-center items-center gap-4 mt-9'>
                {
                    menus.map((item, index) => {
                        return (
                            <p key={index}
                                onClick={() => setSelectedMenu(index)}
                                className={`font-semibold text-sm relative cursor-pointer ${selectedMenu === index ? 'text-mainBlue' : ''}`}
                            >{index + 1}. <span>{item}</span>
                                {
                                    selectedMenu == index && (
                                        <motion.div
                                            layoutId="underline"
                                            className="absolute -bottom-[10px] left-0 h-[3px] w-full bg-mainBlue rounded-t-3xl"
                                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                        />
                                    )
                                }
                            </p>
                        )
                    })
                }
            </div>

            {/* content */}
            <MaitriBusDetails />
        </main>
    )
}

export default MaitriBookingSingle
