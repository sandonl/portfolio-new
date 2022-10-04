import Project from "./Project";
import { projects } from "../../constants/constants";

const ProjectSection = () => {
  return (
    <>
      <div className="z-[30] h-screen px-36">
        <div className="my-1 h-20 w-full">
          <div className=" text-3xl font-semibold"> Projects </div>
        </div>
        {projects.map((project, id) => (
          <Project project={project} key={id} />
        ))}

        <div className="h-10 pb-2 text-xs ">
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
