import { useRef, useState } from "react";
import {
  FormContainer,
  FormContent,
  FormGroup,
  FormHeader,
} from "./styles/Form.styled.jsx";
import { useAuth } from "../contexts/AuthContext";
import { Flex } from "./styles/Utility.styled.jsx";

function LoginForm({ level }) {
  //level: worker/client
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError("failed to login");
    }
    setLoading(false);
  }

  return (
    <FormContainer>
      <Flex direction="column" justify="center" align="center">
        <FormHeader>
          <h1>Welcome back! Sign in here</h1>
        </FormHeader>
        <FormContent>
          <div>{error}</div>
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <input
                type="email"
                name="email"
                ref={emailRef}
                placeholder="Your email"
              />
            </FormGroup>
            <FormGroup>
              <input
                type="password"
                name="password"
                ref={passwordRef}
                placeholder="Your password"
              />
            </FormGroup>
            <FormGroup>
              <input type="submit" value="login" disabled={loading} />
            </FormGroup>
          </form>
        </FormContent>
      </Flex>
    </FormContainer>
  );
}

export default LoginForm;
