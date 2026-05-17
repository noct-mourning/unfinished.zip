export default function Playlists() {
    return (
        <section className="section" id="playlists">
        <div className="section-label">// now_playing.m3u</div>
        <div className="retro-window">
        <div className="window-bar">
        <div className="window-dot"></div>
        <div className="window-dot"></div>
        <div className="window-dot"></div>
        <span className="window-title">playlist.exe</span>
        </div>
        <div className="window-body">
        <iframe
        src="https://open.spotify.com/artist/7gxV0ojcuBqOQfsjsxQJW6"
        width="100%"
        height="152"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        style={{ border: "none" }}
        />
        </div>
        </div>
        </section>
    );
}
