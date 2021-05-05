import React from 'react'
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import data from '../../data/data'
import { SlideStyle, SwiperStyle } from './Slider.styles'
import { Link } from 'react-router-dom'

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
                navigation
                breakpoints={{
                    350: {
                        width: 350,
                        slidesPerView: 1,
                    },
                    640: {
                        width: 640,
                        slidesPerView: 1,
                    },
                    768: {
                        width: 768,
                        slidesPerView: 2,
                    },
                    1024: {
                        width: 1024,
                        slidesPerView: 3,
                    },
                }}
            >

                {data.map((item, id) => {
                    return <SwiperSlide key={id} className='slide'>
                        <SlideStyle>
                            <Link to={`/post/${item.id}`}>
                                <img src={item.src} alt='post-img' />
                                <div>
                                    <h6>{item.category}</h6>
                                    <p>{item.title}</p>
                                </div>
                            </Link>
                        </SlideStyle>

                    </SwiperSlide>

                })}

            </Swiper>
        </SwiperStyle>
    )
}

export default Slider

