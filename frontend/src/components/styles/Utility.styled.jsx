import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};
  justify-content: ${(props) => (props.justify ? props.justify : "flex-start")};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

export const Button = styled.button`
  background: #43ffcb;
  border-style: none;
  padding: 15px 60px;
  border-radius: 15px;
  color: #4d5d77;
  font-weight: 800;
  position: absolute;
  right: 5%;
  bottom: 10%;
  cursor: pointer;
`;
