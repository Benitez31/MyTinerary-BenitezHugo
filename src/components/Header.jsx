import React, { useState } from 'react';
import '../styles/Header.scss';
import Links from './Links';
import { SiYourtraveldottv } from 'react-icons/si';
import { AiFillCloseCircle } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';

const Header = () => {
    const links = [
        { title: 'Home', to: './home' },
        { title: 'Packages', to: './packages' },
        { title: 'Shop', to: './shop' },
        { title: 'About', to: './about' },
        { title: 'Pages', to: './pages' },
        { title: 'News', to: './news' },
        { title: 'Contact', to: './contact' }
    ]
    const [active, setActive] = useState('navBar');

    const showNav = () => {
        setActive('navBar activeNavbar')
    }
    const removeNavbar = () => {
        setActive('navBar')
    }

    return (
        <section className='navBarSection'>
            <header className='header flex'>
                <div className="logoDiv">
                    <a href="#" className="logo flex">
                        <h1> <SiYourtraveldottv className='icon' /> MyTinerary.</h1>
                    </a>
                </div>
                <div className={active}>
                    <ul className="navList flex">
                        {
                            links.map((link) => (<Links key={link.title} title={link.title} to={link.to} />))
                        }
                        <div className="btn">
                            <a href="#">BOOK NOW</a>
                        </div>
                    </ul>

                    <div onClick={removeNavbar} className="closeNavBar">
                        <AiFillCloseCircle className='icon' />
                    </div>
                </div>
                <div onClick={showNav} className="toggleNavBar">
                    <TbGridDots className='icon' />
                </div>

            </header>

        </section>
    )
}

export default Header