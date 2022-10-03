interface NavbarProps {}

const NavBar = ({}: NavbarProps) => {
  return (
    <div className="absolute z-20 flex h-20 w-screen items-center justify-between ">
      <div className="px-6 py-4 font-semibold"> Sandon Lai </div>
      <div className="p-4">
        <a href="https://github.com/sandonl" target="_blank" className="px-4">
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/sandonlai/"
          target="_blank"
          className="px-4"
        >
          LinkedIn
        </a>
        <a href="mailto:sandonnlai@gmail.com" target="_blank" className="px-4">
          Email
        </a>
        <a
          href="https://twitter.com/snads_build"
          target="_blank"
          className="px-4"
        >
          Twitter
        </a>
      </div>
    </div>
  );
};
export default NavBar;
