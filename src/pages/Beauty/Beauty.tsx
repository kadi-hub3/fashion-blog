import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Title from '../../components/Title/Title'
import CategoryFilter from '../../components/CategoryFilter/CategoryFilter'

const Beauty = () => {
    return (
        <>
            <Navbar />
            <Title title='beauty' />
            <main>
                <p>Divulge Lana’s best kept beauty secrets. Watch makeup tutorials and browse carefully curated beauty products</p>
                <CategoryFilter cat='beauty' />
            </main>
        </>
    )
}

export default Beauty
