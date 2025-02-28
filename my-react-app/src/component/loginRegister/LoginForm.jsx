import React, { useState } from 'react'
import { FaUserTie } from "react-icons/fa";
import './LoginForm.css'
import { LiaSkullCrossbonesSolid } from "react-icons/lia";
import axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom';
const LoginForm = ({ setLoginForm, setRegisterForm }) => {
    const navigate = useNavigate();
    
    const [login, setlogin] = useState({
        email: '',
        password: '',
    })

    const handleChange = (e) => {
        setlogin({ ...login, [e.target.name]: e.target.value })

    }

    const userLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/api/auth/login', login, { headers: { "Content-Type": "application/json" } })

            if (response) {
                alert('login successfully');

                localStorage.setItem("token", response.data.token);

                setLoginForm(false);
                navigate("/");
            }

        } catch (error) {
            console.log(error)
        }

    }


    const handleForm = () => {
        setLoginForm(false);
        setRegisterForm(true);
    }


    return (
        <>
            <div className="main-login">
                <div className="Login_row">
                    <LiaSkullCrossbonesSolid className='crossslogin' onClick={() => setLoginForm(false)} />

                    <div className="second_lay">
                        <FaUserTie className='text-success' />
                        <h4> Hello User</h4>
                        <p>Login Your Account</p>
                        <form onSubmit={userLogin}>
                            <input type="text" name='email' value={login.email} onChange={handleChange} placeholder='Enter Your Email' className='form-control mb-4' />
                            <input type="password" name='password' value={login.password} onChange={handleChange} placeholder='Enter Your Password' className='form-control' />
                            <div className="btn-login d-flex align-items-center justify-content-center gap-5 mt-3">
                                <button className=' w-25 btn btn-success btn-sm' type='submit'>Login</button>
                                <NavLink onClick={handleForm}>Create Acc ! Register</NavLink>
                            </div>
                        </form>
                    </div>
                </div >

            </div >

        </>
    )
}

export default LoginForm