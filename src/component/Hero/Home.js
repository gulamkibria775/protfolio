import React from "react"
import "./Home.css"


import skill1 from "../pic/skill1.png"
import skill2 from "../pic/skill2.png"
import skill3 from "../pic/skill3.png"
import { Typewriter } from "react-simple-typewriter"
import useTitle from "../hook/useTitle"

const Home = () => {
useTitle('hero')
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi, I’m <span>GULAM KIBRIA</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter words={[" Professional Coder.", " Developer."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>

            <p>I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.</p>

            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND WITH ME</h4>
                <div className='button'>
                <a href='https://www.facebook.com/kibria.ahmed.7127146/'>  <button className='btn_shadow'>
                    <i class='fab fa-facebook-f'></i>
                  </button>
                  </a>
                  <button className='btn_shadow'>
                    <i class='fab fa-instagram'></i>
                  </button>
                  <a href='https://www.linkedin.com/in/gulam-kibria-a53130219/'>
                  <button className='btn_shadow'>
                    <i class='fab fa-linkedin-in'></i>
                  </button>
                  </a>
                </div>
              </div>
              <div className='col_1'>
                <h4>BEST SKILL ON</h4>
                <button className='btn_shadow'>
                  <img src={skill1} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill2} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill3} alt='' />
                </button>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              {/* <img src={hero} alt='' /> */}
              <img src='https://www.tbsnews.net/sites/default/files/styles/big_2/public/images/2021/07/08/jhankar.png' width='400px' height='500px' alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
