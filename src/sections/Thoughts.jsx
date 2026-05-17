const thoughts = [
    "unfinished things feel alive",
"motivation pending...",
"too many ideas not enough RAM",
"music carrying me today",
"ship it then fix it",
];

const colors = ["#fef08a", "#fecaca", "#c8f0c8", "#ddd6fe", "#fed7aa"];

const positions = [
    { top: "20px", left: "0px", rotate: "-2.5deg" },
{ top: "10px", left: "190px", rotate: "1.8deg" },
{ top: "40px", left: "370px", rotate: "-1deg" },
{ top: "180px", left: "80px", rotate: "2.2deg" },
{ top: "170px", left: "280px", rotate: "-1.5deg" },
];

export default function Thoughts() {
    return (
        <section className="section" id="thoughts">
        <div className="section-label">// thoughts.txt (unfiltered)</div>
        <div className="thoughts-wrap">
        {thoughts.map((thought, index) => (
            <div
            key={index}
            className="sticky-note"
            style={{
                background: colors[index],
                top: positions[index].top,
                left: positions[index].left,
                transform: `rotate(${positions[index].rotate})`,
            }}
            >
            {thought}
            </div>
        ))}
        </div>
        </section>
    );
}
