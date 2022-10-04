interface HeroProps {}

const Hero = ({}: HeroProps) => {
  return (
    <div className="absolute flex h-screen w-[50vw] flex-col justify-center p-32">
      <div className="text-5xl font-bold">Hi, I'm Sandon</div>
      <div className="text-2xl ">
        I'm a developer originally from Melbourne, currently living in Seoul
      </div>
    </div>
  );
};
export default Hero;
