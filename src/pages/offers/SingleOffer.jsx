import React, { useState } from 'react'

import { ReactComponent as Cross } from '../../assets/svg/cross.svg'
import { toast } from 'react-toastify';

const SingleOffer = ({ selectedOfferImg, selectedTitle, selectedCode, setShowOffer }) => {
    window.scrollTo(0, 0);
    const [copied, setCopied] = useState(false); 
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(selectedCode);
            setCopied(true);
            toast.success('Code copied to clipboard!');
        } catch (err) {
            console.error('Failed to copy code: ', err);
        }
    };
    return (
        <main className='px-16 max-[800px]:px-10 max-sm:px-8 my-14 max-sm:my-9 w-full flex justify-center items-center min-h-[60vh]'>
            <div className='w-[1000px] shadow-[0_0_6px_2px_rgba(0,0,0,0.1)] p-6 rounded-[10px]'>
                <div className='flex justify-between items-center h-auto mb-4'>
                    <h1 className='font-bold text-[20px] max-md:text-[18px] max-sm:text-[16px]'>
                        {selectedTitle}
                    </h1>
                    <div
                        onClick={() => setShowOffer(false)}
                        className='cursor-pointer bg-mainBlue hover:bg-mainBlueHover transition-all duration-300 flex justify-center items-center w-10 h-10 rounded-full'>
                        <Cross className='w-7 h-7 stroke-white' />
                    </div>
                </div>
                <div className='w-full mb-6 rounded-[10px] h-[300px] max-sm:h-[250px] overflow-hidden'>
                    <img src={selectedOfferImg}
                        alt='supa express offer'
                        className='w-full h-full ' />
                </div>
                <div>
                    <h1 className='font-bold text-[18px] max-md:text-[17px] max-sm:text-[15px] mb-4'>
                        Terms & Conditions
                    </h1>
                    <ol className='list-decimal pl-5'>
                        <li className='text-[14px] max-sm:text-[13px] leading-[25px] text-[#000000B2] mb-3'>
                            The Offer promo code is valid only for tickets booked through the official Maitri Bus Mobile App or website.
                        </li>
                        <li className='text-[14px] max-sm:text-[13px] leading-[25px] text-[#000000B2] mb-3'>
                            The offer is applicable for journeys starting within Nepal and booked during the promotional period.
                        </li>
                        <li className='text-[14px] max-sm:text-[13px] leading-[25px] text-[#000000B2] mb-3'>
                            The promo code must be applied at the time of booking to receive the discount; it cannot be applied after the transaction is completed.
                        </li>
                        <li className='text-[14px] max-sm:text-[13px] leading-[25px] text-[#000000B2] mb-3'>
                            Each customer can use the promo code only once during the offer period.
                        </li>
                        <li className='text-[14px] max-sm:text-[13px] leading-[25px] text-[#000000B2] mb-3'>
                            The discount applies to the base fare only and excludes taxes, fees, or additional services.
                        </li>
                        <li className='text-[14px] max-sm:text-[13px] leading-[25px] text-[#000000B2] mb-3'>
                            The promo code is non-transferable, non-refundable, and cannot be exchanged for cash.
                        </li>
                        <li className='text-[14px] max-sm:text-[13px] leading-[25px] text-[#000000B2] mb-3'>
                            Maitri Bus reserves the right to modify or cancel the offer at any time without prior notice.
                        </li>
                        <li className='text-[14px] max-sm:text-[13px] leading-[25px] text-[#000000B2] mb-3'>
                            In case of any disputes, Maitri Bus’s decision will be final and binding.
                        </li>
                    </ol>
                </div>
                <button
                    onClick={handleCopy}
                    className=' mt-1 bg-mainBlue hover:bg-mainBlueHover transition-all duration-300 text-white px-6 py-3 rounded-[5px] text-[14px] max-sm:px-4 max-sm:py-2 max-sm:text-[13px]'>
                    {copied ? 'Copied!' : `Copy Code: ${selectedCode}`}
                </button>
            </div>
        </main>
    )
}

export default SingleOffer
