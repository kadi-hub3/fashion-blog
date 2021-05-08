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
        flex-wrap: wrap;
        padding: 1rem 4rem;

    }

    .shop{
        display: flex; 
        justify-content: center;
        flex-wrap: wrap;
    }
  
    img{
        width: clamp(20vw, 30vw, 35vw);
        max-height: 50vh;
        margin: .5rem;
    }

   button{
       margin: .5rem;
       text-transform: uppercase;
   }
  
    .btn-container{
        border-top: 2px solid gray;
        border-bottom: 2px solid gray;
        width: 70%;
        display: flex; 
        justify-content: center;
        align-items: center;
    }

`