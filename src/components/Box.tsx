import { a, config, useSpring } from "@react-spring/three";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { useRef, useState } from "react";
import { Mesh } from "three";

const Box = () => {
  const myMesh = useRef<Mesh>(null);
  const [active, setActive] = useState(false);
  // const { color } = useControls({ color: "royalblue" });

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
      <meshPhongMaterial color={"royalBlue"} />
    </a.mesh>
  );
};

export default Box;
