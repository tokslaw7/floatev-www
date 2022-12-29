import { Link } from 'react-router-dom'
import React , { useState} from 'react'
import img1 from '../../../assets/images/standard.png'
import img2 from '../../../assets/images/unlimited.png'
import img3 from '../../../assets/images/premium.png'

const Main = ({gredient , video}) => {
    
    const[tog, setTog] = useState()

  return (
    <>
        {gredient ?
            <section className="row_am pricing_section gredient-pricing" id="pricing">
                <div className="container">
                    <div className="section_title" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
                    <h2>Best & simple <span>pricing</span></h2>
                    <p className="gredient-p">Lorem Ipsum is simply dummy text of the printing and typese tting <br/> indus orem Ipsum has beenthe
                        standard dummy.</p>
                    </div>
                    <div className="toggle_block" data-aos="fade-up" data-aos-duration="1500">
                        <span className={`month ${tog ? 'active' : ''}`}>Monthly</span>
                        <div className="tog_block">
                            <span className={`tog_btn ${tog && "month_active"}`} onClick = {() => setTog(tog === true ? false : true)}></span>
                        </div>
                        <span className="years">Yearly</span>
                        <span className="offer">50% off</span>
                    </div>

                    <div className={`pricing_pannel monthly_plan ${tog ? '' : 'active'}`}>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="pricing_block">
                                    <div className="icon">
                                    <img src="assets/images/standard-one.png" alt="image" />
                                    </div>
                                    <div className="pkg_name">
                                    <h3>Standard</h3>
                                    <span>For the basics</span>
                                    </div>
                                    <span className="price">$15</span>
                                    <ul className="benifits">
                                    <li>
                                        <p>Up to 5 Website</p>
                                    </li>
                                    <li>
                                        <p>50 GB disk space</p>
                                    </li>
                                    <li>
                                        <p>10 Customize sub pages</p>
                                    </li>
                                    <li>
                                        <p>2 Domains access</p>
                                    </li>
                                    <li>
                                        <p>Support on request</p>
                                    </li>
                                    </ul>
                                    <Link to="/faq" className="btn white_btn">BUY NOW</Link>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="pricing_block highlited_block">
                                    <div className="icon">
                                    <img src="assets/images/unlimited-one.png" alt="image"/>
                                    </div>
                                    <div className="pkg_name">
                                    <h3>Unlimited</h3>
                                    <span>For the professionals</span>
                                    </div>
                                    <span className="price">$99</span>
                                    <ul className="benifits">
                                    <li>
                                        <p>Unlimited Website</p>
                                    </li>
                                    <li>
                                        <p>200 GB disk space</p>
                                    </li>
                                    <li>
                                        <p>20 Customize sub pages</p>
                                    </li>
                                    <li>
                                        <p>10 Domains access</p>
                                    </li>
                                    <li>
                                        <p>24/7 Customer support</p>
                                    </li>
                                    </ul>
                                    <Link to="/faq" className="btn white_btn">BUY NOW</Link>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="pricing_block">
                                    <div className="icon">
                                    <img src="assets/images/premium-one.png" alt="image" />
                                    </div>
                                    <div className="pkg_name">
                                    <h3>Premium</h3>
                                    <span>For small team</span>
                                    </div>
                                    <span className="price">$55</span>
                                    <ul className="benifits">
                                    <li>
                                        <p>Up to 10 Website</p>
                                    </li>
                                    <li>
                                        <p>100 GB disk space</p>
                                    </li>
                                    <li>
                                        <p>15 Customize sub pages</p>
                                    </li>
                                    <li>
                                        <p>4 Domains access</p>
                                    </li>
                                    <li>
                                        <p>24/7 Customer support</p>
                                    </li>
                                    </ul>
                                    <Link to="/faq" className="btn white_btn">BUY NOW</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`pricing_pannel yearly_plan ${tog ? 'active' : ''}`} >
                        <div className="row">
                            <div className="col-md-4">
                                <div className="pricing_block">
                                    <div className="icon">
                                    <img src="assets/images/standard.png" alt="image" />
                                    </div>
                                    <div className="pkg_name">
                                    <h3>Standard</h3>
                                    <span>For the basics</span>
                                    </div>
                                    <span className="price">$150</span>
                                    <ul className="benifits">
                                    <li>
                                        <p>Up to 10 Website</p>
                                    </li>
                                    <li>
                                        <p>100 GB disk space</p>
                                    </li>
                                    <li>
                                        <p>25 Customize sub pages</p>
                                    </li>
                                    <li>
                                        <p>4 Domains access</p>
                                    </li>
                                    <li>
                                        <p>Support on request</p>
                                    </li>
                                    </ul>
                                    <Link to="/faq" className="btn white_btn">BUY NOW</Link>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="pricing_block highlited_block">
                                    <div className="icon">
                                    <img src="assets/images/unlimited.png" alt="image" />
                                    </div>
                                    <div className="pkg_name">
                                    <h3>Unlimited</h3>
                                    <span>For the professionals</span>
                                    </div>
                                    <span className="price">$999</span>
                                    <ul className="benifits">
                                    <li>
                                        <p>Unlimited Website</p>
                                    </li>
                                    <li>
                                        <p>400 GB disk space</p>
                                    </li>
                                    <li>
                                        <p>40 Customize sub pages</p>
                                    </li>
                                    <li>
                                        <p>20 Domains access</p>
                                    </li>
                                    <li>
                                        <p>24/7 Customer support</p>
                                    </li>
                                    </ul>
                                    <Link to="/faq" className="btn white_btn">BUY NOW</Link>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="pricing_block">
                                    <div className="icon">
                                    <img src="assets/images/premium.png" alt="image" />
                                    </div>
                                    <div className="pkg_name">
                                    <h3>Premium</h3>
                                    <span>For small team</span>
                                    </div>
                                    <span className="price">$550</span>
                                    <ul className="benifits">
                                    <li>
                                        <p>Up to 20 Website</p>
                                    </li>
                                    <li>
                                        <p>200 GB disk space</p>
                                    </li>
                                    <li>
                                        <p>25 Customize sub pages</p>
                                    </li>
                                    <li>
                                        <p>8 Domains access</p>
                                    </li>
                                    <li>
                                        <p>24/7 Customer support</p>
                                    </li>
                                    </ul>
                                    <Link to="/faq" className="btn white_btn">BUY NOW</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className="contact_text" data-aos="fade-up" data-aos-duration="1500">Not sure what to choose ? <Link to="/contact">contact us</Link> for custom packages</p>
                </div>
            </section>
        :
            <section className="row_am pricing_section" id="pricing">
                <div className="container">
                    <div className="section_title" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
                    <h2>Best & simple <span>pricing</span></h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typese tting <br/> indus orem Ipsum has beenthe
                        standard dummy.</p>
                    </div>
                    <div className="toggle_block" data-aos="fade-up" data-aos-duration="1500">
                        <span className={`month ${tog ? 'active' : ''}`}>Monthly</span>
                        <div className="tog_block">
                            <span className={`tog_btn ${tog && "month_active"}`} onClick = {() => setTog(tog === true ? false : true)}></span>
                        </div>
                        <span className="years">Yearly</span>
                        <span className="offer">50% off</span>
                    </div>

                    <div className={`pricing_pannel monthly_plan ${tog ? '' : 'active'}`}>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="pricing_block">
                                    <div className="icon">
                                    { video ? <img src="assets/images/standard-one.png" alt="image" /> : <img src={img1} alt="image" /> }
                                    </div>
                                    <div className="pkg_name">
                                    <h3>Standard</h3>
                                    <span>For the basics</span>
                                    </div>
                                    <span className="price">$15</span>
                                    <ul className="benifits">
                                    <li>
                                        <p>Up to 5 Website</p>
                                    </li>
                                    <li>
                                        <p>50 GB disk space</p>
                                    </li>
                                    <li>
                                        <p>10 Customize sub pages</p>
                                    </li>
                                    <li>
                                        <p>2 Domains access</p>
                                    </li>
                                    <li>
                                        <p>Support on request</p>
                                    </li>
                                    </ul>
                                    <Link to="/faq" className="btn white_btn">BUY NOW</Link>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="pricing_block highlited_block">
                                    <div className="icon">
                                    { video ? <img src="assets/images/unlimited-one.png" alt="image"/> : <img src={img2} alt="image"/> }
                                    </div>
                                    <div className="pkg_name">
                                    <h3>Unlimited</h3>
                                    <span>For the professionals</span>
                                    </div>
                                    <span className="price">$99</span>
                                    <ul className="benifits">
                                    <li>
                                        <p>Unlimited Website</p>
                                    </li>
                                    <li>
                                        <p>200 GB disk space</p>
                                    </li>
                                    <li>
                                        <p>20 Customize sub pages</p>
                                    </li>
                                    <li>
                                        <p>10 Domains access</p>
                                    </li>
                                    <li>
                                        <p>24/7 Customer support</p>
                                    </li>
                                    </ul>
                                    <Link to="/faq" className="btn white_btn">BUY NOW</Link>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="pricing_block">
                                    <div className="icon">
                                    {video ? <img src="assets/images/premium-one.png" alt="image" /> : <img src={img3} alt="image" /> }
                                    </div>
                                    <div className="pkg_name">
                                    <h3>Premium</h3>
                                    <span>For small team</span>
                                    </div>
                                    <span className="price">$55</span>
                                    <ul className="benifits">
                                    <li>
                                        <p>Up to 10 Website</p>
                                    </li>
                                    <li>
                                        <p>100 GB disk space</p>
                                    </li>
                                    <li>
                                        <p>15 Customize sub pages</p>
                                    </li>
                                    <li>
                                        <p>4 Domains access</p>
                                    </li>
                                    <li>
                                        <p>24/7 Customer support</p>
                                    </li>
                                    </ul>
                                    <Link to="/faq" className="btn white_btn">BUY NOW</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`pricing_pannel yearly_plan ${tog ? 'active' : ''}`} >
                        <div className="row">
                            <div className="col-md-4">
                                <div className="pricing_block">
                                    <div className="icon">
                                    { video ? <img src="assets/images/standard-one.png" alt="image" /> : <img src={img1} alt="image" /> }
                                    </div>
                                    <div className="pkg_name">
                                    <h3>Standard</h3>
                                    <span>For the basics</span>
                                    </div>
                                    <span className="price">$150</span>
                                    <ul className="benifits">
                                    <li>
                                        <p>Up to 10 Website</p>
                                    </li>
                                    <li>
                                        <p>100 GB disk space</p>
                                    </li>
                                    <li>
                                        <p>25 Customize sub pages</p>
                                    </li>
                                    <li>
                                        <p>4 Domains access</p>
                                    </li>
                                    <li>
                                        <p>Support on request</p>
                                    </li>
                                    </ul>
                                    <Link to="/faq" className="btn white_btn">BUY NOW</Link>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="pricing_block highlited_block">
                                    <div className="icon">
                                    { video ? <img src="assets/images/unlimited-one.png" alt="image"/> : <img src={img2}alt="image"/> }
                                    </div>
                                    <div className="pkg_name">
                                    <h3>Unlimited</h3>
                                    <span>For the professionals</span>
                                    </div>
                                    <span className="price">$999</span>
                                    <ul className="benifits">
                                    <li>
                                        <p>Unlimited Website</p>
                                    </li>
                                    <li>
                                        <p>400 GB disk space</p>
                                    </li>
                                    <li>
                                        <p>40 Customize sub pages</p>
                                    </li>
                                    <li>
                                        <p>20 Domains access</p>
                                    </li>
                                    <li>
                                        <p>24/7 Customer support</p>
                                    </li>
                                    </ul>
                                    <Link to="/faq" className="btn white_btn">BUY NOW</Link>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="pricing_block">
                                    <div className="icon">
                                    {video ? <img src="assets/images/premium-one.png" alt="image" /> : <img src={img3} alt="image" /> }
                                    </div>
                                    <div className="pkg_name">
                                    <h3>Premium</h3>
                                    <span>For small team</span>
                                    </div>
                                    <span className="price">$550</span>
                                    <ul className="benifits">
                                    <li>
                                        <p>Up to 20 Website</p>
                                    </li>
                                    <li>
                                        <p>200 GB disk space</p>
                                    </li>
                                    <li>
                                        <p>25 Customize sub pages</p>
                                    </li>
                                    <li>
                                        <p>8 Domains access</p>
                                    </li>
                                    <li>
                                        <p>24/7 Customer support</p>
                                    </li>
                                    </ul>
                                    <Link to="/faq" className="btn white_btn">BUY NOW</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className="contact_text" data-aos="fade-up" data-aos-duration="1500">Not sure what to choose ? <Link to="/contact">contact us</Link> for custom packages</p>
                </div>
            </section>
        }
    </>
  )
}

export default Main