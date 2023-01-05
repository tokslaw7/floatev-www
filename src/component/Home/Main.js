import { HashLink as Link } from 'react-router-hash-link';
import React , {useEffect, useState} from 'react'
import AOS from "aos";
import OwlCarousel from 'react-owl-carousel'
import Trusted from '../HomeMain/Trusted/Main'
import Features from '../HomeMain/Features/Main'
import AboutApp from '../HomeMain/AboutApp/Main'
import Design from '../HomeMain/Design/Main'
import Work from '../HomeMain/Work/Main'
import Testimonial from '../HomeMain/Testimonial/Main'
//import Pricing from '../HomeMain/Pricing/Main'
import Faq from '../HomeMain/Faq/Main'
import Interface from '../HomeMain/Interface/Main'
import Download from '../HomeMain/Download/Main'
import Story from '../HomeMain/Story/Main'

import anim from '../../assets/images/anim_line.png'
import blueapp from '../../assets/images/appstore_blue.png'
import whiteapp from '../../assets/images/appstore_white.png'
import blue from '../../assets/images/googleplay_blue.png'
import white from '../../assets/images/googleplay_white.png'
import used1 from '../../assets/images/used01.png'
import used2 from '../../assets/images/used02.png'
import used3 from '../../assets/images/used03.png'
import used4 from '../../assets/images/used04.png'
import msg from '../../assets/images/message_icon.png'
import shield from '../../assets/images/shield_icon.png'
import screen from '../../assets/images/screen.png'
import frame from '../../assets/images/mobile_frame_svg.svg'


const Main = ({setfooter , setnavbar ,setbrdcum}) => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    
    useEffect(() => {
        setfooter({f1 : true})
        setnavbar({n2 : true})
        setbrdcum({b1 : true})
      localStorage.setItem("navbar","home")

    }, [])

    const frmae_slider = {
        loop:true,
        margin:10,
        nav:false,
        autoplay: true,
        smartSpeed: 1500,
        dots: true, 
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    }

  return (
    <>
        {/* <header>
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <Link to="/" className="navbar-brand">
                        <img src="assets/images/logo.png" alt="image" />
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
        <section className="banner_section home-banner">
            <div className="container">
                <div className="anim_line">
                    <span><img src={anim} alt="anim_line"/></span>
                    <span><img src={anim} alt="anim_line"/></span>
                    <span><img src={anim} alt="anim_line"/></span>
                    <span><img src={anim} alt="anim_line"/></span>
                    <span><img src={anim} alt="anim_line"/></span>
                    <span><img src={anim} alt="anim_line"/></span>
                    <span><img src={anim} alt="anim_line"/></span>
                    <span><img src={anim} alt="anim_line"/></span>
                    <span><img src={anim} alt="anim_line"/></span>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12"  data-aos="fade-right" data-aos-duration="1500">
                        <div className="banner_text">
                            <h1>Best way to <span>manage your customers.</span></h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and setting indus orem Ipsum has been the industrys.
                            </p>
                        </div>
                        <ul className="app_btn">
                            <li>
                                <Link to="#">
                                <img className="blue_img" src={blueapp} alt="image" />
                                <img className="white_img" src={whiteapp} alt="image" />
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                <img className="blue_img" src={blue} alt="image" />
                                <img className="white_img" src={white} alt="image" />
                                </Link>
                            </li>
                        </ul>
                        <div className="used_app">
                            <ul>
                                <li><img src={used1} alt="image" /></li>
                                <li><img src={used2} alt="image" /></li>
                                <li><img src={used3} alt="image" /></li>
                                <li><img src={used4} alt="image" /></li>
                            </ul>
                            <p>12M + <br/> used this app</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12"  data-aos="fade-in" data-aos-duration="1500">
                        <div className="banner_slider">
                            <div className="left_icon">
                                <img src={msg} alt="image" />
                            </div>
                            <div className="right_icon">
                                <img src={shield} alt="image" />
                            </div>
                            <OwlCarousel id="frmae_slider" className="owl-carousel owl-theme owl-loaded owl-drag" {...frmae_slider}>
                                <div className="item">
                                <div className="slider_img">
                                    <img src={screen} alt="image" />
                                </div>
                                </div>
                                <div className="item">
                                <div className="slider_img">
                                    <img src={screen} alt="image" />
                                </div>
                                </div>
                                <div className="item">
                                <div className="slider_img">
                                    <img src={screen} alt="image" />
                                </div>
                                </div>
                            </OwlCarousel> 
                            <div className="slider_frame">
                                <img src={frame} alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Trusted />
        <Features />
        <AboutApp />
        <Design />
        <Work />
        <Testimonial />
        <Pricing />
        <Faq/>
        <Interface/>
        <Download />
        <Story/>
    </>
  )
}

export default Main