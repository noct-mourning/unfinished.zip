export default function RetroWindow({ children, title }) {
    return (
        <div className="retro-window">

        <div className="window-bar">
        <p>{title}</p>
        </div>

        <div className="window-content">
        {children}
        </div>

        </div>
    );
}
