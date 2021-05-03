import React from 'react'
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import data from '../../data/data'
import { SlideStyle, SwiperStyle } from './Slider.styles'


const Slider = () => {

    SwiperCore.use([Navigation, Autoplay]);

    return (
        <SwiperStyle>
            <Swiper
                slidesPerView={4}
                spaceBetween={40}
                grabCursor={true}
                loop
                autoplay
                navigation >

                {data.map((item, id) => {
                    return <SwiperSlide key={id}>
                        <SlideStyle>
                            <img src={item.src} alt='post-img' />
                            <div>
                                <h6>{item.category}</h6>
                                <p>{item.title}</p>
                            </div>
                        </SlideStyle>

                    </SwiperSlide>

                })}

            </Swiper>
        </SwiperStyle>
    )
}

export default Slider

