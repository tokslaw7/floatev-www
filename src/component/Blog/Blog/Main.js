import React from 'react'
import { Link } from 'react-router-dom'
import BGImg from "../../../assets/images/bread_crumb_bg.png"
import BGImg1 from "../../../assets/images/bread_crumb_bg_one.png"
import BGImg2 from "../../../assets/images/bread_crumb_bg_two.png"

const Main = ({brdcum,bgimg}) => {
  return (
    <>
        {brdcum.b1 && 
        <div className="bred_crumb" style={{ backgroundImage : `url(${BGImg})`}}>
            <div className="container">
                <span className="banner_shape1"> <img src="assets/images/banner-shape1.png" alt="image" /> </span>
                <span className="banner_shape2"> <img src="assets/images/banner-shape2.png" alt="image" /> </span>
                <span className="banner_shape3"> <img src="assets/images/banner-shape3.png" alt="image" /> </span>

                <div className="bred_text">
                <h1>Latest blog post</h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><span>»</span></li>
                    <li><Link to="/blog">Blog list</Link></li>
                </ul>
                <div className="search_bar">
                    <form action="">
                        <div className="form-group">
                            <input type="text" placeholder="Search here" className="form-control"/>
                            <button className="btn" type="submit"><i className="icofont-search-1"></i></button>
                        </div>
                    </form>
                </div>
                </div>
            </div>
        </div>}

        {brdcum.b2 && 
        <div className="bred_crumb" style={{ backgroundImage : `url(${BGImg1})`}}>
            <div className="container">
                <span className="banner_shape1"> <img src="assets/images/banner-shape1.png" alt="image" /> </span>
                <span className="banner_shape2"> <img src="assets/images/banner-shape2.png" alt="image" /> </span>
                <span className="banner_shape3"> <img src="assets/images/banner-shape3.png" alt="image" /> </span>

                <div className="bred_text">
                <h1>Latest blog post</h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><span>»</span></li>
                    <li><Link to="/blog">Blog list</Link></li>
                </ul>
                <div className="search_bar">
                    <form action="">
                        <div className="form-group">
                            <input type="text" placeholder="Search here" className="form-control"/>
                            <button className="btn" type="submit"><i className="icofont-search-1"></i></button>
                        </div>
                    </form>
                </div>
                </div>
            </div>
        </div>}

        {brdcum.b5 && 
        <div className="bred_crumb" style={{ backgroundImage : `url(${BGImg})`}}>
            <div className="container">
                <span className="banner_shape1"> <img src="assets/images/banner-shape1.png" alt="image" /> </span>
                <span className="banner_shape2"> <img src="assets/images/banner-shape2.png" alt="image" /> </span>
                <span className="banner_shape3"> <img src="assets/images/banner-shape3.png" alt="image" /> </span>

                <div className="bred_text">
                <h1>Latest blog post</h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><span>»</span></li>
                    <li><Link to="/blog">Blog list</Link></li>
                </ul>
                <div className="search_bar">
                    <form action="">
                        <div className="form-group">
                            <input type="text" placeholder="Search here" className="form-control"/>
                            <button className="btn" type="submit"><i className="icofont-search-1"></i></button>
                        </div>
                    </form>
                </div>
                </div>
            </div>
        </div>}

        {brdcum.b3 && 
        <div className="bred_crumb  gredient-bg">
            <div className="container">
                <span className="banner_shape1"> <img src="assets/images/banner-shapev.png" alt="image" /> </span>
                <span className="banner_shape2"> <img src="assets/images/banner-shapev2.png" alt="image" /> </span>
                <span className="banner_shape3"> <img src="assets/images/banner-shapev3.png" alt="image" /> </span>

                <div className="bred_text">
                <h1>Latest blog post</h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><span>»</span></li>
                    <li><Link to="/blog">Blog list</Link></li>
                </ul>
                <div className="search_bar">
                    <form action="">
                        <div className="form-group">
                            <input type="text" placeholder="Search here" className="form-control"/>
                            <button className="btn" type="submit"><i className="icofont-search-1"></i></button>
                        </div>
                    </form>
                </div>
                </div>
            </div>
        </div>}

        {brdcum.b4 && 
        <div className="bred_crumb video" style={{ backgroundImage : `url(${BGImg2})`}}>
            <div className="container">
                <span className="banner_shape1"> <img src="assets/images/banner-shape1.png" alt="image" /> </span>
                <span className="banner_shape2"> <img src="assets/images/banner-shape2.png" alt="image" /> </span>
                <span className="banner_shape3"> <img src="assets/images/banner-shape3.png" alt="image" /> </span>

                <div className="bred_text">
                <h1>Latest blog post</h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><span>»</span></li>
                    <li><Link to="/blog">Blog list</Link></li>
                </ul>
                <div className="search_bar">
                    <form action="">
                        <div className="form-group">
                            <input type="text" placeholder="Search here" className="form-control"/>
                            <button className="btn" type="submit"><i className="icofont-search-1"></i></button>
                        </div>
                    </form>
                </div>
                </div>
            </div>
        </div>}

        <section className="row_am blog_list_main">
            <div className="container">
                <div className="row">
                <div className="col-lg-6" data-aos="fade-in" data-aos-duration="1500">
                    <div className="blog_img">
                        <img src="assets/images/blod-detail.png" alt="image"/>
                        <span>20 min ago</span>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="blog_text">
                        <span className="choice_badge">EDITOR CHOICE</span>
                        <div className="section_title">
                        <h2>Top rated app of the year!</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting in
                            dustry lorem Ipsum has been the industrys standard dummy text ev
                            er since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                            <Link to="/blog-single">READ MORE</Link>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
        <section className="row_am latest_story blog_list_story" id="blog">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="story_box" data-aos="fade-up" data-aos-duration="1500">
                            <div className="story_img">
                            <img src="assets/images/story01.png" alt="image" />
                            <span>45 min ago</span>
                            </div>
                            <div className="story_text">
                                <h3>Cool features added!</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting 
                                industry lorem Ipsum has.</p>
                                <Link to="/blog-single">READ MORE</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="story_box" data-aos="fade-up" data-aos-duration="1500">
                            <div className="story_img">
                            <img src="assets/images/story02.png" alt="image" />
                            <span>45 min ago</span>
                            </div>
                            <div className="story_text">
                                <h3>Top rated app! Yupp.</h3>
                                <p>Simply dummy text of the printing and typesetting industry lorem Ipsum has Lorem Ipsum is.</p>
                                <Link to="/blog-single">READ MORE</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="story_box" data-aos="fade-up" data-aos-duration="1500">
                            <div className="story_img">
                            <img src="assets/images/story03.png" alt="image" />
                            <span>45 min ago</span>
                            </div>
                            <div className="story_text">
                                <h3>Creative ideas on app.</h3>
                                <p>Printing and typesetting industry lorem Ipsum has Lorem simply dummy text of the.</p>
                                <Link to="/blog-single">READ MORE</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="story_box" data-aos="fade-up" data-aos-duration="1500">
                            <div className="story_img">
                            <img src="assets/images/story04.png" alt="image" />
                            <span>45 min ago</span>
                            </div>
                            <div className="story_text">
                                <h3>Excellence UI design</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting 
                                industry lorem Ipsum has.</p>
                                <Link to="/blog-single">READ MORE</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="story_box" data-aos="fade-up" data-aos-duration="1500">
                            <div className="story_img">
                            <img src="assets/images/story05.png" alt="image"/>
                            <span>45 min ago</span>
                            </div>
                            <div className="story_text">
                                <h3>Quick and easy Search</h3>
                                <p>Simply dummy text of the printing and typesetting industry lorem Ipsum has Lorem Ipsum is.</p>
                                <Link to="/blog-single">READ MORE</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="story_box" data-aos="fade-up" data-aos-duration="1500">
                            <div className="story_img">
                            <img src="assets/images/story06.png" alt="image" />
                            <span>45 min ago</span>
                            </div>
                            <div className="story_text">
                                <h3>Chat function eded</h3>
                                <p>Printing and typesetting industry lorem Ipsum has Lorem simply dummy text of the.</p>
                                <Link to="/blog-single">READ MORE</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="story_box" data-aos="fade-up" data-aos-duration="1500">
                            <div className="story_img">
                            <img src="assets/images/story07.png" alt="image" />
                            <span>45 min ago</span>
                            </div>
                            <div className="story_text">
                                <h3>Cool features added!</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting 
                                industry lorem Ipsum has.</p>
                                <Link to="/blog-single">READ MORE</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="story_box" data-aos="fade-up" data-aos-duration="1500">
                            <div className="story_img">
                            <img src="assets/images/story08.png" alt="image" />
                            <span>45 min ago</span>
                            </div>
                            <div className="story_text">
                                <h3>Top rated app! Yupp.</h3>
                                <p>Simply dummy text of the printing and typesetting industry lorem Ipsum has Lorem Ipsum is.</p>
                                <Link to="/blog-single">READ MORE</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="story_box" data-aos="fade-up" data-aos-duration="1500">
                            <div className="story_img">
                            <img src="assets/images/story09.png" alt="image" />
                            <span>45 min ago</span>
                            </div>
                            <div className="story_text">
                                <h3>Creative ideas on app.</h3>
                                <p>Printing and typesetting industry lorem Ipsum has Lorem simply dummy text of the.</p>
                                <Link to="/blog-single">READ MORE</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="story_box" data-aos="fade-up" data-aos-duration="1500">
                            <div className="story_img">
                            <img src="assets/images/story01.png" alt="image" />
                            <span>45 min ago</span>
                            </div>
                            <div className="story_text">
                                <h3>Excellence UI design</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting 
                                industry lorem Ipsum has.</p>
                                <Link to="/blog-single">READ MORE</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="story_box" data-aos="fade-up" data-aos-duration="1500">
                            <div className="story_img">
                            <img src="assets/images/story02.png" alt="image" />
                            <span>45 min ago</span>
                            </div>
                            <div className="story_text">
                                <h3>Quick and easy Search</h3>
                                <p>Simply dummy text of the printing and typesetting industry lorem Ipsum has Lorem Ipsum is.</p>
                                <Link to="/blog-single">READ MORE</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="story_box" data-aos="fade-up" data-aos-duration="1500">
                            <div className="story_img">
                            <img src="assets/images/story03.png" alt="image" />
                            <span>45 min ago</span>
                            </div>
                            <div className="story_text">
                                <h3>Chat function eded</h3>
                                <p>Printing and typesetting industry lorem Ipsum has Lorem simply dummy text of the.</p>
                                <Link to="/blog-single">READ MORE</Link>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="pagination_block">
                    <ul>
                        <li><Link to="#" className="prev"><i className="icofont-arrow-left"></i> Prev</Link></li>
                        <li><Link to="#">1</Link></li>
                        <li><Link to="#" className="active">2</Link></li>
                        <li><Link to="#">3</Link></li>
                        <li><Link to="#">4</Link></li>
                        <li><Link to="#">5</Link></li>
                        <li><Link to="#">6</Link></li>
                        <li><Link to="#" className="next">Next <i className="icofont-arrow-right"></i></Link></li>
                    </ul>
                </div>
            </div>
        </section>
    </>
  )
}

export default Main