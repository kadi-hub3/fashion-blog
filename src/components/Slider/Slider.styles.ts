import styled from 'styled-components'

export const Slide = styled.div`

     img{
        width: 300px;
        max-height: 300px;
        // position: relative;
        margin-top:3rem;

    }
    
    div{
        position: absolute;
        top: 80%; 
        right: 50%;
        transform: translate(20%,-50%);
        display: flex;
        flex-direction: column;
        z-index: 1;
        background: #fff;
        padding: 1em 1em; 
        text-transform: uppercase;
        text-align: center;
        font-weight: 500;

        p{
            height: 6em;
            width: 8em;
            margin: 1em 0;
        }

    }

`