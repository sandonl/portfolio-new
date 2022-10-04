interface NavbarProps {}

const NavBar = ({}: NavbarProps) => {
  return (
    <div className="absolute z-20 box-border flex h-20 w-full items-center justify-between px-32 text-xl text-black">
      <a
        className="px-6 py-4 font-semibold transition-colors hover:text-rose-100"
        href="/"
      >
        Sandon Lai
      </a>
      <div className="p-4 text-sm">
        <a
          href="https://github.com/sandonl"
          target="_blank"
          className="px-4 transition-colors hover:text-rose-100"
        >
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/sandonlai/"
          target="_blank"
          className="px-4 transition-colors hover:text-rose-100"
        >
          LinkedIn
        </a>
        <a
          href="mailto:sandonnlai@gmail.com"
          target="_blank"
          className="px-4 transition-colors hover:text-rose-100"
        >
          Email
        </a>
        <a
          href="https://twitter.com/snads_build"
          target="_blank"
          className="px-4 transition-colors hover:text-rose-100"
        >
          Twitter
        </a>
      </div>
    </div>
  );
};
export default NavBar;
