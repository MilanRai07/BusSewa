import React from 'react'
import Mobile from '../../assets/image/mobile.webp'
import GooglePlay from '../../assets/image/googleplay.webp'
import AppStore from '../../assets/image/appstore.webp'

const DownloadIndex = () => {
  return (
    <section className="w-full bg-[#F5F5F5] px-16 max-[900px]:px-10 max-sm:px-6 pt-10 max-lg:pb-10 flex justify-between items-center gap-10 max-lg:flex-col-reverse">
      {/* Text Section */}
      <div className="flex-1 max-lg:text-center">
        <h2 className="text-[32px] max-sm:text-2xl font-semibold mb-4">
          Download the app
        </h2>
        <p className="text-base text-black/50">
          Download now & avail our service through the app
        </p>

        <div className="flex mt-8 gap-4 justify-start max-lg:justify-center flex-wrap">
          <img
            src={GooglePlay}
            alt="googleplay"
            className="h-[60px] w-[180px] max-sm:h-[50px] max-sm:w-[160px] cursor-pointer"
          />
          <img
            src={AppStore}
            alt="appstore"
            className="h-[60px] w-[180px] max-sm:h-[50px] max-sm:w-[160px] cursor-pointer"
          />
        </div>
      </div>

      {/* Image Section */}
      <div className="flex-1 flex justify-center items-baseline">
        <img
          src={Mobile}
          alt="mobile"
          className="h-[350px] max-md:h-[300px] max-sm:h-[250px] object-contain"
        />
      </div>
    </section>
  )
}

export default DownloadIndex
