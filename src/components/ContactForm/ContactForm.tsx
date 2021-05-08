import React from 'react'
import { FormStyle } from './ContactForm.styles'

const ContactForm: React.FC<{ image: string, title: string }> = ({ image, title }) => {
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [message, setMessage] = React.useState('')
    const [status, setStatus] = React.useState('submit')

    let buttonText = status;

    const handleChange = (e: any) => {
        const field = e.target.id;
        if (field === "name") {
            setName(e.target.value)
        } else if (field === "email") {
            setEmail(e.target.value)
        } else if (field === "message") {
            setMessage(e.target.value)
        }
    }
    // const handleSubmit = (e: any) => {
    //     e.preventDefault();
    //     setStatus('Sending!')

    return (
        <FormStyle>
            <main>
                <h4>{title}</h4>
                <section className='form-section'>
                    <div className='form-img'>
                        <img src={image} alt='form-img' />
                    </div>
                    <form method="POST">
                        <h5>Fields marked with an * are required</h5>
                        <input
                            type="text"
                            id="name"
                            placeholder='Name *'
                            value={name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            id="email"
                            placeholder='Email *'
                            value={email}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            id="message"
                            placeholder='Message *'
                            value={message}
                            onChange={handleChange}
                            required
                        />
                        <button type="submit">{buttonText}</button>
                    </form>
                </section>
            </main>
        </FormStyle>

    )
}

export default ContactForm
