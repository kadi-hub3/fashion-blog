import React from 'react'
import Title from '../../components/Title/Title'
import CategoryFilter from '../../components/CategoryFilter/CategoryFilter'
import { Global } from './Beauty.styles'

const Beauty: React.FC = () => {
    return (
        <>
            <Global />
            <Title title='beauty' />
            <main>
                <p>Divulge Lana’s best kept beauty secrets. Watch makeup tutorials and browse carefully curated beauty products</p>
                <CategoryFilter cat='beauty' />
            </main>
        </>
    )
}

export default Beauty
