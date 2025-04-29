import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext'; 
import './Forms.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const { login } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!email || !password) {
            setErrorMessage('Both email and password are required.');
            return;
        }

        const existingUsers = JSON.parse(localStorage.getItem('existingUsers')) || [];
        const user = existingUsers.find(user => user.email === email);

        if (!user) {
            setErrorMessage('Email not registered. Please sign up first.');
            return;
        }

        if (user.password !== password) {
            setErrorMessage('Incorrect password.');
            return;
        }

        setErrorMessage('');
        alert('Login successful!');

        localStorage.setItem('isLoggedIn', 'true'); 
        login(); 

        navigate('/products');
    };

    return (
        <div className="login-page">
            <h2 style={{ textAlign: 'center'}}>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                <button type="submit">Login</button>
                <p><a href="/forgot-password">Forgot Password?</a></p>
            </form>
        </div>
    );
}

export default Login;
