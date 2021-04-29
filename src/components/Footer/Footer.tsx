import React from 'react'
import { FooterStyle } from './Footer.styles'

const Footer = () => {
    return (
        <FooterStyle>
            <footer>
                <div className='before-footer'>
                    <input type='text' placeholder='Type some keyword..' />
                    <div className='latest-video'>
                        <h3>latest video</h3>
                    </div>
                    <div className='location'>
                        <h3>current location</h3>
                    </div>
                </div>
                <div className='footer'>
                    <ul>
                        <h4>© Gigs & Glam</h4>
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
