import React from 'react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
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
                    breakpoints={{
                        350: {
                            width: 350,
                            slidesPerView: 2,
                        },
                        640: {
                            width: 640,
                            slidesPerView: 2,
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
                    {data.map((image, id) => {
                        return <SwiperSlide>
                            <img key={id} src={image.src} alt='insta-img' />
                        </SwiperSlide>

                    })}

                </Swiper>
            </div >
        </Slider>

    )
}

export default ImgSlider
