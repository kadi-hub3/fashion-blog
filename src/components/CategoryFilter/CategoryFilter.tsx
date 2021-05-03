import React from 'react'
import data from '../../data/data'
import { FilterStyle } from './CategoryFilter.styles'

const CategoryFilter: React.FC<{ cat: string }> = ({ cat }) => {



    return (
        <FilterStyle>
            <div className='filter-container'>
                {data.filter(item => item.category === cat).map((filteredItem, id) => {
                    return (
                        <div className='card' key={id}>
                            <img src={filteredItem.src} alt='' />
                            <div className='contentBx'>
                                {filteredItem.title}
                                {/* <Link to={link}>
                                <button className='start' onClick={() => startQuiz(category)}>Start</button>
                            </Link> */}
                            </div>
                        </div>
                    )
                })}
            </div>
        </FilterStyle>
    )
}

export default CategoryFilter
