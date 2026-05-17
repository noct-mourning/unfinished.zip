export default function ProjectWindow({ title, desc, status }) {
    return (
        <div className="project-window">
        <div className="topbar">
        <span></span>
        <span></span>
        <span></span>
        </div>

        <h2>{title}</h2>

        <p>{desc}</p>

        <div className="status">
        {status}
        </div>
        </div>
    );
}
