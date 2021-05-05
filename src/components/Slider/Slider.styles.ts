import styled from 'styled-components'

export const SlideStyle = styled.div`

      img{
        width: 300px;
        height: 300px;
        margin-top: 3rem;
         image-rendering: -webkit-optimize-contrast;

    }

    .slide{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    div{
        position: absolute;
        top: 80%; 
        right: 50%;
        transform: translate(50%,-50%);
        display: flex;
        flex-direction: column;
        z-index: 1;
        background: #fff;
        padding: 1em 1em; 
        text-transform: uppercase;
        text-align: center;
        font-weight: 500;

        p{
            height: 6em;
            max-width: 10em;
            margin: 1em 0;
            line-height: 1.5;
            color: inherit;
            text-decoration: inherit;            

        }
       
    }
    a{
        text-decoration: none;
        color: #111;
      }


`

export const SwiperStyle = styled.div`
    padding: 1rem;
    margin-top: 4rem;
    .swiper-button-next, .swiper-button-prev { color: black; }
    .swiper-button-next:hover, .swiper-button-prev:hover { color: #fff; }

`