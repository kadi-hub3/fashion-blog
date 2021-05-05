import React from 'react'
import ContactForm from '../../components/ContactForm/ContactForm'
import Title from '../../components/Title/Title'
import FormImg1 from '../../images/Post-images/img-2.png'
import FormImg2 from '../../images/Post-images/img-4.png'
import { Global } from './Contact.styles'
const Contact: React.FC = () => {


    return (
        <main>
            <Global />
            <Title title='Contact' />
            <ContactForm image={FormImg2} title='for questions and feedback' />
            <ContactForm image={FormImg1} title='for business inquiries and invites' />
        </main>
    )
}

export default Contact
