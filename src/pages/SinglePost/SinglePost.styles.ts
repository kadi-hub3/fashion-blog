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
        text-align: center;
        flex-direction: column;
        padding: 2rem 4rem;

    }

    p{
        font-size: 1.2rem;
        padding: 1rem;
        line-height: 1.75;
    }

    h4{
        text-transform: uppercase;
    }

`