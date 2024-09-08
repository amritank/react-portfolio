import profileImg from '/profile.jpg';
import "./About.css"

const About = () => {
    return (
        <div className="aboutParentContainer">
            <div className="aboutContainer">
                <h3 className="aboutItemsHeader">About Me</h3>
                <img className="aboutItems" src={profileImg} id='profileImg' alt='profile image'></img>
                <p className="aboutItems" id="aboutMeDesc">
                    I am a junior web developer with growing expertise in the MERN stack, passionate about building responsive and dynamic web applications. I am eager to apply my skills in JavaScript, React, Postgress, Node.js, and MongoDB to real-world projects and further develop my front-end and back-end capabilities.
                    <br /> <br />
                    Alongside my web development journey, I bring extensive experience as a test automation engineer. I have worked on automated test suites, test library and framework development, and led major releases through all stages of the testing life cycle. My strong foundation in software testing—across functional, regression, stress, and system testing—complements my development skills, ensuring quality-driven software delivery.
                    <br /> <br />
                    With deep expertise in complex file systems, virtualized environments, storage protocols, and I/O workloads, I aim to bridge my development and testing experiences to contribute to high-performing, reliable applications.       </p>
            </div>
        </div>

    );
};

export default About;