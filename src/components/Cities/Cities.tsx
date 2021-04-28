import React from 'react'
import { visitedCities } from '../../data/data'
import { Button } from './Cities.styles'

const Cities = () => {
    return (
        <Button>
            <div className='cities'>
                {visitedCities.map(city => {
                    return <span>{city}</span>
                })}
            </div>
        </Button>
    )
}

export default Cities
