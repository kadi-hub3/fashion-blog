import styled from 'styled-components'

export const Post = styled.div`

      .post-ui{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            height: 60vh;
            position: relative; 
            padding: 2rem;
            margin: 3rem 0;

            // .post-ui .reverse{
            //     display: grid;
            //     grid-template-columns: repeat(2, 1fr);
            //     direction: rtl;
            // }

             img{
                height: 55vh;
                width: 80%;
                border: white 10px solid; 
               
            }
        
            .post{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 1rem;
                line-height: 1.5;
                font-size: 1.2rem;
                padding: 0 2rem;

                h6, h1, button{
                    text-transform: uppercase;
                }

                button{
                    padding: 1rem 2rem;
                    background: #111;
                    color: #fff;
                    cursor: pointer;

                    &:hover{
                        background: #fff;
                        color: #111;
                    }
                }
            }
        }
    
  

`
