import { motion } from "framer-motion";
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
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring" }}
      className="mb-2 h-52 w-full cursor-pointer border border-black p-4 drop-shadow-sm transition-colors hover:bg-rose-100 md:h-40"
      onClick={() => window.open(`${visit}`, "_blank")?.focus()}
    >
      <div className="text-2xl font-semibold"> {title} </div>
      <div className="text-l py-3"> {description} </div>
      <div className="flex justify-between py-2">
        <div className="hidden lg:flex">
          {tags.map((item, id) => (
            <div className=" pr-4" key={id}>
              {item}
            </div>
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
    </motion.div>
  );
};
export default Project;
