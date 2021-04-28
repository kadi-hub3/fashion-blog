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

`