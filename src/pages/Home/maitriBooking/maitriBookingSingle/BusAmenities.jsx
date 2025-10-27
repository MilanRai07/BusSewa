import React from 'react'
import { ReactComponent as Amneit } from '../../../../assets/svg/bookingSvg/amenities.svg';


const BusAmenities = () => {
    const amenities = ['AC', 'Charging ports', 'Insurance', 'Restroom']
    return (
        <div className='w-full shadow-[0px_0px_10px_2px_rgba(0,0,0,0.1)] bg-white p-5 rounded-[10px]'>
            <h2 className='text-base font-semibold mb-3'>Amenities & Features</h2>
            <div className='grid grid-cols-2 w-full gap-3'>
                {
                    amenities.map((item, index) => {
                        return (
                            <div key={index} className='flex items-center gap-2'>
                                <Amneit />
                                <p className='text-[13px] font-medium'>{item}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default BusAmenities
