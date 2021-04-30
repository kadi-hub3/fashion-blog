import React from 'react'
import { FormStyle } from './ContactForm.styles'

const ContactForm: React.FC<{ image: string }> = ({ image }) => {
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
    //     axios({
    //         method: "POST",
    //         url: "http://localhost:5000/contact",
    //         data: { name, email, message },
    //     }).then((response: any) => {
    //         if (response.data.status === "sent") {
    //             alert("Message Sent");
    //             setName('')
    //             setEmail('')
    //             setMessage('')
    //             setStatus('submit')
    //         } else if (response.data.status === "failed") {
    //             alert("Message Failed");
    //         }
    //     });
    // }

    return (
        <FormStyle>
            <section className='form-section'>
                <div className='form-img'>
                    <img src={image} alt='form-img' />
                </div>
                <form method="POST">
                    <h4>Fields marked with an * are required</h4>
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
        </FormStyle>

    )
}

export default ContactForm
