import OwlCarousel from 'react-owl-carousel'
import React from 'react'
import img1 from '../../../assets/images/paypal.png'
import img2 from '../../../assets/images/spoty.png'
import img3 from '../../../assets/images/shopboat.png'
import img4 from '../../../assets/images/slack.png'
import img5 from '../../../assets/images/envato.png'

const Main = () => {
    const company_slider = {
        loop:true,
        margin:10,
        nav:false,
        autoplay: true,
        smartSpeed: 1500,
        dots: true, 
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    }

  return (
    <>
        <section className="row_am trusted_section">
            <div className="container">
                <div className="section_title" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100">
                <h2>Trusted by <span>150+</span> companies</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typese tting <br/> indus orem Ipsum has beenthe
                    standard dummy.</p>
                </div>
                <div className="company_logos" >
                <OwlCarousel id="company_slider" {...company_slider} className="owl-carousel owl-theme owl-loaded owl-drag">
                    <div className="item">
                    <div className="logo">
                        <img src={img1} alt="image" />
                    </div>
                    </div>
                    <div className="item">
                    <div className="logo">
                        <img src={img2} alt="image" />
                    </div>
                    </div>
                    <div className="item">
                    <div className="logo">
                        <img src={img3} alt="image" />
                    </div>
                    </div>
                    <div className="item">
                    <div className="logo">
                        <img src={img4} alt="image" />
                    </div>
                    </div>
                    <div className="item">
                    <div className="logo">
                        <img src={img5} alt="image" />
                    </div>
                    </div>
                    <div className="item">
                    <div className="logo">
                        <img src={img1} alt="image" />
                    </div>
                    </div>
                    <div className="item">
                    <div className="logo">
                        <img src={img2} alt="image" />
                    </div>
                    </div>
                    <div className="item">
                    <div className="logo">
                        <img src={img3} alt="image" />
                    </div>
                    </div>
                </OwlCarousel>
                </div>
            </div>
        </section>
    </>
  )
}

export default Main