import styled from 'styled-components'

export const FormStyle = styled.div`
    section{
        display: grid;
        grid-template-columns: repeat(2,1fr);
        margin: 1rem 0;
        height: 60vh;
    }
 
    .form-img img{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80%;
        height: 100%;
        padding: 2rem;


    }
    form{
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
        gap: .5rem;
        width: 100%;

    }
    input, textarea{
        padding: .5rem 2rem;
        font-size: 1rem;
        width: 80%;
    }
    button{
        padding: .5rem 2rem;
        font-size: 1rem;
        background: #111;
        color: #fff;
        text-transform: uppercase;

        &:hover{
            background: #fff;
            color: #111;
        }
    }
    .reverse{
        direction: rtl;
    }

    h3{
        text-transform: uppercase;
        text-decoration: none;
    }
        
    @media only screen and (max-width: 600px) {
        section{
            display: grid;
            grid-template-rows: repeat(2,1fr);
            margin: 1rem 0;
            height: 60vh;
        }
     
    }
`