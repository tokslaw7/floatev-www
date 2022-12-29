import React , { useState , useEffect} from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import Trusted from '../HomeMain/Trusted/Main'
import AboutApp from '../HomeMain/AboutApp/Main'
import Design from '../HomeMain/Design/Main'
import Testimonial from '../HomeMain/Testimonial/Main'
import Pricing from '../HomeMain/Pricing/Main'
import Faq from '../HomeMain/Faq/Main'
import Interface from '../HomeMain/Interface/Main'
import Download from '../HomeMain/Download/Main'
import Story from '../HomeMain/Story/Main'

const Main = ({setfooter,setnavbar,setbrdcum}) => {

    const [ytShow , setytShow] = useState (false)
      useEffect(() => {
        setfooter({f4 : true})
        setnavbar({n4 : true})
        setbrdcum({b4 : true})
        localStorage.setItem("navbar","homevideotwo")
  
      }, [])

  return (
    <>
        <section className="banner_section home-video-two">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-12"  data-aos="fade-right" data-aos-duration="1500">
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

                    <div className="col-lg-4 col-md-12"  data-aos="fade-in" data-aos-duration="1500">
                        <div className="banner_image">
                            <div className="yt_video" >
                            <div className="thumbnil">
                                <a className="popup-youtube play-button" onClick={() => setytShow(true)} data-url="#" data-toggle="modal" data-target="#myModal" title="XJj2PbenIsU">
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
            </div>
        </section>
        <section className="row_am features_section features-video" id="features">
            <div className="container">
                <div className="section_title" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100">
                <h2><span>Features</span> that makes app different!</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typese tting <br/> indus orem Ipsum has beenthe
                    standard dummy.</p>
                </div>
                <div className="feature_detail">
                <div className="left_data feature_box">
                    <div className="data_block block1" data-aos="fade-right" data-aos-duration="1500">
                    <div className="icon">
                        <img src="assets/images/secure.png" alt="image" />
                    </div>
                    <div className="text">
                        <h4>Secure data</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and type setting indus ideas.</p>
                    </div>
                    </div>

                    <div className="data_block block2" data-aos="fade-right" data-aos-duration="1500">
                    <div className="icon">
                        <img src="assets/images/step2.png" alt="image" />
                    </div>
                    <div className="text">
                        <h4>Fully functional</h4>
                        <p>Simply dummy text of the printing and typesetting indus lorem Ipsum is dummy.</p>
                    </div>
                    </div>
                </div>

                <div className="right_data feature_box">
                    <div className="data_block block3" data-aos="fade-left" data-aos-duration="1500">
                    <div className="icon">
                        <img src="assets/images/step3.png" alt="image" />
                    </div>
                    <div className="text">
                        <h4>Live chat</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and type setting indus ideas.</p>
                    </div>
                    </div>

                    <div className="data_block block4" data-aos="fade-left" data-aos-duration="1500">
                    <div className="icon">
                        <img src="assets/images/abt_support.png" alt="image" />
                    </div>
                    <div className="text">
                        <h4>24-7 Support</h4>
                        <p>Simply dummy text of the printing and typesetting indus lorem Ipsum is dummy.</p>
                    </div>
                    </div>

                </div>
                <div className="feature_img" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100">
                    <img src="assets/images/features_frame.png" alt="image" />
                </div>
                </div>
            </div>
        </section>
        <AboutApp video = {true} />
        <Design />
        <section className="row_am how_it_works video-work-two" id="how_it_work">
            <div className="container">
                <div className="how_it_inner">
                    <div className="section_title" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
                        <h2>How it works - 3 easy steps</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typese tting <br/> indus orem Ipsum has beenthe
                        standard dummy.</p>
                    </div>
                    <div className="step_block">
                        <div className="row ">
                            <div className="col-md-4 col-sm-12">
                                <div className="step_box">
                                    <div className="step_img" data-aos="fade-left" data-aos-duration="1500">
                                    <img src="assets/images/step1.png" alt="image"/>
                                    <div className="step_number">
                                    <h3>01</h3>
                                    </div>
                                    </div>
                                    <div className="step_text" data-aos="fade-right" data-aos-duration="1500">
                                    <h4>Download app</h4>
                                    <div className="app_icon">
                                        <Link to="#"><i className="icofont-brand-android-robot"></i></Link>
                                        <Link to="#"><i className="icofont-brand-apple"></i></Link>
                                        <Link to="#"><i className="icofont-brand-windows"></i></Link>
                                    </div>
                                    <p>Download App either for Windows, Mac or Android</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-12">
                                <div className="step_box">
                                    <div className="step_img" data-aos="fade-left" data-aos-duration="1500">
                                    <img src="assets/images/step2.png" alt="image" />
                                    <div className="step_number">
                                    <h3>02</h3>
                                    </div>
                                    </div>
                                    <div className="step_text step2" data-aos="fade-right" data-aos-duration="1500">
                                    <h4>Create account</h4>
                                    <span>14 days free trial</span>
                                    <p>Sign up free for App account. One account for all devices.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-sm-12">
                                <div className="step_box">
                                    <div className="step_img" data-aos="fade-left" data-aos-duration="1500">
                                    <img src="assets/images/step3.png" alt="image" />
                                    <div className="step_number">
                                    <h3>03</h3>
                                    </div>
                                    </div>
                                    <div className="step_text step3" data-aos="fade-right" data-aos-duration="1500">
                                    <h4>It’s done, enjoy the app</h4>
                                    <span>Have any questions check our FAQs</span>
                                    <p>Get most amazing app experience, Explore and share the app</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <Testimonial />
        <Trusted />
        <Pricing video = {true}/>
        <Faq/>
        <Interface/>
        <Download />
        <Story/>
        {ytShow &&
        <>
        <div className="modal fade youtube-video show" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-modal="true" style={{paddingRight: "17px", display: "block"}}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <button id="close-video" type="button" className="button btn btn-default text-right" data-dismiss="modal">
                    <i className="icofont-close-line-circled" onClick={() => setytShow(false)}></i>
                </button>
                    <div className="modal-body">
                        <div id="video-container" className="video-container">
                            <iframe id="youtubevideo" src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&amp;mute=1" width="640" height="360" frameBorder="0" allowFullScreen=""></iframe>
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