import { motion } from "framer-motion";

interface HeroProps {}

const Hero = ({}: HeroProps) => {
  return (
    <>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ delay: 0.7, duration: 0.5, type: "spring", damping: 12 }}
        className="absolute flex h-screen max-w-xl flex-col justify-center p-12 leading-relaxed md:w-[50vw] md:p-32"
      >
        <div className="text-5xl font-bold">Hi! I'm Sandon</div>
        <div className="text-2xl font-normal">
          A developer originally from Melbourne. Currently living in Seoul.
        </div>
        <div className="py-2 md:hidden">
          For the full experience, try viewing on the web!
        </div>
      </motion.div>
    </>
  );
};
export default Hero;
