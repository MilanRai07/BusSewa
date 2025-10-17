import React, { useState } from 'react'
import { ReactComponent as Arrow } from '../../../assets/svg/blogArrow.svg'
import { ReactComponent as Bus } from '../../../assets/svg/bus.svg';
import { ReactComponent as Location } from '../../../assets/svg/seedLocation.svg'
import { ReactComponent as Calendar } from '../../../assets/svg/bookingSvg/calendar.svg'
import { ReactComponent as Search } from '../../../assets/svg/search.svg'
import { ReactComponent as Morning } from '../../../assets/svg/bookingSvg/morning.svg'
import { ReactComponent as Day } from '../../../assets/svg/bookingSvg/day.svg'
import { ReactComponent as Evening } from '../../../assets/svg/bookingSvg/evening.svg'
import { ReactComponent as Night } from '../../../assets/svg/bookingSvg/night.svg'
import { ReactComponent as Star } from '../../../assets/svg/bookingSvg/star.svg'
import { ReactComponent as People } from '../../../assets/svg/bookingSvg/people.svg'
import { ReactComponent as Building } from '../../../assets/svg/bookingSvg/building.svg'
import PriceRangeSlider from './PriceRangeSlider';


const bookingDepartureTime = [
    {
        icon: <Morning />,
        name: 'Before 10AM'
    },
    {
        icon: <Day />,
        name: '10AM-5PM'
    },
    {
        icon: <Evening />,
        name: '5PM-11PM'
    },
    {
        icon: <Night />,
        name: 'After 11PM'
    }
]
const MaitriBookingIndex = () => {
    const [pickUp, setPickUp] = useState('');
    const [showPickUp, setShowPickUp] = useState(false);
    const [showDropOff, setShowDropOff] = useState(false);
    const [dropOff, setDropOff] = useState('');

    const pickUpLists = ['Kathmandu', 'Bhaktapur', 'Lalitpur', 'Pokhara']
    const dropOffLists = ['Kathmandu', 'Bhaktapur', 'Lalitpur', 'Pokhara']

    return (
        <main className='px-16 max-[800px]:px-10 max-sm:px-8 my-14'>
            <div className='flex gap-3 items-center mb-7'>
                <Arrow className='w-[16px] h-[12px] 2x-l:w-[14px] cursor-pointer 2x-l:h-[14px] !fill-black/60 hover:!fill-mainBlueHover rotate-180' />
                <div>
                    {
                        (dropOff || pickUp) && (
                            <p className='font-bold text-base'>{pickUp} - {dropOff}</p>
                        )
                    }
                    <p className='text-[11px]'>12 Aug, Tue</p>
                </div>
            </div>

            <div className='flex justify-between items-stretch gap-3 max-[1371px]:flex-col max-[1371px]:shadow-[0px_0px_10px_2px_rgba(0,0,0,0.1)] max-[1371px]:p-3 max-[1371px]:rounded-[10px]'>
                <div className=' flex-2 flex gap-3 rounded-l-[10px] max-[1371px]:gap-10 max-[480px]:flex-col max-[480px]:gap-2'>
                    <div className=' bg-[#53515120] max-[1371px]:bg-white rounded-l-[10px] max-[1371px]:border-b-[1px] max-[1371px]:border-b-black/20 items-center flex w-1/2 cursor-pointer max-[480px]:w-full relative'>
                        <div className='flex gap-3 items-center p-4 w-full h-full'
                            onClick={() => setShowPickUp(!showPickUp)}
                        >
                            <Bus />
                            <div>
                                <p className='text-[12px]'>From</p>
                                <p className='font-bold text-base max-sm:text-sm'>{pickUp}</p>
                            </div>
                        </div>
                        {
                            showPickUp && (
                                <div className='absolute top-[110%] z-10 bg-white shadow-[0px_0px_10px_2px_rgba(0,0,0,0.1)] rounded-b-[10px] w-full flex flex-col rounded-[10px] overflow-hidden '>
                                    {
                                        pickUpLists.map((item, index) => {
                                            return (
                                                <div
                                                    onClick={() => {
                                                        setPickUp(item)
                                                        setShowPickUp(false);
                                                    }}
                                                    key={index}
                                                    className={`p-4 flex items-center cursor-pointer gap-2 ${index !== pickUpLists.length - 1 ? 'border-b-black/30 border-b-[0.5px] ' : ''} hover:bg-[#53515120] transition-all duration-300`}>
                                                    <Building />
                                                    <p className='font-semibold text-sm'>
                                                        {item}
                                                    </p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        }
                    </div>

                    <div className=' bg-[#53515120] max-[1371px]:bg-white rounded-l-[10px] max-[1371px]:border-b-[1px] max-[1371px]:border-b-black/20 items-center flex w-1/2 cursor-pointer max-[480px]:w-full relative'>
                        <div className='flex gap-3 items-center p-4 w-full h-full'
                            onClick={() => setShowDropOff(!showDropOff)}
                        >
                            <Bus />
                            <div>
                                <p className='text-[12px]'>To</p>
                                <p className='font-bold text-base max-sm:text-sm'>{dropOff}</p>
                            </div>
                        </div>
                        {
                            showDropOff && (
                                <div className='absolute top-[110%] z-10 bg-white shadow-[0px_0px_10px_2px_rgba(0,0,0,0.1)] rounded-b-[10px] w-full flex flex-col rounded-[10px] overflow-hidden '>
                                    {
                                        dropOffLists.map((item, index) => {
                                            return (
                                                <div
                                                    onClick={() => {
                                                        setDropOff(item)
                                                        setShowDropOff(false)
                                                    }}
                                                    key={index}
                                                    className={`p-4 flex items-center cursor-pointer gap-2 ${index !== dropOffLists.length - 1 ? 'border-b-black/30 border-b-[0.5px] ' : ''} hover:bg-[#53515120] transition-all duration-300`}>
                                                    <Building />
                                                    <p className='font-semibold text-sm'>
                                                        {item}
                                                    </p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className='bg-[#53515120] max-[1371px]:bg-white flex-1 p-4 items-center flex max-[1371px]:hidden'>
                    <div>
                        <p className='text-[12px]'>Departure</p>
                        <div className='flex gap-2 mt-2'>
                            <Calendar className='w-[20px] h-[20px] max-sm:w-[18px] max-sm:h-[18px]' />
                            <p className='font-medium text-[13px]'>22/08/2025</p>
                        </div>
                    </div>
                </div>
                {/* show in small devices only */}
                <div className='hidden max-[1371px]:flex p-4 justify-between items-center max-sm:flex-col max-sm:items-start max-sm:gap-4'>
                    <div>
                        <p className='text-[12px]'>Departure</p>
                        <div className='flex gap-2 mt-2'>
                            <Calendar className='w-[20px] h-[20px] max-sm:w-[18px] max-sm:h-[18px]' />
                            <p className='font-medium text-[13px]'>22/08/2025</p>
                        </div>
                    </div>

                    <div>
                        <p className='text-[12px]'>Today</p>
                        <div className='flex gap-2 mt-2'>
                            {
                                [...Array(5)].map((item, index) => {
                                    return (
                                        <div className='w-[43px] aspect-square rounded-[10px] bg-mainBlue text-white p-1 flex flex-col items-center justify-center cursor-pointer'>
                                            <p className='font-semibold text-sm'>12</p>
                                            <p className='font-medium text-[13px]'>Tue</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className=' flex-2 flex max-[1371px]:flex-col '>
                        <div className='bg-[#53515120] max-[1371px]:bg-white max-[1371px]:flex-1 p-4 max-[1371px]:hidden'>
                            <p className='text-[12px]'>Today</p>
                            <div className='flex gap-2 mt-2'>
                                {
                                    [...Array(5)].map((item, index) => {
                                        return (
                                            <div className='w-[43px] aspect-square rounded-[10px] bg-mainBlue text-white p-1 flex flex-col items-center justify-center cursor-pointer'>
                                                <p className='font-semibold text-sm'>12</p>
                                                <p className='font-medium text-[13px]'>Tue</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>

                        <div className='flex gap-2 items-center bg-mainBlue hover:bg-mainBlueHover transition-colors p-4 rounded-r-[10px] max-[1371px]:rounded-l-[10px] overflow-hidden cursor-pointer'>
                            <Search className='w-[20px] h-[20px] max-sm:w-[18px] max-sm:h-[18px] stroke-white' />
                            <p className='font-bold text-[18px] max-[1371px]:text-base text-white'>Search Buses</p>
                        </div>
                    </div>
                </div>
            </div>


            {/* filters and busses section */}
            <div className='flex flex-col lg:flex-row justify-between items-start gap-10 mt-14'>
                <div className='lg:sticky lg:top-4 rounded-[10px] w-full lg:w-[380px] shadow-[0px_0px_5px_1px_rgba(0,0,0,0.1)] p-6 space-y-3'>
                    <div className='flex justify-between pb-3 border-b-[0.5px] border-[#00000066]'>
                        <p className='font-medium text-sm'>Filters</p>
                        <p className='text-[11px] text-[#00000066] cursor-pointer hover:underline'>Clear All</p>
                    </div>

                    {/* departure day times */}
                    <div>
                        <p className='font-medium text-sm mt-7 text-black/60 max-sm:text-[13px]'>Departure Day</p>
                        <div className='grid grid-cols-2 gap-3 mt-6'>
                            {
                                bookingDepartureTime.map((item, index) => {
                                    return (
                                        <div key={index} className='cursor-pointer hover:scale-105 transition-all duration-300 flex flex-col gap-2 justify-center items-center shadow-[0px_0px_10px_2px_rgba(0,0,0,0.1)] rounded-[5px] p-4 max-sm:p-3'>
                                            {item.icon}
                                            <p className='font-semibold text-[11px]'>{item.name}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                    {/* price range slider */}
                    <PriceRangeSlider />

                    {/* tick options */}
                    <div className="mt-7">
                        <p className="font-medium text-sm text-gray-600 mb-4 max-sm:text-[13px]">Offers</p>

                        <div className="flex flex-col gap-3 bg-gray-50 p-4 rounded-lg border border-gray-200 shadow-sm">
                            <label
                                htmlFor="discount"
                                className="flex items-center gap-3 cursor-pointer hover:text-mainBlue transition-colors"
                            >
                                <input
                                    type="checkbox"
                                    id="discount"
                                    name="discount"
                                    value="discount"
                                    className="w-4 h-4 accent-mainBlue cursor-pointer"
                                />
                                <span className="text-sm text-gray-700 max-sm:text-[13px]">Discount Available</span>
                            </label>

                            <label
                                htmlFor="seasonal"
                                className="flex items-center gap-3 cursor-pointer hover:text-mainBlue transition-colors"
                            >
                                <input
                                    type="checkbox"
                                    id="seasonal"
                                    name="seasonal"
                                    value="seasonal"
                                    className="w-4 h-4 accent-mainBlue cursor-pointer"
                                />
                                <span className="text-sm text-gray-700 max-sm:text-[13px]">Seasonal Offers</span>
                            </label>
                        </div>
                    </div>

                </div>

                {/* book cards of buses */}
                <div className='w-full'>
                    <div className='flex flex-col gap-8'>
                        {
                            [...Array(8)].map((_, index) => {

                                return (
                                    <div
                                        key={index}
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
                            )
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}

export default MaitriBookingIndex
