import { useState } from 'react';
import './Welcome.css'
import profilePic from '../../assets/profile.jpg'

interface InfoCard {
    id: number;
    title: string;
    description: string;
    additionalInfo: string;
    achievements?: string[];
}

const infoCards: InfoCard[] = [
    {
        id: 1,
        title: "2+ Years Software Engineering National Laboratory Internship Experience",
        description: "Working at Pacific Northwest National Laboratory and getting hands-on experience in real-world projects",
        additionalInfo: "Gained professional experience in web development, devops, and data cleaning.",
        achievements: [
            "Full-stack AI and traditional web development, focusing on scalability and performance",
            "DevOps practices including CI/CD pipelines and containerization",
            "Optimized API endpoint to scale to large inputs",
            "Worked on scientific and AI applications to deliver users with high quality data products",
            "Worked with cross-functional teams on complex technical challenges",
            "Developed and maintained critical software systems"
        ]
    },
    {
        id: 2,
        title: "B.S. in Computer Science",
        description: "Fresh perspective with modern education. Coursework in Modern Web Development, High-Performance Computing, Artificial Intelligence, Machine Learning, Data Structures, Algorithms, Web Development, and Compilers.",
        additionalInfo: "Graduated in April 2025 from Utah State University with a Bachelor's in Computer Science, bringing a fresh perspective and modern education to the tech industry.",
        achievements: [
            "3.96 / 4.0 GPA",
            "Completed comprehensive coursework in Data Structures and, Algorithms, Web Development, and Compilers",
            "Participated in various team projects and a hackathon",
            "Maintained a strong academic record while working on personal projects and maintaining a part time internship"
        ]
    },
    {
        id: 3,
        title: "Web Developer",
        description: "Passionate about creating modern web experiences",
        additionalInfo: "Focused on becoming a full-stack web developer with expertise in both frontend and backend technologies.",
        achievements: [
            "Built responsive and interactive web applications using React and R Shiny",
            "Implemented RESTful APIs and database solutions using Flask, FastAPI, and SQL",
            "Created user-friendly interfaces with modern design principles to deliver on both desktop and mobile platforms"
        ]
    },
    {
        id: 4,
        title: "C++ / Rust Enthusiast",
        description: "Foundation in systems programming",
        additionalInfo: "Strong foundation in systems programming and low-level development, with a particular interest in performance optimization and memory management.",
        achievements: [
            "Joined the Bevy Game Engine team as a contributor",
            "Working on personal projects to improve my skills in low-level systems programming",
            "Learning memory management and concurrency in Rust and C++"
        ]
    }
];

export const Welcome = () => {
    const [selectedCard, setSelectedCard] = useState<InfoCard | null>(null);

    return (
        <section className="welcome-section">
            <div className="welcome-content">
                <div className="profile-container">
                    <img src={profilePic} alt="Profile" className="profile-picture" />
                    <h2 className="profile-name">Layton Washburn</h2>
                    <p>Designed for Mobile and Desktop 😊</p>
                </div>
                <h1>Welcome to My Portfolio</h1>
                <div className="welcome-info">
                    {infoCards.map((card) => (
                        <div 
                            key={card.id}
                            className="info-card"
                            onClick={() => setSelectedCard(card)}
                        >
                            <h2>{card.title}</h2>
                            <p>{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {selectedCard && (
                <div className="card-details" onClick={() => setSelectedCard(null)}>
                    <div className="details-content" onClick={e => e.stopPropagation()}>
                        <button 
                            className="close-button"
                            onClick={() => setSelectedCard(null)}
                        >
                            ×
                        </button>
                        <h2>{selectedCard.title}</h2>
                        <p className="details-description">{selectedCard.additionalInfo}</p>
                        {selectedCard.achievements && (
                            <div className="achievements">
                                <h3>Key Achievements</h3>
                                <ul>
                                    {selectedCard.achievements.map((achievement, index) => (
                                        <li key={index}>{achievement}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </section>
    )
} 