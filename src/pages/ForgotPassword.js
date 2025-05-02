import { useState } from 'react';


function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isPasswordReset, setIsPasswordReset] = useState(false);

    
    const existingAccounts = JSON.parse(localStorage.getItem('existingUsers')) || [];

    const handleEmailSubmit = (event) => {
        event.preventDefault();

        if (!email) {
            setErrorMessage('Email is required.');
            return;
        }
        const userExists = existingAccounts.some(account => account.email === email);

        if (!userExists) {
            setErrorMessage('This email is not registered. Please sign up first.');
            return;
        }

        setErrorMessage('');
        setIsPasswordReset(true);
    };

    const handlePasswordSubmit = (event) => {
        event.preventDefault();

        if (!newPassword) {
            setErrorMessage('New password is required.');
            return;
        }

        if (newPassword.length < 8) {
            setErrorMessage('Password should be at least 8 characters long.');
            return;
        }

        const updatedAccounts = existingAccounts.map(account => {
            if (account.email === email) {
                account.password = newPassword; // Update the password
            }
            return account;
        });

        localStorage.setItem('existingUsers', JSON.stringify(updatedAccounts));

        setErrorMessage('');
        alert('Your password has been successfully reset!');
        setIsPasswordReset(false); 
    };

    return (
        <div className="forgot-password-page">
            <h2 style={{ textAlign :'center' }}>Reset Your Password</h2>
            {!isPasswordReset ? (
                <form onSubmit={handleEmailSubmit}>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                    <button type="submit">Change password </button>
                </form>
            ) : (
                <form onSubmit={handlePasswordSubmit}>
                    <input
                        type="password"
                        placeholder="Enter your new password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                    />
                    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                    <button type="submit">Reset Password</button>
                </form>
            )}
        </div>
    );
}

export default ForgotPassword;
