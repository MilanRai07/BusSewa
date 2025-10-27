import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { useRef, useState } from 'react';
import { BusSliderData } from '../../../../localData/BusSliderData';

const BusPhotos = () => {
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
                        <div className="h-full w-full !overflow-hidden rounded-[10px]"
                        >
                            <img
                                src={img}
                                alt='supa express offers'
                                loading='lazy'
                                className='!h-[137px] max-md:!h-[190px] w-full hover:scale-105 transition-transform duration-300 '
                            />
                        </div>
                    </SwiperSlide>
                )
            })}

        </Swiper>
    );
};

export default BusPhotos;
