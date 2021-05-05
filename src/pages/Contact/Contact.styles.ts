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
    section{
        display: grid;
        grid-template-rows: repeat(2,1fr);
        margin: 4rem 0;
        height: 60vh;
      
    }
   
    
  
 

`