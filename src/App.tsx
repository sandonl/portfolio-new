import Hero from "./components/Regular/Hero";
import NavBar from "./components/Regular/NavBar";
import ProjectSection from "./components/Regular/ProjectSection";
import ThreeScene from "./components/ThreeScene";

const App = () => (
  <>
    <div>
      <div className="h-screen font-medium">
        <NavBar />
        <Hero />
        <ThreeScene />
      </div>
      <ProjectSection />
    </div>
  </>
);

export default App;
