import React from 'react'
import './About.css'
import Layout from '../component/main_layout/Layout'
import { NavLink } from 'react-router-dom'
import Best from "../../public/image/Best.jpeg"
const About_us = () => {
    return (
        <>
            <Layout>
                <div className='clth_main_about'>
                    <div className="about_img">
                        <img src={Best} alt="" />
                    </div>

                    <div className="about_content">
                        <NavLink className="name_logo">
                            <span id='Clyster'> <span id='logo-c'>C</span>
                                lyster</span> <span id='cloths'>Cloths</span>

                        </NavLink>
                        <h3>Redefining Style, One Stitch at a Time</h3>
                        <p>Welcome to CrystelCloths, where fashion meets individuality. We are a clothing brand dedicated to crafting pieces that celebrate personal style while embracing timeless elegance. Our mission is to provide high-quality, trend-forward apparel that empowers you to express your unique identity confidently.</p>
                    </div>

                </div>
            </Layout>

        </>
    )
}

export default About_us