import { motion } from "framer-motion";

interface HeroProps {}

const Hero = ({}: HeroProps) => {
  return (
    <>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="absolute ml-0 flex h-screen max-w-md flex-col justify-center p-12 leading-relaxed lg:ml-48 2xl:ml-96"
      >
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.7,
            duration: 0.5,
            damping: 12,
          }}
          className="text-5xl font-bold"
        >
          Hey, I'm Sandon
        </motion.div>
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.9,
            duration: 0.5,
            damping: 12,
          }}
          className="py-2 text-2xl font-normal"
        >
          I'm a developer currently living in Melbourne, Australia.
        </motion.div>
        <div className="py-2 md:hidden">
          For the full experience, try viewing on the web!
        </div>
      </motion.div>
    </>
  );
};
export default Hero;
