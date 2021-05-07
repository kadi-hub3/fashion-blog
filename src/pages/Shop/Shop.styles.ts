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
        padding: 4rem;

    }

    .shop{
        display: flex; 
        justify-content: center;
        flex-wrap: wrap;
    }
  
    img{
        width: clamp(30vw, 30vw, 35vw);
        height: clamp(30vh, 30vh, 35vh);
        margin: .5rem;
    }

   button{
       margin: .5rem;
       padding: 1rem;
       text-transform: uppercase;
   }
  
    .btn-container{
        border-top: 2px solid black;
        border-bottom: 2px solid black;
        width: 80%;
        display: flex; 
        justify-content: center;
        align-items: center;
    }

`