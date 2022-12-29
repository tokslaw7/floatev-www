import { Link } from 'react-router-dom'
import React from 'react'
import story1 from '../../../assets/images/story01.png'
import story2 from '../../../assets/images/story02.png'
import story3 from '../../../assets/images/story03.png'

const Main = () => {
  return (
    <>
        <section className="row_am latest_story" id="blog">
            <div className="container">
                <div className="section_title" data-aos="fade-in" data-aos-duration="1500" data-aos-delay="100">
                    <h2>Read latest <span>story</span></h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typese tting <br/> indus orem Ipsum has beenthe standard dummy.</p>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="story_box" data-aos="fade-up" data-aos-duration="1500">
                            <div className="story_img">
                            <img src={story1} alt="image" />
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
                            <img src={story2} alt="image" />
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
                            <img src={story3} alt="image" />
                            <span>45 min ago</span>
                            </div>
                            <div className="story_text">
                                <h3>Creative ideas on app.</h3>
                                <p>Printing and typesetting industry lorem Ipsum has Lorem simply dummy text of the.</p>
                                <Link to="/blog-single">READ MORE</Link>
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