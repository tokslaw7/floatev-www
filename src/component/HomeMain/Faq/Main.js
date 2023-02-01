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
                    <p>We guide you step by step to convert to Electronic vehicles.<br/> </p>
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
                                <p> FloatEV is a fleet product for small and medium size enterprises.
                                    A concept for a new and flexible mobility experience.
                                    FloatEV maintains and cares for your fleet </p>
                                </div>
                            </div>
                        </div>
                        <div className="card" data-aos="fade-up" data-aos-duration="1500">
                            <div className="card-header" id="headingTwo">
                                <h2 className="mb-0">
                                <button type="button" className={`btn btn-link ${activeFaq.b && "active"}`} onClick= {() => setActiveFaq(activeFaq.b ? {b : false} : {b : true})} data-toggle="collapse"
                                    data-target="#collapseTwo">{activeFaq.b ? <i className="icon_faq icofont-minus"></i>  : <i className="icon_faq icofont-plus"></i>} How to setup FloatEV account ?</button>
                                </h2>
                            </div>
                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                <div className="card-body">
                                    <p>Create an account and order your subscription online at <a href='www.floatev.com'> <i className="icon_faq"></i> FloatEV.</a>
                                    <br />Enter your personal data.<br />
                                        Book your fleet subscription. <br />
                                        We will then send you a final booking confirmation in your email, resulting in a binding contract between you and FloatEv</p>
                                </div>
                            </div>
                        </div>
                        <div className="card" data-aos="fade-up" data-aos-duration="1500">
                            <div className="card-header" id="headingThree">
                                <h2 className="mb-0">
                                <button type="button" className={`btn btn-link ${activeFaq.c && "active"}`} onClick= {() => setActiveFaq(activeFaq.c ? {c : false} : {c : true})} data-toggle="collapse"
                                    data-target="#collapseThree">{activeFaq.c ? <i className="icon_faq icofont-minus"></i>  : <i className="icon_faq icofont-plus"></i>}What is the process
                                    ?</button>
                                </h2>
                            </div>
                            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                <div className="card-body">
                                <p>Subscribe to the plan preferred and we take care of the entire conversion process and provide you with a personalized metrics and analytics system galley of type and</p>
                                </div>
                            </div>
                        </div>
                        <div className="card" data-aos="fade-up" data-aos-duration="1500">
                            <div className="card-header" id="headingFour">
                                <h2 className="mb-0">
                                <button type="button" className={`btn btn-link ${activeFaq.d && "active"}`} onClick= {() => setActiveFaq(activeFaq.d ? {d : false} : {d : true})} data-toggle="collapse"
                                    data-target="#collapseFour">{activeFaq.d ? <i className="icon_faq icofont-minus"></i>  : <i className="icon_faq icofont-plus"></i>}How does the subscription works
                                    ?</button>
                                </h2>
                            </div>
                            <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                                <div className="card-body">
                                <p>The term of your subscription begins as soon as you receive your booked confirmation.<br/> A personal collection  of your numerous fleet.</p>
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