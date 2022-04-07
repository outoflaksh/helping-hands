import { useRef, useState } from "react";
import { FormContent, FormGroup, FormHeader, FormWrapper, SubmitButton } from "./styles/Form.styled";
import { useAuth } from "../contexts/AuthContext";

function RegisterationForm() {
  //level: worker/client
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const { register } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError("passwords don't match");
    }
    setLoading(true);
    try {
      console.log("here");
      await register(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError("failed to create account");
    }
    setLoading(false);
  }

  return (
    <>
      <FormWrapper>
        <FormContent>
          <FormHeader>
            <h1>Register To Experience</h1>
          </FormHeader>
          <div>{error}</div>
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <input type="email" name="email" ref={emailRef} placeholder="Your Email"/>
            </FormGroup>
            <FormGroup>
              <input type="password" name="password" ref={passwordRef} placeholder="Your Password"/>
            </FormGroup>
            <FormGroup>
              <input
                type="password"
                name="confirm-password"
                ref={confirmPasswordRef}
                placeholder="Confirm Your Password"
              />
            </FormGroup>
            <FormGroup>
              <SubmitButton type="submit" value="register" disabled={loading}>
                {
                  loading?"Loading":"Register"
                }
              </SubmitButton>
            </FormGroup>
          </form>
        </FormContent>
      </FormWrapper>
    </>
  );
}

export default RegisterationForm;
