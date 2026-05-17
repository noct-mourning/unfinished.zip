import { useState, useEffect } from "react";

const moods = [
    { text: "sleep deprived", face: "X|" },
{ text: "coding at 2AM", face: ">.<" },
{ text: "burnt out but trying", face: ":)" },
{ text: "music carrying me", face: ":D" },
{ text: "motivation pending", face: ":/" },
];

export default function MoodCard() {
    const [moodIdx, setMoodIdx] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisible(false);
            setTimeout(() => {
                setMoodIdx((prev) => (prev + 1) % moods.length);
                setVisible(true);
            }, 300);
        }, 3500);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="mood" style={{ padding: "80px 40px 80px" }}>
        <div className="mood-card">
        <div className="pixel-face">{moods[moodIdx].face}</div>
        <div className="mood-text">
        <h2>CURRENT MOOD</h2>
        <div
        className="mood-current"
        style={{ opacity: visible ? 1 : 0, transition: "opacity 0.3s" }}
        >
        {moods[moodIdx].text}
        </div>
        <div className="mood-status">online — last seen: just now</div>
        </div>
        </div>
        </section>
    );
}
