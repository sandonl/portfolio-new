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
      {/* <ProjectSection /> */}
      <div className="h-4 px-2 pb-2 text-xs ">
        Ballpit inspired by
        <a
          href="https://twitter.com/0xca0a"
          target="_blank"
          className="px-1 text-xs"
        >
          0xca0a
        </a>
      </div>
    </div>
  </>
);

export default App;
