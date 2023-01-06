import React , { useEffect ,useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import AOS from "aos";
import AboutApp from '../HomeMain/AboutApp/Main'
//import AboutUs from '../AboutUs/Main'
import Design from '../HomeMain/Design/Main'
import Testimonial from '../HomeMain/Testimonial/Main'
import Pricing from '../HomeMain/Pricing/Main'
import Faq from '../HomeMain/Faq/Main'
import Interface from '../HomeMain/Interface/Main'
import Download from '../HomeMain/Download/Main'
import Story from '../HomeMain/Story/Main'
import Trusted from '../HomeMain/Trusted/Main'
import getConfig from "../Config/config"

const Main = ({setnavbar,setfooter}) => {
    var site = getConfig()[0];
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
                        <h1>ELECTRIC FLEET CONVERSION <span>PLATFORM</span></h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and setting indus orem Ipsum has been the industrys.
                        </p>
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

        {/*<section className="row_am features_section features-gredient" id="features">*/}
        {/*    <div className="feature_section_bg"> <img src="assets/images/section-bg.png" alt="image" /> </div>*/}
        {/*    <div className="container">*/}
        {/*        <div className="features_inner">*/}
        {/*            <div className="feature_img" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100">*/}
        {/*                <img src="assets/images/device-feature.png" alt="image" />*/}
        {/*            </div>*/}
        {/*            <div className="section_title" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">*/}
        {/*                <h2><span>Features</span> that makes app different!</h2>*/}
        {/*                <p>Lorem Ipsum is simply dummy text of the printing and typese tting <br/> indus orem Ipsum has beenthe standard dummy.</p>*/}
        {/*            </div>*/}
        {/*            <div className="features_block">*/}
        {/*                <div className="row">*/}
        {/*                <div className="col-md-3">*/}
        {/*                    <div className="feature_box" data-aos="fade-up" data-aos-duration="1500">*/}
        {/*                        <div className="image">*/}
        {/*                        <img src="assets/images/secure.png" alt="image" />*/}
        {/*                        </div>*/}
        {/*                        <div className="text">*/}
        {/*                        <h4>Secure data</h4>*/}
        {/*                        <p>Lorem Ipsum is simply dummy text of the printing and type setting indus ideas.</p>*/}
        {/*                        </div>*/}
        {/*                    </div>*/}
        {/*                </div>*/}

        {/*                <div className="col-md-3">*/}
        {/*                    <div className="feature_box" data-aos="fade-up" data-aos-duration="1700">*/}
        {/*                        <div className="image">*/}
        {/*                        <img src="assets/images/abt_functional.png" alt="image" />*/}
        {/*                        </div>*/}
        {/*                        <div className="text">*/}
        {/*                        <h4>Automate everything</h4>*/}
        {/*                        <p>Simply dummy text of the printing and typesetting indus lorem Ipsum is dummy.</p>*/}
        {/*                        </div>*/}
        {/*                    </div>*/}
        {/*                </div>*/}

        {/*                <div className="col-md-3">*/}
        {/*                    <div className="feature_box" data-aos="fade-up" data-aos-duration="1900">*/}
        {/*                        <div className="image">*/}
        {/*                        <img src="assets/images/communication.png" alt="image" />*/}
        {/*                        </div>*/}
        {/*                        <div className="text">*/}
        {/*                        <h4>Secure data</h4>*/}
        {/*                        <p>Lorem Ipsum is simply dummy text of the printing and type setting indus ideas.</p>*/}
        {/*                        </div>*/}
        {/*                    </div>*/}
        {/*                </div>*/}

        {/*                <div className="col-md-3">*/}
        {/*                    <div className="feature_box" data-aos="fade-up" data-aos-duration="1900">*/}
        {/*                        <div className="image">*/}
        {/*                        <img src="assets/images/abt_support.png" alt="image" />*/}
        {/*                        </div>*/}
        {/*                        <div className="text">*/}
        {/*                        <h4>Secure data</h4>*/}
        {/*                        <p>Simply dummy text of the printing and typesetting indus lorem Ipsum is dummy.</p>*/}
        {/*                        </div>*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*            </div>*/}

        {/*            </div>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*</section>*/}
        < AboutApp />
        {/*< AboutUs />*/}
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
                                <a href={site.apple_app}><i className="icofont-brand-apple"></i></a>
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
                            {/*<span>14 days free trial</span>*/}
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

            </div>
        </section>
        {/*< Testimonial />*/}
        {/*< Pricing gredient = {true}/>*/}
        < Faq gredient = {true}/>
        {/*< Interface />*/}
        {/*< Download />*/}
        {/*< Story />*/}
        {/*< Trusted />*/}
    </>
  )
}

export default Main