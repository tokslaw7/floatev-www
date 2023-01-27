import { Link } from 'react-router-dom'
import React from 'react'
import frame from '../../../assets/images/about-frame.png'
import screen from '../../../assets/images/about-screen.png'
import floatH3 from '../../../assets/images/floatH3.png'
import floatDash from '../../../assets/images/floatDashB.jpg'

const Main = ({video , dark } ) => {
  return (
    <>
        <section className="row_am about_app_section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="about_img" data-aos="fade-in" data-aos-duration="1500">
                        <div className="frame_img">
                            <img className="moving_position_animatin" src={floatH3} alt="image"/>
                        </div>

                        <div>
                            <img className="moving_position_animatin" src={frame} alt="image"/>
                        </div>

                        <div className="screen_img">
                            <img className="moving_animation" src={floatDash} alt="image" />
                        </div>
                        </div>
                    </div>                   
                    <div className="col-lg-6">
                        <div className="about_text">
                        <div className="section_title" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100">
                            <h2>FLOAT <span>EV</span></h2>
                            <p>
                                Float's recommendation engine enables tracking of vehicle usage, ownership & service costs, fuel costs, emissions.
                                Its Telematics IoT enabled OBD device & dashcam to connect directly to the vehicle to pull data.
                            </p>
                        </div>
                        {dark ?
                            <ul className="list">
                                <li data-aos="fade-up" data-aos-duration="1500">
                                    <i className="icofont-verification-check"></i> Simply dummy text of the printing and 
                                </li>
                                <li data-aos="fade-up" data-aos-duration="1500">
                                <i className="icofont-verification-check"></i> Typesetting industry lorem Ipsum has been the 
                                </li>
                                <li data-aos="fade-up" data-aos-duration="1500">
                                    <i className="icofont-verification-check"></i> Industrys standard dummy text 
                                </li>
                                <li data-aos="fade-up" data-aos-duration="1500">
                                    <i className="icofont-verification-check"></i> Simply dummy text of the printing and 
                                </li>
                                <li data-aos="fade-up" data-aos-duration="1500">
                                    <i className="icofont-verification-check"></i> Typesetting industry lorem Ipsum has been the 
                                </li>
                             </ul>
                             :
                            <ul className="app_statstic" data-aos="fade-in" data-aos-duration="1500">
                                <li>
                                {/* <div className="icon">
                                {video ? <img src="assets/images/download-one.png" alt="image" /> : <img src={img1} alt="image" />} 
                                </div> */}
                                <div className="text">
                                    <p><span>Recommendation</span></p>
                                    <p>Engine</p>
                                </div>
                                </li>
                                <li>
                                <div className="text">
                                    <p><span>Performance</span></p>
                                    <p>Metrics</p>
                                </div>
                                </li>
                                <li>
                                {/* <div className="icon">
                                    {video ? <img src="assets/images/reviews-one.png" alt="image" /> : <img src={img3} alt="image" /> }
                                </div> */}
                                <div className="text">
                                    <p><span>Telematics</span></p>
                                </div>
                                </li>
                                <li>
                                {/* <div className="icon">
                                    {video ? <img src="assets/images/countries-one.png" alt="image" /> : <img src={img4} alt="image" /> }
                                </div> */}
                                <div className="text">
                                    <p><span>Rewards</span></p>
                                    {/* <p>Countries</p> */}
                                </div>
                                </li>
                            </ul>}
                            <Link to="/contact" className="btn puprple_btn" data-aos="fade-in" data-aos-duration="1500">START FREE TRIAL</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
    </>
  )
}

export default Main