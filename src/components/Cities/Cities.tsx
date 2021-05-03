import React from 'react'
import { visitedCities } from '../../data/data'
import { Button } from './Cities.styles'

const Cities = () => {
    return (
        <Button>
            <div className='cities'>
                {visitedCities.map((city, id) => {
                    return <span key={id}>{city}</span>
                })}
            </div>
        </Button>
    )
}

export default Cities
