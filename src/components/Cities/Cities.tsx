import React from 'react'
import { visitedCities } from '../../data/data'
import { ButtonStyle } from './Cities.styles'

const Cities = () => {
    return (
        <ButtonStyle>
            <div className='cities'>
                {visitedCities.map((city, id) => {
                    return <span key={id}>{city}</span>
                })}
            </div>
        </ButtonStyle>
    )
}

export default Cities
