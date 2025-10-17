import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { useRef, useState } from 'react';
import { BusSliderData } from '../../localData/BusSliderData';

const BusSlider = () => {
    const swiperRef = useRef(null);

    return (
        <Swiper
            pagination={{ clickable: true }}
            onSwiper={(swiper) => {
                swiperRef.current = swiper;
            }}
            breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 6 },
                462: { slidesPerView: 1.5, spaceBetween: 13 },
                677: { slidesPerView: 3, spaceBetween: 10 },
                1024: { slidesPerView: 3.5, spaceBetween: 20 },
                1540: { slidesPerView: 4, spaceBetween: 10 },
            }}
            className="mySwiper relative cursor-grab !py-1 "
        >
            {BusSliderData.map((item, index) => {
                const { img } = item;
                return (
                    <SwiperSlide
                        key={index}
                        className='h-auto'
                    >
                        <div className="h-full w-full !overflow-hidden shadow-[0_0_6px_2px_rgba(0,0,0,0.1)] rounded-[10px]"
                        >
                            <img
                                src={img}
                                alt='supa express offers'
                                loading='lazy'
                                className='!h-[137px] max-md:!h-[190px] w-full hover:scale-105 transition-transform duration-300 '
                            />
                            <div className='p-4'>
                                <h2 className="font-semibold text-[16px] max-sm:text-[14px] text-[#2C5530]">
                                    {item.title}
                                </h2>
                                <p className="text-[13px] max-sm:text-xs leading-[22px] text-gray-600 text-justify">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                )
            })}

        </Swiper>
    );
};

export default BusSlider;
