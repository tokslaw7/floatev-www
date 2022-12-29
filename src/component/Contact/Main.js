import React ,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import Bredcrumb from '../Bredcrumb/Main'
import BGImg from "../../assets/images/bread_crumb_bg.png"
import BGImg1 from "../../assets/images/bread_crumb_bg_one.png"
import BGImg2 from "../../assets/images/bread_crumb_bg_two.png"

const Main = ({brdcum}) => {
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
                                <Link to="#">example@gmail.com</Link>
                            </div>
                            </li>
                            <li>
                            <div className="img">
                                <img src="assets/images/call_icon.png" alt="image" />
                            </div>
                            <div className="text">
                                <span>Call Us</span>
                                <Link to="#">+1 (888) 553-46-11</Link>
                            </div>
                            </li>
                            <li>
                            <div className="img">
                                <img src="assets/images/location_icon.png" alt="image" />
                            </div>
                            <div className="text">
                                <span>Visit Us</span>
                                <p>5687, Business Avenue, New York, USA 5687</p>
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
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799160891!2d-74.25987584510595!3d40.69767006338158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1664399300741!5m2!1sen!2sin" width="100%" height="510" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </section>
    </>
  )
}

export default Main