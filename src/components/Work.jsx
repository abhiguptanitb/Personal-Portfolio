import ProjectCard from "./ProjectCard";


const works = [
    {
        imgSrc: '/images/airbnb.jpg',
        title: 'Full stack - Airbnb Inspired Web Application',
        tags: ['HTML', 'CSS', 'JS', 'MongoDB', 'ExpressJS', 'NodeJS', 'Bootstrap' , 'MVC'],
        projectLink: 'https://major-project-q8ma.onrender.com/listings'
    },
    {
        imgSrc: '/images/weather.png',
        title: 'Weather app',
        tags: ['React', 'CSS'],
        projectLink: 'https://weatherappusingreact05.netlify.app/'
    },
    {
        imgSrc: '/images/portfolio.png',
        title: 'My Portfolio',
        tags: ['React (Lenis, GSAP)', 'Tailwind CSS'],
        projectLink: 'https://tictactoegame05.netlify.app/'
    },
    {
        imgSrc: '/images/sidcup.jpg',
        title: 'Sidcup Family Golf',
        tags: ['HTML', 'CSS', 'JS (GSAP)'],
        projectLink: 'https://sidcup-family-golf-05.netlify.app/'
    },
    {
        imgSrc: '/images/simongame.png',
        title: 'Simon Says Game',
        tags: ['HTML', 'CSS', 'JS'],
        projectLink: 'https://simonsaysgame05.netlify.app/'
    },
    {
        imgSrc: '/images/spotify.png',
        title: 'Frontend - Spotify Clone',
        tags: ['HTML', 'CSS'],
        projectLink: 'https://spotifyclone05.netlify.app/'
    },
];

const Work=()=>{
    return (
        <section id="work" className="section">
            <div className="container">
                <h2 className="headline-2 mb-8 reveal-up">
                    My portfolio highlights
                </h2>
                <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                    {works.map(({imgSrc,title,tags,projectLink},key)=>(
                        <ProjectCard key={key} imgSrc={imgSrc} title={title} tags={tags} projectLink={projectLink} classes="reveal-up"/>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Work;