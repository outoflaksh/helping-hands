import { useRef, useState } from "react";
import { FormContent, FormGroup, FormHeader } from "./styles/Form.styled.jsx";
import { useAuth } from "../contexts/AuthContext";

function RegisterationForm({ level }) {
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
    <>
      <FormHeader>{level}</FormHeader>
      <FormContent>
        <div>{error}</div>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <label htmlFor="email">email</label>
            <input type="email" name="email" ref={emailRef} />
          </FormGroup>
          <FormGroup>
            <label htmlFor="password">password</label>
            <input type="password" name="password" ref={passwordRef} />
          </FormGroup>
          <FormGroup>
            <input type="submit" value="login" disabled={loading} />
          </FormGroup>
        </form>
      </FormContent>
    </>
  );
}

export default RegisterationForm;
