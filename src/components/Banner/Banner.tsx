import React from 'react'
import BannerImg from '../../images/Post-images/img-7.jpg'
import { BannerStyle } from './Banner.styles'

const Banner = () => {
    return (
        <BannerStyle>
            <div className='banner-img'>
                <img src={BannerImg} alt='img' />
            </div>
        </BannerStyle>
    )
}

export default Banner
