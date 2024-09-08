import "./Resume.css"

function Resume() {
    return (
        <div className="resumeParentContainer">
            <div className="resumeContainer">
                <h3 className="resumeHeader">Resume</h3>
                <a className="mt-5" href="/Amrita_Nair_Resume.pdf" download="Amrita_Nair_Resume.pdf">My Resume</a>
                <h4 className="mt-5">Web Development (MERN Stack)</h4>
                <ul>
                    <li>Frontend Development: HTML, CSS, JavaScript, React.js</li>
                    <li>Backend Development: Node.js, Express.js</li>
                    <li>Databases: MongoDB (NoSQL)</li>
                    <li>Version Control: Git, GitHub</li>
                    <li>Web Development Practices: REST APIs, full-stack application development, component-based design, responsive web design</li>
                </ul>
                <h4 className="mt-5">Test Automation Engineering (SDET)</h4>
                <ul>
                    <li>Test Automation: Design and execution of automated test suites</li>
                    <li>Testing Tools: Framework development and maintenance</li>
                    <li>Testing Types: Functional, regression, stress, and system testing</li>
                    <li>Software Development Life Cycle: Authoring test plans, bug triage, leading major releases through the full testing lifecycle</li>
                    <li>File Systems & Storage: Experience with complex file systems, virtualized environments, replication, storage protocols, and I/O workloads</li>
                </ul>








            </div>
        </div>
    );
}

export default Resume;