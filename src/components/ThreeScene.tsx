import { Physics } from "@react-three/cannon";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useControls } from "leva";
import Ball from "./Ball";
import Borders from "./Borders";
import Effects from "./Effects";
import Lights from "./Lights";
import Mouse from "./Mouse";

const ThreeScene = () => {
  const { cameraPosition } = useControls({ cameraPosition: [0, 0, 4] });

  return (
    <div className="h-[calc(100%+10rem)] bg-rose-200">
      <Canvas frameloop="demand">
        <fog attach="fog" args={["red", 25, 35]} />
        <PerspectiveCamera makeDefault position={[0, 1, 4]} fov={80} />
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
        {/* <Effects /> */}
      </Canvas>
    </div>
  );
};

export default ThreeScene;
