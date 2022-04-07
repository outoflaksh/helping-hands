import { Page, Flex } from "../components/styles/Utility.styled";
import LoginForm from "../components/LoginForm";
function Login() {
  return (
    <Page>
      <Flex align="center" justify="center">
        <LoginForm/>
      </Flex>
    </Page>
  );
}

export default Login;
