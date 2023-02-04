import { useState } from 'react';
import { UilBars } from '@iconscout/react-unicons'
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { Link } from "react-scroll";
import useDarkSide from '../useDarkSide';



function Navbar() {
    const [navbar, setNavbar] = useState(false);
    const [colorTheme, setTheme] = useDarkSide();
    const [darkSide, setDarkSide] = useState(
        colorTheme === "light" ? true : false
    );

    const toggleDarkMode = (checked) => {
        setTheme(colorTheme);
        setDarkSide(checked);
    };


    return (
        <nav className="dark:bg-[#111111] sticky top-0 z-10 flex flex-row items-center justify-between px-2 py-3 bg-white text-purple-700 ">
            <div className="container px-4 xs:mx-auto sm:mx-0 max-w-full flex xs:flex-col sm:flex-row items-center justify-between ">
                <div className="flex flex-row justify-between w-full">
                    <a href='/'><h1 className="text-xl leading-relaxed inline-block mr-4 py-2 whitespace-nowrap ">karteek_ati</h1></a>
                    <button className='cursor-pointer text-xl px-4 py-1 border border-solid border-transparent rounded bg-transparent block sm:hidden outline-none focus:outline-none' type='button' onClick={() => setNavbar(!navbar)}><UilBars /></button>
                </div>
                <div className={'sm:flex flex-row items-center justify-center sm:px-12 max-w-full ' + (navbar ? 'flex' : 'hidden')}>
                    <ul className="flex flex-col sm:flex-row list-none sm:ml-auto gap-6 items-center">
                        <li><Link activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={800}
                            className='cursor-pointer px-1 py-2 flex items-center leading-snug hover:opacity-75 hover:underline'>Home</Link></li>
                        <li><Link activeClass="active"
                            to="edu"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={800}
                            className='cursor-pointer px-1 py-2 flex items-center leading-snug hover:opacity-75 hover:underline'>Education</Link></li>
                        <li><Link activeClass="active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={800}
                            className='cursor-pointer px-1 py-2 flex items-center leading-snug hover:opacity-75 hover:underline'>Projects</Link></li>
                        <li><Link activeClass="active"
                            to="skills"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={800}
                            className='cursor-pointer px-1 py-2 flex items-center leading-snug hover:opacity-75 hover:underline'>Skills</Link></li>
                    </ul>
                </div>
            </div>
            <DarkModeSwitch
                className='absolute top-6 xs:right-3 md:right-5'
                checked={darkSide}
                onChange={toggleDarkMode}
                size={22}
            />

        </nav>
    )
}

export default Navbar;