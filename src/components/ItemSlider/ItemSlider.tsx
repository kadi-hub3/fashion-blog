import React from 'react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import { articles } from '../../data/data'
import { Slide } from './ItemSlider.styles'
import { maxHeaderSize } from 'http';


const ItemSlider = () => {

    SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

    return (
        <div>
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
        </div >
    )
}

export default ItemSlider

