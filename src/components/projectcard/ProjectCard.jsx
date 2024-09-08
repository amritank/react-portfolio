import "./ProjectCard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons";


function ProjectCard() {
    return (

        <div className="projectContainer">
            <div id="project1" className="projectcmn" >
                <p className="pdetailscmn">Tech Blog</p>
                <p className="pdetailscmn" >
                    <a href="https://github.com/amritank/tech-blog" target="_blank">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </p>
                <p className="pdetailscmn">Postgress and express</p>
            </div>
            <div id="project2" className="projectcmn" >
                <p className="pdetailscmn">Bravissimo</p>
                <p className="pdetailscmn">
                    <a href="https://github.com/amritank/bravissimo" target="_blank">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </p>
                <p className="pdetailscmn">Postgress and express</p>
            </div>
            <div id="project3" className="projectcmn" >
                <p className="pdetailscmn">
                    <a href="https://deploy-preview-61--verdant-druid-69173a.netlify.app/" target="_bank">
                        KnowItForward
                    </a></p>
                <p className="pdetailscmn">
                    <a href="https://github.com/kalisurf3r/knowitforward-frontend" target="_blank">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </p>
                <p className="pdetailscmn">Postgress, React and express</p>
            </div>
            <div id="project4" className="projectcmn" >
                <p className="pdetailscmn">Weather App</p>
                <p className="pdetailscmn">
                    <a href="https://github.com/amritank/weather-capp" target="_blank">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </p>
                <p className="pdetailscmn">HTML, CSS and Local storage</p>
            </div>
            <div id="project5" className="projectcmn" >
                <p className="pdetailscmn">Task Board</p>
                <p className="pdetailscmn">
                    <a href="https://github.com/amritank/ctask-board" target="_blank">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </p>
                <p className="pdetailscmn">HTML, CSS and Local storage</p>
            </div>
        </div >

    );


}

export default ProjectCard;