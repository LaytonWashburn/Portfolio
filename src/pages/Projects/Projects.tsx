import { useState } from 'react'
import './Projects.css'

interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    link?: string;
    github?: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "Big Blue is You",
        description: "A puzzle game inspired by 'Baba is You' where players manipulate rules to solve puzzles. Built with LWJGL and Java, featuring custom level design and rule-based gameplay mechanics.",
        technologies: ["LWJGL", "Java", "Game Development"],
        link: "https://github.com/LaytonWashburn/CS5410_BigBlueIsYou",
        github: "https://github.com/LaytonWashburn/CS5410_BigBlueIsYou"
    },
    {
        id: 2,
        title: "Aggie Tutor",
        description: "A tutoring platform connecting Utah State University students with peer tutors. Features include real-time scheduling, video conferencing, and payment processing.",
        technologies: ["React", "Node.js", "Tailwind CSS", "MinIO", "Socket.io"],
        link: "https://github.com/LaytonWashburn/CS4610_Final",
        github: "https://github.com/LaytonWashburn/CS4610_Final"
    },
    {
        id: 3,
        title: "File Compression",
        description: "A cli tool for file compression in Golang This is a work in the early stages of development.",
        technologies: ["Golang", "Cobra Cli"],
        link: "https://github.com/LaytonWashburn/FileCompressionGolang",
        github: "https://github.com/LaytonWashburn/FileCompressionGolang"
    },
    {
        id: 4,
        title: "Rust Game",
        description: "A game written in Rust, using the Bevy game engine. This is a work in the early stages of development.",
        technologies: ["Rust", "Bevy"],
        link: "https://github.com/LaytonWashburn/RustGame",
        github: "https://github.com/LaytonWashburn/RustGame"
    },
    {
        id: 5,
        title: "Lunar Lander",
        description: "A lunar lander game. Attempt to land on the moon with a lunar lander.",
        technologies: ["LWJGL", "Java", "Game Development"],
        link: "https://github.com/LaytonWashburn/CS5410_Project3_LunarLanding",
        github: "https://github.com/LaytonWashburn/CS5410_Project3_LunarLanding"
    },
    {
        id: 6,
        title: "Python HTML Parser",
        description: "A python html and css parser, attempting to use Qt as a broswer interface. This is still under development.",
        technologies: ["Python", "Qt", "html/css"],
        link: "https://github.com/LaytonWashburn/PythonHTMLParser",
        github: "https://github.com/LaytonWashburn/PythonHTMLParser"
    }

];

export const Projects = () => {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const nextProject = () => {
        setCurrentProjectIndex((prev) => 
            prev === projects.length - 1 ? 0 : prev + 1
        );
    };

    const prevProject = () => {
        setCurrentProjectIndex((prev) => 
            prev === 0 ? projects.length - 1 : prev - 1
        );
    };

    const getProjectClass = (index: number) => {
        const diff = index - currentProjectIndex;
        if (diff === 0) return 'active';
        if (diff === -1 || (currentProjectIndex === 0 && index === projects.length - 1)) return 'prev';
        if (diff === 1 || (currentProjectIndex === projects.length - 1 && index === 0)) return 'next';
        return '';
    };

    return (
        <div className="projects-container">
            <div className="projects-header">
                <h1>My Projects</h1>
                <p className="subtitle">A showcase of my development journey</p>
            </div>

            <div className="projects-carousel">
                <button className="carousel-button prev" onClick={prevProject}>❮</button>
                <div className="carousel-content">
                    {projects.map((project, index) => (
                        <div 
                            key={project.id}
                            className={`project-card ${getProjectClass(index)}`}
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className="project-info">
                                <div className="project-header">
                                    <h3>{project.title}</h3>
                                    <div className="project-links">
                                        {project.link && (
                                            <a 
                                                href={project.link} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="project-link"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                Live Demo
                                            </a>
                                        )}
                                        {project.github && (
                                            <a 
                                                href={project.github} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="project-link github"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                GitHub
                                            </a>
                                        )}
                                    </div>
                                </div>
                                <p className="project-description">{project.description}</p>
                                <div className="tech-stack">
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="carousel-button next" onClick={nextProject}>❯</button>
                <div className="carousel-indicators">
                    {projects.map((_, index) => (
                        <span 
                            key={index}
                            className={`indicator ${index === currentProjectIndex ? 'active' : ''}`}
                            onClick={() => setCurrentProjectIndex(index)}
                        />
                    ))}
                </div>
            </div>

            {selectedProject && (
                <div className="project-details" onClick={() => setSelectedProject(null)}>
                    <div className="details-content" onClick={e => e.stopPropagation()}>
                        <button 
                            className="close-button"
                            onClick={() => setSelectedProject(null)}
                        >
                            ×
                        </button>
                        <h2>{selectedProject.title}</h2>
                        <p className="details-description">{selectedProject.description}</p>
                        <div className="tech-stack">
                            {selectedProject.technologies.map((tech, index) => (
                                <span key={index} className="tech-tag">{tech}</span>
                            ))}
                        </div>
                        <div className="project-links">
                            {selectedProject.link && (
                                <a 
                                    href={selectedProject.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="project-link"
                                >
                                    View Project
                                </a>
                            )}
                            {selectedProject.github && (
                                <a 
                                    href={selectedProject.github} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="project-link github"
                                >
                                    View Code
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
