import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [activeLogin, setActiveLogin] = useState(null);

    const handleLoginClick = (type) => {
        setActiveLogin(type);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (!email || !password) {
            setError('Please enter both email and password.');
            return;
        }

        // Simulate login (Replace with real API call)
        console.log('Logging in with', email, password);
        setError('');
        alert('Login successful!');
        navigate('/');
    };

    return (
        <div className='login-container'>
            <form onSubmit={handleSubmit} className='login-form'>
                <h2 className='login-title'>Login</h2>
                {error && <p className='error-message'>{error}</p>}
                <div className="login-type-container">
                    <div className={`student-login ${activeLogin === 'student' ? 'active' : ''}`} onClick={() => handleLoginClick('student')}>
                        Student
                    </div>
                    <div className={`admin-login ${activeLogin === 'admin' ? 'active' : ''}`} onClick={() => handleLoginClick('admin')}>
                        Admin
                    </div>
                </div>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className='login-input' />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className='login-input' />
                <button type="submit" className='login-button'>Login</button>
            </form>
        </div>
    );
};

export default LoginPage;