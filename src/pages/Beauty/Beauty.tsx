import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Title from '../../components/Title/Title'
import CategoryFilter from '../../components/CategoryFilter/CategoryFilter'
import Footer from '../../components/Footer/Footer'
import { Global } from './Beauty.styles'

const Beauty = () => {
    return (
        <>
            <Global />
            <Navbar />
            <Title title='beauty' />
            <main>
                <p>Divulge Lana’s best kept beauty secrets. Watch makeup tutorials and browse carefully curated beauty products</p>
                <CategoryFilter cat='beauty' />
            </main>
            <Footer />
        </>
    )
}

export default Beauty
