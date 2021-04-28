import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { links, social } from '../../data/data'
import { Nav } from './Navbar.styles'
import logo from '../../images/logo.svg'

const people = [
    "Siri",
    "Alexa",
    "Google",
    "Facebook",
    "Twitter",
    "Linkedin",
    "Sinkedin"
];

const Navbar = () => {
    const [show, setShow] = React.useState(false)
    // const [searchTerm, setSearchTerm] = React.useState("");
    // const [searchResults, setSearchResults] = React.useState([] as string[]);


    // const handleChange = (event: any) => {
    //     setSearchTerm(event.target.value);
    // };

    // React.useEffect(() => {
    //     const results: string[] = people.filter(person =>
    //         person.toLowerCase().includes(searchTerm)
    //     );
    //     setSearchResults(results);
    // }, [searchTerm]);

    return (
        <>
            <Nav>
                <nav>
                    <div className='nav-header'>
                        <Link to='/'>
                            <img src={logo} />
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
                        {/* <input
                            type="text"
                            placeholder="Search"
                            value={searchTerm}
                            onChange={handleChange}
                        />
                        <ul>
                            {searchResults.map(item => (
                                <li>{item}</li>
                            ))}
                        </ul> */}
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