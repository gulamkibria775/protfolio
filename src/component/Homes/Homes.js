import React from "react"
import Header from "../Head/Header"
import Features from "../Features/Features"
import Home from "../Hero/Home"
import Portfolio from "../Portfolio/Portfolio"
import Resume from "../Resume/Resume"
import Testimonial from "../Testimonial/Testimonial"
import Blog from "../Blog/Blog"
import Contact from "../Contact/Contact"
import Footer from "../Footer"
import Pdf from '../Pdf/Pdf'
import useTitle from "../hook/useTitle"
// import { RouterProvider } from 'react-router-dom';
// import Route from './component/Router/Router';

const Homes = () => {
    useTitle('home')
  return (
    <>
      {/* <Header/> */}
      <Home/>
      <Features/>
      <Portfolio/>
      <Resume/>
      <Testimonial/>
      <Blog/>
      <Contact />
      {/* <Footer /> */}
      {/* <Route path="/resume1">
        <Pdf/>
      </Route> */}
      {/* <Route path="/">
        <Home/>
      </Route>
      <Route path="/home">
        <Home/>
      </Route>
      <Route path="/features">
      <Features />
      </Route> */}
      
      {/* <Pdf></Pdf> */}
      {/* <RouterProvider router={router}></RouterProvider> */}
      
    </>
  )
}

export default Homes
