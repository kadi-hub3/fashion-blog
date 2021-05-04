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
                breakpoints={{
                    640: {
                        width: 640,
                        slidesPerView: 2,
                        spaceBetween: 5

                    },
                    768: {
                        width: 768,
                        slidesPerView: 4,
                    },
                    1024: {
                        width: 1024,
                        slidesPerView: 6,
                    }
                }}
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

