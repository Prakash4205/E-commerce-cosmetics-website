import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ import this
import './Signup.css';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const navigate = useNavigate(); // ✅ hook to redirect

    const validatePassword = (password) => {
        const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return regex.test(password);
    };

    const validateFullName = (name) => {
        const regex = /^[A-Za-z\s]+$/;
        return regex.test(name);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!fullName || !email || !password) {
            alert('All fields are mandatory.');
            return;
        }
        if (!validateFullName(fullName)) {
            alert('Full Name should only contain alphabets.');
            return;
        }
        if (!validatePassword(password)) {
            alert('Password should be at least 8 characters, include one uppercase letter, one number, and one special character.');
            return;
        }
        const existingUsers = JSON.parse(localStorage.getItem('existingUsers')) || [];
        if (existingUsers.some(user => user.email === email)) {
            alert('Email already exists. Please log in.');
            return;
        }
        const newUser = { email, password, fullName };
        existingUsers.push(newUser);
        localStorage.setItem('existingUsers', JSON.stringify(existingUsers));
        alert('Account created successfully!');
        
        // ✅ Redirect to login page after success
        navigate('/login');
    };

    return (
        <div className="signup-page royal-theme">
            <div className="login-card">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Full Name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Create Account</button>
                </form>
            </div>
        </div>
    );
}

export default Signup;
