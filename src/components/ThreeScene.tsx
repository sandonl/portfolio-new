import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import Borders from "./Borders";
import Box from "./Box";
import Lights from "./Lights";
import Ball from "./Ball";

const ThreeScene = () => {
  return (
    <div className="h-screen bg-rose-200">
      <Canvas>
        <OrbitControls />
        <Lights />
        {/* <Box /> */}
        <Physics>
          <Borders />
          <Ball />
        </Physics>
      </Canvas>
    </div>
  );
};

export default ThreeScene;
