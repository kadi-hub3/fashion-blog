import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Title from '../../components/Title/Title'
import MapChart from '../../components/MapChart/MapChart'
import Cities from '../../components/Cities/Cities'
import Footer from '../../components/Footer/Footer'

const Travel = () => {
    return (
        <>
            <Navbar />
            <Title title='travel' />
            <MapChart />
            <Cities />
            <Footer />
        </>
    )
}

export default Travel
