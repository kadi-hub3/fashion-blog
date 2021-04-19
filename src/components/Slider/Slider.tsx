import React from 'react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import data from '../../data/data'
import { Slide } from './Slider.styles'
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

const Slider = () => {

    SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

    return (
        <div>
            <Swiper
                spaceBetween={0}
                slidesPerView={4}
                grabCursor={true}
                autoplay
                loop
                navigation
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >

                {data.map((item) => {
                    return <SwiperSlide className='slide' >
                        <Slide>
                            <img src={item.src} />
                            <div>
                                <h6>{item.category}</h6>
                                <p>{item.text}</p>
                            </div>
                        </Slide>

                    </SwiperSlide>

                })}

            </Swiper>
        </div>
    )
}

export default Slider

