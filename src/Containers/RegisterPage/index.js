import { useState } from 'react';
import axios from 'axios';
// import { useToken } from '../auth/useToken';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
    // const [token, setToken] = useToken();

    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [confirmPasswordValue, setConfirmPasswordValue] = useState('');

    const onSignUpClicked = async () => {
        const response = await axios.post('/api/signup', {
            email: emailValue,
            password: passwordValue,
        });
        const { token } = response.data;
        // setToken(token);
        navigate('/');
    }

    return (
        <div className="content-container">
            <h1>Sign Up</h1>
            {errorMessage && <div className="fail">{errorMessage}</div>}
            <input
                value={emailValue}
                onChange={e => setEmailValue(e.target.value)}
                placeholder="your@email.com" />
            <input
                type="password"
                value={passwordValue}
                onChange={e => setPasswordValue(e.target.value)}
                placeholder="password" />
            <input
                type="password"
                value={confirmPasswordValue}
                onChange={e => setConfirmPasswordValue(e.target.value)}
                placeholder="password" />
            <hr />
            <button
                disabled={
                    !emailValue || !passwordValue ||
                    passwordValue !== confirmPasswordValue
                }
                onClick={onSignUpClicked}>Sign Up</button>
            <button
              onClick={() => navigate('/login')}>Already have an account? Log In</button>
        </div>
    );
}