import React from 'react'

const OfferCard = ({setShowOffer,setSelectedCode,setSelectedTitle,setSelectedOfferImg,img,code,title}) => {
    const handleClick=()=>{
        setShowOffer(true);
        setSelectedCode(code);
        setSelectedTitle(title);
        setSelectedOfferImg(img);

    }
    return (
        <div
            className="cursor-pointer h-full w-full !overflow-hidden shadow-[0_0_6px_2px_rgba(0,0,0,0.1)] rounded-[10px]"
            onClick={handleClick}
        >
            <img
                src={img}
                alt='supa express offers'
                loading='lazy'
                className='!h-[137px] max-md:!h-[120px] w-full hover:scale-105 transition-transform duration-300 '
            />
            <div className='p-4'>
                <h2 className="font-semibold text-[16px] max-[909px]:text-[14px] text-[#2C5530]">
                   {title}
                </h2>
                <p className="text-[13px] max-[909px]:text-xs leading-[22px] text-gray-600 text-justify mt-1">
                    Use Code {code}
                </p>
            </div>
        </div>
    )
}

export default OfferCard
