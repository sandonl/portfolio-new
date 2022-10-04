import { Bloom, EffectComposer, SSAO } from "@react-three/postprocessing";

interface EffectsProps {}

const Effects = ({}: EffectsProps) => {
  return (
    <EffectComposer>
      {/* <SSAO radius={0.2} intensity={20} color="red" />
      <Bloom
        intensity={0.1}
        kernelSize={1}
        luminanceThreshold={0.5}
        luminanceSmoothing={0}
      /> */}
    </EffectComposer>
  );
};
export default Effects;
