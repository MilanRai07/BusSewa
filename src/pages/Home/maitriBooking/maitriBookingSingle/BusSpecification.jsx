import React from 'react'

const BusSpecification = () => {
    const specifications = [
        {
            title: 'Bus Model',
            data: 'Ashok Viking'
        },
        {
            title: 'Year',
            data: '2023'
        },
        {
            title: 'Air Suspension',
            data: 'Yes'
        },
        {
            title: 'Seating Type',
            data: 'Sleeper'
        }
    ]
    return (
        <div className='w-full shadow-[0px_0px_10px_2px_rgba(0,0,0,0.1)] bg-white p-5 rounded-[10px]'>
            <h2 className='text-base font-semibold mb-3'>Amenities & Features</h2>
            <div className='grid grid-cols-2 w-full gap-3'>
                {
                    specifications.map((item, index) => {

                        return (
                            <div key={index} className='space-y-1'>
                                <p className='text-[15px] font-semibold text-black/50'>{item.title}</p>
                                <p className='text-sm'>{item.data}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default BusSpecification
