import styled from "styled-components";

export const HeroContainer = styled.div`
  min-height: 100vh;
  width: 100%;

  & > div {
    margin: auto 12%;
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

export const Button = styled.button`
  background: #43ffcb;
  border-style: none;
  padding: 15px 30px;
  border-radius: 5px;
  color: #4d5d77;
  font-weight: 800;
  font-size: 1.4rem;
  margin-top: 30px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;

export const HeroImage = styled.img`
  height: 35rem;
  z-index: 0;
`;
