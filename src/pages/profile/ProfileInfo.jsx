import React from 'react'
import { ReactComponent as Profile } from '../../assets/svg/navbarSvg/account.svg'

const ProfileInfo = () => {
    return (
        <>
            <div className='max-w-[1070px] flex flex-col items-center mx-auto gap-2 mb-14 max-[800px]:mb-7'>
                <h1 className='font-bold text-[25px] max-[909px]:text-[20px] max-sm:text-[18px] text-mainBlue'>My Profile</h1>
                <p className='text-[13px] leading-[25px] text-[#000000B2] text-center max-sm:leading-[20px]'>
                    View Your Account Information
                </p>
            </div>

            {/* Profile section */}
            <div className='w-full rounded-[10px] bg-gradient-to-r from-[#1565C0] to-[#0A2F5A] p-10 flex flex-col items-center gap-6 max-sm:gap-4 mb-14 max-[800px]:mb-7'>
                <div className='grid place-items-center w-24 h-24 max-md:w-16 max-md:h-16 max-sm:w-14 max-sm:h-14 border-3 border-white rounded-full'>
                    <Profile className='w-14 h-14 max-md:w-8 max-md:h-8 fill-white' />
                </div>
                <p className='text-[20px] font-bold text-white max-sm:text-[18px]'>Full Name</p>
            </div>

            {/* Information grid */}
            <div className='grid grid-cols-2 max-md:grid-cols-1 gap-10'>
                <div>
                    <p className='text-xs font-medium mb-2'>Full Name</p>
                    <div className='text-sm font-medium w-full border border-[#D9D9D9] p-3 rounded-[4px]'>
                        Milan Rai
                    </div>
                </div>
                <div>
                    <p className='text-xs font-medium mb-2'>Email Address</p>
                    <div className='text-sm font-medium w-full border border-[#D9D9D9] p-3 rounded-[4px]'>
                        example@gmail.com
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-2 max-md:grid-cols-1 gap-10 mt-8'>
                <div>
                    <p className='text-xs font-medium mb-2'>Phone Number</p>
                    <div className='text-sm font-medium w-full border border-[#D9D9D9] p-3 rounded-[4px]'>
                        98523234234
                    </div>
                </div>
                <div>
                    <p className='text-xs font-medium mb-2'>Location</p>
                    <div className='text-sm font-medium w-full border border-[#D9D9D9] p-3 rounded-[4px]'>
                        Kathmandu
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileInfo
