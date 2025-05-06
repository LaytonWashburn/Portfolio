import { Welcome } from '../../components/Welcome/Welcome';
import './Home.css';

export const Home = () => {
    return (
        <div className="home-container">
            <Welcome />
            <div className="story-section">
                <h2>My Journey into Computer Science</h2>
                <div className="story-content">
                    <p>
                        I am a recent graduate from Utah State University with a B.S. in Computer Science, passionate about software development, 
                        writing, and continuous learning. While C++ is my favorite programming language, Python and Web development are close seconds.
                    </p>
                    <p>
                        My journey into computer science began unexpectedly. Initially majoring in chemistry, I found myself in a lab class 
                        with a friend who was studying computer science. Their enthusiasm convinced me to switch to computer engineering, 
                        and the next semester, I found myself in an Introduction to C programming class.
                    </p>
                    <p>
                        I love sharing this story because it still brings a smile to my face. On the first day of class, I was sitting at my desk, 
                        struggling to turn on the monitor as class was about to begin. At that point, I was far from being tech-savvy and knew 
                        very little about computers. The teaching assistant was moving through the material quickly, and I was falling behind 
                        while trying to figure out how to power on the computer. I kept pressing the power button, seeing the light flash, 
                        but nothing was happening.
                    </p>
                    <p>
                        A feeling of dread washed over me as I realized I was getting further behind. Then, to my utter embarrassment, 
                        the student sitting next to me leaned over, pressed the power button on the desktop computer under the desk, 
                        and casually returned to their work. It felt like a scene straight out of a cartoon!
                    </p>
                    <p>
                        Needless to say, I've come a long way from not being able to distinguish between a monitor and a computer. 
                        Some of my favorite classes have been Compilers, Web Development, and Computer Architecture. Each has contributed 
                        to my growth as a developer and deepened my appreciation for the field.
                    </p>
                    <p className="portfolio-note">
                        This portfolio is currently under development as I continue to add new projects and experiences.
                    </p>
                </div>
            </div>
        </div>
    );
};
