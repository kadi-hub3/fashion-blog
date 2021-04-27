import React from 'react'
import data from '../../data/data'
import { FilterStyle } from './CategoryFilter.styles'

const CategoryFilter: React.FC<{ cat: string }> = ({ cat }) => {



    return (
        <FilterStyle>
            <div className='filter-container'>
                {data.filter(item => item.category === cat).map((filteredItem) => {
                    return (
                        <div className='card'>
                            <div className='imgBx'>
                                <img src={filteredItem.src} alt='' />
                            </div>
                            <div className='contentBx'>
                                <div className='content'>
                                    <h3>{filteredItem.text}</h3>
                                    {/* <Link to={link}>
                                <button className='start' onClick={() => startQuiz(category)}>Start</button>
                            </Link> */}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </FilterStyle>
    )
}

export default CategoryFilter
