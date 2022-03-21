import { FormContainer } from "../../components/styles/Form.styled";
import LoginForm from "../../components/LoginForm";
import level from "../../utils/authLevel";
function Login() {
  return (
    <FormContainer>
      <LoginForm level={level.worker} />
    </FormContainer>
  );
}

export default Login;
