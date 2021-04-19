import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { links, social } from '../../data/data'
import { Nav, Global } from './Navbar.styles'

const Navbar = () => {
    const [show, setShow] = useState(false)


    return (
        <>
            <Global />
            <Nav>
                <nav>
                    <div className='nav-header'>
                        <img src={'K.M'} />
                        <button className='nav-toggle' onClick={() => setShow(!show)}>
                            <FaBars />
                        </button>
                    </div>
                    <div className={show ? 'links-container show' : 'links-container'} >
                        <ul className='links'>
                            {links.map(link => {
                                const { id, url, text } = link
                                return <li key={id}>
                                    <Link to={url}>{text}</Link>
                                </li>
                            })}
                        </ul>
                        <ul className='social-icons'>
                            {social.map(link => {
                                const { id, url, icon } = link
                                return <li key={id}>
                                    <Link to={url}>{icon}</Link>
                                </li>
                            })}
                        </ul>
                    </div>
                </nav>
            </Nav>
        </>
    )
}

export default Navbar