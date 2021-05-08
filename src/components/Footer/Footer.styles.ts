import styled from 'styled-components'

export const FooterStyle = styled.footer`
    footer{
        width: 100%;
    }

        .before-footer{
            display: grid;
            grid-template-rows: repeat(3,1fr);
            place-items: center;
            gap: 1rem;
            list-style: none;
            margin-bottom: 8rem;
        }
        input{
            padding: .5rem 4rem;
            text-align: start;
            width: 70%;
        }
        h5 {
            display: inline-block;
            position: relative; 
            text-transform: uppercase; 
            letter-spacing: .1rem;
          }
           h5:before,
           h5:after {
            content: "";
            position: absolute;
            border-top: 1px solid gray;
            top: 15%;
            width: clamp(2rem, 3rem, 12rem);
          }
          h5:before {
            right: 100%;
            margin-right: 15px;
          }
           h5:after {
            left: 100%;
            margin-left: 15px;
          }
          
        .footer{
            background: #111;
            color: white;
            padding: 2rem;
            width: 100%;
            display: flex;
            justify-content: start;

             ul {
                padding: 1rem;
                display: flex;

                li{
                    margin: 1rem;
                }
            }
        }

        @media only screen and (min-width: 1030px){
            .before-footer{
                display: grid !important;
                grid-template-columns: repeat(3, 1fr) !important;
            }
        }   
`