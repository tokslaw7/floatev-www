import React, { useState , useEffect} from 'react'
import Trusted from '../HomeMain/Trusted/Main'
import { Link } from 'react-router-dom'
import Bredcrumb from '../Bredcrumb/Main'
import BGImg from "../../assets/images/bread_crumb_bg.png"
import BGImg1 from "../../assets/images/bread_crumb_bg_one.png"
import BGImg2 from "../../assets/images/bread_crumb_bg_two.png"

const About = {
    app_text: {
      top: {
        p1: "Our platform analyzes current fleet behavior and display areas for improvement on our custom customer dashboard.",
        p2: "Float saves their customers money from day one by analyzing their current fleet data on cost, emissions,time and resources and then makes recommendations on prioritization of vehicle replacements and infrastructure investments.",
      },
      bottom: {
        header:
          "Float's recommendation engine enables tracking of vehicle usage, ownership & service costs, fuel costs, emissions. Its Telematics IoT enabled OBD device & dashcam to connect directly to the vehicle to pull data.",
        p1: "Download",
        p2: "Followers",
        p3: "Reviews",
        p4: "Countries",
      },
    },
    why_text: {
      inner: {
        p1: "Lorem Ipsum is simply dummy text of the printing and typese tting ",
        p2: "indus orem Ipsum has beenthe standard dummy.",
      },
      why_box: {
        p1: "We provide immediate and longer term changes to improve fleet performance.",
        p2: "We integrate company data into Float recommendation engine to provide insights.",
        p3: "Our software takes you through the daily process of transitioning your fleet to Float.",
        p4: "We guide you step by step to convert to Electronic vehicles.",
      },
    },
    appQuery: {
      p1: "Lorem Ipsum is simply dummy text of the printing and typese tting ",
      p2: "indus orem Ipsum has beenthe standard dummy.",
    },
  };

