import React, { useState } from "react"
import { Link } from "react-router-dom";
import "./header.css"
import logo from "../pic/logo.png"
import useTitle from "../hook/useTitle";

const Header = () => {
  useTitle('header')
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 100)
  })
  // Toogle Menu
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='logo'>
            {/* <img src={logo} alt='' /> */}
            <img src='https://www.tbsnews.net/sites/default/files/styles/infograph/public/images/2021/07/08/img_2842_0.jpg' width='100px' alt='' />
            <span className="bioinfo">Bioinfo</span>
          </div>

          <div className='navlink'>
            <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
              {/*<ul className='link f_flex uppercase {Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}'>*/}
              <li>
                <Link to='/home'>Home</Link>
              </li>
              <li>
                <Link to='/features'>Features</Link>
              </li>
              <li>
                {/* <a href='#portfolio'>portfolio</a> */}
                <Link to='/portfolio'>Projects</Link>
              </li>
              <li>
                <Link to='/resume'>Resume</Link>
                
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
              {/* <li>
                <Link to='/clients'>clients</Link>
              </li> */}
              <li>
                {/* <a href='#blog'>blog</a> */}
                <Link to='/blog'> Blog</Link>
              </li>
              <li>
                <Link to='/contact'>Contact</Link>
              </li>
             
              {/* <li>
                <button className='home-btn'>BUY NOW</button>
              </li> */}
            </ul>

            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
