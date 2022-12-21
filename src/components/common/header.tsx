import React from "react";

function HeaderComponent() {
  return (
    <nav className="flex flex-wrap items-center justify-between bg-slate-300 p-6">
      {/* <header className="flex h-screen flex-col justify-center text-left">
        <h1 className="text-4xl font-bold text-white">My Site</h1>
        <nav>
          <ul className="list-reset flex flex-col text-left">
            <li className="mb-2">
              <a
                href="#"
                className="text-xl font-semibold text-white hover:text-gray-300"
              >
                Home
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="text-xl font-semibold text-white hover:text-gray-300"
              >
                About
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="text-xl font-semibold text-white hover:text-gray-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header> */}

      <div className="flex-no-shrink mr-6 flex items-center text-white">
        <svg
          className="mr-2 h-8 w-8"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
        </svg>
        <span className="text-xl font-semibold tracking-tight">
          Tailwind CSS
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
