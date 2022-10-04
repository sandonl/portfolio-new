import Project from "./Project";

interface ProjectSectionProps {}

const ProjectSection = ({}: ProjectSectionProps) => {
  return (
    <div className="h-screen">
      <div className="my-1 h-20 w-full p-4">
        <div className="text-3xl font-semibold"> Projects </div>
      </div>
      <Project />
    </div>
  );
};
export default ProjectSection;
