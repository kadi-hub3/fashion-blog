import React from 'react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import data from '../../data/data'
import { Slider } from './ImgSlider.styles'
const ImgSlider = () => {
    SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

    return (
        <Slider>
            <div className='slider'>
                <Swiper
                    spaceBetween={2}
                    slidesPerView={6}
                    grabCursor={true}
                    autoplay
                >
                    {data.map((image) => {
                        return <SwiperSlide>
                            <img src={image.src} alt='insta-img' />

                        </SwiperSlide>

                    })}

                </Swiper>
            </div >
        </Slider>

    )
}

export default ImgSlider
