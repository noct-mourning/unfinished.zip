import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MoodCard from "./components/MoodCard";
import Projects from "./sections/Projects";
import Sketches from "./sections/Sketches";
import Playlists from "./sections/Playlists";
import Thoughts from "./sections/Thoughts";
import './index.css'
function App() {
  return (
    <main>
    <Navbar />

    <Hero />

    <MoodCard />

    <Projects />

    <Sketches />

    <Thoughts />

    <Playlists />

    </main>
  );
}

export default App;
