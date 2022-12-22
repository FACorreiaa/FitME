import React from "react";
import { VscMenu } from "react-icons/vsc";
import Image from "next/image";
type HeaderComponentProps = {
  onMenuButtonClick: () => void;
};
function HeaderComponent({ onMenuButtonClick }: HeaderComponentProps) {
  return (
    <nav className="fixed top-0 left-0 z-20 w-full border-b border-gray-200 bg-white  py-2.5 dark:border-gray-400 dark:bg-slate-500 sm:px-4">
      <div className=" mx-auto flex flex-wrap items-center justify-between">
        <button type="button" onClick={onMenuButtonClick}>
          <VscMenu size={30} />
        </button>
        <a
          href="https://flowbite.com/"
          className="flex items-center dark:text-white"
        >
          <Image
            width={30}
            height={30}
            src="/assets/google.svg"
            className="mr-3 h-6 dark:text-white sm:h-9"
            alt="Fittracker Logo Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Fitness Tracker
          </span>
        </a>
        <div className="flex md:order-2">
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
