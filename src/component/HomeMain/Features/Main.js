import React from 'react'
import img1 from '../../../assets/images/secure_data.png'
import img2 from '../../../assets/images/functional.png'
import img3 from '../../../assets/images/live-chat.png'
import img4 from '../../../assets/images/support.png'
import img5 from '../../../assets/images/features_frame.png'

const Main = ({video}) => {
  return (
    <>
        {video ?
        <section className="row_am features_section video-features" id="features">
            <div className="container">
                <div className="section_title" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100">
                <h2><span>Features</span> that makes app different!</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typese tting <br/> indus orem Ipsum has beenthe
                    standard dummy.</p>
                </div>
                <div className="feature_detail">
                <div className="left_data feature_box">
                    <div className="data_block" data-aos="fade-right" data-aos-duration="1500">
                    <div className="icon">
                        <img src="assets/images/secure.png" alt="image" />
                    </div>
                    <div className="text">
                        <h4>Secure data</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and type setting indus ideas.</p>
                    </div>
                    </div>
                    <div className="data_block" data-aos="fade-right" data-aos-duration="1500">
                    <div className="icon">
                        <img src="assets/images/abt_functional.png" alt="image" />
                    </div>
                    <div className="text">
                        <h4>Fully functional</h4>
                        <p>Simply dummy text of the printing and typesetting indus lorem Ipsum is dummy.</p>
                    </div>
                    </div>
                </div>
                <div className="right_data feature_box">
                    <div className="data_block" data-aos="fade-left" data-aos-duration="1500">
                    <div className="icon">
                        <img src="assets/images/communication.png" alt="image"/>
                    </div>
                    <div className="text">
                        <h4>Live chat</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and type setting indus ideas.</p>
                    </div>
                    </div>
                    <div className="data_block" data-aos="fade-left" data-aos-duration="1500">
                    <div className="icon">
                        <img src="assets/images/abt_support.png" alt="image" />
                    </div>
                    <div className="text">
                        <h4>24-7 Support</h4>
                        <p>Simply dummy text of the printing and typesetting indus lorem Ipsum is dummy.</p>
                    </div>
                    </div>
                </div>
                <div className="feature_img" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100">
                    <img src="assets/images/features_frame.png" alt="image" />
                </div>
                </div>
            </div>
        </section>
        :
        <section className="row_am features_section" id="features">
            <div className="container">
                <div className="section_title" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100">
                <h2><span>Features</span> that makes app different!</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typese tting <br/> indus orem Ipsum has beenthe
                    standard dummy.</p>
                </div>
                <div className="feature_detail">
                <div className="left_data feature_box">
                    <div className="data_block" data-aos="fade-right" data-aos-duration="1500">
                    <div className="icon">
                        <img src={img1} alt="image" />
                    </div>
                    <div className="text">
                        <h4>Secure data</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and type setting indus ideas.</p>
                    </div>
                    </div>
                    <div className="data_block" data-aos="fade-right" data-aos-duration="1500">
                    <div className="icon">
                        <img src={img2} alt="image" />
                    </div>
                    <div className="text">
                        <h4>Fully functional</h4>
                        <p>Simply dummy text of the printing and typesetting indus lorem Ipsum is dummy.</p>
                    </div>
                    </div>
                </div>
                <div className="right_data feature_box">
                    <div className="data_block" data-aos="fade-left" data-aos-duration="1500">
                    <div className="icon">
                        <img src={img3} alt="image"/>
                    </div>
                    <div className="text">
                        <h4>Live chat</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and type setting indus ideas.</p>
                    </div>
                    </div>
                    <div className="data_block" data-aos="fade-left" data-aos-duration="1500">
                    <div className="icon">
                        <img src={img4} alt="image" />
                    </div>
                    <div className="text">
                        <h4>24-7 Support</h4>
                        <p>Simply dummy text of the printing and typesetting indus lorem Ipsum is dummy.</p>
                    </div>
                    </div>
                </div>
                <div className="feature_img" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100">
                    <img src={img5} alt="image" />
                </div>
                </div>
            </div>
        </section>}
    </>
  )
}

export default Main