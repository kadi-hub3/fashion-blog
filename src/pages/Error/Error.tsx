import React from 'react'
import Title from '../../components/Title/Title'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Global } from './Error.styles'
const Error: React.FC = () => {
    return (
        <>
            <Global />
            <Title title='404 error page' />
            <div className='button'>
                <Link to='/'><Button type="button" className="btn btn-dark btn-lg">Go back home</Button></Link>
            </div>
        </>
    )
}

export default Error
