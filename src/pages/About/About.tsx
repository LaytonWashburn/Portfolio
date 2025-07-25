import { useState } from 'react';
import './About.css'

interface CardContent {
    id: number;
    title: string;
    description: string;
    additionalInfo: string;
    details?: {
        title: string;
        content: string | string[];
    }[];
}

const professionalCards: CardContent[] = [
    {
        id: 1,
        title: "Work Experience",
        description: "Tech Intern at Pacific Northwest National Laboratory",
        additionalInfo: "Currently working as a Tech Intern at Pacific Northwest National Laboratory, contributing to scientific platforms to deliver data products, cleaning data and performing QA to ensure that the data is accurate and reliable.",
        details: [
            {
                title: "Current Role",
                content: "Tech Intern at Pacific Northwest National Laboratory • 2023 - Current"
            },
            {
                title: "Previous Experience",
                content: "DOE SULI Student Intern at Department of Energy hosted by Pacific Northwest National Laboratory • Summer 2023"
            },
            {
                title: "Key Responsibilities",
                content: [
                    "Contributed by maintaining and updating the web applications and data cleaning scripts and working closely with the developers and scientists to ensure deliverable requirements are met and exceeded.",
                    "Meeting deliverable requirements and deadlines by collaborating with multiple teams to update project managers and PI's.",
                    "Developed and maintained critical software systems",
                    "Implemented new features and optimizations"
                ]
            }
        ]
    },
    {
        id: 2,
        title: "Skills",
        description: "Comprehensive technical skill set",
        additionalInfo: "Developed a diverse range of technical skills through academic studies and professional experience.",
        details: [
            {
                title: "Frontend Development",
                content: [
                    "React and R Shiny for building interactive user interfaces",
                    "JavaScript/TypeScript for web development",
                    "HTML/CSS for responsive design",
                    "Modern frontend frameworks and tools"
                ]
            },
            {
                title: "Backend Development",
                content: [
                    "Node.js for server-side applications",
                    "Python for data processing and APIs",
                    "SQL for database management",
                    "Flask and FastAPI for web services"
                ]
            },
            {
                title: "Programming Languages",
                content: [
                    "R for statistical computing",
                    "JavaScript for web development",
                    "Python for general-purpose programming"
                ]
            }
        ]
    }
];

const academicCards: CardContent[] = [
    {
        id: 1,
        title: "Education",
        description: "Bachelor of Science in Computer Science",
        additionalInfo: "Completed a comprehensive computer science program at Utah State University with a focus on practical applications and theoretical foundations.",
        details: [
            {
                title: "Degree Details",
                content: "Bachelor of Science in Computer Science from Utah State University"
            },
            {
                title: "Graduation",
                content: "April 2025"
            },
            {
                title: "Relevant Coursework",
                content: [
                    "Data Structures and Algorithms",
                    "Web Development",
                    "Database Systems",
                    "AI / Machine Learning",
                    "Compilers",
                    "Technical Game Development",
                    "High Performance Computing"
                ]
            }
        ]
    },
    {
        id: 2,
        title: "Academic Projects",
        description: "Hands-on learning through practical projects",
        additionalInfo: "Engaged in various academic projects that combined theoretical knowledge with practical implementation.",
        details: [
            {
                title: "Big Blue Is You",
                content: [
                    "Final project for Technical Game Development",
                    "Based on the game Baba Is You",
                    "Role: Developer and manual tester",
                    "Implemented game mechanics and level design",
                    "Conducted thorough testing and debugging"
                ]
            },
            {
                title: "AWannaCU",
                content: [
                    "Final project for high performance computing",
                    "Implemented Bresenham's line algorithm",
                    "Developed line of sight detection between pixels",
                    "Role: Developer and tester",
                    "Optimized performance for large image processing"
                ]
            }
        ]
    }
];

const personalCards: CardContent[] = [
    {
        id: 1,
        title: "Interests",
        description: "Passionate about technology and innovation",
        additionalInfo: "Deeply interested in various aspects of technology and software development, constantly seeking to learn and grow.",
        details: [
            {
                title: "Professional Interests",
                content: [
                    "Software Development and Architecture",
                    "Problem Solving and Algorithm Design",
                    "Learning New Technologies and Frameworks",
                    "Web Development and User Experience",
                    "System Design and Optimization"
                ]
            }
        ]
    },
    {
        id: 2,
        title: "Hobbies",
        description: "Balancing work with personal interests",
        additionalInfo: "Engage in various activities that help maintain a healthy work-life balance and foster creativity.",
        details: [
            {
                title: "Personal Activities",
                content: [
                    "Technical Writing and Documentation",
                    "Running and Physical Fitness",
                    "Rock Climbing and Outdoor Activities",
                    "Reading Technical Books and Articles",
                    "Contributing to Open Source Projects"
                ]
            }
        ]
    }
];

export const About = () => {
    const [selectedCard, setSelectedCard] = useState<CardContent | null>(null);

    const renderCard = (card: CardContent) => (
        <div 
            key={card.id}
            className="content-card"
            onClick={() => setSelectedCard(card)}
        >
            <h3>{card.title}</h3>
            <p className="card-description">{card.description}</p>
            <p className="card-additional-info">{card.additionalInfo}</p>
            {card.details && (
                <div className="card-details-preview">
                    {card.details.map((detail, index) => (
                        <div key={index} className="detail-preview">
                            <h4>{detail.title}</h4>
                            {Array.isArray(detail.content) ? (
                                <ul>
                                    {detail.content.slice(0, 2).map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                    {detail.content.length > 2 && (
                                        <li className="more-items">+{detail.content.length - 2} more items</li>
                                    )}
                                </ul>
                            ) : (
                                <p>{detail.content}</p>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );

    return (
        <div className="about-container">
            <section className="about-section professional">
                <h2>Professional</h2>
                <div className="section-content">
                    {professionalCards.map(renderCard)}
                </div>
            </section>

            <section className="about-section academics">
                <h2>Academics</h2>
                <div className="section-content">
                    {academicCards.map(renderCard)}
                </div>
            </section>

            <section className="about-section personal">
                <h2>Personal</h2>
                <div className="section-content">
                    {personalCards.map(renderCard)}
                </div>
            </section>

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
                        {selectedCard.details && (
                            <div className="details-sections">
                                {selectedCard.details.map((detail, index) => (
                                    <div key={index} className="detail-section">
                                        <h3>{detail.title}</h3>
                                        {Array.isArray(detail.content) ? (
                                            <ul>
                                                {detail.content.map((item, i) => (
                                                    <li key={i}>{item}</li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p>{detail.content}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}

            <div className="disclaimer">
                <p>Designed and developed by Layton Washburn 2025</p>
            </div>
        </div>
    )
}
