import NavBar from "./components/NavBar";
import Hero from "./components/Regular/Hero";
import ThreeScene from "./components/ThreeScene";

const App = () => (
  <>
    <div className="">
      <div className="h-screen  font-medium">
        <NavBar />
        <Hero />
        <ThreeScene />
      </div>
      <div className="h-screen"></div>
    </div>
  </>
);

export default App;
