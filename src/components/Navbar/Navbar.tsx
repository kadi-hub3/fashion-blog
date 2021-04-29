import React from 'react'
import { FaBars, FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { links, social } from '../../data/data'
import { Nav } from './Navbar.styles'
import logo from '../../images/logo.svg'


const Navbar = () => {
    const [show, setShow] = React.useState(false)

    return (
        <>
            <Nav>
                <nav>
                    <div className='nav-header'>
                        <Link to='/'>
                            <img src={logo} alt='logo' />
                        </Link>
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
                        <div className='search-box'>
                            <input className='search-input' type='text' placeholder='Type some keyword...' />
                            <FaSearch className='search-btn' />
                        </div>
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