import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { useRef,useState } from 'react';
// import { ReactComponent as Chev } from '../../assets/svg/chevron.svg'
import { Offers } from '../../localData/Offers';

const Slider1 = () => {
    const swiperRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [totalSlides, setTotalSlides] = useState(0);

    const goLeft = () => {
        if (swiperRef.current) swiperRef.current.slidePrev();
    };

    const goRight = () => {
        if (swiperRef.current) swiperRef.current.slideNext();
    };

    // const isFirst = currentIndex === 0;
    // const isLast = currentIndex === totalSlides - swiperRef.current?.params.slidesPerView;

    return (
            <Swiper
                pagination={{ clickable: true }}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                    setTotalSlides(swiper.slides.length);
                }}
                onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
                breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 5 },
                    462: { slidesPerView: 1.5, spaceBetween: 5 },
                    677: { slidesPerView: 3.2, spaceBetween: 10 },
                    1024: { slidesPerView: 3.5, spaceBetween: 20 },
                    1540: { slidesPerView: 4, spaceBetween: 10 },
                }}
                className="mySwiper relative cursor-grab"
            >
                {Offers.map((item, index) => {
                    const { img } = item;
                    return (
                        <SwiperSlide
                            key={index}
                            className='!h-[230px] max-md:!h-[190px]'
                        >
                            <div className="h-full w-full !overflow-hidden rounded-[10px] max-[462px]:rounded-none"
                            >
                                <img
                                    src={img}
                                    alt='supa express offers'
                                    loading='lazy'
                                    className='h-full w-full'
                                />
                            </div>
                        </SwiperSlide>
                    )
                })}

                {/* Left Arrow */}
                {/* <div
                    onClick={goLeft}
                    className="absolute left-[1%] top-1/2 z-30 -translate-y-1/2 cursor-pointer p-4"
                >
                    <Chev
                        className={`w-[38px] h-[38px] rotate-180 stroke-white transition-opacity duration-300 
                        ${isFirst ? 'opacity-30 pointer-events-none' : 'opacity-100'}`}
                    />
                </div> */}

                {/* Right Arrow */}
                {/* <div
                    onClick={goRight}
                    className="absolute right-[0%] max-sm:right-[1%] top-1/2 z-30 -translate-y-1/2 cursor-pointer p-4"
                >
                    <Chev
                        className={`w-[38px] h-[38px] stroke-white transition-opacity duration-300 
                        ${isLast ? 'opacity-30 pointer-events-none' : 'opacity-100'}`}
                    />
                </div> */}
            </Swiper>
    );
};

export default Slider1;
