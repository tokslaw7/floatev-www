import React , { useEffect, useState } from 'react'
import { Route, Routes , useLocation} from 'react-router-dom'
import Navbar from '../component/Navbar/Main'
import Footer from '../component/Footer/Main'
//import Home from '../component/Home/Main'
import AboutUs from '../component/AboutUs/Main'
import Review from '../component/Pages/Review/Main'
import Contact from '../component/Contact/Main'
import Faq from '../component/Pages/Faq/Main'
import SignIn from '../component/Pages/SignIn/Main'
import SignUp from '../component/Pages/SignUp/Main'
import Pricing from '../component/Pricing/Main'
import Blog from '../component/Blog/Blog/Main'
import BlogSingle from '../component/Blog/BlogSingle/Main'
import HomeDark from '../component/HomeDark/Main'
import HomeWave from '../component/HomeWave/Main'
import HomeGredient from '../component/HomeGredient/Main'
import HomeVideo from '../component/HomeVideo/Main'
import HomeVideoTwo from '../component/HomeVideoTwo/Main'
import Terms from '../component/Terms/Main'
import Privacy from '../component/Privacy/Main'
import Work from '../component/HomeMain/Work/Main'


const Routing = () => {

    const [homepage, sethomepage] = useState(false)
    const location = useLocation();

    useEffect(() => {
      if (location.pathname === "/sign-in" || location.pathname === "/sign-up"  ){
        sethomepage(false)
      }else{
        sethomepage(true)
      }
    }, [location])

    const [footerpage, setfooterpage] = useState(false)
    useEffect(() => {
      if (location.pathname === "/sign-in" || location.pathname === "/sign-up" ){
        setfooterpage(false)
      }else{
        setfooterpage(true)
      }
    }, [location])

    useEffect(() => {
      
      if (localStorage.getItem("navbar") === "darkhome") {
        setfooter({f2 : true})
        setnavbar({n3 : true})
        setbrdcum({b2 : true})
      }
      else if (localStorage.getItem("navbar") === "home-gredient"){
        setfooter({f1 : true})
        setnavbar({n2 : true})
        setbrdcum({b1 : true})
      }
      else if (localStorage.getItem("navbar") === "homewave"){
        setfooter({f5 : true})
        setbrdcum({b1 : true})
        setnavbar({n4 : true})
      }
      else if (localStorage.getItem("navbar") === "homevideo"){
        setfooter({f1 : true})
        setnavbar({n6 : true})
        setbrdcum({b3 : true})
      }
      else if (localStorage.getItem("navbar") === "homevideotwo"){
        setfooter({f4 : true})
        setnavbar({n4 : true})
        setbrdcum({b4 : true})
      } else {
        setfooter({f1 : true})
        setnavbar({n2 : true})
      }
    }, [])
    

    const [footer , setfooter] = useState({f1 : true})
    const [navbar , setnavbar] = useState({n1 : true})
    const [brdcum , setbrdcum] = useState({b1 : true})
    
    return (
        <>
            {homepage && <Navbar navbar = {navbar}/>}
            <Routes>
                <Route path="/" element={<HomeGredient setfooter = {setfooter} setnavbar = {setnavbar} setbrdcum = {setbrdcum}/>} />
                <Route path="/about" element={< AboutUs setnavbar = {setnavbar} brdcum = {brdcum}/>} />
                <Route path="/review" element={< Review setnavbar = {setnavbar} brdcum = {brdcum} />} />
                <Route path="/contact" element={< Contact brdcum = {brdcum}/>} />
                <Route path="/faq" element={< Faq brdcum = {brdcum} />} />
                <Route path="/how_it_work" element={< Work brdcum = {brdcum} />} />
                <Route path="/sign-in" element={< SignIn />} />
                <Route path="/sign-up" element={< SignUp />} />
                <Route path="/terms" element={<Terms brdcum={brdcum} />} />
                <Route path="/privacy" element={<Privacy brdcum={brdcum} />} />
                <Route path="/pricing" element={< Pricing brdcum = {brdcum}/>} />
                <Route path="/blog" element={< Blog brdcum = {brdcum}/>} />
                <Route path="/blog-single" element={< BlogSingle brdcum = {brdcum}/>} />
                <Route path="/home-dark" element={< HomeDark setfooter = {setfooter} setnavbar = {setnavbar} setbrdcum = {setbrdcum}/>} />
                <Route path="/home-wave" element={< HomeWave setfooter = {setfooter} setnavbar = {setnavbar} setbrdcum = {setbrdcum}/>} />
                <Route path="/home-gredient" element={< HomeGredient setfooter = {setfooter} setnavbar = {setnavbar} setbrdcum = {setbrdcum}/>} />
                <Route path="/home-video" element={< HomeVideo setfooter = {setfooter} setnavbar = {setnavbar} setbrdcum = {setbrdcum}/>} />
                <Route path="/home-video2" element={< HomeVideoTwo setfooter = {setfooter} setnavbar = {setnavbar} setbrdcum = {setbrdcum}/>} />

            </Routes>
            {footerpage && <Footer footer = {footer}/>}
        </>
    )
}

export default Routing