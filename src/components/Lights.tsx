import { useControls } from "leva";

const Lights = () => {
  const { lightPosition } = useControls({ lightPosition: [5, 5, 5] });

  return (
    <>
      <ambientLight />
      <pointLight position={lightPosition} />
    </>
  );
};
export default Lights;
