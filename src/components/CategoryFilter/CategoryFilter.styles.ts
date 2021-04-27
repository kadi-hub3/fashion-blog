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
            overflow: hidden;
            border-radius: 1rem;
        }
        .imgBx, . contentBx {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
        }

        img{
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            object-fit: contain;
        }

        .contentBx::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255,255,255,.5);
        transform: scaleX(0);
        transition: transform 0.2s ease-in-out;
        transform-origin: right;
        }

        .card:hover .contentBx::before{
            transform: scaleX(1);
            transition: transform 0.2s ease-in-out;
            transform-origin: left;
        }

        .card .contentBx{
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .card .contentBx .content{
            position: relative;
            padding: 3rem;
            z-index: 1;
            transition: .2s;
            transform: translateX(-600px);
        }
        .card .contentBx .content h3{
            font-weight: bolder;
            text-transform: uppercase;
        }
        .card:hover .contentBx .content{
            transition: .2s;
            transform: translateX(0);
        }
`