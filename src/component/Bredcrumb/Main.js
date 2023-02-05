import React from 'react'
import { Link } from 'react-router-dom'

const Main = ({title,tag,bgimg,paragraph,no}) => {
    
  return (
  
   <>
        {no === 1 && 
            <div className="bred_crumb" style={{ backgroundImage : `url(${bgimg})`}}>
                <div className="container">
                    <span className="banner_shape1"> <img src="assets/images/banner-shape1.png" alt="image" /> </span>
                    <span className="banner_shape2"> <img src="assets/images/banner-shape2.png" alt="image" /> </span>
                    <span className="banner_shape3"> <img src="assets/images/banner-shape3.png" alt="image" /> </span>

                    <div className="bred_text">
                        <h1>{title}</h1>
                        <p>{paragraph}</p>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><span>»</span></li>
                            <li><Link to='#'>{tag}</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        }  

        {no === 2 && 
            <div className="bred_crumb" style={{ backgroundImage : `url(${bgimg})`}}>
                <div className="container">
                <span className="banner_shape1"> <img src="assets/images/banner-shape-one1.png" alt="image" /> </span>
                <span className="banner_shape2"> <img src="assets/images/banner-shape2two.png" alt="image" /> </span>
                <span className="banner_shape3"> <img src="assets/images/banner-shapethree3.png" alt="image" /> </span>

                    <div className="bred_text">
                        <h1>{title}</h1>
                        <p>{paragraph}</p>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><span>»</span></li>
                            <li><Link to='#'>{tag}</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        } 

        {no === 3 &&
            <div className="bred_crumb gredient-bg">
                <div className="container">
                    <span className="banner_shape1"> <img src="assets/images/banner-shapev.png" alt="image" /> </span>
                    <span className="banner_shape2"> <img src="assets/images/banner-shapev2.png" alt="image" /> </span>
                    <span className="banner_shape3"> <img src="assets/images/banner-shapev3.png" alt="image" /> </span>
                    <div className="bred_text">
                        <h1>{title}</h1>
                        <p>{paragraph}</p>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><span>»</span></li>
                            <li><Link to='#'>{tag}</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        } 
         {no === 4 && 
            <div className="bred_crumb video" style={{ backgroundImage : `url(${bgimg})`}}>
                <div className="container">
                    <span className="banner_shape1"> <img src="assets/images/banner-shape1.png" alt="image" /> </span>
                    <span className="banner_shape2"> <img src="assets/images/banner-shape2.png" alt="image" /> </span>
                    <span className="banner_shape3"> <img src="assets/images/banner-shape3.png" alt="image" /> </span>

                    <div className="bred_text">
                        <h1>{title}</h1>
                        <p>{paragraph}</p>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><span>»</span></li>
                            <li><Link to='#'>{tag}</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        } 
        {no === 5 && 
            <div className="bred_crumb" style={{ backgroundImage : `url(${bgimg})`}}>
                <div className="container">
                    <span className="banner_shape1"> <img src="assets/images/banner-shape1.png" alt="image" /> </span>
                    <span className="banner_shape2"> <img src="assets/images/banner-shape2.png" alt="image" /> </span>
                    <span className="banner_shape3"> <img src="assets/images/banner-shape3.png" alt="image" /> </span>

                    <div className="bred_text">
                        <h1>{title}</h1>
                        <p>{paragraph}</p>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><span>»</span></li>
                            <li><Link to='#'>{tag}</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        } 

   </>
  )
}

export default Main