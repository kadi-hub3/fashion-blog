import { createGlobalStyle } from 'styled-components'

export const Global = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    main{
        display: flex; 
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 2rem;

    }

    p{
        font-size: 1.4rem;
        padding: 1rem;
    }
    .shop{
        display: flex;
        justify-content: center;

    }
    button{
        margin: 0 .5rem;
        text-transform: uppercase;
    }
    .btn-container{
        border-top: 2px solid black;
        border-bottom: 2px solid black;
    }

`