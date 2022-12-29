import React , {useState, useEffect} from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import Design from '../HomeMain/Design/Main'
import Work from '../HomeMain/Work/Main'
import Testimonial from '../HomeMain/Testimonial/Main'
import AboutApp from '../HomeMain/AboutApp/Main'
import Trusted from '../HomeMain/Trusted/Main'
import Pricing from '../HomeMain/Pricing/Main'
import Faq from '../HomeMain/Faq/Main'
import Interface from '../HomeMain/Interface/Main'
import Download from '../HomeMain/Download/Main'
import Story from '../HomeMain/Story/Main'


const Main = ({setnavbar,setfooter,setbrdcum}) => {

    const [ytShow , setytShow] = useState (false)
    useEffect(() => {
      setfooter({f2 : true})
      setnavbar({n3 : true})
      setbrdcum({b2 : true})
      localStorage.setItem("navbar","darkhome")

    }, [])
    

  return (
    <>  
         
        
        {/* <div className="home-dark-block">
        <header style={{position : "fixed"}}>
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <Link to="/" className="navbar-brand">
                        <img src="assets/images/logo.png" alt="image" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <div className={`toggle-wrap ${mobile && "active"}`} onClick = {() => setmobile(true)}>
                            <span className="toggle-bar" onClick = {() => setmobile(false)}></span>
                        </div>
                    </button>

                    <div className={`collapse navbar-collapse ${mobile && "show"}`}>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item has_dropdown">
                                <Link to="#" className="nav-link" >Home</Link>
                                <span className="drp_btn"><i className="icofont-rounded-down"></i></span>
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
                            <li className="nav-item has_dropdown">
                                <Link to="#" className="nav-link">Pages</Link>
                                <span className="drp_btn"><i className="icofont-rounded-down"></i></span>
                                <div className="sub_menu">
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
                            <li className="nav-item has_dropdown">
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
                </nav>
            </div>
        </header>
        </div>  */}
        <section className="banner_section homedark-banner">
            <div className="container">
                <div className="row">
                <span className="banner_shape1"> <img src="assets/images/banner-shape-one1.png" alt="image" /> </span>
                <span className="banner_shape2"> <img src="assets/images/banner-shape2two.png" alt="image" /> </span>
                <span className="banner_shape3"> <img src="assets/images/banner-shapethree3.png" alt="image" /> </span>

                <div className="col-lg-8 col-md-12 mx-auto"  data-aos="fade-right" data-aos-duration="1500">
                    <div className="banner_text">
                    <h1>Best way to manage your customers easily.</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and setting indus orem Ipsum has been the industrys standard dummy text ever.
                    </p>
                    </div>
                    <div className="yt_video" data-aos="fade-in" data-aos-duration="1500">
                    <div className="thumbnil">
                        <a className="popup-youtube play-button" onClick = {() => setytShow(true)} data-url="#" data-toggle="modal" data-target="#myModal" title="XJj2PbenIsU">
                        <span className="play_btn">
                            <img src="assets/images/play_icon.png" alt="image" />
                            <div className="waves-block">
                            <div className="waves wave-1"></div>
                            <div className="waves wave-2"></div>
                            <div className="waves wave-3"></div>
                            </div>
                        </span>
                        </a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="container-fluid"  data-aos="fade-in" data-aos-duration="1500">
                <div className="banner_images">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-2 col-lg-2 col-sm-4 col-xs-4 d-none d-lg-block">
                        <div className="banner_screen screen1">
                        <img className="moving_position_animatin" src="assets/images/hero-image-5.png" alt="image" />
                        </div>
                    </div>

                    <div className="col-md-4 col-lg-2 col-sm-4 col-xs-4">
                        <div className="banner_screen screen2">
                        <img className="moving_animation" src="assets/images/hero-image-4.png" alt="image" />
                        </div>
                    </div>

                    <div className="col-md-4 col-lg-3 col-sm-4 col-xs-4">
                        <div className="banner_screen screen3">
                        <img className="moving_position_animatin" src="assets/images/hero-image-1.png" alt="image" />
                        </div>
                    </div>

                    <div className="col-md-4 col-lg-2 col-sm-4 col-xs-4">
                        <div className="banner_screen screen4">
                        <img className="moving_animation" src="assets/images/hero-image-2.png" alt="image" />
                        </div>
                    </div>
                    <div className="col-md-2 col-lg-2 col-sm-4 col-xs-4 d-none d-lg-block">
                        <div className="banner_screen screen5">
                        <img className="moving_position_animatin" src="assets/images/hero-image-3.png" alt="image" />
                        </div>
                    </div>
                </div>

                </div>
            </div>
        </section>
        <section className="row_am download_section homedark-download">
            <div className="container">
                <ul className="app_btn" data-aos="fade-in" data-aos-duration="1500">
                    <li>
                        <a href="#" className="app_store">
                        <img className="blue_img" src="assets/images/appstore_blue.png" alt="image" />
                        <img className="white_img" src="assets/images/appstore_white.png" alt="image" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        <img className="blue_img" src="assets/images/googleplay_blue.png" alt="image" />
                        <img className="white_img" src="assets/images/googleplay_white.png" alt="image" />
                        </a>
                    </li>
                </ul>
            </div>
        </section>
        <section className="row_am statistic_section">
            <div className="container">
                    <ul className="app_statstic" id="counter" >
                        <div className="col-md-3 col-lg-3 col-sm-6 col-xs-12" data-aos="fade-up" data-aos-duration="1000">
                        <li>
                            <div className="icon">
                            <img src="assets/images/download-dark.png" alt="image" />
                            </div>
                            <div className="text">
                            <p><span className="counter-value" data-count="17">0</span><span>M+</span></p>
                            <p>Download</p>
                            </div>
                        </li>
                        </div>

                        <div className="col-md-3 col-lg-3 col-sm-6 col-xs-12 " data-aos="fade-up" data-aos-duration="1200">
                        <li>
                        <div className="icon">
                            <img src="assets/images/followers-dark.png" alt="image" />
                        </div>
                        <div className="text">
                            <p><span className="counter-value" data-count="08">0 </span><span>M+</span></p>
                            <p>Followers</p>
                        </div>
                        </li>
                        </div>

                        <div className="col-md-3 col-lg-3 col-sm-6 col-xs-12 " data-aos="fade-up" data-aos-duration="1400">
                        <li>
                        <div className="icon">
                            <img src="assets/images/reviews-dark.png" alt="image" />
                        </div>
                        <div className="text">
                            <p><span className="counter-value" data-count="2300">1500</span><span>+</span></p>
                            <p>Reviews</p>
                        </div>
                        </li>
                        </div>

                        <div className="col-md-3 col-lg-3 col-sm-6 col-xs-12 " data-aos="fade-up" data-aos-duration="1600">
                        <li>
                        <div className="icon">
                            <img src="assets/images/countries-dark.png" alt="image" />
                        </div>
                        <div className="text">
                            <p><span className="counter-value" data-count="150">0</span><span>+</span></p>
                            <p>Countries</p>
                        </div>
                        </li>
                        </div>
                    </ul>
            </div>
        </section>
        <section className="row_am features_section homedark-features" id="features">
            <div className="container">
                <div className="features_inner">
                <div className="section_title" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
                    <h2><span>Features</span> that makes app different!</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typese tting <br/> indus orem Ipsum has beenthe standard dummy</p>
                </div>
                <div className="features_block">
                    <div className="row">
                    <div className="col-md-4">
                        <div className="feature_box" data-aos="fade-up" data-aos-duration="1500">
                            <div className="image">
                            <img src="assets/images/features1.png" alt="image" />
                            </div>
                            <div className="text">
                            <h4>Secure data</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typese tting <br/> indus orem Ipsum has beenthe standard dummy.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="feature_box" data-aos="fade-up" data-aos-duration="1700">
                            <div className="image">
                            <img src="assets/images/features2.png" alt="image" />
                            </div>
                            <div className="text">
                            <h4>Automate everything</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typese tting <br/> indus orem Ipsum has beenthe standard dummy.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="feature_box" data-aos="fade-up" data-aos-duration="1900">
                            <div className="image">
                            <img src="assets/images/features3.png" alt="image" />
                            </div>
                            <div className="text">
                            <h4>Secure data</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typese tting <br/> indus orem Ipsum has beenthe standard dummy.</p>
                            </div>
                        </div>
                    </div>
                </div>

                </div>

                </div>

            </div>
        </section>
        < AboutApp dark = {true}/>
        <Design />
        <Work dark = {true}/>
        <Testimonial />
        <Trusted />
        <Pricing />
        <Faq/>
        <Interface/>
        <Download />
        <Story />
        {ytShow &&
        <>
        <div className="modal fade youtube-video show" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-modal="true" style={{paddingRight: "17px", display: "block"}}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <button id="close-video" type="button" className="button btn btn-default text-right" data-dismiss="modal">
                    <i className="icofont-close-line-circled" onClick={() => setytShow(false)}></i>
                </button>
                    <div className="modal-body">
                        <div id="video-container" className="video-container">
                            <iframe id="youtubevideo" src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&amp;mute=1" width="640" height="360" frameborder="0" allowfullscreen=""></iframe>
                        </div>        
                    </div>
                    <div className="modal-footer">
                    </div>
                </div> 
            </div>
        </div>
        <div className="purple_backdrop"></div>
        </>}
    </>
  )
}

export default Main