import React from 'react'
import GooglePlay from '../../assets/image/googleplay.webp'
import AppStore from '../../assets/image/appstore.webp'


const Copyright = () => {
  return (
    <div className='flex justify-between items-center max-[862px]:flex-col py-6'>
      <p className='text-sm max-sm:text-[13px] font-medium text-[#00000099]'>Copyright © 2025. All Rights Reserved.</p>
      <div className="flex mt-8 gap-4 justify-start max-lg:justify-center flex-wrap">
               <img
                 src={GooglePlay}
                 alt="googleplay"
                 className="h-[50px] w-[160px] max-sm:h-[50px] max-sm:w-[160px] cursor-pointer"
               />
               <img
                 src={AppStore}
                 alt="appstore"
                 className="h-[50px] w-[160px] max-sm:h-[50px] max-sm:w-[160px] cursor-pointer"
               />
             </div>
    </div>
  )
}

export default Copyright
