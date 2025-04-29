import { useState } from 'react';


function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!fullName || !email || !password) {
            setErrorMessage('All fields are mandatory.');
            return;
        }
        if (password.length < 8) {
            setErrorMessage('Password should be at least 8 characters long.');
            return;
        }
        const existingUsers = JSON.parse(localStorage.getItem('existingUsers')) || [];
        if (existingUsers.some(user => user.email === email)) {
            setErrorMessage('Email already exists. Please log in.');
            return;
        }
        const newUser = { email, password, fullName };
        existingUsers.push(newUser);
        localStorage.setItem('existingUsers', JSON.stringify(existingUsers));
        setErrorMessage('');
        alert('Account created successfully!');
    };

    return (
        <div className="signup-page">
            <h2 style={{ textAlign :'center' }}>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                />
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
                <button type="submit">Create Account</button>
            </form>
        </div>
    );
}

export default Signup;
