import React from 'react'
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { articles } from '../../data/data'
import { Slide, SwiperStyle } from './ItemSlider.styles'


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

                {articles.map((item) => {
                    return <SwiperSlide>
                        <Slide>
                            <a href={item.link} target='_blank' rel="noreferrer">
                                <img src={item.src} alt='item-img' />
                            </a>
                        </Slide>

                    </SwiperSlide>

                })}

            </Swiper>
        </SwiperStyle>
    )
}

export default ItemSlider

