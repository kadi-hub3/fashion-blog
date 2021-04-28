import React from 'react'
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import { articles } from '../../data/data'
import { Slide, SwiperStyle } from './ItemSlider.styles'


const ItemSlider = () => {

    SwiperCore.use([Navigation, Autoplay]);

    return (
        <SwiperStyle>
            <Swiper
                spaceBetween={0}
                slidesPerView={8}
                grabCursor={true}
                autoplay
                loop
                navigation
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >

                {articles.map((item) => {
                    return <SwiperSlide>
                        <Slide>
                            <img src={item.src} />
                        </Slide>

                    </SwiperSlide>

                })}

            </Swiper>
        </SwiperStyle>
    )
}

export default ItemSlider

