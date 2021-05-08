import React from 'react'
import Title from '../../components/Title/Title'
import { articles } from '../../data/data'
import { Button } from 'react-bootstrap'
import { Global } from './Shop.styles'

const Shop: React.FC = () => {
    const [items, setItems] = React.useState(articles)
    const [category, setCategory] = React.useState('')
    const [clicked, setClicked] = React.useState(false)
    const cateSet = new Set(items.map(i => (i.category)))
    const categories = Array.from(cateSet)

    const handleClick = (e: any) => {
        setClicked(true)
        let value = e.currentTarget.dataset.id
        console.log(value);
        setCategory(value)

    }


    return (
        <>
            <Global />
            <Title title='shop' />
            <main>
                <div className='btn-container'>
                    <Button variant='dark'>Under 100€</Button>
                    {categories.map(category => <Button data-id={category} variant='dark' onClick={handleClick} >{category}</Button>)}
                </div>
                {clicked ? <div className='shop'>
                    {items.filter((item) => item.category === category).map((filteredItem, index) => {
                        return <a href={filteredItem.link} target='_blank' rel="noreferrer" >
                            <img src={filteredItem.src} key={index} alt='' />
                        </a>
                    })}
                </div> : <div className='shop'>
                        {items.map(item => <a href={item.link} target='_blank' rel="noreferrer" >
                            <img src={item.src} alt='' />
                        </a>)}</div>}

            </main>
        </>
    )
}

export default Shop
