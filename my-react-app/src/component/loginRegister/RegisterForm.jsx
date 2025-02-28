import React, { useState } from 'react'
import { FaUserTie } from "react-icons/fa";
import { LiaSkullCrossbonesSolid } from "react-icons/lia";
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import './LoginForm.css';

const RegisterForm = ({ setLoginForm, setRegisterForm }) => {
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        phone: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChanger = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const submitHandler = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            const response = await axios.post('http://localhost:8080/api/auth/register', formData);
            setSuccess(response.data.message);

            setTimeout(() => {
                setLoginForm(true);
                setRegisterForm(false);
            }, 2000);
        } catch (error) {
            console.error('Registration Error:', error);
            setError(error.response?.data?.message || 'Registration failed. Please try again.');
        }
    };

    return (
        <div className="main-login">
            <div className="Login_row">
                <LiaSkullCrossbonesSolid className='crossslogin' onClick={() => setRegisterForm(false)} />

                <div className="second_lay">
                    <FaUserTie className='text-success mb-2' />
                    <h4>Hello User</h4>
                    <p>Register Your Account</p>
                    {error && <p className='text-danger'>{error}</p>}
                    {success && <p className='text-success'>{success}</p>}

                    <form onSubmit={submitHandler}>
                        <input type="text" placeholder='Enter Your Fullname' className='form-control mb-4' name='fullname' onChange={handleChanger} />
                        <input type="email" placeholder='Enter Your Email' className='form-control mb-4' name='email' onChange={handleChanger} />
                        <input type="text" placeholder='Enter Your Mobile' className='form-control mb-4' name='phone' onChange={handleChanger} />
                        <input type="password" placeholder='Enter Your Password' className='form-control' name='password' onChange={handleChanger} />

                        <div className="btn-login d-flex align-items-center justify-content-center gap-5 mt-3">
                            <button type="submit" className='w-25 btn btn-success btn-sm'>Register</button>
                            <NavLink onClick={() => {
                                setLoginForm(true);
                                setRegisterForm(false);
                            }}> Login Your Self! </NavLink>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;
