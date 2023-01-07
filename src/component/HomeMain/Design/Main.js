import React from 'react'
import img1 from '../../../assets/images/modern01.png'
import img2 from '../../../assets/images/secure_data.png'
import img3 from '../../../assets/images/modern02.png'
import img4 from '../../../assets/images/modern03.png'

const Main = ({gredient}) => {
  return (
    <>
        <section className={`row_am modern_ui_section ${gredient && "gredient-bg"}`} >
            {gredient &&
            <div className="modernui_section_bg modernui-gredient"> <img src="assets/images/section-bg.png" alt="image"/> </div>}
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="ui_text">
                        <div className="section_title" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100">
                            <h2>FLOAT'S <span>DASHBOARD </span></h2>
                            <p>
                                Your EV fleet performance metrics are in one place, easy to locate any useful information analyze data and
                                compare results.
                            </p>
                        </div>
                        <ul className="design_block">
                            <li data-aos="fade-up" data-aos-duration="1500">
                            <h4>Metrics</h4>
                            <p>We guide a company through the EV conversion process, starting with insights on current performance of their existing fleet.</p>
                            </li>
                            <li data-aos="fade-up" data-aos-duration="1500">
                            <h4>Guide</h4>
                            <p>We assess what works, provide information on which vehicles to convert first, and continue to improve on fleet performance throughout the step by step conversion to EVs..</p>
                            </li>
                            <li data-aos="fade-up" data-aos-duration="1500">
                            <h4>Access</h4>
                            <p>We assess what works, provide information on which vehicles to convert first, and continue to improve on fleet performance throughout the step by step conversion to EVs..</p>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="ui_images" data-aos="fade-in" data-aos-duration="1500">
                        <div className="left_img">
                            <img className="moving_position_animatin" src={img1} alt="image" />
                        </div>
                        {/*<div className="right_img">*/}
                        {/*    <img className="moving_position_animatin" src={img2} alt="image" />*/}
                        {/*    <img className="moving_position_animatin" src={img3} alt="image" />*/}
                        {/*    <img className="moving_position_animatin" src={img4} alt="image" />*/}
                        {/*</div>*/}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Main