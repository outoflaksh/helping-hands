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
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const FormWrapper = styled.div`
  width:30%;
  min-width: 300px;
  /* height:70%; */
`;

export const SubmitButton = styled.button`
  background: #43ffcb;
  border-style: none;
  padding: 15px 30px;
  border-radius: 5px;
  color: #4d5d77;
  font-weight: 800;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;
