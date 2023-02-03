import ReactImage from '../../Assets/react.png'
import HTML from '../../Assets/html.png'
import CSS from '../../Assets/css.png'
import Tailwind from '../../Assets/tailwind.png'
import MUI from '../../Assets/mui.png'
import JQuery from '../../Assets/jquery.png'
import Node from '../../Assets/node.png'
import Express from '../../Assets/Expressjs.png'
import Mongo from '../../Assets/mongo.png'
import SQL from '../../Assets/sql.png'
import Flask from '../../Assets/flask.png'
import JS from '../../Assets/js.png'
import Tensorflow from '../../Assets/tensorflow.png'
import OpenCV from '../../Assets/opencv.png'
import Scikit from '../../Assets/scikit.png'
import GCP from '../../Assets/gcp.png'
import AWS from '../../Assets/aws.png'

export default function Skills() {
    return (
        <section id="skills" className="mt-10 px-6 py-3 flex flex-col justify-center items-center">
            <h1 className='mb-8 font-bold text-4xl'>Skills</h1>
            <div className='flex flex-wrap justify-center items-center gap-6 '>
                <div className="flex flex-col justify-center items-center md:w-1/3 shadow-md bg-gray-100 text-purple-700 transition-all">
                    <h1 className='p-4 text-2xl font-bold'>Frontend</h1>
                    <div className='flex flex-wrap gap-6 mb-6 mx-4 justify-center'>
                        <img src={ReactImage} className='max-h-20 '></img>
                        <img src={HTML} className='max-h-20 '></img>
                        <img src={CSS} className='max-h-20 '></img>
                        <img src={Tailwind} className='max-h-20 '></img>
                        <img src={MUI} className='max-h-20 '></img>
                        <img src={JQuery} className='max-h-20 '></img>
                    </div>
                </div>

                <div className="mt-4 flex flex-col justify-center items-center md:w-1/2 shadow-md bg-gray-100 text-purple-700 transition-all">
                    <h1 className='p-4 text-2xl font-bold'>Backend</h1>
                    <div className='flex flex-wrap gap-6 mb-6 mx-4 justify-center'>
                        <img src={Node} className='max-h-16 '></img>
                        <img src={Express} className='max-h-16 '></img>
                        <img src={Mongo} className='max-h-12 '></img>
                        <img src={SQL} className='max-h-16 '></img>
                        <img src={Flask} className='max-h-16 '></img>
                        <img src={JS} className='max-h-16 '></img>
                    </div>
                </div>

                <div className="mt-4 flex flex-col justify-center items-center md:w-1/3 shadow-md bg-gray-100 text-purple-700 transition-all">
                    <h1 className='p-4 text-2xl font-bold'>Machine Learning</h1>
                    <div className='flex flex-wrap gap-6 mb-6 mx-4 justify-center'>
                        <img src={Tensorflow} className='max-h-20 '></img>
                        <img src={OpenCV} className='max-h-20 '></img>
                        <img src={Scikit} className='max-h-20 '></img>
                    </div>
                </div>

                <div className="mt-4 flex flex-col justify-center items-center md:w-1/2 shadow-md bg-gray-100 text-purple-700 transition-all">
                    <h1 className='p-4 text-2xl font-bold'>Cloud Technologies</h1>
                    <div className='flex flex-wrap gap-6 mb-6 mx-4 justify-center'>
                        <img src={GCP} className='max-h-16 '></img>
                        <img src={AWS} className='max-h-16 '></img>
                    </div>
                </div>
            </div>
        </section>
    )
}