import { Link } from 'react-router-dom'
import React  from 'react'
import line from '../../assets/images/anim_line.png'
import blueapp from '../../assets/images/appstore_blue.png'
import blue from '../../assets/images/googleplay_blue.png'
import logo from '../../assets/images/float-travel-app-logo.png'
import top from  '../../assets/images/go_top.png'
import getConfig from "../Config/config"

const Main = ({footer}) => {
    var site = getConfig()[0];
    
  return (
    <>
        {footer.f1 && 
        <footer>
            <div className="top_footer" id="contact">
                <div className="anim_line dark_bg">
                    <span><img src={line} alt="anim_line" /></span>
                    <span><img src={line} alt="anim_line" /></span>
                    <span><img src={line} alt="anim_line" /></span>
                    <span><img src={line} alt="anim_line" /></span>
                    <span><img src={line} alt="anim_line" /></span>
                    <span><img src={line} alt="anim_line" /></span>
                    <span><img src={line} alt="anim_line" /></span>
                    <span><img src={line} alt="anim_line" /></span>
                    <span><img src={line} alt="anim_line" /></span>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="abt_side">
                                <div className="logo"> <img src={logo} alt="image" /></div>
                                <ul>
                                <li><Link to="#">{site.support_email}</Link></li>
                                <li><Link to="#">{site.support_phone}</Link></li>
                                </ul>
                                <ul className="social_media">
                                        <li>
                                            <a href={site.facebook_link}>
                                                <i className="icofont-facebook"></i>
                                            </a>
                                        </li>
                                    <li>
                                        <a href={site.twitter_link}>
                                            <i className="icofont-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href={site.linked_link}>
                                            <i className="icofont-linkedin"></i>
                                        </a>
                                    </li>
                                    <li><Link to="#"><i className="icofont-instagram"></i></Link></li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="links nav-item">
                                <h3>Useful Links</h3>
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/about">About us</Link></li>
                                    <li><Link to="#">Services</Link></li>
                                    <li><a href={site.dash_url_blog}>Blog</a></li>
                                    <li><Link to="/contact">Contact us</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="links">
                            <h3>Help & Support</h3>
                                <ul>
                                <li><Link to="/faq">FAQs</Link></li>
                                <li><Link to="#">Support</Link></li>
                                <li><Link to="how_it_work">How it works</Link></li>
                                <li><Link to="/terms">Terms & conditions</Link></li>
                                <li><Link to="/privacy">Privacy policy</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-12">
                            <div className="try_out">
                                <h3>Let’s Try Out</h3>
                                <ul className="app_btn">
                                    <li>
                                        <a href={site.apple_app}>
                                            <img src={blueapp} alt="image" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href={site.apple_app}>
                                            <img src={blue} alt="image" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom_footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <p>© Copyrights 2023 FloatEV. All rights reserved.</p>
                        </div>
                        {/*<div className="col-md-6">*/}
                        {/*    <p className="developer_text">Design & developed by <Link to="https://themeforest.net/user/kalanidhithemes" target="blank">Kalanidhi Themes</Link></p>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
            <div className="go_top">
                <span><img src={top} alt="image" /></span>
            </div>
        </footer> }
            
        {footer.f2 && 
        <footer>
            <div className="top_footer top_footer-dark" id="contact">                
                <div className="container">
                    <span className="banner_shape1"> <img src="assets/images/banner-shape-one1.png" alt="image"/> </span>
                    <span className="banner_shape2"> <img src="assets/images/banner-shape2two.png" alt="image"/> </span>
                    <span className="banner_shape3"> <img src="assets/images/banner-shapethree3.png" alt="image"/> </span>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="abt_side">
                                <div className="logo"> <img src={logo} alt="image" /></div>
                                <ul>
                                    <li><Link to="#">{site.support_email}</Link></li>
                                    <li><Link to="#">{site.support_phone}</Link></li>
                                </ul>
                                <ul className="social_media">

                                        <li>
                                            <a href={site.facebook_link}>
                                                <i className="icofont-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={site.twitter_link}>
                                                <i className="icofont-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={site.linked_link}>
                                                <i className="icofont-linkedin"></i>
                                            </a>
                                        </li>
                                        <li><Link to="#"><i className="icofont-instagram"></i></Link></li>


                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="links nav-item">
                                <h3>Useful Links</h3>
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/about">About us</Link></li>
                                    <li><Link to="#">Services</Link></li>
                                    <li><a href={site.dash_url_blog}>Blog</a></li>
                                    <li><Link to="/contact">Contact us</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="links">
                            <h3>Help & Suport</h3>
                                <ul>
                                <li><Link to="/faq">FAQs</Link></li>
                                <li><Link to="#">Support</Link></li>
                                <li><Link to="/terms">Terms & conditions</Link></li>
                                <li><Link to="/privacy">Privacy policy</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-12">
                            <div className="try_out">
                                <h3>Let’s Try Out</h3>
                                <ul className="app_btn">
                                <li>
                                    <a href={site.apple_app}>
                                        <img src={blueapp} alt="image" />
                                    </a>
                                </li>
                                <li>
                                    <a href={site.apple_app}>
                                       <img src="assets/images/googleplay_blue.png" alt="image" />
                                    </a>
                                </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom_footer bottom_footer-dark">
                <div className="container">
                    
                    <div className="row">
                        <div className="col-md-6">
                            <p>© Copyrights 2023 FloatEV. All rights reserved.</p>
                        </div>
                        {/*<div className="col-md-6">*/}
                        {/*    <p className="developer_text">Design & developed by <Link to="https://themeforest.net/user/kalanidhithemes" target="blank">Kalanidhi Themes</Link></p>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
            <div className="go_top">
                <span><img src="assets/images/go_top.png" alt="image" /></span>
            </div>
        </footer> }
        
        {footer.f3  && 
        <footer className="gredient-footer">
            <div className="footer_bg"> <img src="assets/images/section-bg.png" alt="image" /> </div>
            <div className="top_footer" id="contact">
                <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="abt_side">
                            <div className="logo"> <img src={logo} alt="image" /></div>
                            <ul>
                                <li><Link to="#">{site.support_email}</Link></li>
                                <li><Link to="#">{site.support_phone}</Link></li>
                            </ul>
                            <ul className="social_media">

                                    <li>
                                        <a href={site.facebook_link}>
                                            <i className="icofont-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href={site.twitter_link}>
                                            <i className="icofont-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href={site.linked_link}>
                                            <i className="icofont-linkedin"></i>
                                        </a>
                                    </li>
                                    <li><Link to="#"><i className="icofont-instagram"></i></Link></li>


                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="links nav-item">
                            <h3>Useful Links</h3>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About us</Link></li>
                                <li><Link to="#">Services</Link></li>
                                <li><a href={site.dash_url_blog}>Blog</a></li>
                                <li><Link to="/contact">Contact us</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="links">
                            <h3>Help & Support</h3>
                            <ul>
                                <li><Link to="/faq">FAQs</Link></li>
                                <li><Link to="#">Support</Link></li>
                                <li><Link to="how_it_work">How it works</Link></li>
                                <li><Link to="/terms">Terms & conditions</Link></li>
                                <li><Link to="/privacy">Privacy policy</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-6 col-12">
                        <div className="try_out">
                            <h3>Let’s Try Out</h3>
                            <ul className="app_btn">
                            <li>
                                <a href={site.apple_app}>
                                    <img src={blueapp} alt="image" />
                                </a>
                            </li>
                            <li>
                                <a href={site.apple_app}>
                                    <img src="assets/images/googleplay_blue.png" alt="image" />
                                </a>
                            </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="bottom_footer">
                <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <p>© Copyrights 2023 FloatEV. All rights reserved.</p>
                    </div>
                    {/*<div className="col-md-6">*/}
                    {/*    <p className="developer_text">Design & developed by <Link to="https://themeforest.net/user/kalanidhithemes" target="blank">Kalanidhi Themes</Link></p>*/}
                    {/*</div>*/}
                </div>
                </div>
            </div>

            <div className="go_top">
                <span><img src="assets/images/go_top-one.png" alt="image" /></span>
            </div>
        </footer>  }

        {footer.f4 &&
        <footer className="video-footer-two">
            <div className="top_footer" id="contact">
                <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="abt_side">
                            <div className="logo"> <img src={logo} alt="image" /></div>
                            <ul>
                                <li><Link to="#">{site.support_email}</Link></li>
                                <li><Link to="#">{site.support_phone}</Link></li>
                            </ul>
                            <ul className="social_media">

                                    <li>
                                        <a href={site.facebook_link}>
                                            <i className="icofont-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href={site.twitter_link}>
                                            <i className="icofont-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href={site.linked_link}>
                                            <i className="icofont-linkedin"></i>
                                        </a>
                                    </li>
                                    <li><Link to="#"><i className="icofont-instagram"></i></Link></li>


                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="links nav-item">
                            <h3>Useful Links</h3>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About us</Link></li>
                                <li><Link to="#">Services</Link></li>
                                <li><a href={site.dash_url_blog}>Blog</a></li>
                                <li><Link to="/contact">Contact us</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="links">
                        <h3>Help & Suport</h3>
                            <ul>
                            <li><Link to="/faq">FAQs</Link></li>
                            <li><Link to="#">Support</Link></li>
                            <li><Link to="how_it_work">How it works</Link></li>
                            <li><Link to="/terms">Terms & conditions</Link></li>
                            <li><Link to="/privacy">Privacy policy</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-6 col-12">
                        <div className="try_out">
                            <h3>Let’s Try Out</h3>
                            <ul className="app_btn">
                            <li>
                                <a href={site.apple_app}>
                                    <img src={blueapp} alt="image" />
                                </a>
                            </li>
                            <li>
                                <a href={site.apple_app}>
                                    <img src="assets/images/googleplay_blue.png" alt="image" />
                                </a>
                            </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="bottom_footer">
                <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <p>© Copyrights 2023 FloatEV. All rights reserved.</p>
                    </div>
                    {/*<div className="col-md-6">*/}
                    {/*    <p className="developer_text">Design & developed by <Link to="https://themeforest.net/user/kalanidhithemes" target="blank">Kalanidhi Themes</Link></p>*/}
                    {/*</div>*/}
                </div>
                </div>
            </div>

            <div className="go_top">
                <span><img src="assets/images/go_top-one.png" alt="image" /></span>
            </div>
        </footer> }

        {footer.f5 && 
        <footer>
            <div className="top_footer footer-wave" id="contact">
                <div className="container">
                    <span className="banner_shape1"> <img src="assets/images/banner-shape1.png" alt="image"/> </span>
                    <span className="banner_shape2"> <img src="assets/images/banner-shape2.png" alt="image"/> </span>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="abt_side">
                                <div className="logo"> <img src={logo} alt="image" /></div>
                                <ul>
                                    <li><Link to="#">{site.support_email}</Link></li>
                                    <li><Link to="#">{site.support_phone}</Link></li>
                                </ul>
                                <ul className="social_media">

                                        <li>
                                            <a href={site.facebook_link}>
                                                <i className="icofont-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={site.twitter_link}>
                                                <i className="icofont-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={site.linked_link}>
                                                <i className="icofont-linkedin"></i>
                                            </a>
                                        </li>
                                        <li><Link to="#"><i className="icofont-instagram"></i></Link></li>


                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="links nav-item">
                                <h3>Useful Links</h3>
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/about">About us</Link></li>
                                    <li><Link to="#">Services</Link></li>
                                    <li><a href={site.dash_url_blog}>Blog</a></li>
                                    <li><Link to="/contact">Contact us</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="links">
                            <h3>Help & Support</h3>
                                <ul>
                                <li><Link to="/faq">FAQs</Link></li>
                                <li><Link to="#">Support</Link></li>
                                <li><Link to="/how_it_work">How it works</Link></li>
                                <li><Link to="/terms">Terms & conditions</Link></li>
                                <li><Link to="/privacy">Privacy policy</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-12">
                            <div className="try_out">
                                <h3>Let’s Try Out</h3>
                                <ul className="app_btn">
                                <li>
                                    <a href={site.apple_app}>
                                        <img src={blueapp} alt="image" />
                                    </a>
                                </li>
                                <li>
                                    <a href={site.apple_app}>
                                        <img src="assets/images/googleplay_blue.png" alt="image" />
                                    </a>
                                </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom_footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <p>© Copyrights 2023 FloatEV. All rights reserved.</p>
                        </div>
                        {/*<div className="col-md-6">*/}
                        {/*    <p className="developer_text">Design & developed by <Link to="https://themeforest.net/user/kalanidhithemes" target="blank">Kalanidhi Themes</Link></p>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
            <div className="go_top">
                <span><img src="assets/images/go_top.png" alt="image" /></span>
            </div>
        </footer> }

    </>
  )
}

export default Main