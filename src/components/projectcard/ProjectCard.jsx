import "./ProjectCard.css";

function ProjectCard() {
    return (

        <div id="projectCardContainer">
            <div id="project1" className="projectcmn" >
                <p className="pdetailscmn">Tech Blog</p>
                <p className="pdetailscmn" >
                    <a href="https://github.com/amritank" target="_blank">
                        <i styles={{ fontWeight: 'bolder' }} className="bi bi-github"></i>
                    </a>
                </p>
                <p className="pdetailscmn">Postgress and express</p>
            </div>
            <div id="project2" className="projectcmn" >
                <p className="pdetailscmn">Bravissimo</p>
                <p className="pdetailscmn">
                    <a href="https://github.com/amritank" target="_blank">
                        <i className="bi bi-github"></i>
                    </a>
                </p>
                <p className="pdetailscmn">Postgress and express</p>
            </div>
            <div id="project3" className="projectcmn" >
                <p className="pdetailscmn">Project 3</p>
                <p className="pdetailscmn">
                    <a href="https://github.com/amritank" target="_blank">
                        <i className="bi bi-github"></i>
                    </a>
                </p>
                <p className="pdetailscmn">Postgress and express</p>
            </div>
            <div id="project4" className="projectcmn" >
                <p className="pdetailscmn">Project 4</p>
                <p className="pdetailscmn">
                    <a href="https://github.com/amritank" target="_blank">
                        <i className="bi bi-github"></i>
                    </a>
                </p>
                <p className="pdetailscmn">Postgress and express</p>
            </div>
            <div id="project5" className="projectcmn" >
                <p className="pdetailscmn">Project 5</p>
                <p className="pdetailscmn">
                    <a href="https://github.com/amritank" target="_blank">
                        <i className="bi bi-github"></i>
                    </a>
                </p>
                <p className="pdetailscmn">Postgress and express</p>
            </div>
        </div >

    );


}

export default ProjectCard;