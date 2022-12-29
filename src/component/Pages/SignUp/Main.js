import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <>
        <div className="page_wrapper">
            <div className="full_bg">
                <div className="container">
                    <section className="signup_section">
                        <div className="top_part">
                            <Link to="/" className="back_btn"><i className="icofont-arrow-left"></i> Back</Link>
                            <Link to="/"className="navbar-brand">
                                <img src="assets/images/footer_logo.png" alt="image"/>
                            </Link>
                        </div>
                        <div className="signup_form">
                            <div className="section_title">
                                <h2> <span>Create</span> an account</h2>
                                <p>Fill all fields so we can get some info about you. <br/> We'll never send you spam</p>
                            </div>
                            <form action="">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Name"/>
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Email"/>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Password"/>
                                </div>
                                <div className="form-group">
                                    <button className="btn puprple_btn" type="submit">SIGN UP</button>
                                </div>
                            </form>
                            <p className="or_block">
                                <span>OR</span>
                            </p>
                            <div className="or_option">
                                <p>Sign up with your work email</p>
                                <Link to="#" className="btn google_btn"><img src="assets/images/google.png" alt="image"/> <span>Sign Up with Google</span> </Link>
                                <p>Already have an account? <Link to="/sign-in">Sign In here</Link></p>
                            </div>
                        </div>
                    </section>
                </div>            
            </div>
        </div>
    </>
  )
}

export default Main