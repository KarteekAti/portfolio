import { useState } from 'react';
import { Link } from 'react-router-dom'
import { UilBars } from '@iconscout/react-unicons'


function Navbar() {
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="sticky top-0 z-50 flex flex-wrap items-center justify-between px-2 py-3 bg-white text-purple-700 ">
            <div className="container px-4 mx-auto flex xs:flex-col md:flex-row items-center justify-between">
                <div className="flex flex-row xs:gap-40 sm:gap-72">
                    <a href='/'><h1 className="text-xl leading-relaxed inline-block mr-4 py-2 whitespace-nowrap ">karteek_ati</h1></a>
                    <button className='cursor-pointer text-xl px-4 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none' type='button' onClick={() => setNavbar(!navbar)}><UilBars /></button>
                </div>
                <div className={'md:flex flex-row items-center justify-center ' + (navbar ? 'flex' : 'hidden')}>
                    <ul className="flex flex-col md:flex-row list-none md:ml-auto gap-6">
                        <li><Link to="#home" className='px-1 py-2 flex items-center leading-snug hover:opacity-75'>Home</Link></li>
                        <li><Link to="#edu" className='px-1 py-2 flex items-center leading-snug hover:opacity-75'>Education</Link></li>
                        <li><Link to="#projects" className='px-1 py-2 flex items-center leading-snug hover:opacity-75'>Projects</Link></li>
                        <li><Link to="#skills" className='px-1 py-2 flex items-center leading-snug hover:opacity-75'>Skills</Link></li>
                        <li><Link to="#resume" className='px-1 py-2 flex items-center leading-snug hover:opacity-75'>Resume</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;