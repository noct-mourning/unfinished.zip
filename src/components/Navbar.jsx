import { useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
        <a href="#" className="logo" style={{ textDecoration: "none", color: "inherit" }}>
        unfinished.zip
        </a>

        {/* HAMBURGER BUTTON */}
        <button
        className="hamburger"
        onClick={() => setMenuOpen((prev) => !prev)}
        >
        {menuOpen ? "✕" : "☰"}
        </button>

        {/* NAV LINKS */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><a href="#projects" onClick={() => setMenuOpen(false)}>projects</a></li>
        <li><a href="#sketches" onClick={() => setMenuOpen(false)}>sketches</a></li>
        <li><a href="#thoughts" onClick={() => setMenuOpen(false)}>thoughts</a></li>
        <li><a href="#playlists" onClick={() => setMenuOpen(false)}>playlists</a></li>
        </ul>
        </nav>
    );
}
