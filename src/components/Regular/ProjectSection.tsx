import Project from "./Project";
import { projects } from "../../constants/constants";
import { motion } from "framer-motion";

const ProjectSection = () => {
  return (
    <>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, type: "spring" }}
        className="z-[30] h-screen px-3 md:px-36"
      >
        <div className="my-1 h-20 w-full">
          <div className=" text-3xl font-semibold"> Projects </div>
        </div>
        {projects.map((project, id) => (
          <Project project={project} key={id} />
        ))}

        <div className="h-4 pb-2 text-xs ">
          Inspired by
          <a
            href="https://twitter.com/0xca0a"
            target="_blank"
            className="px-1 text-xs"
          >
            0xca0a
          </a>
        </div>
      </motion.div>
    </>
  );
};
export default ProjectSection;
