import './Skills.css';

export const Skills = () => {
    return (
        <div className="skills-container">
            <section className="skills-section">
                <h2>Technical Skills</h2>
                <div className="section-content">
                    <div className="content-card">
                        <h3>Programming Languages</h3>
                        <div className="skills-grid">
                            <div className="skill-category">
                                <h4>Primary</h4>
                                <ul>
                                    <li>Python</li>
                                    <li>JavaScript/HTML/CSS</li>
                                    <li>Java</li>
                                    <li>R</li>
                                </ul>
                            </div>
                            <div className="skill-category">
                                <h4>Secondary</h4>
                                <ul>
                                    <li>C++</li>
                                    <li>C</li>
                                    <li>Rust</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="content-card">
                        <h3>Web Development</h3>
                        <div className="skills-grid">
                            <div className="skill-category">
                                <h4>Frontend Technologies</h4>
                                <ul>
                                    <li>React</li>
                                    <li>HTML/CSS</li>
                                    <li>TypeScript</li>
                                    <li>Vite</li>
                                    <li>R Shiny</li>
                                </ul>
                            </div>
                            <div className="skill-category">
                                <h4>Backend Technologies</h4>
                                <ul>
                                    <li>Django</li>
                                    <li>Express</li>
                                    <li>FastAPI</li>
                                    <li>Node.js</li>
                                    <li>Flask</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="content-card">
                        <h3>Tools & Technologies</h3>
                        <div className="skills-grid">
                            <div className="skill-category">
                                <h4>Development</h4>
                                <ul>
                                    <li>Git</li>
                                    <li>Docker</li>
                                    <li>k8s (in progress)</li>
                                    <li>Make</li>
                                    <li>CMake</li>
                                    <li>VS Code</li>

                                </ul>
                            </div>
                            <div className="skill-category">
                                <h4>Databases</h4>
                                <ul>
                                    <li>SQL</li>
                                    <li>PostgreSQL</li>
                                    <li>pgAdmin</li>
                                    <li>Redis</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="content-card">
                        <h3>Libraries and Packages</h3>
                        <div className="skill-category">
                            <ul>
                                        <li>Celery</li>
                                        <li>BullMq</li>
                                        <li>Prisma</li>
                                        <li>SQLAlchemy</li>
                                        <li>Pandas</li>
                                        <li>Numpy</li>
                                        <li>Seaborn</li>
                                    </ul>
                                </div>
                        </div>
                </div>
            </section>

            <div className="disclaimer">
                <p>Designed and developed by Layton Washburn</p>
                <p className="cursor-credit">Crafted with ❤️ using Cursor</p>
            </div>
        </div>
    );
}