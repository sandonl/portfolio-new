import { useSphere } from "@react-three/cannon";
import { useFrame, useThree } from "@react-three/fiber";
import { BufferGeometry, InstancedMesh, Material } from "three";
import { useControls } from "leva";

interface BallProps {}

const Ball = ({}: BallProps) => {
  const { viewport } = useThree();
  // const { ballColor } = useControls({ ballColor: "#f55d5d" });
  const [ref, api] = useSphere(() => ({
    mass: 100,
    position: [4 - Math.random() * 8, viewport.height, 0],
    args: [0.4],
    sleepSpeedLimit: 3,
  }));

  // useFrame((state) =>
  //   api.applyImpulse([0, viewport.height, 0], [0, viewport.height, 0])
  // );

  return (
    <instancedMesh
      ref={ref as React.Ref<InstancedMesh<BufferGeometry, Material>>}
      castShadow
      receiveShadow
      //   @ts-ignore
      args={[null, null, 75]}
    >
      <sphereGeometry args={[0.4, 32, 32]} />
      <meshLambertMaterial color={"#f55d5d"} />
    </instancedMesh>
  );
};
export default Ball;
