import { useState } from 'react';


function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isPasswordReset, setIsPasswordReset] = useState(false); // State to toggle between email and password fields

    // Simulate existing accounts stored in localStorage
    const existingAccounts = JSON.parse(localStorage.getItem('existingUsers')) || [];

    const handleEmailSubmit = (event) => {
        event.preventDefault();

        // Check if email is provided
        if (!email) {
            setErrorMessage('Email is required.');
            return;
        }

        // Check if the email exists in existing accounts in localStorage
        const userExists = existingAccounts.some(account => account.email === email);

        if (!userExists) {
            setErrorMessage('This email is not registered. Please sign up first.');
            return;
        }

        // Email exists, proceed to ask for the new password
        setErrorMessage('');
        setIsPasswordReset(true); // Show the new password form
    };

    const handlePasswordSubmit = (event) => {
        event.preventDefault();

        // Check if new password is provided
        if (!newPassword) {
            setErrorMessage('New password is required.');
            return;
        }

        // Check if the new password is at least 8 characters long
        if (newPassword.length < 8) {
            setErrorMessage('Password should be at least 8 characters long.');
            return;
        }

        // Update the password for the user
        const updatedAccounts = existingAccounts.map(account => {
            if (account.email === email) {
                account.password = newPassword; // Update the password
            }
            return account;
        });

        // Save the updated accounts back to localStorage
        localStorage.setItem('existingUsers', JSON.stringify(updatedAccounts));

        // Password reset success
        setErrorMessage('');
        alert('Your password has been successfully reset!');
        setIsPasswordReset(false); // Go back to asking for the email
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
