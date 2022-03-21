import styled from "styled-components";

export const Card = styled.div`
  background: #b7ffeb;
  padding: 15px 25px;
  margin-top: 15px;
  border-radius: 25px;
  width: 55%;
  position: relative;

  h1 {
    font-size: 2rem;
    font-weight: 800;
    color: #4d5d77;
  }

  h2,
  h3,
  p {
    color: #c07b8c;
    font-weight: 400;
  }

  h2 {
    font-size: 1.4rem;

    span {
      font-style: italic;
    }
  }

  h3 {
    font-size: 1.2rem;
  }
`;
