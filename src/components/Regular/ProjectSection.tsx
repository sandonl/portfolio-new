import { projects } from "../../constants/constants";
import Project from "./Project";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const ProjectSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animation = useAnimation();

  useEffect(() => {
    if (isInView) {
      animation.start({
        x: 0,
        opacity: 1,
        transition: { type: "spring", duration: 1.7 },
      });
    }

    if (!isInView) {
      animation.start({
        x: "-100vw",
        opacity: 0,
      });
    }
  }, [isInView]);

  return (
    <>
      <div className="z-[30] mx-auto mb-10 max-w-5xl px-3">
        <div className="mx-auto mt-20 h-16">
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
      </div>
    </>
  );
};
export default ProjectSection;
