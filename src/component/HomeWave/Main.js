
import { HashLink as Link } from 'react-router-hash-link';
import React , { useState ,useEffect } from 'react'
import Trusted from '../HomeMain/Trusted/Main'
import Features from '../HomeMain/Features/Main'
import AboutApp from '../HomeMain/AboutApp/Main'
import Design from '../HomeMain/Design/Main'
import Work from '../HomeMain/Work/Main'
import Testimonial from '../HomeMain/Testimonial/Main'
import Pricing from '../HomeMain/Pricing/Main'
import Faq from '../HomeMain/Faq/Main'
import Interface from '../HomeMain/Interface/Main'
import Download from '../HomeMain/Download/Main'
import Story from '../HomeMain/Story/Main'

const Main = ({setnavbar , setfooter , setbrdcum }) => {

      useEffect(() => {
        setfooter({f5 : true})
        setbrdcum({b1 : true})
        setnavbar({n4 : true})
        localStorage.setItem("navbar","homewave")
  
      }, [])
    
  return (
    <>  
        {/* <header className="white_header fix_style fixed header-wave">
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <Link to="/" className="navbar-brand">
                    <img src="assets/images/footer_logo.png" alt="image" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <div className={`toggle-wrap ${mobile && "active"}`}  onClick={() => setmobile(mobile === true ? false : true)}>
                            <span className="toggle-bar"></span>
                        </div>
                    </button>
                    <div className="collapse navbar-collapse" >
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item has_dropdown" >
                                <Link to="#" className="nav-link" >Home</Link>
                                <span className="drp_btn" ><i className="icofont-rounded-down"></i></span>
                                <div className="sub_menu">
                                <ul>
                                    <li><Link to="/">Home Defoult</Link></li>
                                    <li><Link to="/home-dark">Home Dark Hero</Link></li>
                                    <li><Link to="/home-wave">Home Wave </Link></li>
                                    <li><Link to="/home-gredient">Home Gredient</Link></li>
                                    <li><Link to="/home-video">Home Video</Link></li>
                                    <li><Link to="/home-video2">Home Video 2</Link></li>
                                </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link smooth to="#features" className="nav-link">Features</Link>
                            </li>
                            <li className="nav-item">
                                <Link smooth to="#how_it_work" className="nav-link">How it works</Link>
                            </li>
                            <li className="nav-item has_dropdown" >
                                <Link to="#" className="nav-link">Pages</Link>
                                <span className="drp_btn"><i className="icofont-rounded-down"></i></span>
                                <div className="sub_menu" >
                                    <ul>
                                        <li><Link to="/about">About Us</Link></li>
                                        <li><Link to="/review">Reviews</Link></li>
                                        <li><Link to="/contact">Contact Us</Link></li>
                                        <li><Link to="/faq">Faq</Link></li>
                                        <li><Link to="/sign-in">Sign In</Link></li>
                                        <li><Link to="/sign-up">Sign Up</Link></li>
                                        <li><Link to="/blog">Blog List</Link></li>
                                        <li><Link to="/blog-single">Blog Single</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link to="/pricing" className="nav-link">Pricing</Link>
                            </li>
                            <li className="nav-item has_dropdown" >
                                <Link to="#" className="nav-link">Blog</Link>
                                <span className="drp_btn"><i className="icofont-rounded-down"></i></span>
                                <div className="sub_menu">
                                <ul>
                                    <li><Link to="/blog">Blog List</Link></li>
                                    <li><Link to="/blog-single">Blog Single</Link></li>
                                </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link" >Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link dark_btn">GET STARTED</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={`collapse navbar-collapse mobile-screen ${mobile && "show"}`}  >
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item has_dropdown" onClick={() => setShow(show === true ? false : true)}>
                                <Link to="#" className="nav-link" >Home</Link>
                                <span className="drp_btn" ><i className="icofont-rounded-down"></i></span>
                                <div className="sub_menu" style={{ display: show ? "block" : "none" }}>
                                <ul>
                                    <li><Link to="/">Home Defoult</Link></li>
                                    <li><Link to="/home-dark">Home Dark Hero</Link></li>
                                    <li><Link to="/home-wave">Home Wave </Link></li>
                                    <li><Link to="/home-gredient">Home Gredient</Link></li>
                                    <li><Link to="/home-video">Home Video</Link></li>
                                    <li><Link to="/home-video2">Home Video 2</Link></li>
                                </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link smooth to="#features" className="nav-link">Features</Link>
                            </li>
                            <li className="nav-item">
                                <Link smooth to="#how_it_work" className="nav-link">How it works</Link>
                            </li>
                            <li className="nav-item has_dropdown" onClick={() => setShow1(show1 === true ? false : true)}>
                                <Link to="#" className="nav-link">Pages</Link>
                                <span className="drp_btn"><i className="icofont-rounded-down"></i></span>
                                <div className="sub_menu" style={{ display: show1 ? "block" : "none" }}>
                                    <ul>
                                        <li><Link to="/about">About Us</Link></li>
                                        <li><Link to="/review">Reviews</Link></li>
                                        <li><Link to="/contact">Contact Us</Link></li>
                                        <li><Link to="/faq">Faq</Link></li>
                                        <li><Link to="/sign-in">Sign In</Link></li>
                                        <li><Link to="/sign-up">Sign Up</Link></li>
                                        <li><Link to="/blog">Blog List</Link></li>
                                        <li><Link to="/blog-single">Blog Single</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link to="/pricing" className="nav-link">Pricing</Link>
                            </li>
                            <li className="nav-item has_dropdown" onClick={() => setShow2(show2 === true ? false : true)}>
                                <Link to="#" className="nav-link">Blog</Link>
                                <span className="drp_btn"><i className="icofont-rounded-down"></i></span>
                                <div className="sub_menu" style={{ display: show2 ? "block" : "none" }}>
                                <ul>
                                    <li><Link to="/blog">Blog List</Link></li>
                                    <li><Link to="/blog-single">Blog Single</Link></li>
                                </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link" >Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link dark_btn">GET STARTED</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header> */}
        <section className="banner_section home-wave">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12"  data-aos="fade-right" data-aos-duration="1500">
                        <div className="banner_text">
                            <h1>Best way to manage your customers.</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and setting indus orem Ipsum has been the industrys.
                            </p>
                        </div>
                        <ul className="app_btn">
                            <li>
                                <Link to="#">
                                <img className="blue_img" src="assets/images/appstore_blue.png" alt="image" />
                                <img className="white_img" src="assets/images/appstore_white.png" alt="image" />
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                <img className="blue_img" src="assets/images/googleplay_blue.png" alt="image" />
                                <img className="white_img" src="assets/images/googleplay_white.png" alt="image" />
                                </Link>
                            </li>
                        </ul>
                        <div className="used_app">
                            <ul>
                                <li><img src="assets/images/used01.png" alt="image" /></li>
                                <li><img src="assets/images/used02.png" alt="image" /></li>
                                <li><img src="assets/images/used03.png" alt="image" /></li>
                                <li><img src="assets/images/used04.png" alt="image" /></li>
                            </ul>
                            <p>12M + <br/> used this app</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12"  data-aos="fade-in" data-aos-duration="1500">
                        <div className="banner_image">
                            <img className="moving_animation" src="assets/images/banner-image.png" alt="image" />
                        </div>
                    </div>
                    
                    <span className="banner_shape1"> <img src="assets/images/banner-shape1.png" alt="image" /> </span>
                    <span className="banner_shape2"> <img src="assets/images/banner-shape2.png" alt="image" /> </span>
                    <span className="banner_shape3"> <img src="assets/images/banner-shape3.png" alt="image" /> </span>
                </div>
                
            </div>
            <div className="home-wave-bottom">
                <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                <defs>
                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                </defs>
                <g className="parallax">
                <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                <use xlinkHref="#gentle-wave" x="48" y="7" fill="#f6f4fe" />
                </g>
                </svg>
            </div>
        </section>
        <Trusted />
        <Features />
        <AboutApp />
        <Design />
        <Work />
        <Testimonial />
        <Pricing/>
        <Faq/>
        <Interface/>
        <Download />
        <Story/>
    </>
  )
}

export default Main