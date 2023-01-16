import React ,{ useState } from 'react'

const Main = ({gredient}) => {

    const[activeFaq, setActiveFaq] = useState({a : true})

  return (
    <>
        <section className="row_am faq_section">
        {gredient && <div className="faq_bg"> <img src="assets/images/section-bg.png" alt="image"/> </div>}
            <div className="container">
                <div className="section_title" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
                    <h2><span>FAQ</span> - Frequently Asked Questions</h2>
                    <p>We guide you step by step to convert to Electronic vehicles.<br/> indus orem Ipsum has beenthe
                        standard dummy.</p>
                </div>
                <div className="faq_panel">
                    <div className="accordion" id="accordionExample">
                        <div className="card" data-aos="fade-up" data-aos-duration="1500">
                            <div className="card-header" id="headingOne">
                                <h2 className="mb-0">
                                <button type="button" className={`btn btn-link ${activeFaq.a && "active"}`} onClick= {() => setActiveFaq(activeFaq.a ? {a : false} : {a : true})} data-toggle="collapse" data-target="#collapseOne">
                                {activeFaq.a ? <i className="icon_faq icofont-minus"></i>  : <i className="icon_faq icofont-plus"></i>} What is FloatEV ?</button>
                                </h2>
                            </div>
                            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <div className="card-body">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has. been the
                                    industrys standard dummy text ever since the when an unknown printer took a galley of type and
                                    scrambled it to make a type specimen book. It has survived not only five cen turies but also the
                                    leap into electronic typesetting, remaining essentially unchanged.</p>
                                </div>
                            </div>
                        </div>
                        <div className="card" data-aos="fade-up" data-aos-duration="1500">
                            <div className="card-header" id="headingTwo">
                                <h2 className="mb-0">
                                <button type="button" className={`btn btn-link ${activeFaq.b && "active"}`} onClick= {() => setActiveFaq(activeFaq.b ? {b : false} : {b : true})} data-toggle="collapse"
                                    data-target="#collapseTwo">{activeFaq.b ? <i className="icon_faq icofont-minus"></i>  : <i className="icon_faq icofont-plus"></i>} How to setup account ?</button>
                                </h2>
                            </div>
                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                <div className="card-body">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has. been the
                                    industrys standard dummy text ever since the when an unknown printer took a galley of type and
                                    scrambled it to make a type specimen book. It has survived not only five cen turies but also the
                                    leap into electronic typesetting, remaining essentially unchanged.</p>
                                </div>
                            </div>
                        </div>
                        <div className="card" data-aos="fade-up" data-aos-duration="1500">
                            <div className="card-header" id="headingThree">
                                <h2 className="mb-0">
                                <button type="button" className={`btn btn-link ${activeFaq.c && "active"}`} onClick= {() => setActiveFaq(activeFaq.c ? {c : false} : {c : true})} data-toggle="collapse"
                                    data-target="#collapseThree">{activeFaq.c ? <i className="icon_faq icofont-minus"></i>  : <i className="icon_faq icofont-plus"></i>}What is process to get refund
                                    ?</button>
                                </h2>
                            </div>
                            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                <div className="card-body">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has. been the
                                    industrys standard dummy text ever since the when an unknown printer took a galley of type and
                                    scrambled it to make a type specimen book. It has survived not only five cen turies but also the
                                    leap into electronic typesetting, remaining essentially unchanged.</p>
                                </div>
                            </div>
                        </div>
                        <div className="card" data-aos="fade-up" data-aos-duration="1500">
                            <div className="card-header" id="headingFour">
                                <h2 className="mb-0">
                                <button type="button" className={`btn btn-link ${activeFaq.d && "active"}`} onClick= {() => setActiveFaq(activeFaq.d ? {d : false} : {d : true})} data-toggle="collapse"
                                    data-target="#collapseFour">{activeFaq.d ? <i className="icon_faq icofont-minus"></i>  : <i className="icon_faq icofont-plus"></i>}What is process to get refund
                                    ?</button>
                                </h2>
                            </div>
                            <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                                <div className="card-body">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has. been the
                                    industrys standard dummy text ever since the when an unknown printer took a galley of type and
                                    scrambled it to make a type specimen book. It has survived not only five cen turies but also the
                                    leap into electronic typesetting, remaining essentially unchanged.</p>
                                </div>
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