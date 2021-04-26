import styled from 'styled-components'

export const Post = styled.div`

      .post-ui{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            height: 60vh;
            position: relative; 

            // .post-ui .reverse{
            //     display: grid;
            //     grid-template-columns: repeat(2, 1fr);
            //     direction: rtl;
            // }
            .post-img img{
                height: 45vh;
                display: block;
                margin-left: auto;
                margin-right: auto;
                width: 60%;
                border: white 10px solid; 
               
            }
        
            .post{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
        }
    
  

`
