import styled from "styled-components";

export const Button = styled.button`
  background: #43ffcb;
  border-style: none;
  padding: 15px 30px;
  border-radius: 5px;
  color: #4d5d77;
  font-weight: 800;
  font-size: 1.4rem;
  /* margin-top: 30px; */
  cursor: pointer;

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;