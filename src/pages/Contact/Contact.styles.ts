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
    h3{
        text-align: center;
        letter-spacing: .1rem;
        margin-top: 4rem;
        text-decoration: underline;
    }
    
    .reverse{
        direction: rtl;
    }
 

`