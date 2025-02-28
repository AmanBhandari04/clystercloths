import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
import LoginForm from '../loginRegister/LoginForm'
import RegisterForm from '../loginRegister/RegisterForm'
const Header = () => {
    const [navbar, setNavbar] = useState("transparent")
    const [loginForm, setLoginForm] = useState(false)
    const [registerForm, setRegisterForm] = useState(false)

    const navScroll = () => {
        if (window.scrollY > 120) {
            setNavbar("white");
        }
        else {
            setNavbar('transparent')
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', navScroll)
        return () => {
            window.removeEventListener("scroll", navScroll); // Clean up the listener
        };
    });

    return (
        <>
            <header style={{
                backgroundColor: navbar,
                zIndex: '10'
            }}>
                <NavLink className="name_logo">
                    <span id='Clyster'> <span id='logo-c'>C</span>
                        lyster</span> <span id='cloths'>Cloths</span>

                </NavLink>

                <div className="clth-menu-list ">
                    <ul>
                        <NavLink to='/'><li> Home</li></NavLink>
                        <NavLink to='/about'> <li> About</li></NavLink>
                        <NavLink to='/services'><li> Services</li></NavLink>
                        <div className="main-drop-down-section">

                            <ul className="maindrop-down">
                                <li className=' '>Section</li>
                            </ul>

                            <ul className="submenu_dropDown">
                                <NavLink to="/all-varieties/jeans">  <li>Jeans</li> </NavLink>
                                <NavLink to="/all-varieties/tshirt">   <li>T-Shirt</li></NavLink>
                                <NavLink to="/all-varieties/hoodies">   <li>Hoodies</li></NavLink>
                                <NavLink to="/all-varieties/sweatshirt">   <li>Sweat-Shirt</li></NavLink>
                            </ul>
                        </div>
                        <button className='btn btn-success loginRegis' onClick={() => setLoginForm(true)}> Login/Register </button>

                    </ul>
                </div >

            </header >
            {loginForm ? <LoginForm setLoginForm={setLoginForm} setRegisterForm={setRegisterForm} /> : null}

            {registerForm ? <RegisterForm setRegisterForm={setRegisterForm} setLoginForm={setLoginForm} /> : null}

        </>
    )
}

export default Header