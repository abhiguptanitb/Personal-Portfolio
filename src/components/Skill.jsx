
// COMPONENTS

import SkillCard from "./SkillCard";

const skillItem = [
    {
        imgSrc: '/images/html.png',
        label: 'HTML',
        desc: 'Markup Language'
    },
    {
        imgSrc: '/images/css3.svg',
        label: 'CSS',
        desc: 'Style Sheet Language'
    },
    {
        imgSrc: '/images/javascript.svg',
        label: 'JavaScript',
        desc: 'Programming Language'
    },
    {
        imgSrc: '/images/nodejs.svg',
        label: 'NodeJS',
        desc: 'JavaScript Runtime'
    },
    {
        imgSrc: '/images/expressjs.svg',
        label: 'ExpressJS',
        desc: 'Web Application Framework'
    },
    {
        imgSrc: '/images/mongodb.svg',
        label: 'MongoDB',
        desc: 'NoSQL Database'
    },
    {
        imgSrc: '/images/react.svg',
        label: 'ReactJS',
        desc: 'JavaScript Library'
    },
    {
        imgSrc: '/images/tailwindcss.svg',
        label: 'TailwindCSS',
        desc: 'Utility-First CSS Framework'
    },
    {
        imgSrc: '/images/bootstrap.jpg',
        label: 'Bootstrap',
        desc: 'Front-End Framework'
    },
    {
        imgSrc: '/images/mvc.jpg',
        label: 'MVC',
        desc: 'Architectural Pattern'
    },
    {
        imgSrc: '/images/materialui.png',
        label: 'Material UI',
        desc: 'React Component Library'
    },
    {
        imgSrc: 'https://img.icons8.com/?size=100&id=13679&format=png&color=000000',
        label: 'JAVA',
        desc: 'Programming Language'
    },
    {
        imgSrc: '/images/sql.jpg',
        label: 'SQL',
        desc: 'Structured Query Language'
    },
    {
        imgSrc: 'https://img.icons8.com/?size=100&id=vR6XrZzQr1CN&format=png&color=000000',
        label: 'MySQL',
        desc: 'Relational Database Management System'
    },
];

const Skill=()=>{
    return (
        <section className="section" id="skill">
            <div className="container">
                <h2 className="headline-2 reveal-up">
                    Essential Tools I use
                </h2>
                <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
                Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
                </p>
                <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                    {
                        skillItem.map(({imgSrc, label, desc},key)=> (
                            <SkillCard key={key} imgSrc={imgSrc} label={label} desc={desc} classes="reveal-up"/>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Skill