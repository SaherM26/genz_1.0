import React, { useState } from 'react';
import './LoginPage.css';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    const [role, setRole] = useState("student");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        if (role === "admin") {
        } else {
        }
    };

    return (
        <div className="login-page">
            <div className="login-box">
                <h2>Login</h2>
                <div className="role-toggle">
                    <button className={role === 'student' ? 'active' : ''} onClick={() => setRole('student')}>Student</button>
                    <button className={role === 'admin' ? 'active' : ''} onClick={() => setRole('admin')}>Admin</button>
                </div>
                <form onSubmit={handleLogin}>
                    <input
                        type="email"
                        placeholder="Email Address"
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
                    <div className="extra-options">
                        <a href="#">Forgot password?</a>
                    </div>
                    <button type="submit" className="login-button">Login</button>
                    <p>Not a member?  <Link to="/signup">Signup now</Link></p>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
