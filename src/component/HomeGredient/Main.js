import React , { useEffect ,useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import AOS from "aos";
import AboutApp from '../HomeMain/AboutApp/Main'
import Design from '../HomeMain/Design/Main'
import Testimonial from '../HomeMain/Testimonial/Main'
import Pricing from '../HomeMain/Pricing/Main'
import Faq from '../HomeMain/Faq/Main'
import Interface from '../HomeMain/Interface/Main'
import Download from '../HomeMain/Download/Main'
import Story from '../HomeMain/Story/Main'
import Trusted from '../HomeMain/Trusted/Main'

const Main = ({setnavbar,setfooter}) => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

      useEffect(() => {
        setfooter({f3 : true})
        setnavbar({n5 : true})
        localStorage.setItem("navbar","homegredient")
  
      }, [])

  return (
    <>
        <section className="banner_section home-gredient">  
            <div className="hero_bg"> <img src="assets/images/hero-bg.png" alt="image" /> </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12"  data-aos="fade-right" data-aos-duration="1500">
                        <div className="banner_text">
                        <h1>Best way to <span>manage your customers.</span></h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and setting indus orem Ipsum has been the industrys.
                        </p>
                        </div>

                        <div className="trial_box">
                        <form action="" data-aos="fade-in" data-aos-duration="1500" data-aos-delay="100">
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Enter your email"/>
                            </div>
                            <div className="form-group">
                                <button className="btn">SUBMIT</button>
                            </div>
                        </form>
                    </div>
                    <div className="trial_box_list">
                        <ul>
                            <li><i className="icofont-check-circled"></i> Free trial 14 days</li>
                            <li><i className="icofont-check-circled"></i> No credit card require</li>
                        </ul>
                    </div>

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
                    <div className="col-lg-3 col-md-6"  data-aos="fade-in" data-aos-duration="1500">
                        <div className="banner_images image_box1">
                            <span className="banner_image1"> <img className="moving_position_animatin" src="assets/images/bannerimage1.png" alt="image" /> </span>
                            <span className="banner_image2"> <img className="moving_animation" src="assets/images/bannerimage2.png" alt="image" /> </span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6"  data-aos="fade-in" data-aos-duration="1500">
                        <div className="banner_images image_box2">
                            <span className="banner_image3"> <img className="moving_animation" src="assets/images/bannerimage3.png" alt="image" /> </span>
                            <span className="banner_image4"> <img className="moving_position_animatin" src="assets/images/bannerimage4.png" alt="image" /> </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="row_am features_section features-gredient" id="features">
            <div className="feature_section_bg"> <img src="assets/images/section-bg.png" alt="image" /> </div>
            <div className="container">
                <div className="features_inner">
                    <div className="feature_img" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100">
                        <img src="assets/images/device-feature.png" alt="image" />
                    </div>
                    <div className="section_title" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
                        <h2><span>Features</span> that makes app different!</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typese tting <br/> indus orem Ipsum has beenthe standard dummy.</p>
                    </div>
                    <div className="features_block">
                        <div className="row">
                        <div className="col-md-3">
                            <div className="feature_box" data-aos="fade-up" data-aos-duration="1500">
                                <div className="image">
                                <img src="assets/images/secure.png" alt="image" />
                                </div>
                                <div className="text">
                                <h4>Secure data</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and type setting indus ideas.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="feature_box" data-aos="fade-up" data-aos-duration="1700">
                                <div className="image">
                                <img src="assets/images/abt_functional.png" alt="image" />
                                </div>
                                <div className="text">
                                <h4>Automate everything</h4>
                                <p>Simply dummy text of the printing and typesetting indus lorem Ipsum is dummy.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="feature_box" data-aos="fade-up" data-aos-duration="1900">
                                <div className="image">
                                <img src="assets/images/communication.png" alt="image" />
                                </div>
                                <div className="text">
                                <h4>Secure data</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and type setting indus ideas.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="feature_box" data-aos="fade-up" data-aos-duration="1900">
                                <div className="image">
                                <img src="assets/images/abt_support.png" alt="image" />
                                </div>
                                <div className="text">
                                <h4>Secure data</h4>
                                <p>Simply dummy text of the printing and typesetting indus lorem Ipsum is dummy.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    </div>
                </div>
            </div>
        </section>
        < AboutApp />
        < Design gredient = {true} />
        <section className="row_am how_it_works gredient-work" id="how_it_work">
            <div className="how_section_bg"> <img src="assets/images/section-bg.png" alt="image" /> </div>
            <div className="container">
                <div className="how_it_inner">
                    <div className="section_title" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
                        <h2><span>How it works</span> - 3 easy steps</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typese tting <br/> indus orem Ipsum has beenthe
                        standard dummy.</p>
                    </div>
                    <div className="step_block">
                        <ul>
                        <li>
                            <div className="step_text" data-aos="fade-right" data-aos-duration="1500">
                            <h4>Download app</h4>
                            <div className="app_icon">
                                <a href="#"><i className="icofont-brand-android-robot"></i></a>
                                <a href="#"><i className="icofont-brand-apple"></i></a>
                                <a href="#"><i className="icofont-brand-windows"></i></a>
                            </div>
                            <p>Download App either for Windows, Mac or Android</p>
                            </div>
                            <div className="step_number number1">
                            <h3>01</h3>
                            </div>
                            <div className="step_img" data-aos="fade-left" data-aos-duration="1500">
                            <img src="assets/images/download_app.jpg" alt="image" />
                            </div>
                        </li>

                        <li>
                            <div className="step_text" data-aos="fade-left" data-aos-duration="1500">
                            <h4>Create account</h4>
                            <span>14 days free trial</span>
                            <p>Sign up free for App account. One account for all devices.</p>
                            </div>
                            <div className="step_number number2"> 
                            <h3>02</h3>
                            </div>
                            <div className="step_img" data-aos="fade-right" data-aos-duration="1500">
                            <img src="assets/images/create_account.jpg" alt="image" />
                            </div>
                        </li>

                        <li>
                            <div className="step_text" data-aos="fade-right" data-aos-duration="1500">
                            <h4>It’s done, enjoy the app</h4>
                            <span>Have any questions check our <a href="#">FAQs</a></span>
                            <p>Get most amazing app experience,Explore and share the app</p>
                            </div>
                            <div className="step_number number3">
                            <h3>03</h3>
                            </div>
                            <div className="step_img" data-aos="fade-left" data-aos-duration="1500">
                            <img src="assets/images/enjoy_app.jpg" alt="image" />
                            </div>
                        </li>
                        </ul>
                    </div>
                </div>

                <div className="yt_video" data-aos="fade-in" data-aos-duration="1500">
                    <div className="thumbnil">
                        <img src="assets/images/yt_thumb.png" alt="image" />
                        <a className="popup-youtube play-button" data-url="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1" data-toggle="modal" data-target="#myModal" title="XJj2PbenIsU">
                        <span className="play_btn">
                            <img src="assets/images/play_icon.png" alt="image" />
                            <div className="waves-block">
                            <div className="waves wave-1"></div>
                            <div className="waves wave-2"></div>
                            <div className="waves wave-3"></div>
                            </div>
                        </span>
                        Let’s see virtually how it works
                        <span>Watch video</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        < Testimonial />
        < Pricing gredient = {true}/>
        < Faq gredient = {true}/>
        < Interface />
        < Download />
        < Story />
        < Trusted />
    </>
  )
}

export default Main