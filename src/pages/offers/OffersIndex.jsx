import React, { useState } from 'react'
import OfferCard from '../../components/cards/OfferCard'
import DownloadIndex from '../../components/download/DownloadIndex'
import SingleOffer from './SingleOffer'

const offers = [
    {
        title: 'Summer Special Discount',
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        code: "123SDF"
    },
    {
        title: 'Winter Special Discount',
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        code: "DFSF234"
    },
    {
        title: 'Spring Special Discount',
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        code: "RED500"
    },
    {
        title: 'Monsoon Special Discount',
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        code: "RED600"
    },
    {
        title: 'Flash Sale Discount',
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        code: "FLASH20"
    },
    {
        title: 'Summer Special Discount',
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        code: "123SDF"
    },
    {
        title: 'Winter Special Discount',
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        code: "DFSF234"
    },
    {
        title: 'Spring Special Discount',
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        code: "RED500"
    },
    {
        title: 'Flash Sale Discount',
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        code: "FLASH20"
    },

]
const OffersIndex = () => {
    const [showOffer, setShowOffer] = useState(false)
    const [selectedOfferImg, setSelectedOfferImg] = useState(null);
    const [selectedCode, setSelectedCode] = useState(null);
    const [selectedTitle, setSelectedTitle] = useState(null);
    return (
        <>
            {
                !showOffer ? (
                    <main className='px-16 max-[800px]:px-10 max-sm:px-8 my-14 max-sm:my-9'>
                        <div className='max-w-[1070px] flex flex-col items-center mx-auto gap-3 mb-14 max-[800px]:mb-7'>
                            <h1 className='font-bold text-[25px] max-[909px]:text-[20px] max-sm:text-[18px] text-mainBlue'>Offers</h1>
                            <p className='text-[13px] leading-[25px] text-[#000000B2] text-center max-sm:leading-[20px] '>
                                From seasonal discounts during festivals to exclusive
                                promo codes for instant savings, we ensure your journey is cost-friendly.
                            </p>
                        </div>

                        {/* offers list */}
                        <div className='w-full grid grid-cols-3 gap-6 max-[700px]:grid-cols-2 max-[500px]:grid-cols-1'>
                            {
                                offers.map((item, index) => {
                                    return (
                                        <OfferCard key={index} setShowOffer={setShowOffer} setSelectedTitle={setSelectedTitle}
                                            setSelectedCode={setSelectedCode} setSelectedOfferImg={setSelectedOfferImg}
                                            img={item.img} code={item.code} title={item.title}
                                        />
                                    )
                                })
                            }
                        </div>

                    </main>
                )
                    : (
                       <SingleOffer selectedOfferImg={selectedOfferImg} selectedTitle={selectedTitle} selectedCode={selectedCode} 
                       setShowOffer={setShowOffer}
                       />
                    )
            }
            <DownloadIndex />
        </>
    )
}

export default OffersIndex
