import React, { useState } from 'react'
import Slider from '../components/Slider/Slider'
import Navbar from '../components/Navbar/Navbar'
import Title from '../components/Title/Title'
import ItemSlider from '../components/ItemSlider/ItemSlider'
import { Global } from './Home.styles'

const Home: React.FC = () => {
    return (
        <>
            <Global />
            <Navbar />
            <Slider />
            <Title title='in my wardrobe' />
            <ItemSlider />
        </>
    )
}

export default Home
