import { createGlobalStyle } from 'styled-components'

export const Global = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    main {
        padding: 2rem;

        .about-cover-pictures{
            display: flex;
            justify-content: center;
            
            img{
                margin: 1rem;
                width: 15rem;
            }
        }

        .about-intro{
            padding: 2rem;
            line-height: 1.5;
            font-size: 1.4rem;
        }

        .full-cover-pic{
            display: flex;
            justify-content: center;
            padding:1rem;

            img{
            width: 80vw;
            height: 80vh;
            image-rendering: pixelated;

            }
        }

        .achievements{
            padding: 2rem 0; 
            display: flex;
            flex-direction: row;
            line-height: 1.75;

            ul{
                list-style: none;
                margin: 0 1rem;
                span{
                    font-weight: bolder;
                }
            }

        }
    }
    
    
  
`