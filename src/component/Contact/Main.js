import React ,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import Bredcrumb from '../Bredcrumb/Main'
import BGImg from "../../assets/images/bread_crumb_bg.png"
import BGImg1 from "../../assets/images/bread_crumb_bg_one.png"
import BGImg2 from "../../assets/images/bread_crumb_bg_two.png"
import getConfig from "../Config/config"

const Main = ({brdcum}) => {
    var site = getConfig()[0];
  return (

    <>
       {brdcum.b1 && 
        <Bredcrumb
        no={1}
        title="Contact Us" 
        paragraph="Ib you have an query, please get in touch with us, we will revert back quickly."
        tag="Contact us" 
        bgimg={BGImg}/>}

        {brdcum.b2 && 
        <Bredcrumb 
        no={2}
        title="Contact Us" 
        paragraph="If you have an query, please get in touch with us, we will revert back quickly."
        tag="Contact us" 
        bgimg={BGImg1}/>}

        {brdcum.b5 && 
        <Bredcrumb 
        no={5}
        title="Contact Us" 
        paragraph="If you have an query, please get in touch with us, we will revert back quickly."
        tag="Contact us"
        bgimg={BGImg}/>}

        {brdcum.b3 && 
        <Bredcrumb
        no={3} 
        title="Contact Us" 
        paragraph="If you have an query, please get in touch with us, we will revert back quickly."
        tag="Contact us"/>}

        {brdcum.b4 && 
        <Bredcrumb 
        no={4}
        title="Contact Us" 
        paragraph="If you have an query, please get in touch with us, we will revert back quickly."
        tag="Contact us" 
        bgimg={BGImg2}/>}

        <section className="contact_page_section" id="contact">
            <div className="container">
                <div className="contact_inner">
                    <div className="contact_form">
                        <div className="section_title">
                            <h2>Leave a <span>message</span></h2>
                            <p>Fill up form below, our team will get back soon</p>
                        </div>
                        <form action="">
                            <div className="form-group">
                                <input type="text" placeholder="Name" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <input type="email" placeholder="Email" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Company Name" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <select className="form-control">
                                <option value="">Country</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Phone" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Website" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" placeholder="Your message"></textarea>
                            </div>
                            <div className="form-group term_check">
                            <input type="checkbox" id="term"/>
                            <label htmlFor="term">I agree to receive emails, newsletters and promotional messages</label>
                            </div>
                            <div className="form-group mb-0">
                            <button type="submit" className="btn puprple_btn">SEND MESSAGE</button>
                            </div>
                        </form>
                    </div>
                    <div className="contact_info">
                        <div className="icon"><img src="assets/images/contact_message_icon.png" alt="image"/></div>
                        <div className="section_title">
                            <h2>Have any <span>question?</span></h2>
                            <p>If you have any question about our product, service, payment or company, Visit our <Link to="/faq">FAQs page.</Link></p>
                        </div>
                        <Link to="/faq" className="btn puprple_btn">READ FAQ</Link>
                        <ul className="contact_info_list">
                            <li>
                            <div className="img">
                                <img src="assets/images/mail_icon.png" alt="image" />
                            </div>
                            <div className="text">
                                <span>Email Us</span>
                                <a href={`mailto: ${process.env.REACT_APP_EMAIL}`}>{process.env.REACT_APP_EMAIL}</a>
                            </div>
                            </li>
                            <li>
                            <div className="img">
                                <img src="assets/images/call_icon.png" alt="image" />
                            </div>
                            <div className="text">
                                <span>Call Us</span>
                                <a href={`tel: ${process.env.REACT_APP_PHONE}`}>{process.env.REACT_APP_PHONE}</a>
                            </div>
                            </li>
                            <li>
                            <div className="img">
                                <img src="assets/images/location_icon.png" alt="image" />
                            </div>
                            <div className="text">
                                <span>Visit Us</span>
                                <p>{process.env.REACT_APP_ADDRESS}</p>
                            </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <section className="row_am map_section">
            <div className="container">
                <div className="map_inner">
                    <iframe width="100%" height="510" style={{border:"0"}} frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1070%20Cresta%20Way%20Unit%202,%20San%20Rafael%20CA%2094903+(FloatEV)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                           <a href="https://www.maps.ie/distance-area-calculator.html">measure area map</a>
                    </iframe>
                </div>
            </div>
        </section>
    </>
  )
}

export default Main