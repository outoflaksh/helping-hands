import { Page, Flex } from "../../components/styles/Utility.styled";
import LoginForm from "../../components/LoginForm";
import level from "../../utils/authLevel";
function Login() {
  return (
    <Page>
      <Flex align="center" justify="center">
        <LoginForm level={level.worker} />
      </Flex>
    </Page>
  );
}

export default Login;
