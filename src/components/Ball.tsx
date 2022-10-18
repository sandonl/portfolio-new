import { useSphere } from "@react-three/cannon";
import { useFrame, useThree } from "@react-three/fiber";
import { BufferGeometry, InstancedMesh, Material } from "three";
import { useControls } from "leva";

interface BallProps {}

const Ball = ({}: BallProps) => {
  const { viewport } = useThree();
  // const { ballColor } = useControls({ ballColor: "#ff5151" });
  const [ref] = useSphere(() => ({
    mass: 50,
    position: [4 - Math.random() * 8, viewport.height, 0],
    args: [0.4],
    sleepSpeedLimit: 5,
  }));

  return (
    // Better performance on the instanced meshes
    <instancedMesh
      ref={ref as React.Ref<InstancedMesh<BufferGeometry, Material>>}
      castShadow
      receiveShadow
      //   @ts-ignore
      args={[null, null, 70]}
    >
      <sphereGeometry args={[0.4, 32, 32]} />
      <meshLambertMaterial color={"#ff5151"} />
    </instancedMesh>
  );
};
export default Ball;
