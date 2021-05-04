import styled from 'styled-components'

export const TitleText = styled.div`

.fancy-title {
    line-height: 0.5;
    text-align: center;
    padding: 4rem 0;
    font-family: 'Pacifico', cursive;
    letter-spacing: .5rem;
  }
    span {
    display: inline-block;
    position: relative; 
    text-transform: uppercase; 
    
  }
   span:before,
   span:after {
    content: "";
    position: absolute;
    height: 5px;
    border-top: 1px solid gray;
    top: 0;
    width: clamp(5rem, 10rem, 15rem);

  }
   span:before {
    right: 100%;
    margin-right: 15px;
    overflow: hidden;

  }
   span:after {
    left: 100%;
    margin-left: 15px;
    overflow: hidden;

  }

  @media screen and (max-width: 1024px) { 
    .fancy-title{
      font-size: .8rem;
      letter-spacing: .2rem;

    }
 }

`