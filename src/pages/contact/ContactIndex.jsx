import React from 'react'
import { CompanyData } from '../../localData/CompanyData'
import { ReactComponent as Share } from '../../assets/svg/share.svg';
import { socialMedia } from '../../localData/CompanyData'
import Map from './Map';
import ContactForm from '../../components/form/ContactForm';
import DownloadIndex from '../../components/download/DownloadIndex';

const ContactIndex = () => {

    return (
        <>
            <main className='px-16 max-[800px]:px-10 max-sm:px-8 my-14 max-sm:my-9'>
                <div className='max-w-[1070px] flex flex-col items-center mx-auto gap-3 mb-14 max-[800px]:mb-7'>
                    <h1 className='font-bold text-[25px] max-[909px]:text-[20px] max-sm:text-[18px] text-mainBlue'>Send Your Message</h1>
                    <p className='text-[13px] leading-[25px] text-[#000000B2] text-center max-sm:leading-[20px] '>
                        You can reach us out for any service related queries
                    </p>
                </div>
                <section className="w-full flex justify-between items-stretch max-sm:flex-col max-sm:gap-10 gap-7 max-[978px]:flex-col py-14  pt-0 mx-auto">
                    <div className='w-1/2 max-[978px]:w-full shadow-[0px_0px_10px_2px_rgba(0,0,0,0.1)] p-10 max-[464px]:p-5 rounded-[10px] space-y-10 max-sm:space-y-6'>
                        {
                            CompanyData.map((item, index) => {
                                return (
                                    <div key={index} className='flex gap-7 max-sm:gap-4 max-[424px]:!gap-3'>
                                        <div className='w-[60px] h-[60px] max-lg:w-[50px] max-lg:h-[50px] max-sm:w-[40px] max-sm:h-[40px] shadow-[0_0_10px_2px_rgba(0,0,0,0.1)] rounded-full grid place-items-center'>
                                            {item.icon}
                                        </div>
                                        <div>
                                            <p className='text-[22px] text-lightGreen max-lg:text-[18px] max-sm:text-[16px]'>
                                                {item.title}
                                            </p>
                                            <a href={index === 0 ? undefined : item.info1.path}
                                                rel='noreferrer'
                                                aria-disabled={index == 0}
                                            >
                                                <p className='text-[15px] max-lg:text-sm max-sm:text-xs text-[#2A2A2A] mt-1 hover:text-lightGreen transition-all cursor-pointer'>
                                                    {item.info1.name}
                                                </p>
                                            </a>
                                            {
                                                item?.info2 && (
                                                    <a href={item.info2.path} target='_blank' rel='noreferrer'>
                                                        <p className='text-[15px] max-lg:text-sm max-sm:text-xs text-[#2A2A2A] mt-1 hover:text-lightGreen transition-all cursor-pointer'>

                                                            {item.info2.name}
                                                        </p>
                                                    </a>
                                                )
                                            }
                                            {
                                                item?.info3 && (
                                                    <a href={item.info3.path} target='_blank' rel='noreferrer'>
                                                        <p className='text-[15px] max-lg:text-sm max-sm:text-xs text-[#2A2A2A] mt-1 hover:text-lightGreen transition-all cursor-pointer'>

                                                            {item.info3.name}
                                                        </p>
                                                    </a>
                                                )
                                            }

                                        </div>
                                    </div>
                                )
                            })
                        }
                        <div className='flex gap-7 max-sm:gap-4 max-[424px]:!gap-3'>
                            <div className='w-[60px] h-[60px] max-lg:w-[50px] max-lg:h-[50px] max-sm:w-[40px] max-sm:h-[40px] shadow-[0_0_10px_2px_rgba(0,0,0,0.1)] rounded-full grid place-items-center'>
                                <Share className=' fill-lightGreen w-[24px] h-[25px] max-lg:w-[20px] max-lg:h-[22px] max-sm:w-[18px] max-sm:h-[18px]' />
                            </div>
                            <div>
                                <p className='text-[22px] text-chocolate max-lg:text-[18px] max-sm:text-[16px]'>
                                    Connect With Us
                                </p>

                                <div className='flex gap-3 mt-2 max-lg:flex-wrap max-[424px]:!gap-2'>
                                    {
                                        socialMedia.map((item, index) => {
                                            return (
                                                <a key={index} href={item.path} target='_blank' rel='noreferrer'>
                                                    <div className='cursor-pointer hover:bg-mainBlueHover transition-alla
                                        w-[34px] h-[34px] rounded-full bg-mainBlue grid place-items-center'>
                                                        {item.icon}
                                                    </div>
                                                </a>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-1/2 max-[978px]:w-full shadow-[0px_0px_10px_2px_rgba(0,0,0,0.1)] p-10 max-[464px]:p-5 rounded-[10px] space-y-10 max-sm:space-y-6'>
                        <ContactForm />
                    </div>
                </section>
                <section className="w-full pb-28 max-md:pb-20  max-sm:pb-16 max-w-[1600px] mx-auto mt-20 max-lg:mt-16 max-md:mt-14 max-sm:mt-8">
                    <Map />
                </section>
            </main>
            <DownloadIndex />
        </>
    )
}

export default ContactIndex