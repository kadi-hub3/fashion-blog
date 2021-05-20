import styled from "styled-components";

export const ButtonStyle = styled.div`
  .cities {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
    margin: 1rem;
    padding: 2rem 0;
  }
  span {
    background: transparent;
    font-size: 0.9rem;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
    border: black 2px solid;
    font-family: serif;

    &:hover {
      background: #111;
      color: #fff;
    }
  }
  @media only screen and (max-width: 1024px) {
    span {
      font-size: 0.7rem;
      padding: 0.5rem 0.5rem;
      margin: 0 0.2rem;
    }
  }
`;
