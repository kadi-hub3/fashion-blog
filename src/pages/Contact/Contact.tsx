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
            <ContactForm image={FormImg1} title='for business inquiries and invites' image1={FormImg2} title1='for questions and feedback' />

        </>
    )
}

export default Contact
