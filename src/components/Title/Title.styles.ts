import styled from 'styled-components'

export const TitleText = styled.div`

.fancy-title {
    line-height: 0.5;
    text-align: center;
    margin: 2rem 0;
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
    width: 600px;
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

`