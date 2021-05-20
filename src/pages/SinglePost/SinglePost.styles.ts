import { createGlobalStyle } from "styled-components";

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
        padding: 2rem 10rem;

    }

    p{
        font-size: 1.2rem;
        padding: 1rem;
        line-height: 1.75;
        font-family: Georgia;
    }

    h6{
        text-transform: uppercase;
        font-family: sans-serif;

    }

    @media only screen and (max-width: 1024px) {
        main{
            padding: 1rem 2rem;
        }
      }
`;
