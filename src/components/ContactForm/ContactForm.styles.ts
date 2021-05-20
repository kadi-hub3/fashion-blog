import styled from "styled-components";

export const FormStyle = styled.div`
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .form-img {
    width: clamp(20vw, 60vw, 70vw);
    height: clamp(40vh, 50vh, 60vh);
  }
  .form-img img {
    width: 100%;
    height: 100%;
    padding: 2rem;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 0.5rem;
    width: 100%;
  }
  input,
  textarea {
    padding: 0.5rem 2rem;
    font-size: 1rem;
    width: 80%;
  }
  button {
    padding: 0.5rem 2rem;
    font-size: 1rem;
    background: #111;
    color: #fff;
    text-transform: uppercase;

    &:hover {
      background: #fff;
      color: #111;
    }
  }

  h4 {
    text-transform: uppercase;
    text-decoration: none;
    text-align: center;
    font-family: serif;
  }

  @media only screen and (min-width: 1000px) {
    section {
      display: flex !important;
      flex-direction: row !important;
    }
  }
`;
