import ProjectCard from "../../components/projectcard/ProjectCard";
import './Portfolio.css'

function Portfolio() {
    const projectNames = ["techblog", "bravissimo"]
    return (
        <div className="portfolioParentContainer">
            <div className="portfolioContainer">
                <h3 className="portfolioHeader">Portfolio Page</h3>
                <ProjectCard />
                {/* <ProjectCard projects={projectNames} /> */}
            </div>
        </div>
    );
}

export default Portfolio;