import React from 'react'
import Title from '../../components/Title/Title'
import MapChart from '../../components/MapChart/MapChart'
import Cities from '../../components/Cities/Cities'
import { Global } from './Travel.styles'
const Travel = () => {
    return (
        <>
            <Global />
            <Title title='travel' />
            <MapChart />
            <Cities />
        </>
    )
}

export default Travel
