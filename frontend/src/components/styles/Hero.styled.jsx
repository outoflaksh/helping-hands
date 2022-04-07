import styled from "styled-components";

export const HeroContainer = styled.div`

  & > div {
    z-index: 10;
  }

  h1 {
    font-size: 6rem;
    font-weight: 700;
    color: #ebaf77;
    letter-spacing: -0.05em;
    line-height: 0.98;

    span {
      color: #eb7777;
      font-weight: 900;
    }
  }

  h3 {
    font-size: 1.65rem;
    font-weight: 400;
    color: #72819a;

    span {
      color: #c07b8c;
    }
  }
`;



export const HeroImage = styled.img`
  height: 35rem;
  z-index: 0;
`;
