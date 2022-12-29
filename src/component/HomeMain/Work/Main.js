import React , {useState} from 'react'
import { Link } from 'react-router-dom'
import img from '../../../assets/images/download_app.jpg'
import img1 from '../../../assets/images/create_account.jpg'
import img2 from '../../../assets/images/enjoy_app.jpg'
import line from '../../../assets/images/anim_line.png'
import banner from '../../../assets/images/banner-shape1.png'
import banner1 from '../../../assets/images/banner-shape2.png'
import banner2 from '../../../assets/images/banner-shape3.png'
import video from '../../../assets/images/play_icon.png'
import ytvideo from '../../../assets/images/yt_thumb.png'

const Main = ({dark}) => {
    const [ytShow , setytShow] = useState (false)

  return (
    <>
        <section className="row_am how_it_works" id="how_it_work">
            <div className="container">
                <div className={`how_it_inner ${dark && "dark"}`}>
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
                                    <Link to="#"><i className="icofont-brand-android-robot"></i></Link>
                                    <Link to="#"><i className="icofont-brand-apple"></i></Link>
                                    <Link to="#"><i className="icofont-brand-windows"></i></Link>
                                </div>
                                <p>Download App either for Windows, Mac or Android</p>
                                </div>
                                <div className="step_number">
                                <h3>01</h3>
                                </div>
                                <div className="step_img" data-aos="fade-left" data-aos-duration="1500">
                                <img src={img} alt="image" />
                                </div>
                            </li>
                            <li>
                                <div className="step_text" data-aos="fade-left" data-aos-duration="1500">
                                <h4>Create account</h4>
                                <span>14 days free trial</span>
                                <p>Sign up free for App account. One account for all devices.</p>
                                </div>
                                <div className="step_number"> 
                                <h3>02</h3>
                                </div>
                                <div className="step_img" data-aos="fade-right" data-aos-duration="1500">
                                <img src={img1} alt="image" />
                                </div>
                            </li>
                            <li>
                                <div className="step_text" data-aos="fade-right" data-aos-duration="1500">
                                <h4>It’s done, enjoy the app</h4>
                                <span>Have any questions check our <Link to="#">FAQs</Link></span>
                                <p>Get most amazing app experience,Explore and share the app</p>
                                </div>
                                <div className="step_number">
                                <h3>03</h3>
                                </div>
                                <div className="step_img" data-aos="fade-left" data-aos-duration="1500">
                                <img src={img2} alt="image" />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                
                {dark ?
                <div className="yt_video" style={{display: "none"}} data-aos="fade-in" data-aos-duration="1500">
                    <div className="anim_line dark_bg">
                        
                        <span><img src="assets/images/anim_line.png" alt="anim_line" /></span>
                        <span><img src="assets/images/anim_line.png" alt="anim_line" /></span>
                        <span><img src="assets/images/anim_line.png" alt="anim_line" /></span>
                        <span><img src="assets/images/anim_line.png" alt="anim_line" /></span>
                        <span><img src="assets/images/anim_line.png" alt="anim_line" /></span>
                        <span><img src="assets/images/anim_line.png" alt="anim_line" /></span>
                        <span><img src="assets/images/anim_line.png" alt="anim_line" /></span>
                        <span><img src="assets/images/anim_line.png" alt="anim_line" /></span>
                        <span><img src="assets/images/anim_line.png" alt="anim_line" /></span>
                    </div>
                    <div className="thumbnil">
                         
                        <span className="banner_shape1"> <img src="assets/images/banner-shape1.png" alt="image"/> </span>
                        <span className="banner_shape2"> <img src="assets/images/banner-shape2.png" alt="image"/> </span>
                        <span className="banner_shape3"> <img src="assets/images/banner-shape3.png" alt="image"/> </span>
                        <img src="assets/images/yt_thumb.png" alt="image" />
                        <Link to="#" className="popup-youtube play-button" data-url="#" onClick={() => setytShow(true)} data-toggle="modal" data-target="#myModal" title="XJj2PbenIsU">
                        <span className="play_btn">
                            <img src={video} alt="image" />
                            <div className="waves-block">
                            <div className="waves wave-1"></div>
                            <div className="waves wave-2"></div>
                            <div className="waves wave-3"></div>
                            </div>
                        </span>
                        Let’s see virtually how it works
                        <span>Watch video</span>
                        </Link>
                    </div>
                </div> :
                <div className="yt_video" data-aos="fade-in" data-aos-duration="1500">
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
                    <div className="thumbnil">
                        <span className="banner_shape1"> <img src={banner} alt="image"/> </span>
                        <span className="banner_shape2"> <img src={banner1} alt="image"/> </span>
                        <span className="banner_shape3"> <img src={banner2} alt="image"/> </span>
                        <img src={ytvideo} alt="image" />
                        <Link to="#" className="popup-youtube play-button" data-url="#" onClick={() => setytShow(true)} data-toggle="modal" data-target="#myModal" title="XJj2PbenIsU">
                        <span className="play_btn">
                            <img src={video} alt="image" />
                            <div className="waves-block">
                            <div className="waves wave-1"></div>
                            <div className="waves wave-2"></div>
                            <div className="waves wave-3"></div>
                            </div>
                        </span>
                        Let’s see virtually how it works
                        <span>Watch video</span>
                        </Link>
                    </div>
                </div>}
            </div>
        </section>
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