const stickers = ["★", "✦", "◈", "⊕", "⋆", "✶"];

export default function Hero() {
    return (
        <section className="hero">

        {stickers.map((sticker, index) => (
            <span key={index} className={`sticker sticker-${index + 1}`}>
            {sticker}
            </span>
        ))}

        <div className="window">
        <p className="tag">portfolio before portfolio</p>
        <h1>
        STILL <span>LOADING...</span>
        </h1>
        <p className="hero-sub">
        designer / dev / whatever<br />
        somewhere between an idea and a deadline
        </p>
        <button onClick={() => document.getElementById('mood').scrollIntoView({ behavior: 'smooth' })}>
        enter room ↓
        </button>
        </div>

        </section>
    );
}
