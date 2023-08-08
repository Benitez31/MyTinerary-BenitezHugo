import React from 'react'
import '../styles/Header.css'
import Links from './Links'
import {SiYourtraveldottv} from 'react-icons/si'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'

const Header = () => {
    const links = [
        {title:'Home', to: './home'},
        {title:'Destinations', to: './Destinations'}
    ]
  return (
    <section className='navBarSection'>
        <header className='header flex'>
            <div className="logoDiv">
                <a href="#" className="logo flex">
                    <h1> <SiYourtraveldottv className='icon' /> MyTinerary</h1>
                </a>
            </div>
            <div className="navBar">
                <ul className="navList flex">
                    {
                        links.map((link) => (<Links key={link.title} title={link.title} to={link.to} />))
                    }
                    <div className="btn">
                    <a href="#">BOOK NOW</a>
                </div>
                </ul>
                
                <div className="closeNavBar">
                    <AiFillCloseCircle className='icon' />
                </div>
            </div>
            <div className="toggleNavBar">
                <TbGridDots className='icon'/>
            </div>

        </header>

    </section>
  )
}

export default Header