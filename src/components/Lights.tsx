import { useHelper } from "@react-three/drei";
import { useControls } from "leva";
import { useRef } from "react";
import { DirectionalLightHelper } from "three";

const Lights = () => {
  const { lightPosition, directionalLight } = useControls({
    lightPosition: [5, 5, 5],
    directionalLight: [10, 10, -5],
  });

  // const ref = useRef();
  // const direcLight = useHelper(ref, DirectionalLightHelper);

  return (
    <>
      <ambientLight intensity={1.0} />
      <directionalLight
        // ref={ref as any}
        position={directionalLight}
        intensity={0.5}
      />
      <directionalLight
        castShadow
        intensity={2}
        position={[50, 50, 25]}
        shadow-mapSize={[256, 256]}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <pointLight position={lightPosition} />
    </>
  );
};
export default Lights;
