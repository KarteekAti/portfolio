import { UilGithub, UilTwitter, UilLinkedin, UilInstagram } from '@iconscout/react-unicons'
import { Link } from 'react-router-dom';
import Res from '../../Assets/Resume.pdf'
import Profile from '../../Assets/IMG_0886.jpg'


function Home() {
    return (
        <section id="home" className=" px-12 py-5 mb-10 text-purple-700 flex xs:flex-col md:flex-row ">
            <div className='md:w-2/3'>
                <h1 className="xs:mb-6 md:mb-2 xs:text-center md:text-start font-bold text-4xl">Hello Everyone, I am Karteek 👋</h1>
                <p className="leading-normal xs:mb-6 md:mb-2 xs:text-center md:text-start m-auto break-normal text-xl text-black font-">I'm a passionate Backend Developer 💻 having experience with Python, Flask, React.js, Node.js and a Machine Learning enthusiast 🤖.</p>
                <div className='xs:mb-6 md:mb-2 p-2 flex flex-row gap-5 xs:justify-center md:justify-start items-center'>
                    <a href='https://github.com/KarteekAti'><UilGithub /></a>
                    <a href='https://twitter.com/karteek2002'><UilTwitter /></a>
                    <a href='https://www.linkedin.com/in/karteekati/'><UilLinkedin /></a>
                    <a href='https://www.instagram.com/karteekati/'><UilInstagram /></a>
                </div>
                <div className='p-2 flex flex-row xs:justify-center md:justify-start xs:items-center md:items-start gap-6'>
                    <Link to={Res} target='_blank' rel="noopener noreferrer"><button className='bg-transparent py-1 px-4 border border-purple-700 hover:bg-purple-700 font-semibold hover:text-white hover:border-transparent rounded'>Resume</button></Link>
                    <Link to=''><button className='bg-transparent py-1 px-4 border text-black border-black hover:bg-black font-semibold hover:text-white hover:border-transparent rounded' onClick={(e) => { window.location.href = 'mailto:ati.karteek99@gmail.com'; }}>Contact Me</button></Link>
                </div>
                <p className="leading-normal md:mt-2 mb-2 xs:mt-10 xs:text-center md:text-start m-auto break-normal text-xl font-">I am currently pursuing BTech in <b>Information Technology</b> at Pimpri Chinchwad College of Engineering (PCCOE), Pune with an overall CGPA of <b>8.92</b>. I will graduate in <b>June 2024.</b> I have an excellent ability to read code and suggest changes to make the project error free. I like to work on developing APIs, Server Side Scripts.</p>
            </div>
            <div className=' md:w-1/3 xs:mt-4 flex justify-center'>
                <img src={Profile} alt="Profile" className='w-80 rounded-xl border-purple-600 border-2 shadow-2xl shadow-black rotate-1 hover:-translate-y-2 hover:-rotate-3 transition-all'></img>
            </div>

        </section>
    )
}

export default Home;