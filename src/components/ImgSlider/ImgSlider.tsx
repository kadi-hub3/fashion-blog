import React from 'react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import data from '../../data/data'
import { Slide } from './ImgSlider.styles'
const ImgSlider = () => {
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

                {data.map((image) => {
                    return <SwiperSlide>
                        <Slide>
                            <img src={image.src} />
                        </Slide>

                    </SwiperSlide>

                })}

            </Swiper>
        </div >
    )
}

export default ImgSlider
