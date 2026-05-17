const sketches = [
    { src: null, label: "sketch 001" },
{ src: null, label: "sketch 002" },
{ src: null, label: "sketch 003" },
{ src: null, label: "sketch 004" },
];

export default function Sketches() {
    return (
        <section className="section" id="sketches">
        <div className="section-label">// sketches/ (wip forever)</div>
        <div className="sketch-board">
        {sketches.map((sketch, index) => (
            <div
            key={index}
            className="polaroid"
            style={{ transform: `rotate(${index % 2 === 0 ? "-" : ""}${index + 1.5}deg)` }}
            >
            <div className="polaroid-img">
            {sketch.src ? (
                <img src={sketch.src} alt={sketch.label} />
            ) : (
                <div className="placeholder-img">?</div>
            )}
            </div>
            <div className="polaroid-label">{sketch.label}</div>
            </div>
        ))}
        </div>
        </section>
    );
}
