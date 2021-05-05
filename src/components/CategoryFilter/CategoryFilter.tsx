import React from 'react'
import data from '../../data/data'
import { FilterStyle } from './CategoryFilter.styles'
import { Link } from 'react-router-dom'

const CategoryFilter: React.FC<{ cat: string }> = ({ cat }) => {

    return (
        <FilterStyle>
            <div className='filter-container'>
                {data.filter(item => item.category === cat).map((filteredItem, id) => {
                    return (
                        <Link to={`/post/${filteredItem.id}`}>
                            <div className='card' key={id}>
                                <img src={filteredItem.src} alt='' />
                                <div className='contentBx'>
                                    {filteredItem.title}
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </FilterStyle>
    )
}

export default CategoryFilter
