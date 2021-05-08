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
            flex-wrap: wrap;
            
            img{
                margin: 1rem;
                width: clamp(10rem, 12rem, 15rem);
            }
        }

        .about-intro{
            padding: 2rem;
            line-height: 1.75;
            font-size: 1rem;
        }

        .full-cover-pic{
            display: flex;
            justify-content: center;
            padding:1rem;

            img{
            width: 80vw;
            height: 80vh;
            image-rendering: -webkit-optimize-contrast;

            }
        }

        .achievements{
            padding: 2rem 0; 
            display: flex;
            flex-direction: row;
            justify-content: center;
            line-height: 1.75;

            ul{
                list-style: none;
                margin: 1rem;
                span{
                    font-weight: bolder;
                }
            }

        }
    }
    
    @media only screen and (max-width: 1024px) { 
        .achievements{
            display: flex !important;
            flex-direction: column !important;
        }

     }
  
`