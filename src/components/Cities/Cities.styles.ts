import styled from 'styled-components'

export const Button = styled.div`

    .cities{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1rem;
        margin: 1rem;
        padding: 2rem 0;
    }
    span {
        background: transparent;
        font-size: .9rem;
        text-transform: uppercase;
        padding: .5rem 1rem;
        border: black 2px solid;

        &:hover{
            background: #111;
            color: #fff;
        }
    }
    @media only screen and (max-width: 1024px) { 
        span{
            font-size: .7rem;
            padding: .5rem .5rem;
            margin: 0 .5rem;
        }
    }

`