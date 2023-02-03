import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { UilUniversity, UilBackpack, UilGraduationCap } from '@iconscout/react-unicons'

export default function Education() {
    return (
        <section id='edu' className='px-6 flex flex-col justify-center items-center'>
            <h1 className='mb-8 font-bold text-4xl'>Education</h1>
            <VerticalTimeline lineColor='#A020F0'>

                <VerticalTimelineElement className="vertical-timeline-element--education"
                    contentStyle={{ background: '#A020F0', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #A020F0' }}
                    iconStyle={{ background: '#A020F0', color: '#fff' }}
                    icon={<UilGraduationCap />}>
                    <h3 className="text-xl font-bold">Pimpri Chinchwad College of Engineering</h3>
                    <h4 className="vertical-timeline-element-subtitle">BTech. Information Technology</h4>
                    <p>CGPA: 8.92</p>
                    <h4>2021-2024</h4>
                </VerticalTimelineElement>

                <VerticalTimelineElement className="vertical-timeline-element--education"
                    contentStyle={{ background: '#A020F0', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #A020F0' }}
                    iconStyle={{ background: '#A020F0', color: '#fff' }}
                    icon={<UilUniversity />}>
                    <h3 className="text-xl font-bold">Maharashtra Institute of Technology</h3>
                    <h4 className="vertical-timeline-element-subtitle">Diploma in Information Technology</h4>
                    <p>Percent: 96.81%</p>
                    <h4>2018-2021</h4>
                </VerticalTimelineElement>

                <VerticalTimelineElement className="vertical-timeline-element--education"
                    contentStyle={{ background: '#A020F0', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #A020F0' }}
                    iconStyle={{ background: '#A020F0', color: '#fff' }}
                    icon={<UilBackpack />}>
                    <h3 className="text-xl font-bold">Kendriya Vidyalaya BEG</h3>
                    <h4 className="vertical-timeline-element-subtitle">X<sup>th</sup> CBSE</h4>
                    <p>Percent: 66%</p>
                    <h4>2007-2018</h4>
                </VerticalTimelineElement>

            </VerticalTimeline>
        </section>
    )
}