import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Box from "./Box";
import Lights from "./Lights";

const ThreeScene = () => {
  return (
    <Canvas>
      <OrbitControls />
      <Lights />
      <Box />
    </Canvas>
  );
};

export default ThreeScene;
