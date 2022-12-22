import React from "react";

function HeaderModal() {
  return (
    <div
      id="dropdownInformation"
      className="absolute z-10 w-44 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-500"
    >
      <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
        <div>Bonnie Green</div>
        <div className="truncate font-medium">name@flowbite.com</div>
      </div>
      <ul
        className="py-1 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownInformationButton"
      >
        <button
          id="doubleDropdownButton"
          data-dropdown-toggle="doubleDropdown"
          data-dropdown-placement="right-start"
          type="button"
          className="flex w-full items-center justify-between py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          Dropdown
          <svg
            aria-hidden="true"
            className="h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="flex justify-center">
          <div>
            <div className="dropend relative">
              <button
                className="
          dropdown-toggle
          flex
          items-center
          whitespace-nowrap
          rounded
          bg-blue-600
          px-6
          py-2.5
          text-xs
          font-medium
          uppercase
          leading-tight text-white
          shadow-md transition duration-150 ease-in-out
          hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700
          focus:shadow-lg
          focus:outline-none
          focus:ring-0
          active:bg-blue-800
          active:text-white
          active:shadow-lg
        "
                type="button"
                id="dropdownMenuButton1e"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropend
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="caret-right"
                  className="ml-2 w-1.5"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 192 512"
                >
                  <path
                    fill="currentColor"
                    d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"
                  ></path>
                </svg>
              </button>
              <ul
                className="
                dropdown-menu
          absolute
          z-50
          float-left
          m-0
          mt-1
          min-w-max
          list-none
          rounded-lg
          border-none
          bg-white
          bg-clip-padding
          py-2
          text-left
          text-base
          shadow-lg
        "
                aria-labelledby="dropdownMenuButton1e"
              >
                <li>
                  <a
                    className="
              dropdown-item
              block
              w-full
              whitespace-nowrap
              bg-transparent
              py-2
              px-4
              text-sm
              font-normal
              text-gray-700
              hover:bg-gray-100
            "
                    href="#"
                  >
                    Action
                  </a>
                </li>
                <li>
                  <a
                    className="
              dropdown-item
              block
              w-full
              whitespace-nowrap
              bg-transparent
              py-2
              px-4
              text-sm
              font-normal
              text-gray-700
              hover:bg-gray-100
            "
                    href="#"
                  >
                    Another action
                  </a>
                </li>
                <li>
                  <a
                    className="
              dropdown-item
              block
              w-full
              whitespace-nowrap
              bg-transparent
              py-2
              px-4
              text-sm
              font-normal
              text-gray-700
              hover:bg-gray-100
            "
                    href="#"
                  >
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div
          id="doubleDropdown"
          className="z-10  w-44 divide-y divide-gray-100 rounded bg-white shadow dark:bg-gray-700"
        >
          <ul
            className="py-1 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="doubleDropdownButton"
          >
            <li>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Overview
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                My downloads
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Billing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Rewards
              </a>
            </li>
          </ul>
        </div> */}
        <li>
          <a
            href="#"
            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Settings
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Earnings
          </a>
        </li>
      </ul>
      <div className="py-1">
        <a
          href="#"
          className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          Sign out
        </a>
      </div>
    </div>
  );
}

export default HeaderModal;
