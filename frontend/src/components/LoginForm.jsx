import { useRef, useState } from "react";
import {
  FormContainer,
  FormContent,
  FormGroup,
  FormHeader,
  FormWrapper,
  SubmitButton,
} from "./styles/Form.styled.jsx";
import { useAuth } from "../contexts/AuthContext";
import { Flex } from "./styles/Utility.styled.jsx";

function LoginForm() {
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
    <FormWrapper>
      <FormContent>
        <FormHeader>
          <h1>Welcome back! Sign in here</h1>
        </FormHeader>
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
            <SubmitButton type="submit" value="login" disabled={loading}>
              {
                loading?"loading":"Sign In"
              }
            </SubmitButton>
          </FormGroup>
        </form>
      </FormContent>
    </FormWrapper>
  );
}

export default LoginForm;
