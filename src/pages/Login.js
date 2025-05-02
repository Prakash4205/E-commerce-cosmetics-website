import { useState, useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from './AuthContext'; 
import './Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    
    const navigate = useNavigate();
    const location = useLocation();

    const { login, isAuthenticated } = useContext(AuthContext);

    // Path to redirect to after login
    const from = location.state?.from || '/';

    // If user is already logged in, redirect immediately
    useEffect(() => {
        if (isAuthenticated) {
            navigate(from, { replace: true });
        }
    }, [isAuthenticated, from, navigate]);

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
        setSuccessMessage('🎉 Login successful!');
        localStorage.setItem('isLoggedIn', 'true'); 
        login();

        setTimeout(() => {
            navigate(from, { replace: true });  // Redirect back to the previous page
        }, 1500);
    };

    return (
        <div className="login-page royal-theme">
            <div className="login-card">
                <h2>Welcome Back</h2>
                <p className="subtitle">Sign in to continue your royal experience</p>
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
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    {successMessage && <p className="success-message">{successMessage}</p>}
                    <button type="submit">Login</button>
                    <div className="signup-prompt">
                        <p>No account? Don't worry, <a href="/signup" className="signup-link">Sign up now!</a></p>
                    </div>
                    <p className="forgot-link"><a href="/forgot-password">Forgot Password?</a></p>
                </form>
            </div>
        </div>
    );
}

export default Login;
