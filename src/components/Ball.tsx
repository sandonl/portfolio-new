import { useSphere } from "@react-three/cannon";
import { useThree } from "@react-three/fiber";
import { BufferGeometry, InstancedMesh, Material } from "three";

interface BallProps {}

const Ball = ({}: BallProps) => {
  const { viewport } = useThree();
  const [ref] = useSphere(() => ({
    mass: 100,
    position: [4 - Math.random() * 8, viewport.height, 0],
    args: [0.5],
  }));

  return (
    <instancedMesh
      ref={ref as React.Ref<InstancedMesh<BufferGeometry, Material>>}
      castShadow
      receiveShadow
      //   @ts-ignore
      args={[null, null, 50]}
    >
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshLambertMaterial color="#d86666" />
    </instancedMesh>
  );
};
export default Ball;
