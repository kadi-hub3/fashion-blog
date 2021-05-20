import styled from "styled-components";

export const PostStyle = styled.div`
  section {
    display: grid;
    grid-template-rows: auto;
  }
  .post-ui {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-auto-flow: dense;
    grid-gap: 1rem;
    min-height: 60vh;
    padding: 2rem;
    margin: 3rem 0;

    &:nth-child(2n + 2) {
      direction: rtl;
    }

    .img img {
      display: block;
      height: 55vh;
      width: 80%;
      border: white 10px solid;
      image-rendering: -webkit-optimize-contrast;
      box-shadow: 3px 3px 5px 6px #ccc;
    }

    .post {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      line-height: 1.5;
      font-size: 1rem;
      padding: 0 2rem;

      h6,
      h3,
      button {
        text-transform: uppercase;
        font-family: sans-serif;
      }

      h3 {
        font-family: serif;
      }

      p {
        font-family: Georgia;
      }

      button {
        margin-top: 1.5rem;
        padding: 1rem 2rem;

        &:hover {
          background: #fff;
          color: #111;
        }
      }
    }
  }

  @media only screen and (min-width: 1024px) {
    .post-ui {
      display: grid !important;
      grid-template-columns: repeat(2, 1fr) !important;
      height: 60vh;
    }
  }
`;
