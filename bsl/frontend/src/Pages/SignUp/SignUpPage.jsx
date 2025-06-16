import React, { useState } from 'react';
import './SignUpPage.css';

const SignUpPage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        contact: '',
        gender: 'Male',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted data:', formData);
        // Add validation or API logic here
    };

    return (
        <div className="signup-page">
            <div className="signup-box">
                <h2>Registration</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Re-type Password"
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="contact"
                        placeholder="Contact"
                        onChange={handleChange}
                        required
                    />
                    <select name="gender" onChange={handleChange} value={formData.gender}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>

                    <button type="submit" className="signup-button">Sign Up</button>
                </form>
                <p>Already have an account? <a href="/login">Login here</a></p>
            </div>
        </div>
    );
};

export default SignUpPage;
