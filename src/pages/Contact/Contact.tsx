import React from 'react'
import ContactForm from '../../components/ContactForm/ContactForm'
import Title from '../../components/Title/Title'
import FormImg1 from '../../images/Post-images/img-2.png'
import FormImg2 from '../../images/Post-images/img-3.png'
import { Global } from './Contact.styles'
const Contact: React.FC = () => {


    return (
        <>
            <Global />
            <Title title='Contact' />
            <h3>FOR BUSINESS INQUIRIES AND INVITES</h3>
            <ContactForm image={FormImg1} />
            <h3>FOR QUESTIONS AND FEEDBACK</h3>
            <div className='reverse'>
                <ContactForm image={FormImg2} />
            </div>
        </>
    )
}

export default Contact
