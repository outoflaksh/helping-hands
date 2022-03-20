import styled from "styled-components";
import { Outlet } from "react-router-dom";

function AuthBase(props) {
  return (
    <>
      <FormContainer>
        <FormHeader>{props.children}</FormHeader>
        <FormContent>
          <Outlet />
        </FormContent>
      </FormContainer>
    </>
  );
}


const FormContainer = styled.div`
margin:1rem;
display:flex;
flex-direction: column;
width:400px;
height:500px;
`;


const FormHeader = styled.div`
text-align: center;
padding: 0.5rem;
width:100%;
background-color: whitesmoke;
`;

const FormContent = styled.div`
width:100%;
height:100%;
padding:0.5rem;
background-color: wheat;
`;


export default AuthBase;