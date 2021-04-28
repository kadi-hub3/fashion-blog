import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Title from '../../components/Title/Title'
import CategoryFilter from '../../components/CategoryFilter/CategoryFilter'
import Footer from '../../components/Footer/Footer'
import { Global } from './Looks.styles'

const Looks = () => {
    return (
        <>
            <Global />
            <Navbar />
            <Title title='looks' />
            <main>
                <p>Have a peak into every corner of Tamara’s wardrobe, find inspiration while browsing through her outfits and favourite fashion pieces</p>
                <CategoryFilter cat='looks' />
            </main>
            <Footer />
        </>
    )
}

export default Looks
