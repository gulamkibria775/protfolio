import React, { useState } from "react"
import "./header.css"
import logo from "../pic/logo.png"

const Header = () => {
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
            <img src='https://www.tbsnews.net/sites/default/files/styles/infograph/public/images/2021/07/08/img_2842_0.jpg' width='120px' alt='' />
          </div>

          <div className='navlink'>
            <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
              {/*<ul className='link f_flex uppercase {Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}'>*/}
              <li>
                <a href='#home'>home</a>
              </li>
              <li>
                <a href='#features'>features</a>
              </li>
              <li>
                {/* <a href='#portfolio'>portfolio</a> */}
                <a href='#portfolio'>my-projects</a>
              </li>
              <li>
                <a href='https://drive.google.com/file/d/1T-eD-Ytt4jgGBHZWXXxWRvltsy6pPR01/view?usp=share_link' target='_blank' > show-resume</a>
                
              </li>
              <li>
                <a href='resume1'>resume-download</a>
              </li>
              <li>
                <a href='#clients'>clients</a>
              </li>
              <li>
                <a href='#blog'>blog</a>
              </li>
              <li>
                <a href='#contact'>contact</a>
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
