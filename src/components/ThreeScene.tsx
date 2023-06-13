import { Physics } from "@react-three/cannon";
import { PerspectiveCamera, Stats } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Ball from "./Ball";
import Borders from "./Borders";
import Lights from "./Lights";
import Mouse from "./Mouse";

const ThreeScene = () => {
  // const { cameraPosition } = useControls({ cameraPosition: [0, 0, 4] });

  return (
    <div className="hidden h-[calc(100%+10rem)] bg-slate-300 md:block md:w-full">
      <Canvas shadows>
        {/* <Stats /> */}
        <fog attach="fog" args={["blue", 3, 10]} />
        <PerspectiveCamera makeDefault position={[0, 1, 4]} fov={80} />
        {/* <OrbitControls /> */}
        <Lights />
        <Physics
          defaultContactMaterial={{ restitution: 0.5 }}
          gravity={[0, -50, 0]}
        >
          <Borders />
          <Ball />
          <Mouse />
        </Physics>
        {/* <Effects multisamping={8} renderIndex={1} /> */}
      </Canvas>
    </div>
  );
};

export default ThreeScene;
