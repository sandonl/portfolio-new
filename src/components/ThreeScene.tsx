import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import Borders from "./Borders";
import Box from "./Box";
import Lights from "./Lights";
import Ball from "./Ball";
import Mouse from "./Mouse";
import { useControls } from "leva";
import { Vector3 } from "three";

const ThreeScene = () => {
  const { cameraPosition } = useControls({ cameraPosition: [0, 0, 4] });

  return (
    <div className="h-screen bg-rose-200">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 2, 4]} fov={75} />
        {/* <OrbitControls /> */}
        <Lights />
        {/* <Box /> */}
        <Physics
          defaultContactMaterial={{ restitution: 0.5 }}
          gravity={[0, -50, 0]}
        >
          <Borders />
          <Ball />
          <Mouse />
        </Physics>
      </Canvas>
    </div>
  );
};

export default ThreeScene;
