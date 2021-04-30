import React from 'react'
import Slider from '../../components/Slider/Slider'
import Title from '../../components/Title/Title'
import ItemSlider from '../../components/ItemSlider/ItemSlider'
import ImgSlider from '../../components/ImgSlider/ImgSlider'
import PostUI from '../../components/PostUI/PostUI'
import Banner from '../../components/Banner/Banner'


import { Global } from './Home.styles'

const Home: React.FC = () => {
    return (
        <>
            <Global />
            <Slider />
            <Title title='in my wardrobe' />
            <ItemSlider />
            <PostUI />
            <Banner />
            <Title title='shop my instagram' />
            <ImgSlider />

        </>
    )
}

export default Home
