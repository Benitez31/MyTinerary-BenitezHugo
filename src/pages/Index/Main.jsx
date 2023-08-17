import React from 'react'
import '../../styles/Main.scss'
import Data from '../../data/Data.json'
import {HiOutlineLocationMarker, HiOutlineClipboardCheck} from 'react-icons/hi'

   
const Main = () => {
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 className="title">Most visited destinations</h3>
      </div>
      <div className="secContent grid">
        {Data.map(destination => (
          <div key={destination.id} className="singleDestination">
            <div className="imageDiv">
              <img src={destination.imgSrc} alt={destination.destTitle} />
            </div>
            <div className="cardInfo">
              <h4 className="desTitle">{destination.destTitle}</h4>
              <span className="continent flex">
                <HiOutlineLocationMarker className='icon' />
                <span className="name">
                  {destination.location}
                </span>
              </span>
              <div className="fees flex">
                <div className="grade">
                  <span>
                    {destination.grade}<small>+1</small>
                  </span>
                </div>
                <div className="price">{destination.fees}</div>
              </div>
              <div className="desc">
                <p>{destination.description}</p>
              </div>

              <button className="btn flex">
                DETAILS <HiOutlineClipboardCheck className='icon' />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Main;


