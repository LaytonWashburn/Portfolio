import { useState } from 'react'
import './Projects.css'

interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    images: string[];
    link?: string;
    github?: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "Big Blue is You",
        description: "A puzzle game inspired by 'Baba is You' where players manipulate rules to solve puzzles. Built with Unity and C#, featuring custom level design and rule-based gameplay mechanics.",
        technologies: ["Unity", "C#", "Game Development"],
        images: ["/images/bigblue1.jpg", "/images/bigblue2.jpg", "/images/bigblue3.jpg"],
        link: "https://bigblueisyou.com",
        github: "https://github.com/yourusername/bigblueisyou"
    },
    {
        id: 2,
        title: "Aggie Tutor",
        description: "A tutoring platform connecting Texas A&M students with peer tutors. Features include real-time scheduling, video conferencing, and payment processing.",
        technologies: ["React", "Node.js", "WebRTC", "Stripe"],
        images: ["/images/aggietutor1.jpg", "/images/aggietutor2.jpg", "/images/aggietutor3.jpg"],
        link: "https://aggietutor.com",
        github: "https://github.com/yourusername/aggietutor"
    },
    {
        id: 3,
        title: "Portfolio Website",
        description: "A modern, responsive portfolio website built with React and TypeScript. Features smooth animations, dark mode, and a clean, professional design.",
        technologies: ["React", "TypeScript", "CSS3"],
        images: ["/images/portfolio1.jpg", "/images/portfolio2.jpg", "/images/portfolio3.jpg"],
        link: "https://laytonwashburn.com",
        github: "https://github.com/yourusername/portfolio"
    },
    {
        id: 4,
        title: "Task Manager",
        description: "A full-stack task management application with real-time updates, user authentication, and collaborative features.",
        technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
        images: ["/images/taskmanager1.jpg", "/images/taskmanager2.jpg", "/images/taskmanager3.jpg"],
        link: "https://taskmanager.com",
        github: "https://github.com/yourusername/taskmanager"
    },
    {
        id: 5,
        title: "Weather App",
        description: "A weather forecasting application that provides real-time weather data, forecasts, and interactive maps.",
        technologies: ["React", "OpenWeather API", "Chart.js"],
        images: ["/images/weatherapp1.jpg", "/images/weatherapp2.jpg", "/images/weatherapp3.jpg"],
        link: "https://weatherapp.com",
        github: "https://github.com/yourusername/weatherapp"
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