const Main = ({brdcum}) => {
    const [ytShow , setytShow] = useState (false)

    const {app_text: {top, bottom}, why_text: {inner, why_box}, appQuery} = About

  return (
    <>       
       {brdcum.b1 && 
        <Bredcrumb 
        no={1}
        title="About Us" 
        tag="About us" 
        bgimg={BGImg}/>}

        {brdcum.b2 && 
        <Bredcrumb 
        no={2}
        title="About Us" 
        tag="About us" 
        bgimg={BGImg1}/>}

        {brdcum.b5 && 
        <Bredcrumb 
        no={5}
        title="About Us" 
        tag="About us" 
        bgimg={BGImg}/>}


        {brdcum.b3 && 
        <Bredcrumb 
        no={3}
        title="About Us" 
        tag="About us" />}

        {brdcum.b4 && 
        <Bredcrumb 
        no={4}
        title="About Us" 
        tag="About us" 
        bgimg={BGImg2}/>}

        <section className="row_am app_solution_section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="app_text">
                        <div className="section_title" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100">
                            <h2><span>Float analytical, recommendation</span> / rewards framework.</h2>
                        </div>
                        <p data-aos="fade-up" data-aos-duration="1500">
                            {top.p1}
                        </p>
                            <p data-aos="fade-up" data-aos-duration="1500">
                               {top.p2}
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="app_images" data-aos="fade-in" data-aos-duration="1500">
                        <ul>
                            <li><img src="assets/images/abt_01.png" alt="" /></li>
                            <li>
                            <a data-url="#" onClick = {() => setytShow(true)}  className="popup-youtube play-button"
                                data-toggle="modal"
                                data-target="#myModal" title="About Video">
                                <img src="assets/images/abt_02.png" alt="" />
                                <div className="waves-block">
                                <div className="waves wave-1"></div>
                                <div className="waves wave-2"></div>
                                <div className="waves wave-3"></div>
                                </div>
                                <span className="play_icon"><img src="assets/images/play_black.png" alt="image"/></span>
                            </a>
                            </li>
                            <li><img src="assets/images/abt_03.png" alt="" /></li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="row_am why_we_section" data-aos="fade-in">
            <div className="why_inner">
                <div className="container">
                <div className="section_title" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100">
                    <h2><span>No,we are not just </span> another EV!</h2>
                    <p>{inner.p1}<br />{inner.p2}</p>
                </div>
                <div className="row">
                    <div className="col-md-6 col-lg-3">
                    <div className="why_box" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100">
                        <div className="icon">
                        <img src="assets/images/secure.png" alt="image"/>
                        </div>
                        <div className="text">
                        <h3>Secure code</h3>
                        <p>{why_box.p1}</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                    <div className="why_box" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">
                        <div className="icon">
                        <img src="assets/images/abt_functional.png" alt="image"/>
                        </div>
                        <div className="text">
                        <h3>Fully functional</h3>
                        <p>{why_box.p2}</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                    <div className="why_box" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
                        <div className="icon">
                        <img src="assets/images/communication.png" alt="image"/>
                        </div>
                        <div className="text">
                        <h3>Best communication</h3>
                        <p>{why_box.p3}</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                    <div className="why_box" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="400">
                        <div className="icon">
                        <img src="assets/images/abt_support.png" alt="image"/>
                        </div>
                        <div className="text">
                        <h3>24-7 Support</h3>
                        <p>{why_box.p4}</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
        <section className="row_am about_app_section about_page_sectino">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="abt_img" data-aos="fade-in" data-aos-duration="1500">
                            <img src="assets/images/about_main.png" alt="image"/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about_text">
                        <div className="section_title" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100">
                            <h2> <span>FLOAT</span> EV</h2>
                            <p>
                                {bottom.header}
                            </p>
                        </div>
                        <ul className="app_statstic" id="counter" data-aos="fade-in" data-aos-duration="1500">
                            <li>
                            <div className="icon">
                                <img src="assets/images/download.png" alt="image" />
                            </div>
                            <div className="text">
                                <p><span className="counter-value" data-count="17">0</span><span>M+</span></p>
                                <p>{bottom.p1}</p>
                            </div>
                            </li>
                            <li>
                            <div className="icon">
                                <img src="assets/images/followers.png" alt="image" />
                            </div>
                            <div className="text">
                                <p><span className="counter-value" data-count="08">0 </span><span>M+</span></p>
                                <p>{bottom.p2}</p>
                            </div>
                            </li>
                            <li>
                            <div className="icon">
                                <img src="assets/images/reviews.png" alt="image" />
                            </div>
                            <div className="text">
                                <p><span className="counter-value" data-count="2300">1500</span><span>+</span></p>
                                <p>{bottom.p3}</p>
                            </div>
                            </li>
                            <li>
                            <div className="icon">
                                <img src="assets/images/countries.png" alt="image" />
                            </div>
                            <div className="text">
                                <p><span className="counter-value" data-count="150">0</span><span>+</span></p>
                                <p>{bottom.p4}</p>
                            </div>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*<section className="row_am experts_team_section">*/}
        {/*    <div className="container">*/}
        {/*        <div className="section_title" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100">*/}
        {/*            <h2> Meet our <span> experts </span></h2>*/}
        {/*            <p>*/}
        {/*                Lorem Ipsum is simply dummy text of the printing and typese tting <br/> indus orem Ipsum has beenthe standard dummy.*/}
        {/*            </p>*/}
        {/*        </div>*/}
        {/*        <div className="row">*/}
        {/*            <div className="col-md-6 col-lg-3"  data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100">*/}
        {/*                <div className="experts_box">*/}
        {/*                <img src="assets/images/experts_01.png" alt="image"/>*/}
        {/*                <div className="text">*/}
        {/*                    <h3>Steav Joe</h3>*/}
        {/*                    <span>CEO & Co-Founder</span>*/}
        {/*                    <ul className="social_media">*/}
        {/*                    <li><Link to="#"><i className="icofont-facebook"></i></Link></li>*/}
        {/*                    <li><Link to="#"><i className="icofont-twitter"></i></Link></li>*/}
        {/*                    <li><Link to="#"><i className="icofont-instagram"></i></Link></li>*/}
        {/*                    </ul>*/}
        {/*                </div>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*            <div className="col-md-6 col-lg-3"  data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">*/}
        {/*                <div className="experts_box">*/}
        {/*                <img src="assets/images/experts_02.png" alt="image"/>*/}
        {/*                <div className="text">*/}
        {/*                    <h3>Mark Dele</h3>*/}
        {/*                    <span>Co-Founder</span>*/}
        {/*                    <ul className="social_media">*/}
        {/*                    <li><Link to="#"><i className="icofont-facebook"></i></Link></li>*/}
        {/*                    <li><Link to="#"><i className="icofont-twitter"></i></Link></li>*/}
        {/*                    <li><Link to="#"><i className="icofont-instagram"></i></Link></li>*/}
        {/*                    </ul>*/}
        {/*                </div>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*            <div className="col-md-6 col-lg-3"  data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">*/}
        {/*                <div className="experts_box">*/}
        {/*                <img src="assets/images/experts_03.png" alt="image"/>*/}
        {/*                <div className="text">*/}
        {/*                    <h3>Jolley Sihe</h3>*/}
        {/*                    <span>Business Developer</span>*/}
        {/*                    <ul className="social_media">*/}
        {/*                    <li><Link to="#"><i className="icofont-facebook"></i></Link></li>*/}
        {/*                    <li><Link to="#"><i className="icofont-twitter"></i></Link></li>*/}
        {/*                    <li><Link to="#"><i className="icofont-instagram"></i></Link></li>*/}
        {/*                    </ul>*/}
        {/*                </div>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*            <div className="col-md-6 col-lg-3"  data-aos="fade-up" data-aos-duration="1500" data-aos-delay="400">*/}
        {/*                <div className="experts_box">*/}
        {/*                <img src="assets/images/experts_04.png" alt="image"/>*/}
        {/*                <div className="text">*/}
        {/*                    <h3>Rimy Nail</h3>*/}
        {/*                    <span>Marketing & Sales</span>*/}
        {/*                    <ul className="social_media">*/}
        {/*                    <li><Link to="#"><i className="icofont-facebook"></i></Link></li>*/}
        {/*                    <li><Link to="#"><i className="icofont-twitter"></i></Link></li>*/}
        {/*                    <li><Link to="#"><i className="icofont-instagram"></i></Link></li>*/}
        {/*                    </ul>*/}
        {/*                </div>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*</section>*/}
        <section className="row_am query_section">
            <div className="query_inner" data-aos="fade-in" data-aos-duration="1500">
                <div className="container">
                    <span className="banner_shape1"> <img src="assets/images/banner-shape1.png" alt="image" /> </span>
                    <span className="banner_shape2"> <img src="assets/images/banner-shape2.png" alt="image" /> </span>
                    <span className="banner_shape3"> <img src="assets/images/banner-shape3.png" alt="image" /> </span>
                
                    <div className="section_title">
                        <h2>Have any query about ?</h2>
                        <p>{appQuery.p1} <br/>{appQuery.p2}</p>
                    </div>
                    <Link to="/contact" className="btn white_btn">CONTACT US NOW</Link>
                </div>
            </div>
        </section>
        {/*<Trusted />*/}
        
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