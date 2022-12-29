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
                            <h2>Beautiful design with <span>modern UI</span></h2>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the
                            industrys standard dummy text ever since the when an unknown printer took a galley of type and.
                            </p>
                        </div>
                        <ul className="design_block">
                            <li data-aos="fade-up" data-aos-duration="1500">
                            <h4>Carefully designed</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and type esetting industry lorem Ipsum has.</p>
                            </li>
                            <li data-aos="fade-up" data-aos-duration="1500">
                            <h4>Seamless Sync</h4>
                            <p>Simply dummy text of the printing and typesetting inustry lorem Ipsum has Lorem dollar summit.</p>
                            </li>
                            <li data-aos="fade-up" data-aos-duration="1500">
                            <h4>Access Drive</h4>
                            <p>Printing and typesetting industry lorem Ipsum has been the industrys standard dummy text of type
                                setting.</p>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="ui_images" data-aos="fade-in" data-aos-duration="1500">
                        <div className="left_img">
                            <img className="moving_position_animatin" src={img1} alt="image" />
                        </div>
                        <div className="right_img">
                            <img className="moving_position_animatin" src={img2} alt="image" />
                            <img className="moving_position_animatin" src={img3} alt="image" />
                            <img className="moving_position_animatin" src={img4} alt="image" />
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