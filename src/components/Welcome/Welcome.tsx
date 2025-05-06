import './Welcome.css'
import profilePic from '../../assets/profile.jpg'

export const Welcome = () => {
    return (
        <section className="welcome-section">
            <div className="welcome-content">
                <div className="profile-container">
                    <img src={profilePic} alt="Profile" className="profile-picture" />
                    <h2 className="profile-name">Layton Washburn</h2>
                </div>
                <h1>Welcome to My Portfolio</h1>
                <div className="welcome-info">
                    <div className="info-card">
                        <h2>Recent USU Graduate</h2>
                        <p>Fresh perspective with modern education</p>
                    </div>
                    <div className="info-card">
                        <h2>2 Years Internship Experience</h2>
                        <p>Hands-on experience in real-world projects</p>
                    </div>
                    <div className="info-card">
                        <h2>Web Developer Aspirations</h2>
                        <p>Passionate about creating modern web experiences</p>
                    </div>
                    <div className="info-card">
                        <h2>C++ Enthusiast</h2>
                        <p>Foundation in systems programming</p>
                    </div>
                </div>
            </div>
        </section>
    )
} 