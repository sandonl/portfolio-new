interface ProjectProps {
  project: {
    title: string;
    description: string;
    tags: string[];
    source: string;
    visit: string;
    id: number;
  };
}

const Project = (props: ProjectProps) => {
  const { title, description, tags, source, visit } = props.project;

  return (
    <div>
      <div className="mb-2 h-36 w-full border border-black p-4 drop-shadow-sm transition-colors hover:bg-rose-100">
        <div className="text-2xl font-semibold"> {title} </div>
        <div className="text-l py-2"> {description} </div>
        <div className="flex justify-between py-4">
          <div className="flex">
            {tags.map((item) => (
              <div className=" pr-4"> {item} </div>
            ))}
          </div>
          <div>
            <a
              className="px-2 transition-colors hover:text-rose-300"
              href={visit}
              target="_blank"
            >
              Visit
            </a>
            <a
              className="px-2 transition-colors hover:text-rose-300"
              href={source}
              target="_blank"
            >
              Source
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Project;
