import React, { useState } from "react"

const Card = (props) => {
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }

  if (modal) {
    document.body.classList.add("active-modal")
  } else {
    document.body.classList.remove("active-modal")
  }
  return (
    <>
      <div className='box btn_shadow '>
        <div className='img'>
          <img src={props.image} alt='' onClick={toggleModal} />
        </div>
        <div className='category d_flex'>
          <span onClick={toggleModal}>{props.category}</span>
          <p>Project - <span>{props.id}</span></p>
          <label>
            <i className='far fa-heart'></i> {props.totalLike}
          </label>
        </div>
        <div className='title'>
          <h2 onClick={toggleModal}>{props.title}</h2>
          <a href='#popup' className='arrow' onClick={toggleModal}>
            <i class='fas fa-arrow-right'>Details</i>
            
          </a>
        </div>
      </div>

      {/* Popup box */}
      {modal && (
        <div className='modal'>
          <div onClick={toggleModal} className='overlay'></div>
          <div className='modal-content d_flex'>
            <div className='modal-img left'>
         
              <img src={props.img1} alt=''  height='200px' />
              <br />
            
            
              <img src={props.img2} alt=''   height='200px'/>
              
              <img src={props.img3} alt=''   height='200px'/>
            </div>
            <div className='modal-text right'>
              <span>Featured - Design</span>
              <h1>{props.title}</h1>
              
              <div>

              <h5>Here my website description is given: </h5>
              <p>1.my website name is old mobile services</p>
               <p>2.here i use manay technology (HTML5,CSS3,JAVASCRIPTS,REACTJS,Tailwindcss,daisy ui) </p>
              <p>3.firebase authentication,vercel,bakend mongodb</p>
              <p>4.feature of my website (login by user or buyer ,admin dashbord)</p>
             


              </div>
              <div className='button f_flex mtop'>
                {/* <button className='btn_shadow'>
                  LIKE THIS <i class='far fa-thumbs-up'></i>
                </button> */}
                <a href={props.githublink}>
                <button className='btn_shadow'>
                  VIEW GithubLink<i class='fas fa-chevron-right'></i>
                </button>
                </a>
                <a href={props.link}>
                <button className='btn_shadow'>
                  VIEW PROJECT<i class='fas fa-chevron-right'></i>
                </button>
                </a>
                
              </div>
              <button className='close-modal btn_shadow' onClick={toggleModal}>
                <i class='fas fa-times'></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Card
