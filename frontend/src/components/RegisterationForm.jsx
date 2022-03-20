import { useRef, useState } from "react";
import styled from "styled-components";
import { useAuth } from "../contexts/AuthContext";


function LoginForm({ level }) {//level: worker/client
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const { register } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        
        e.preventDefault();
        if (passwordRef.current.value !== confirmPasswordRef.current.value) {
            return setError('passwords don\'t match');
        }
        setLoading(true);
        try {
            console.log("here");
            await register(emailRef.current.value, passwordRef.current.value);
        } catch {
            setError('failed to create account');
        }
        setLoading(false);
    }

    return (
        <>
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
                    <label htmlFor="confirm-password">confirm password</label>
                    <input type="password" name="confirm-password" ref={confirmPasswordRef} />
                </FormGroup>
                <FormGroup>
                    <input type="submit" value="register" disabled={loading}/>
                </FormGroup>
            </form>
        </>
    );
}

const FormGroup = styled.div`
display:flex;
justify-content: space-between;
width:100%;
`;


export default LoginForm;