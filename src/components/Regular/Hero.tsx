import { motion } from "framer-motion";

interface HeroProps {}

const Hero = ({}: HeroProps) => {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.7, type: "spring" }}
      className="absolute flex h-screen w-[50vw] flex-col justify-center p-32"
    >
      <div className="text-5xl font-bold">Hi, I'm Sandon</div>
      <div className="text-2xl font-thin">
        A developer originally from Melbourne. Currently living in Seoul
      </div>
    </motion.div>
  );
};
export default Hero;
