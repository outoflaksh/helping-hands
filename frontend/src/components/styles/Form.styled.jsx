import styled from "styled-components";

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;

  input {
    padding: 15px;
    background-color: #43ffcb;
    border-style: none;
    border-radius: 3px;
  }
`;

export const FormContainer = styled.div`
  width: 55%;
`;

export const FormHeader = styled.div`
  width: 100%;
  text-align: left;
  padding: 0.5rem 0;

  h1 {
    font-weight: 600;
    font-size: 3rem;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  width: 100%;
  padding: 25px;
  border-radius: 25px;
  background-color: #b7ffeb;
`;

export const SubmitButton = styled.button``;
