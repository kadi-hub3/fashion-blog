import React from 'react'
import Title from '../../components/Title/Title'
import CategoryFilter from '../../components/CategoryFilter/CategoryFilter'
import { Global } from './Looks.styles'

const Looks = () => {
    return (
        <>
            <Global />
            <Title title='looks' />
            <main>
                <p>Have a peak into every corner of Tamara’s wardrobe, find inspiration while browsing through her outfits and favourite fashion pieces</p>
                <CategoryFilter cat='looks' />
            </main>
        </>
    )
}

export default Looks
