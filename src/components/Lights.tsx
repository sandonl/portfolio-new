const Lights = () => {
  // const { topDirectionalLight, directionalLight } = useControls({
  //   // lightPosition: [5, 5, 5],
  //   topDirectionalLight: [20, 30, 20],
  //   directionalLight: [-30, -10, -10],
  // });

  // const ref = useRef();
  // const ref2 = useRef();
  // const direcLight = useHelper(ref, DirectionalLightHelper);
  // const direcLight2 = useHelper(ref2, DirectionalLightHelper);

  return (
    <>
      <ambientLight intensity={1.0} />
      <directionalLight
        // ref={ref as any}
        position={[-30, -10, -10]}
      />
      {/* <directionalLight
        // ref={ref as any}
        position={[10, 20, -5]}
        intensity={0.5}
      /> */}
      <directionalLight
        castShadow
        intensity={4}
        // ref={ref2 as any}
        position={[20, 30, 20]}
        shadow-mapSize={[256, 256]}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      {/* <pointLight position={[5, 5, 5]} /> */}
    </>
  );
};
export default Lights;
