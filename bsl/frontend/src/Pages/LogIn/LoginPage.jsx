import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage = () => {
    const [activeTab, setActiveTab] = useState('login');

    return (
        <div className="login-wrapper">
            <div className="login-box">
                <h2>Login Form</h2>
                <div className="tab-switch">
                    <button
                        className={activeTab === 'login' ? 'active' : ''}
                        onClick={() => setActiveTab('login')}
                    >
                        Login
                    </button>
                    <button
                        className={activeTab === 'signup' ? 'active' : ''}
                        onClick={() => setActiveTab('signup')}
                    >
                        Signup
                    </button>
                </div>

                <form>
                    <input type="email" placeholder="Email Address" required />
                    <input type="password" placeholder="Password" required />

                    {activeTab === 'login' && (
                        <a href="/" className="forgot-link">Forgot password?</a>
                    )}

                    <button className="submit-button" type="submit">
                        {activeTab === 'login' ? 'Login' : 'Signup'}
                    </button>
                </form>

                <p className="bottom-text">
                    {activeTab === 'login' ? (
                        <>Not a member? <a href="/">Signup now</a></>
                    ) : (
                        <>Already have an account? <a href="/">Login</a></>
                    )}
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
