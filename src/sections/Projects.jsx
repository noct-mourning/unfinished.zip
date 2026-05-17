export default function Projects() {
    const statusClass = {
        wip: "status-tag wip",
        shipped: "status-tag done",
        paused: "status-tag paused",
        concept: "status-tag idea",
    };

    const projects = [
        {
            title: "Multi-Page App",
            desc: "A simple navigation app that doesn't require reloading the browser when navigating between pages",
            status: "wip",
            bg: "white",
            link: "https://react-multi-page-app.netlify.app/",
        },
        {
            title: "Message-meter App",
            desc: "A bold neo-brutalist React interface that explores interactive state management through a counter system and live user input.",
            status: "shipped",
            bg: "#fde8ff",
            link: "https://benevolent-cactus-b98517.netlify.app/",
        },
    ];  // 👈 this was missing

    return (
        <section className="section" id="projects">
        <div className="section-label">// projects/ (some finished, most aren't)</div>
        <div className="projects-grid">
        {projects.map((project, index) => (
            <a  // 👈 this was missing
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
            key={index}
            >
            <div
            className="project-window"
            style={{ backgroundColor: project.bg }}
            >
            <div className="proj-bar">
            <div className="proj-dot" style={{ background: "#ff5f57" }}></div>
            <div className="proj-dot" style={{ background: "#febc2e" }}></div>
            <div className="proj-dot" style={{ background: "#28c840" }}></div>
            </div>
            <div className="proj-body">
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <span className={statusClass[project.status]}>{project.status}</span>
            </div>
            </div>
            </a>
        ))}
        </div>
        </section>
    );
}
