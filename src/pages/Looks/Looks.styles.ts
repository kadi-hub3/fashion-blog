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

`