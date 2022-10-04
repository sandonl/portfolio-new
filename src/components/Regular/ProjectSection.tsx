import Project from "./Project";
import { projects } from "../../constants/constants";

const ProjectSection = () => {
  return (
    <>
      <div className="z-[30] h-screen px-36">
        <div className="my-1 h-20 w-full">
          <div className=" text-3xl font-semibold"> Projects </div>
        </div>
        {projects.map((project) => (
          <Project project={project} />
        ))}
        <div className="h-5" />
      </div>
    </>
  );
};
export default ProjectSection;
