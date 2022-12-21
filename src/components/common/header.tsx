import React from "react";
import { VscMenu } from "react-icons/vsc";

type HeaderComponentProps = {
  onMenuButtonClick: () => void;
};
function HeaderComponent({ onMenuButtonClick }: HeaderComponentProps) {
  return (
    <nav className="relative flex flex-wrap items-center justify-between bg-slate-300 p-4">
      <div className="flex-no-shrink mr-6 flex items-center text-white">
        <button type="button" onClick={onMenuButtonClick}>
          <VscMenu size={30} />
        </button>

        <span className="pl-4 text-xl font-semibold tracking-tight">
          Fitness Tracker
        </span>
      </div>
      <div className="block lg:hidden">
        <button className="text-teal-lighter border-teal-light flex items-center rounded border px-3 py-2 hover:border-white hover:text-white">
          <svg
            className="h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="block w-full flex-grow lg:flex lg:w-auto lg:items-center">
        <div className="text-sm lg:flex-grow">
          <a
            href="#responsive-header"
            className="text-teal-lighter mt-4 mr-4 block hover:text-white lg:mt-0 lg:inline-block"
          >
            Docs
          </a>
          <a
            href="#responsive-header"
            className="text-teal-lighter mt-4 mr-4 block hover:text-white lg:mt-0 lg:inline-block"
          >
            Examples
          </a>
          <a
            href="#responsive-header"
            className="text-teal-lighter mt-4 block hover:text-white lg:mt-0 lg:inline-block"
          >
            Blog
          </a>
        </div>
        <div>
          <div className="relative h-10 w-10 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-600">
            <svg
              className="absolute -left-1 h-12 w-12 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default HeaderComponent;
