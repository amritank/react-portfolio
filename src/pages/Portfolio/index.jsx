import ProjectCard from "../../components/projectcard/ProjectCard";
import './Portfolio.css'

function Portfolio() {
    const projectNames = ["techblog", "bravissimo"]
    return (
        <div className="portfolioContainer">
            <h1 className="baskervville-sc-regular">Portfolio Page</h1>
            <ProjectCard />
            {/* <ProjectCard projects={projectNames} /> */}
        </div>
    );
}

export default Portfolio;