import React, { useState } from 'react'
import Title from '../../components/Title/Title'
import { articles } from '../../data/data'
import { Button } from 'react-bootstrap'
import { Global } from './Shop.styles'

const Shop = () => {
    const [items, setItems] = useState(articles)
    const cateSet = new Set(items.map(i => (i.category)))
    const categories = Array.from(cateSet)

    const handleClick = (e: any) => {
        let value = e.currentTarget.dataset.id
        console.log(value);

    }


    return (
        <>
            <Global />
            <Title title='shop' />
            <main>
                <div className='btn-container'>
                    {categories.map(category => <Button data-id={category} variant='dark' onClick={handleClick} >{category}</Button>)}
                </div>
                <div className='shop'>
                    {items.filter((item, e) => item.category === 'bag').map((filteredItem, index) => {
                        return <a href={filteredItem.link} target='_blank' rel="noreferrer" >
                            <img src={filteredItem.src} key={index} alt='' />
                        </a>
                    })}
                </div>
            </main>
        </>
    )
}

export default Shop
