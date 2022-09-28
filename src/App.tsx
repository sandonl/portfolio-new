import { a, config, useSpring } from "@react-spring/three";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Mesh } from "three";

const Box = () => {
  const myMesh = useRef<Mesh>(null);
  const [active, setActive] = useState(false);

  // const springs = useSpring({ scale: active ? 1.5 : 1 });
  const { scale } = useSpring({
    scale: active ? 1.5 : 1,
    config: config.wobbly,
  });

  useFrame(() => {
    if (myMesh.current) {
      myMesh.current.rotation.x += 0.01;
      myMesh.current.rotation.y += 0.01;
    }
  });

  return (
    <a.mesh scale={scale} onClick={() => setActive(!active)} ref={myMesh}>
      <boxGeometry />
      <meshPhongMaterial color="royalblue" />
    </a.mesh>
  );
};

const ThreeScene = () => {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight />
      <pointLight position={[5, 5, 5]} />
      <Box />
    </Canvas>
  );
};

const App = () => {
  return (
    <div className="h-screen">
      <ThreeScene />
    </div>
  );
};

export default App;
