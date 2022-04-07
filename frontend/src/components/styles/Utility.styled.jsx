import styled from "styled-components";

export const Page = styled.main`
  display:flex;
  justify-content:center;
  align-items:center;
  height:80vh;
  width:100vw;
`;

export const Flex = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};
  justify-content: ${(props) => (props.justify ? props.justify : "flex-start")};
  align-items: ${(props) => (props.align ? props.align : "center")};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;
