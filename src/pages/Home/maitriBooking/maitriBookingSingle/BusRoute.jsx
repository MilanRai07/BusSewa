import React from 'react'
import { ReactComponent as Arrow } from '../../../../assets/svg/blogArrow.svg';

const BusRoute = () => {
    const routes = ['Kathmandu', 'Dhading', 'Muglin', 'Pokhara']
    return (
        <div className='w-full shadow-[0px_0px_10px_2px_rgba(0,0,0,0.1)] bg-white p-5 rounded-[10px]'>
            <h2 className='text-base font-semibold mb-1'>Routes</h2>
            <p className='text-xs font-medium mb-3'>{'600Km'}<span className='ml-2'> {'16h 30m'}</span></p>

            <div className='flex items-center gap-2'>
                {
                    routes.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className='flex gap-2 items-center'>
                                <p className={`${(index == 0 || index == routes.length - 1) ? 'text-mainBlue font-bold' : ''} text-[13px]`}>{item}</p>
                                {
                                    index !== routes.length - 1 && (
                                        <Arrow className='w-[12px] h-[12px] 2x-l:w-[14px] cursor-pointer 2x-l:h-[14px] !fill-black/60 hover:!fill-mainBlueHover' />
                                    )
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default BusRoute
