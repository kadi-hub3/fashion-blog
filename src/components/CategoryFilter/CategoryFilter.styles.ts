import styled from 'styled-components'

export const FilterStyle = styled.div`
        .filter-container{
            display: flex;
            flex-direction: row;
        }

        .card{
            position: relative;
            max-width: 30vw;
            height: 30vh;
            margin: 1rem;
            color: #333;

            img{
                height: 100%;
                width: 100%;
            }

            .contentBx{
                display: none;
            }
        }

         .card:hover .contentBx{
            position: absolute;
            left: 50%;
            top: 50%;
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            text-transform: uppercase;
            font-weight: bolder;
            font-weight: 1.6rem;
            line-height: 1.5;
            text-align: center;
            transform: translate(-50%, -50%);
            background: rgba(255,255,255, 0.6);

        }

      


       
`