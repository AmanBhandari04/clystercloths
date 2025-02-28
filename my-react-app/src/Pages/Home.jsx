import React, { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { GiClothes } from "react-icons/gi";
import Layout from '../component/main_layout/Layout'
import "./Home.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import { NavLink } from 'react-router-dom'
import Best from "../../public/image/Best.jpeg"

const Home = () => {
    return (
        <Layout>
            <div className='main-banner'>
                <div className='right-side-box'>
                    <h1>Clyster Cloths </h1>
                    <span className='right-content'>Think New Wear Diffrent</span>
                    <button className='Home-main-btn'> Contact</button>

                </div>


                <div className='left-side-box'>
                    <div className='jacket-box'>

                    </div>


                    <div className='jacket-content'>
                        <h2>Luxury Tailored to You </h2>
                        <span >Style meets sustainability — responsibly made clothing designed to help you look good and feel even better.<GiClothes style={{ fontSize: '17px', color: 'white' }} /></span>
                    </div>
                </div>

            </div>
            {/* reactjs  */}
            <div className="hometop-swiper">
                <h3 className='hoodei-heading'>Hoodie</h3>
                <Swiper
                    slidesPerView={6}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRWatTRMuQHq1o39OMNwxd3NqHXsF5PERGYqn2Zc6wCwg1gDfM1jnFcNqoD_NrmGpwzEc4G2hfWUPkzydB_wux9tzrkpGaru6JpOlyrB7PVOSuqgFvq0W07kW8" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTO_i0EetJF2wOII7jaWJ86kO3elJ2n4DSl-0jUNbdmD2Uw562ji173g6AkGCB_4rdAEy4AHWfm8N5Ebqdnta7unCgOH7LHRJkWweX9Zsns6vsvhefZBgMA5A" alt="" />
                    </SwiperSlide>
                    <SwiperSlide><img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR9uFJTedd49hO7grYOvgTqmJoCGqzp-iIjzBx3PlUZB3zftkqagn__piNJdbop-2XbEbxOCqLKdlm2HWurtVNH_gQYxTp0lkGVWsvmnQmm" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://static.wixstatic.com/media/415111_550ca2cc6ff443ddbec9b2779db4324b~mv2.jpg/v1/fill/w_980,h_979,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/415111_550ca2cc6ff443ddbec9b2779db4324b~mv2.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRTR4FLCYWdD74ihM5HgVXAx_E8AOV7cjH13mAWLDvPNU83wVqgIqO6bNC_DK_6ChAyXTDWVSKJ3vAUBRSE1H09QK8qFwniLTBQYE30AUo" alt="" /></SwiperSlide>

                </Swiper>
            </div>
            {/*  */}
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
                    <button className="about_btn"> About-us</button>
                </div>

            </div>

        </Layout >
    )
}

export default Home