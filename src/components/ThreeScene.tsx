import { Physics } from "@react-three/cannon";
import { Effects, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Ball from "./Ball";
import Borders from "./Borders";
import Lights from "./Lights";
import Mouse from "./Mouse";

const ThreeScene = () => {
  // const { cameraPosition } = useControls({ cameraPosition: [0, 0, 4] });

  return (
    <div className="hidden h-[calc(100%+10rem)] bg-rose-200 md:block md:w-full">
      <Canvas frameloop="demand">
        <fog attach="fog" args={["red", 25, 35]} />
        <PerspectiveCamera makeDefault position={[0, 1, 4]} fov={80} />
        {/* <OrbitControls /> */}
        <Lights />
        <Physics
          defaultContactMaterial={{ restitution: 0.5 }}
          gravity={[0, -50, 0]}
        >
          <Borders />
          <Ball />
          <group position={[0, 0, -5]}>
            <Mouse />
          </group>
        </Physics>
        {/* <Effects multisamping={8} renderIndex={1} /> */}
      </Canvas>
    </div>
  );
};

export default ThreeScene;
