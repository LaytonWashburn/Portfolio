import './About.css'

export const About = () => {
    return (
        <div className="about-container">
            <section className="about-section professional">
                <h2>Professional</h2>
                <div className="section-content">
                    <div className="content-card">
                        <h3>Work Experience</h3>
                        <ul>
                            <li>
                                <h4>Software Engineering Intern</h4>
                                <p>Company Name • 2022-2023</p>
                                <p>Description of responsibilities and achievements</p>
                            </li>
                            <li>
                                <h4>Web Development Intern</h4>
                                <p>Company Name • 2021-2022</p>
                                <p>Description of responsibilities and achievements</p>
                            </li>
                        </ul>
                    </div>
                    <div className="content-card">
                        <h3>Skills</h3>
                        <div className="skills-grid">
                            <div className="skill-category">
                                <h4>Frontend</h4>
                                <ul>
                                    <li>React</li>
                                    <li>TypeScript</li>
                                    <li>HTML/CSS</li>
                                </ul>
                            </div>
                            <div className="skill-category">
                                <h4>Backend</h4>
                                <ul>
                                    <li>Node.js</li>
                                    <li>Python</li>
                                    <li>SQL</li>
                                </ul>
                            </div>
                            <div className="skill-category">
                                <h4>Languages</h4>
                                <ul>
                                    <li>C++</li>
                                    <li>JavaScript</li>
                                    <li>Python</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-section academics">
                <h2>Academics</h2>
                <div className="section-content">
                    <div className="content-card">
                        <h3>Education</h3>
                        <div className="education-item">
                            <h4>Utah State University</h4>
                            <p>Bachelor of Science in Computer Science</p>
                            <p>Graduated: 2023</p>
                            <p>Relevant Coursework: Data Structures, Algorithms, Web Development, Database Systems</p>
                        </div>
                    </div>
                    <div className="content-card">
                        <h3>Academic Projects</h3>
                        <ul>
                            <li>
                                <h4>Project Name</h4>
                                <p>Description of the project and your role</p>
                            </li>
                            <li>
                                <h4>Project Name</h4>
                                <p>Description of the project and your role</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="about-section personal">
                <h2>Personal</h2>
                <div className="section-content">
                    <div className="content-card">
                        <h3>Interests</h3>
                        <ul>
                            <li>Software Development</li>
                            <li>Problem Solving</li>
                            <li>Learning New Technologies</li>
                        </ul>
                    </div>
                    <div className="content-card">
                        <h3>Hobbies</h3>
                        <ul>
                            <li>Hiking</li>
                            <li>Reading</li>
                            <li>Gaming</li>
                        </ul>
                    </div>
                </div>
            </section>

            <div className="disclaimer">
                <p>Designed and developed by Layton Washburn</p>
                <p className="cursor-credit">Crafted with ❤️ using Cursor</p>
            </div>
        </div>
    )
}
