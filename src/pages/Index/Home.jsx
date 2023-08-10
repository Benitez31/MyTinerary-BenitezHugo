import React from 'react'
import HeroCallToAction from '../../components/HeroCallToAction'
import Carrousel from '../../components/Carrousel'
import video from '../../images/video2.mp4'
import '../../styles/Home.scss'

export default function Home() {
  return (
    <>
      <section className='home'>
        <div className="overlay"></div>
        <video src={video} muted autoPlay loop type='video/mp4'></video>
        <div className="homeContent container">
          <div className="textDiv">

            <span className="smallText">
              Our Destinations
            </span>

            <h1 className="homeTitle">
              look for your destiny
            </h1>

            <Carrousel />

          </div>
        </div>
        <HeroCallToAction />

      </section>

    </>
  )
}
