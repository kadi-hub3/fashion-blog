import React, { useState } from 'react'
import Title from '../../components/Title/Title'
import { articles } from '../../data/data'
import { Button } from 'react-bootstrap'
const Shop = () => {
    const [items, setItems] = useState(articles)
    const cateSet = new Set(items.map(i => i.category))
    const categories = Array.from(cateSet).sort()
    return (
        <>
            <Title title='shop' />
            <div>
                {categories.map((category, index) => {
                    return <Button className="btn-primary" variant='dark' key={index}>{category}</Button>
                })}
            </div>
        </>
    )
}

export default Shop
