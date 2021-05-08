import React from 'react'
import { FooterStyle } from './Footer.styles'

const Footer = () => {
    return (
        <FooterStyle>
            <footer>
                <div className='before-footer'>
                    <input type='text' placeholder='Type some keyword..' />
                    <div className='latest-video'>
                        <h5>latest video</h5>
                    </div>
                    <div className='location'>
                        <h5>current location</h5>
                    </div>
                </div>
                <div className='footer'>
                    <h4>© Gigs & Glam</h4>
                    <ul>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Press</li>
                        <li>Disclaimer</li>
                    </ul>
                </div>
            </footer>
        </FooterStyle>
    )
}

export default Footer
