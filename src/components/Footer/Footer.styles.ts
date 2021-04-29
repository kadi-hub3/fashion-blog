import styled from 'styled-components'

export const FooterStyle = styled.footer`
    footer{
        width: 100vw;
        overflow: hidden;
    }

        .before-footer{
            display: grid;
            grid-template-columns: repeat(3,1fr);
            place-items: center;
            gap: 1rem;
            width: 100%;
            list-style: none;
            margin-bottom: 8rem;
        }
        input{
            padding: .5rem 4rem;
            text-align: start;
            width: 70%;
        }
        h3 {
            display: inline-block;
            position: relative; 
            text-transform: uppercase; 
            letter-spacing: .2rem;
          }
           h3:before,
           h3:after {
            content: "";
            position: absolute;
            border-top: 1px solid gray;
            top: 15%;
            width: 10rem;
          }
          h3:before {
            right: 100%;
            margin-right: 15px;
          }
           h3:after {
            left: 100%;
            margin-left: 15px;
          }
          
        .footer{
            background: #111;
            color: white;
            font-size: 3rem,
            padding: 2rem;
          

             ul {
                display: flex;
                padding: 1rem;


                li{
                    margin: 1rem;
                }
            }
        }
   
`