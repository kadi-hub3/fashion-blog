import React, { useState } from 'react'
import Title from '../../components/Title/Title'
import { articles } from '../../data/data'
import { Button } from 'react-bootstrap'
import { Global } from './Shop.styles'

const Shop = () => {
    const [items, setItems] = useState(articles)
    const cateSet = new Set(items.map(i => (i.category)))
    const categories = Array.from(cateSet)

    return (
        <>
            <Global />
            <Title title='shop' />
            <div className='shop'>
                {categories.map((category, index) => {
                    return <div className='btn-container'>
                        <Button className="btn-primary" variant='light' key={index}>{category}</Button>
                        <div className='item-container'></div>
                    </div>
                })}
            </div>
        </>
    )
}

export default Shop
