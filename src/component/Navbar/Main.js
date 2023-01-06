import React , { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';
import logo from "../../assets/images/float-travel-app-logo.png";
import logo1 from "../../assets/images/float-travel-app-logo.png";
import getConfig from "../Config/config";

const Main = ({navbar}) => {
    var site = getConfig()[0];
   
    const location = useLocation()
    const path = location.pathname

    const [show, setShow] = useState()
    const [show1, setShow1] = useState()
    const [show2, setShow2] = useState()
    const [mobile, setmobile] = useState()

    useEffect(() => {
        window.scroll(0, 0)
    }, [path]);



  return (
    <>
        {path === "/" ?
        <>
        {navbar.n2 && 
        <header className="white_header fix_style fixed header-wave">
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <Link to="/" className="navbar-brand">
                        <img src={logo1} alt="image" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <div className={`toggle-wrap ${mobile && "active"}`}  onClick={() => setmobile(mobile === true ? false : true)}>
                            <span className="toggle-bar"></span>
                        </div>
                    </button>
                    <div className="collapse navbar-collapse" >
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item" >
                                <Link to="/" className="nav-link" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link smooth to="#how_it_work" className="nav-link">How it works</Link>
                            </li>
                            <li className="nav-item has_dropdown" >
                                <Link to="#" className="nav-link">About</Link>
                                {/*<span className="drp_btn"><i className="icofont-rounded-down"></i></span>*/}
                                <div className="sub_menu">
                                    <ul>
                                        <li><Link to="/about">About Us</Link></li>
                                        <li><Link to="/contact">Contact Us</Link></li>
                                        <li><Link to="/faq">Faq</Link></li>
                                    </ul>
                                </div>
                            </li>
                                <li className="nav-item">
                                    <a href={site.dash_url_blog} className="nav-link">Blog</a>
                                </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link" >Contact</Link>
                            </li>
                        </ul>
                    </div>

                    <div className={`collapse navbar-collapse mobile-screen ${mobile && "show"}`}  >
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item has_dropdown" onClick={() => setShow(show === true ? false : true)}>
                                <Link to="/" className="nav-link" >Home</Link>
                            </li>
                            {/*<li className="nav-item">*/}
                            {/*    <Link smooth to="#features" className="nav-link">Features</Link>*/}
                            {/*</li>*/}
                            <li className="nav-item">
                                <Link smooth to="#how_it_work" className="nav-link">How it works</Link>
                            </li>
                            <li className="nav-item has_dropdown" onClick={() => setShow1(show1 === true ? false : true)}>
                                <Link to="#" className="nav-link">About</Link>
                                <span className="drp_btn"><i className="icofont-rounded-down"></i></span>
                                <div className="sub_menu" style={{ display: show1 ? "block" : "none" }}>
                                    <ul>
                                        <li><Link to="/about">About Us</Link></li>
                                        <li><Link to="/contact">Contact Us</Link></li>
                                        <li><Link to="/faq">Faq</Link></li>
                                        <li><a href={site.dash_url_blog} className="nav-link">Blog</a></li>
                                        {/*<li className="nav-item">*/}
                                        {/*    <li><a href={site.dash_url_blog} className="nav-link">Blog</a></li>*/}
                                        {/*</li>*/}
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item" onClick={() => setShow2(show2 === true ? false : true)}>
                                <li><a href={site.dash_url_blog} className="nav-link">Blog</a></li>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link" >Contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
        }
        </>
        :
        <>
        {navbar.n2 && 
        <header className="white_header fix_style fixed header-wave">
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <Link to="/" className="navbar-brand">
                        <img src={logo} alt="image" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <div className={`toggle-wrap ${mobile && "active"}`}  onClick={() => setmobile(mobile === true ? false : true)}>
                            <span className="toggle-bar"></span>
                        </div>
                    </button>

                    <div className={`collapse navbar-collapse ${mobile && "show"}`} >
                        <div className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link" >Home </Link>
                                <span className="drp_btn" onClick={() => setmobile(mobile === true ? false : true)} style={{ display: show ? "block" : "none" }}><i className="icofont-rounded-down"></i></span>
                                <div className="sub_menu">
                                <ul>
                                    <li><Link to="/" className="nav-link" >Home </Link></li>
                                </ul>
                                </div>
                            </li>
                            {/*<li className="nav-item">*/}
                            {/*    <Link smooth to="#features" className="nav-link">Features</Link>*/}
                            {/*</li>*/}
                            <li className="nav-item">
                                <Link smooth to="#how_it_work"  className="nav-link">How it works</Link>
                            </li>
                            <li className="nav-item has_dropdown">
                                <Link to="#" className="nav-link">About</Link>
                                <span className="drp_btn"><i className="icofont-rounded-down"></i></span>
                                <div className="sub_menu">
                                    <ul>
                                        <li><Link to="/about">About Us</Link></li>
                                        <li><Link to="/contact">Contact Us</Link></li>
                                        <li><Link to="/faq">Faq</Link></li>
                                        <li><a href={site.dash_url_blog} className="nav-link">Blog</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a href={site.dash_url_blog} className="nav-link">Blog</a>
                                {/*<Link to="#" className="nav-link">Blog</Link>*/}
                                {/*/!*<span className="drp_btn"><i className="icofont-rounded-down"></i></span>*!/*/}
                                {/*<div className="sub_menu">*/}
                                {/*<ul>*/}
                                {/*    <li><a href={site.dash_url_blog} className="nav-link">Blog</a></li>*/}
                                {/*</ul>*/}
                                {/*</div>*/}
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link" >Contact</Link>
                            </li>
                            {/*<li className="nav-item">*/}
                            {/*    <Link to="/contact" className="nav-link dark_btn">GET STARTED</Link>*/}
                            {/*</li>*/}
                        </div >
                    </div>
                </nav>
            </div>
        </header>}
        </>
    }
        {/*{navbar.n3 && */}
        {/*<div className="home-dark-block">*/}
        {/*    <header style={{position : "fixed"}}>*/}
        {/*        <div className="container">*/}
        {/*            <nav className="navbar navbar-expand-lg">*/}
        {/*                <Link to="/" className="navbar-brand">*/}
        {/*                    <img src="assets/images/logo.png" alt="image" />*/}
        {/*                </Link>*/}
        {/*                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"*/}
        {/*                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">*/}
        {/*                    <div className={`toggle-wrap ${mobile && "active"}`} onClick = {() => setmobile(true)}>*/}
        {/*                        <span className="toggle-bar" onClick = {() => setmobile(false)}></span>*/}
        {/*                    </div>*/}
        {/*                </button>*/}

        {/*                <div className={`collapse navbar-collapse ${mobile && "show"}`}>*/}
        {/*                    <ul className="navbar-nav ml-auto">*/}
        {/*                        <li className="nav-item has_dropdown">*/}
        {/*                            <Link to="#" className="nav-link" >Home</Link>*/}
        {/*                            <span className="drp_btn"><i className="icofont-rounded-down"></i></span>*/}
        {/*                            <div className="sub_menu">*/}
        {/*                            <ul>*/}
        {/*                                <li><Link to="/">Home Defoult</Link></li>*/}
        {/*                                <li><Link to="/home-dark">Home Dark Hero</Link></li>*/}
        {/*                                <li><Link to="/home-wave">Home Wave </Link></li>*/}
        {/*                                <li><Link to="/home-gredient">Home Gredient</Link></li>*/}
        {/*                                <li><Link to="/home-video">Home Video</Link></li>*/}
        {/*                                <li><Link to="/home-video2">Home Video 2</Link></li>*/}
        {/*                            </ul>*/}
        {/*                            </div>*/}
        {/*                        </li>*/}
        {/*                        <li className="nav-item">*/}
        {/*                            <Link smooth to="#features" className="nav-link">Features</Link>*/}
        {/*                        </li>*/}
        {/*                        <li className="nav-item">*/}
        {/*                            <Link smooth to="#how_it_work" className="nav-link">How it works</Link>*/}
        {/*                        </li>*/}
        {/*                        <li className="nav-item has_dropdown">*/}
        {/*                            <Link to="#" className="nav-link">Pages</Link>*/}
        {/*                            <span className="drp_btn"><i className="icofont-rounded-down"></i></span>*/}
        {/*                            <div className="sub_menu">*/}
        {/*                                <ul>*/}
        {/*                                    <li><Link to="/about">About Us</Link></li>*/}
        {/*                                    <li><Link to="/review">Reviews</Link></li>*/}
        {/*                                    <li><Link to="/contact">Contact Us</Link></li>*/}
        {/*                                    <li><Link to="/faq">Faq</Link></li>*/}
        {/*                                    <li><Link to="/sign-in">Sign In</Link></li>*/}
        {/*                                    <li><Link to="/sign-up">Sign Up</Link></li>*/}
        {/*                                    <li><Link to="/blog">Blog List</Link></li>*/}
        {/*                                    <li><Link to="/blog-single">Blog Single</Link></li>*/}
        {/*                                </ul>*/}
        {/*                            </div>*/}
        {/*                        </li>*/}
        {/*                        <li className="nav-item">*/}
        {/*                            <Link to="/pricing" className="nav-link">Pricing</Link>*/}
        {/*                        </li>*/}
        {/*                        <li className="nav-item has_dropdown">*/}
        {/*                            <Link to="#" className="nav-link">Blog</Link>*/}
        {/*                            <span className="drp_btn"><i className="icofont-rounded-down"></i></span>*/}
        {/*                            <div className="sub_menu">*/}
        {/*                            <ul>*/}
        {/*                                <li><Link to="/blog">Blog List</Link></li>*/}
        {/*                                <li><Link to="/blog-single">Blog Single</Link></li>*/}
        {/*                            </ul>*/}
        {/*                            </div>*/}
        {/*                        </li>*/}
        {/*                        <li className="nav-item">*/}
        {/*                            <Link to="/contact" className="nav-link" >Contact</Link>*/}
        {/*                        </li>*/}
        {/*                        <li className="nav-item">*/}
        {/*                            <Link to="/contact" className="nav-link dark_btn">GET STARTED</Link>*/}
        {/*                        </li>*/}
        {/*                    </ul>*/}
        {/*                </div>*/}
        {/*            </nav>*/}
        {/*        </div>*/}
        {/*    </header>*/}
        {/*</div>} */}

        {/*{navbar.n4 &&*/}
        {/*    <header className="white_header fix_style fixed header-wave">*/}
        {/*    <div className="container">*/}
        {/*        <nav className="navbar navbar-expand-lg">*/}
        {/*            <Link to="/" className="navbar-brand">*/}
        {/*            <img src="assets/images/footer_logo.png" alt="image" />*/}
        {/*            </Link>*/}
        {/*            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"*/}
        {/*                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">*/}
        {/*                <div className={`toggle-wrap ${mobile && "active"}`}  onClick={() => setmobile(mobile === true ? false : true)}>*/}
        {/*                    <span className="toggle-bar"></span>*/}
        {/*                </div>*/}
        {/*            </button>*/}
        {/*            <div className="collapse navbar-collapse" >*/}
        {/*                <ul className="navbar-nav ml-auto">*/}
        {/*                    <li className="nav-item has_dropdown" >*/}
        {/*                        <Link to="#" className="nav-link" >Home</Link>*/}
        {/*                        <span className="drp_btn" ><i className="icofont-rounded-down"></i></span>*/}
        {/*                        <div className="sub_menu">*/}
        {/*                        <ul>*/}
        {/*                            <li><Link to="/">Home Defoult</Link></li>*/}
        {/*                            <li><Link to="/home-dark">Home Dark Hero</Link></li>*/}
        {/*                            <li><Link to="/home-wave">Home Wave </Link></li>*/}
        {/*                            <li><Link to="/home-gredient">Home Gredient</Link></li>*/}
        {/*                            <li><Link to="/home-video">Home Video</Link></li>*/}
        {/*                            <li><Link to="/home-video2">Home Video 2</Link></li>*/}
        {/*                        </ul>*/}
        {/*                        </div>*/}
        {/*                    </li>*/}
        {/*                    <li className="nav-item">*/}
        {/*                        <Link smooth to="#features" className="nav-link">Features</Link>*/}
        {/*                    </li>*/}
        {/*                    <li className="nav-item">*/}
        {/*                        <Link smooth to="#how_it_work" className="nav-link">How it works</Link>*/}
        {/*                    </li>*/}
        {/*                    <li className="nav-item has_dropdown" >*/}
        {/*                        <Link to="#" className="nav-link">Pages</Link>*/}
        {/*                        <span className="drp_btn"><i className="icofont-rounded-down"></i></span>*/}
        {/*                        <div className="sub_menu" >*/}
        {/*                            <ul>*/}
        {/*                                <li><Link to="/about">About Us</Link></li>*/}
        {/*                                <li><Link to="/review">Reviews</Link></li>*/}
        {/*                                <li><Link to="/contact">Contact Us</Link></li>*/}
        {/*                                <li><Link to="/faq">Faq</Link></li>*/}
        {/*                                <li><Link to="/sign-in">Sign In</Link></li>*/}
        {/*                                <li><Link to="/sign-up">Sign Up</Link></li>*/}
        {/*                                <li><Link to="/blog">Blog List</Link></li>*/}
        {/*                                <li><Link to="/blog-single">Blog Single</Link></li>*/}
        {/*                            </ul>*/}
        {/*                        </div>*/}
        {/*                    </li>*/}
        {/*                    <li className="nav-item">*/}
        {/*                        <Link to="/pricing" className="nav-link">Pricing</Link>*/}
        {/*                    </li>*/}
        {/*                    <li className="nav-item has_dropdown" >*/}
        {/*                        <Link to="#" className="nav-link">Blog</Link>*/}
        {/*                        <span className="drp_btn"><i className="icofont-rounded-down"></i></span>*/}
        {/*                        <div className="sub_menu">*/}
        {/*                        <ul>*/}
        {/*                            <li><Link to="/blog">Blog List</Link></li>*/}
        {/*                            <li><Link to="/blog-single">Blog Single</Link></li>*/}
        {/*                        </ul>*/}
        {/*                        </div>*/}
        {/*                    </li>*/}
        {/*                    <li className="nav-item">*/}
        {/*                        <Link to="/contact" className="nav-link" >Contact</Link>*/}
        {/*                    </li>*/}
        {/*                    <li className="nav-item">*/}
        {/*                        <Link to="/contact" className="nav-link dark_btn">GET STARTED</Link>*/}
        {/*                    </li>*/}
        {/*                </ul>*/}
        {/*            </div>*/}
        {/*            <div className={`collapse navbar-collapse mobile-screen ${mobile && "show"}`}  >*/}
        {/*                <ul className="navbar-nav ml-auto">*/}
        {/*                    <li className="nav-item has_dropdown" onClick={() => setShow(show === true ? false : true)}>*/}
        {/*                        <Link to="#" className="nav-link" >Home</Link>*/}
        {/*                        <span className="drp_btn" ><i className="icofont-rounded-down"></i></span>*/}
        {/*                        <div className="sub_menu" style={{ display: show ? "block" : "none" }}>*/}
        {/*                        <ul>*/}
        {/*                            <li><Link to="/">Home Defoult</Link></li>*/}
        {/*                            <li><Link to="/home-dark">Home Dark Hero</Link></li>*/}
        {/*                            <li><Link to="/home-wave">Home Wave </Link></li>*/}
        {/*                            <li><Link to="/home-gredient">Home Gredient</Link></li>*/}
        {/*                            <li><Link to="/home-video">Home Video</Link></li>*/}
        {/*                            <li><Link to="/home-video2">Home Video 2</Link></li>*/}
        {/*                        </ul>*/}
        {/*                        </div>*/}
        {/*                    </li>*/}
        {/*                    <li className="nav-item">*/}
        {/*                        <Link smooth to="#features" className="nav-link">Features</Link>*/}
        {/*                    </li>*/}
        {/*                    <li className="nav-item">*/}
        {/*                        <Link smooth to="#how_it_work" className="nav-link">How it works</Link>*/}
        {/*                    </li>*/}
        {/*                    <li className="nav-item has_dropdown" onClick={() => setShow1(show1 === true ? false : true)}>*/}
        {/*                        <Link to="#" className="nav-link">Pages</Link>*/}
        {/*                        <span className="drp_btn"><i className="icofont-rounded-down"></i></span>*/}
        {/*                        <div className="sub_menu" style={{ display: show1 ? "block" : "none" }}>*/}
        {/*                            <ul>*/}
        {/*                                <li><Link to="/about">About Us</Link></li>*/}
        {/*                                <li><Link to="/review">Reviews</Link></li>*/}
        {/*                                <li><Link to="/contact">Contact Us</Link></li>*/}
        {/*                                <li><Link to="/faq">Faq</Link></li>*/}
        {/*                                <li><Link to="/sign-in">Sign In</Link></li>*/}
        {/*                                <li><Link to="/sign-up">Sign Up</Link></li>*/}
        {/*                                <li><Link to="/blog">Blog List</Link></li>*/}
        {/*                                <li><Link to="/blog-single">Blog Single</Link></li>*/}
        {/*                            </ul>*/}
        {/*                        </div>*/}
        {/*                    </li>*/}
        {/*                    <li className="nav-item">*/}
        {/*                        <Link to="/pricing" className="nav-link">Pricing</Link>*/}
        {/*                    </li>*/}
        {/*                    <li className="nav-item has_dropdown" onClick={() => setShow2(show2 === true ? false : true)}>*/}
        {/*                        <Link to="#" className="nav-link">Blog</Link>*/}
        {/*                        <span className="drp_btn"><i className="icofont-rounded-down"></i></span>*/}
        {/*                        <div className="sub_menu" style={{ display: show2 ? "block" : "none" }}>*/}
        {/*                        <ul>*/}
        {/*                            <li><Link to="/blog">Blog List</Link></li>*/}
        {/*                            <li><Link to="/blog-single">Blog Single</Link></li>*/}
        {/*                        </ul>*/}
        {/*                        </div>*/}
        {/*                    </li>*/}
        {/*                    <li className="nav-item">*/}
        {/*                        <Link to="/contact" className="nav-link" >Contact</Link>*/}
        {/*                    </li>*/}
        {/*                    <li className="nav-item">*/}
        {/*                        <Link to="/contact" className="nav-link dark_btn">GET STARTED</Link>*/}
        {/*                    </li>*/}
        {/*                </ul>*/}
        {/*            </div>*/}
        {/*        </nav>*/}
        {/*    </div>*/}
        {/*</header>*/}
        {/*}*/}
        
        {/*{navbar.n5 &&*/}
        {/*<header>*/}
        {/*    <div className="container">*/}
        {/*        <nav className="navbar navbar-expand-lg">*/}
        {/*            <Link to="/" className="navbar-brand">*/}
        {/*                <img src="assets/images/logo.png" alt="image" />*/}
        {/*            </Link>*/}
        {/*            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"*/}
        {/*                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">*/}
        {/*                <div className={`toggle-wrap ${mobile && "active"}`}  onClick={() => setmobile(mobile === true ? false : true)}>*/}
        {/*                    <span className="toggle-bar"></span>*/}
        {/*                </div>*/}
        {/*            </button>*/}
        {/*            <div className="collapse navbar-collapse" >*/}
        {/*                <ul className="navbar-nav ml-auto">*/}
        {/*                    <li className="nav-item has_dropdown" >*/}
        {/*                        <Link to="#" className="nav-link" >Home</Link>*/}
        {/*                        <span className="drp_btn" ><i className="icofont-rounded-down"></i></span>*/}
        {/*                        <div className="sub_menu">*/}
        {/*                        <ul>*/}
        {/*                            <li><Link to="/">Home Defoult</Link></li>*/}
        {/*                            <li><Link to="/home-dark">Home Dark Hero</Link></li>*/}
        {/*                            <li><Link to="/home-wave">Home Wave </Link></li>*/}
        {/*                            <li><Link to="/home-gredient">Home Gredient</Link></li>*/}
        {/*                            <li><Link to="/home-video">Home Video</Link></li>*/}
        {/*                            <li><Link to="/home-video2">Home Video 2</Link></li>*/}
        {/*                        </ul>*/}
        {/*                        </div>*/}
        {/*                    </li>*/}
        {/*                    <li className="nav-item">*/}
        {/*                        <Link smooth to="#features" className="nav-link">Features</Link>*/}
        {/*                    </li>*/}
        {/*                    <li className="nav-item">*/}
        {/*                        <Link smooth to="#how_it_work" className="nav-link">How it works</Link>*/}
        {/*                    </li>*/}
        {/*                    <li className="nav-item has_dropdown" >*/}
        {/*                        <Link to="#" className="nav-link">Pages</Link>*/}
        {/*                        <span className="drp_btn"><i className="icofont-rounded-down"></i></span>*/}
        {/*                        <div className="sub_menu" >*/}
        {/*                            <ul>*/}
        {/*                                <li><Link to="#">Submenu 1</Link></li>*/}
        {/*                                <li><Link to="#">Another submenu 2</Link></li>*/}
        {/*                                <li><Link to="#">Submenu 3</Link></li>*/}
        {/*                                <li><Link to="#">Another submenu 4</Link></li>*/}
        {/*                            </ul>*/}
        {/*                        </div>*/}
        {/*                    </li>*/}
        {/*                    <li className="nav-item">*/}
        {/*                        <Link smooth to="#pricing" className="nav-link">Pricing</Link>*/}
        {/*                    </li>*/}
        {/*                    <li className="nav-item">*/}
        {/*                        <Link smooth to="#blog" className="nav-link">Blog</Link>*/}
        {/*                    </li>*/}
        {/*                    <li className="nav-item">*/}
        {/*                        <Link smooth to="#contact" className="nav-link" >Contact</Link>*/}
        {/*                    </li>*/}
        {/*                    <li className="nav-item">*/}
        {/*                        <Link to="/contact" className="nav-link dark_btn">GET STARTED</Link>*/}
        {/*                    </li>*/}
        {/*                </ul>*/}
        {/*            </div>*/}
        {/*            <div className={`collapse navbar-collapse mobile-screen ${mobile && "show"}`}  >*/}
        {/*                <ul className="navbar-nav ml-auto">*/}
        {/*                    <li className="nav-item has_dropdown" onClick={() => setShow(show === true ? false : true)}>*/}
        {/*                        <Link to="#" className="nav-link" >Home</Link>*/}
        {/*                        <span className="drp_btn" ><i className="icofont-rounded-down"></i></span>*/}
        {/*                        <div className="sub_menu" style={{ display: show ? "block" : "none" }}>*/}
        {/*                        <ul>*/}
        {/*                            <li><Link to="/">Home Defoult</Link></li>*/}
        {/*                            <li><Link to="/home-dark">Home Dark Hero</Link></li>*/}
        {/*                            <li><Link to="/home-wave">Home Wave </Link></li>*/}
        {/*                            <li><Link to="/home-gredient">Home Gredient</Link></li>*/}
        {/*                            <li><Link to="/home-video">Home Video</Link></li>*/}
        {/*                            <li><Link to="/home-video2">Home Video 2</Link></li>*/}
        {/*                        </ul>*/}
        {/*                        </div>*/}
        {/*                    </li>*/}
        {/*                    <li className="nav-item">*/}
        {/*                        <Link smooth to="#features" className="nav-link">Features</Link>*/}
        {/*                    </li>*/}
        {/*                    <li className="nav-item">*/}
        {/*                        <Link smooth to="#how_it_work" className="nav-link">How it works</Link>*/}
        {/*                    </li>*/}
        {/*                    <li className="nav-item has_dropdown" onClick={() => setShow1(show1 === true ? false : true)}>*/}
        {/*                        <Link to="#" className="nav-link">Pages</Link>*/}
        {/*                        <span className="drp_btn"><i className="icofont-rounded-down"></i></span>*/}
        {/*                        <div className="sub_menu" style={{ display: show1 ? "block" : "none" }}>*/}
        {/*                            <ul>*/}
        {/*                                <li><Link to="/about">About Us</Link></li>*/}
        {/*                                <li><Link to="/review">Reviews</Link></li>*/}
        {/*                                <li><Link to="/contact">Contact Us</Link></li>*/}
        {/*                                <li><Link to="/faq">Faq</Link></li>*/}
        {/*                                <li><Link to="/sign-in">Sign In</Link></li>*/}
        {/*                                <li><Link to="/sign-up">Sign Up</Link></li>*/}
        {/*                                <li><Link to="/blog">Blog List</Link></li>*/}
        {/*                                <li><Link to="/blog-single">Blog Single</Link></li>*/}
        {/*                            </ul>*/}
        {/*                        </div>*/}
        {/*                    </li>*/}
        {/*                    <li className="nav-item">*/}
        {/*                        <Link to="/pricing" className="nav-link">Pricing</Link>*/}
        {/*                    </li>*/}
        {/*                    <li className="nav-item has_dropdown" onClick={() => setShow2(show2 === true ? false : true)}>*/}
        {/*                        <Link to="#" className="nav-link">Blog</Link>*/}
        {/*                        <span className="drp_btn"><i className="icofont-rounded-down"></i></span>*/}
        {/*                        <div className="sub_menu" style={{ display: show2 ? "block" : "none" }}>*/}
        {/*                        <ul>*/}
        {/*                            <li><Link to="/blog">Blog List</Link></li>*/}
        {/*                            <li><Link to="/blog-single">Blog Single</Link></li>*/}
        {/*                        </ul>*/}
        {/*                        </div>*/}
        {/*                    </li>*/}
        {/*                    <li className="nav-item">*/}
        {/*                        <Link to="/contact" className="nav-link" >Contact</Link>*/}
        {/*                    </li>*/}
        {/*                    <li className="nav-item">*/}
        {/*                        <Link to="/contact" className="nav-link dark_btn">GET STARTED</Link>*/}
        {/*                    </li>*/}
        {/*                </ul>*/}
        {/*            </div>*/}
        {/*        </nav>*/}
        {/*    </div>*/}
        {/*</header>}*/}

        {navbar.n6 &&
                <header className="white_header fix_style fixed">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg">
                            <Link to="/" className="navbar-brand">
                                <img src={logo} alt="image" />
                            </Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <div className={`toggle-wrap ${mobile && "active"}`}  onClick={() => setmobile(mobile === true ? false : true)}>
                                    <span className="toggle-bar"></span>
                                </div>
                            </button>

                            <div className={`collapse navbar-collapse ${mobile && "show"}`} >
                                <div className="navbar-nav ml-auto">
                                    <li className="nav-item has_dropdown">
                                        <Link to="/" className="nav-link" >Home </Link>
                                        <span className="drp_btn" onClick={() => setmobile(mobile === true ? false : true)} style={{ display: show ? "block" : "none" }}><i className="icofont-rounded-down"></i></span>
                                        {/*<div className="sub_menu">*/}
                                        {/*    <ul>*/}
                                        {/*        <li><Link to="/" className="nav-link" >Home </Link></li>*/}
                                        {/*    </ul>*/}
                                        {/*</div>*/}
                                    </li>
                                    {/*<li className="nav-item">*/}
                                    {/*    <Link smooth to="#features" className="nav-link">Features</Link>*/}
                                    {/*</li>*/}
                                    <li className="nav-item">
                                        <Link smooth to="how_it_work"  className="nav-link">How it works</Link>
                                    </li>
                                    <li className="nav-item has_dropdown">
                                        <Link to="#" className="nav-link">About</Link>
                                        <span className="drp_btn"><i className="icofont-rounded-down"></i></span>
                                        <div className="sub_menu">
                                            <ul>
                                                <li><Link to="/about">About Us</Link></li>
                                                <li><Link to="/contact">Contact Us</Link></li>
                                                <li><Link to="/faq">Faq</Link></li>
                                                <li><a href={site.dash_url_blog} className="nav-link">Blog</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <a href={site.dash_url_blog} className="nav-link">Blog</a>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/contact" className="nav-link" >Contact</Link>
                                    </li>
                                    {/*<li className="nav-item">*/}
                                    {/*    <Link to="/contact" className="nav-link dark_btn">GET STARTED</Link>*/}
                                    {/*</li>*/}
                                </div >
                            </div>
                        </nav>
                    </div>
                </header>}


    </>
  )
}

export default Main