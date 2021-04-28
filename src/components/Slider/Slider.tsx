import React from 'react'
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import data from '../../data/data'
import { Slide, SwiperStyle } from './Slider.styles'
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

const Slider = () => {

    SwiperCore.use([Navigation, Autoplay]);

    return (
        <SwiperStyle>
            <Swiper
                slidesPerView={4}
                grabCursor={true}
                loop
                autoplay
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
                                <p>{item.title}</p>
                            </div>
                        </Slide>

                    </SwiperSlide>

                })}

            </Swiper>
        </SwiperStyle>
    )
}

export default Slider
