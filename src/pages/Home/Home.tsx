import React, { useState } from 'react'
import Slider from '../../components/Slider/Slider'
import Navbar from '../../components/Navbar/Navbar'
import Title from '../../components/Title/Title'
import ItemSlider from '../../components/ItemSlider/ItemSlider'
import ImgSlider from '../../components/ImgSlider/ImgSlider'
import PostUI from '../../components/PostUI/PostUI'
import Banner from '../../components/Banner/Banner'
import Footer from '../../components/Footer/Footer'
import PostImg1 from '../../images/Post-images/img-2.jpg'
import PostImg2 from '../../images/Post-images/img-3.jpg'

import { Global } from './Home.styles'

const Home: React.FC = () => {
    return (
        <>
            <Global />
            <Navbar />
            <Slider />
            <Title title='in my wardrobe' />
            <ItemSlider />
            <Banner />
            <PostUI title1='hi' content1='there' image1={PostImg1} title2='hi' content2='there' image2={PostImg2} />
            <Title title='shop my instagram' />
            <ImgSlider />
            <PostUI title1='hi' content1='there' image1={PostImg1} title2='hi' content2='there' image2={PostImg2} />
            <Footer />

        </>
    )
}

export default Home
