const thoughts = [
    "unfinished things feel alive",
"motivation pending...",
"too many ideas not enough RAM"
];

export default function ThoughtNotes() {
    return (
        <section className="thoughts">

        {thoughts.map((thought, index) => (
            <div key={index} className="note">
            {thought}
            </div>
        ))}

        </section>
    );
}
