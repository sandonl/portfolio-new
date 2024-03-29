import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface NavbarProps {}

const NavBar = ({}: NavbarProps) => {
  const [hamburgerOpen, setHamburgerOpen] = useState<boolean>(false);

  const toggleHamburger = () => setHamburgerOpen((prev) => !prev);

  return (
    <>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.3,
          duration: 0.5,
          type: "spring",
          damping: 12,
        }}
        className="absolute left-0 right-0 z-20 mx-auto box-border flex h-16 w-full items-center text-xl text-black"
      >
        <div className="max-w-8xl mx-auto">
          <div className="flex h-16 items-center justify-between space-x-48 lg:space-x-80">
            <a
              className="whitespace-nowrap px-6 py-4 font-semibold transition-colors hover:text-slate-100"
              href="/"
            >
              Sandon Lai
            </a>
            <div className="hidden space-x-2 p-4 text-sm md:flex">
              <a
                href="https://github.com/sandonl"
                target="_blank"
                className="px-4 transition-colors hover:text-slate-100"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/sandonlai/"
                target="_blank"
                className="px-4 transition-colors hover:text-slate-100"
              >
                LinkedIn
              </a>
              <a
                href="mailto:sandonnlai@gmail.com"
                target="_blank"
                className="px-4 transition-colors hover:text-slate-100"
              >
                Email
              </a>
            </div>
            <div
              className="animate-pulse cursor-pointer items-baseline p-4 md:hidden"
              onClick={toggleHamburger}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
          </div>
        </div>
      </motion.div>
      <AnimatePresence>
        {hamburgerOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.7, type: "spring", damping: 12 }}
            className="absolute top-20 z-20 flex w-full flex-col items-center border-slate-100 md:hidden"
          >
            <a
              href="https://github.com/sandonl"
              target="_blank"
              className="p-4 transition-colors hover:text-slate-100"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/sandonlai/"
              target="_blank"
              className="p-4 transition-colors hover:text-slate-100"
            >
              LinkedIn
            </a>
            <a
              href="mailto:sandonnlai@gmail.com"
              target="_blank"
              className="p-4 transition-colors hover:text-slate-100"
            >
              Email
            </a>
            <a
              href="https://twitter.com/snads_build"
              target="_blank"
              className="p-4 transition-colors hover:text-slate-100"
            >
              Twitter
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default NavBar;
