import React from 'react'
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { articles } from '../../data/data'
import { SlideStyle, SwiperStyle } from './ItemSlider.styles'


const ItemSlider = () => {
    SwiperCore.use([Navigation, Autoplay]);

    return (
        <SwiperStyle>
            <Swiper
                spaceBetween={20}
                slidesPerView={8}
                grabCursor={true}
                autoplay
                loop
                navigation
            >

                {articles.map((item, id) => {
                    return <SwiperSlide key={id}>
                        <SlideStyle>
                            <a href={item.link} target='_blank' rel="noreferrer">
                                <img src={item.src} alt='item-img' />
                            </a>
                        </SlideStyle>

                    </SwiperSlide>

                })}

            </Swiper>
        </SwiperStyle>
    )
}

export default ItemSlider

