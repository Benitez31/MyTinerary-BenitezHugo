import React from 'react'
import '../styles/Footer.scss'
import video from '../images/videofooter2.mp4'
import { FiSend, FiChevronRight } from 'react-icons/fi'
import { SiYourtraveldottv } from 'react-icons/si'
import { FaTripadvisor } from 'react-icons/fa'
import { AiOutlineTwitter, AiFillYoutube, AiFillInstagram } from 'react-icons/ai'


const Footer = () => {
  const listOurAgency = ["Services", "Insurance", "Agency", "Tourism", "Payment"]
  const listPartners = ["Bookings", "Rentcars", "Hostel Word", "Trivago", "TripAdvisor"]
  const listLastMinute = ["London", "California", "Indonesia", "Europe", "Oceania"]
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

            <div className="footersocials flex">
              <AiOutlineTwitter className='icon' />
              <AiFillYoutube className='icon' />
              <AiFillInstagram className='icon' />
              <FaTripadvisor className='icon' />
            </div>
          </div>

          <div className="footerLinks grid">
            <div className="linkGroup">
              <span className="groupTitle">
                OUR AGENCY
              </span>
              <ul>
                {listOurAgency.map((item) => (
                  <li className="footerList flex" >
                    <FiChevronRight className='icon' />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="linkGroup">
              <span className="groupTitle">
                PARTNERS
              </span>
              <ul>
                {listPartners.map((item) => (
                  <li className="footerList flex" >
                    <FiChevronRight className='icon' />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="linkGroup">
              <span className="groupTitle">
                LAST MINUTE
              </span>
              <ul>
                {listLastMinute.map((item) => (
                  <li className="footerList flex" >
                    <FiChevronRight className='icon' />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE THEME</small>
            <small>COPIRIGHTS RESERVED-ISRATECH 2022</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer