import React from 'react'
import { BannerStyle } from './Banner.styles'

const Banner: React.FC<{ img?: string }> = ({ img }) => {
    return (
        <BannerStyle>
            <div className='banner-img'>
                <img src={img} alt='img' />
            </div>
        </BannerStyle>
    )
}

export default Banner
