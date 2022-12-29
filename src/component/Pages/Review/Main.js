import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import Bredcrumb from '../../Bredcrumb/Main'
import BGImg from "../../../assets/images/bread_crumb_bg.png"
import BGImg1 from "../../../assets/images/bread_crumb_bg_one.png"
import BGImg2 from "../../../assets/images/bread_crumb_bg_two.png"

const Main = ({brdcum}) => {

  return (
    <>
        {brdcum.b1 && 
        <Bredcrumb 
        no={1}
        title="Reviews" 
        paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting"
        tag="Reviews" 
        bgimg={BGImg}/>}

        {brdcum.b2 && 
        <Bredcrumb 
        no={2}
        title="Reviews" 
        paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting"
        tag="Reviews" 
        bgimg={BGImg1}/>}

        {brdcum.b5 && 
        <Bredcrumb 
        no={5}
        title="Reviews" 
        paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting"
        tag="Reviews" 
        bgimg={BGImg}/>}

        {brdcum.b3 && 
        <Bredcrumb 
        no={3}
        title="Reviews" 
        paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting"
        tag="Reviews" 
        bgimg={BGImg2}/>}

        {brdcum.b4 && 
        <Bredcrumb 
        no={4}
        title="Reviews" 
        paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting"
        tag="Reviews" 
        bgimg={BGImg2}/>}   

        <section className="row_am review_list_section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="review_box">
                            <div className="rating">
                                <ul>
                                <li><span><i className="icofont-star"></i></span></li>
                                <li><span><i className="icofont-star"></i></span></li>
                                <li><span><i className="icofont-star"></i></span></li>
                                <li><span><i className="icofont-star"></i></span></li>
                                <li><span><i className="icofont-star"></i></span></li>
                                </ul>
                            </div>
                            <h3>App working smoothly fast</h3>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting ndus
                                try lorem Ipsum hasbeen the trysan
                                dard dummy text here.
                            </p>
                            <div className="reviewer">
                                <div className="avtar">
                                    <img src="assets/images/review_01.png" alt="image"/>
                                </div>
                                <div className="text">
                                    <h3>Shayna John</h3>
                                    <span>Careative inc</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="review_box">
                            <div className="rating">
                                <ul>
                                <li><span><i className="icofont-star"></i></span></li>
                                <li><span><i className="icofont-star"></i></span></li>
                                <li><span><i className="icofont-star"></i></span></li>
                                <li><span><i className="icofont-star"></i></span></li>
                                <li><span><i className="icofont-star"></i></span></li>
                                </ul>
                            </div>
                            <h3>UI and UX is excellence !</h3>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting ndus
                                try lorem Ipsum hasbeen the trysan
                                dard dummy text here.
                            </p>
                            <div className="reviewer">
                                <div className="avtar">
                                    <img src="assets/images/review_02.png" alt="image"/>
                                </div>
                                <div className="text">
                                    <h3>Jolly Shie</h3>
                                    <span>CEO - abc agency</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="review_box">
                            <div className="rating">
                                <ul>
                                <li><span><i className="icofont-star"></i></span></li>
                                <li><span><i className="icofont-star"></i></span></li>
                                <li><span><i className="icofont-star"></i></span></li>
                                <li><span><i className="icofont-star"></i></span></li>
                                <li><span><i className="icofont-star"></i></span></li>
                                </ul>
                            </div>
                            <h3>Service support on time.</h3>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting ndus
                                try lorem Ipsum hasbeen the trysan
                                dard dummy text here.
                            </p>
                            <div className="reviewer">
                                <div className="avtar">
                                    <img src="assets/images/review_03.png" alt="image"/>
                                </div>
                                <div className="text">
                                    <h3>Steve Joe</h3>
                                    <span>Vybo Creative</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="review_box">
                            <div className="rating">
                                <ul>
                                <li><span><i className="icofont-star"></i></span></li>
                                <li><span><i className="icofont-star"></i></span></li>
                                <li><span><i className="icofont-star"></i></span></li>
                                <li><span><i className="icofont-star"></i></span></li>
                                <li><span><i className="icofont-star"></i></span></li>
                                </ul>
                            </div>
                            <h3>Easy documentation.</h3>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting ndus
                                try lorem Ipsum hasbeen the trysan
                                dard dummy text here.
                            </p>
                            <div className="reviewer">
                                <div className="avtar">
                                    <img src="assets/images/review_04.png" alt="image"/>
                                </div>
                                <div className="text">
                                    <h3>Shayna John</h3>
                                    <span>Careative inc</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="review_box">
                            <div className="rating">
                                <ul>
                                <li><span><i className="icofont-star"></i></span></li>
                                <li><span><i className="icofont-star"></i></span></li>
                                <li><span><i className="icofont-star"></i></span></li>
                                <li><span><i className="icofont-star"></i></span></li>
                                <li><span><i className="icofont-star"></i></span></li>
                                </ul>
                            </div>
                            <h3>UI and UX is excellence !</h3>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting ndus
                                try lorem Ipsum hasbeen the trysan
                                dard dummy text here.
                            </p>
                            <div className="reviewer">
                                <div className="avtar">
                                    <img src="assets/images/review_05.png" alt="image"/>
                                </div>
                                <div className="text">
                                    <h3>Jolly Shie</h3>
                                    <span>CEO - abc agency</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="review_box">
                            <div className="rating">
                                <ul>
                                <li><span><i className="icofont-star"></i></span></li>
                                <li><span><i className="icofont-star"></i></span></li>
                                <li><span><i className="icofont-star"></i></span></li>
                                <li><span><i className="icofont-star"></i></span></li>
                                <li><span><i className="icofont-star"></i></span></li>
                                </ul>
                            </div>
                            <h3>Service support on time.</h3>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting ndus
                                try lorem Ipsum hasbeen the trysan
                                dard dummy text here.
                            </p>
                            <div className="reviewer">
                                <div className="avtar">
                                    <img src="assets/images/review_06.png" alt="image"/>
                                </div>
                                <div className="text">
                                    <h3>Steve Joe</h3>
                                    <span>Vybo Creative</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="review_box">
                            <div className="rating">
                                <ul>
                                <li><span><i className="icofont-star"></i></span></li>
                                <li><span><i className="icofont-star"></i></span></li>
                                <li><span><i className="icofont-star"></i></span></li>
                                <li><span><i className="icofont-star"></i></span></li>
                                <li><span><i className="icofont-star"></i></span></li>
                                </ul>
                            </div>
                            <h3>App working smoothly fast</h3>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting ndus
                                try lorem Ipsum hasbeen the trysan
                                dard dummy text here.
                            </p>
                            <div className="reviewer">
                                <div className="avtar">
                                    <img src="assets/images/review_07.png" alt="image"/>
                                </div>
                                <div className="text">
                                    <h3>Shayna John</h3>
                                    <span>Careative inc</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="review_box">
                            <div className="rating">
                                <ul>
                                <li><span><i className="icofont-star"></i></span></li>
                                <li><span><i className="icofont-star"></i></span></li>
                                <li><span><i className="icofont-star"></i></span></li>
                                <li><span><i className="icofont-star"></i></span></li>
                                <li><span><i className="icofont-star"></i></span></li>
                                </ul>
                            </div>
                            <h3>UI and UX is excellence !</h3>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting ndus
                                try lorem Ipsum hasbeen the trysan
                                dard dummy text here.
                            </p>
                            <div className="reviewer">
                                <div className="avtar">
                                    <img src="assets/images/review_08.png" alt="image"/>
                                </div>
                                <div className="text">
                                    <h3>Jolly Shie</h3>
                                    <span>CEO - abc agency</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="review_box">
                            <div className="rating">
                                <ul>
                                <li><span><i className="icofont-star"></i></span></li>
                                <li><span><i className="icofont-star"></i></span></li>
                                <li><span><i className="icofont-star"></i></span></li>
                                <li><span><i className="icofont-star"></i></span></li>
                                <li><span><i className="icofont-star"></i></span></li>
                                </ul>
                            </div>
                            <h3>Service support on time.</h3>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting ndus
                                try lorem Ipsum hasbeen the trysan
                                dard dummy text here.
                            </p>
                            <div className="reviewer">
                                <div className="avtar">
                                    <img src="assets/images/review_09.png" alt="image"/>
                                </div>
                                <div className="text">
                                    <h3>Steve Joe</h3>
                                    <span>Vybo Creative</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="row_am free_app_section review_freeapp" id="getstarted">
            <div className="container">
                <div className="free_app_inner aos-init" data-aos="fade-in" data-aos-duration="1500" data-aos-delay="100"> 
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
                    <div className="row">
                        <div className="col-md-6">
                            <div className="free_text">
                                <div className="section_title">
                                    <h2>Let’s download free from apple and play store</h2>
                                    <p>Instant free download from apple and play store orem Ipsum is simply dummy text of the printing.
                                    and typese tting indus orem Ipsum has beenthe standard</p>
                                </div>
                                <ul className="app_btn">
                                <li>
                                    <Link to="#">
                                    <img src="assets/images/appstore_blue.png" alt="image" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                    <img src="assets/images/googleplay_blue.png" alt="image" />
                                    </Link>
                                </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="free_img">
                                <img src="assets/images/download-screen01.png" alt="image" />
                                <img className="mobile_mockup" src="assets/images/download-screen02.png" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Main