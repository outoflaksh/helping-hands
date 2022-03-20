import styled from "styled-components";

export const flex = styled.div`
display:flex;
flex-direction:${(props)=>props.direction?props.direction:"row"};
justify-content: ${(props)=>props.justify?props.justify:"flex-start"};
`;