import React from 'react'
import '../styles/Footer.scss'
import video from '../images/videofooter2.mp4'
import { FiSend } from 'react-icons/fi'
import { SiYourtraveldottv } from 'react-icons/si'
import { FaTripadvisor } from 'react-icons/fa'
import {AiOutlineTwitter, AiFillYoutube} from 'react-icons/ai'

const Footer = () => {
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video} loop autoPlay muted type='video/mp4' ></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input type="text" placeholder='Enter Email Address' />
            <button className="btn flex" type='submit'>
              SEND <FiSend className='icon' />
            </button>
          </div>


        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <SiYourtraveldottv className='icon' /> MyTinerary.
              </a>
            </div>

            <div className="footerParagraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptas obcaecati eos molestiae vero, ut odio.
              Voluptatum architecto atque reprehenderit tempore minus sequi dolor repellendus
              consectetur quos facilis sit, incidunt adipisci?
            </div>

            <div className="footersocials">
              <AiOutlineTwitter className='icon' />
              <AiFillYoutube className='icon' />
              <FaTripadvisor className='icon' />
            </div>
          </div>

          <div className="footerLinks grid"></div>
        </div>
      </div>
    </section>
  )
}

export default Footer