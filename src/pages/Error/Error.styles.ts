import { createGlobalStyle } from 'styled-components'

export const Global = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    
    }
    button{
        text-transform: uppercase;
      
    }
    .button {
        display: flex; 
        justify-content: center;
        align-items: center;
        padding: 1rem 2rem;
        margin: 2rem;
    }
`