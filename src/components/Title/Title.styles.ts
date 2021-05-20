import styled from "styled-components";

export const TitleText = styled.div`
  .fancy-title {
    line-height: 1;
    text-align: center;
    margin: 4rem 0;
    font-family: "Pacifico", cursive;
    letter-spacing: 0.5rem;
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
    width: clamp(4rem, 10rem, 15rem);
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
    .fancy-title {
      line-height: 1.5;
      font-size: 0.8rem;
      letter-spacing: 0.2rem;
    }
    span:before,
    span:after {
      width: 2rem;
    }
  }
`;
