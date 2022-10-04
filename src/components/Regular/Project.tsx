interface ProjectProps {}

const Project = ({}: ProjectProps) => {
  const name = "ProjectName";
  const description = "This is a description of the project";
  const stack = ["React", "Vite", "XD"];

  return (
    <div>
      <div className="h-36 w-full border border-black p-4">
        <div className="text-2xl font-semibold"> {name} </div>
        <div className="py-2 text-xl"> {description} </div>
        <div className="flex justify-between py-4">
          <div className="flex">
            {stack.map((item) => (
              <div className=" pr-4"> {item} </div>
            ))}
          </div>
          <div>
            <button className="px-2"> Visit </button>
            <button className="px-2"> Source </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Project;
