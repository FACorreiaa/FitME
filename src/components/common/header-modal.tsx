import React, { useState } from "react";
import { HiOutlineCalculator, HiOutlineHome } from "react-icons/hi2";
import { RiUserLine } from "react-icons/ri";
import { TfiBarChartAlt, TfiSettings, TfiVideoCamera } from "react-icons/tfi";
import { VscSignOut } from "react-icons/vsc";

import HeaderModalAuthItem from "./header-modal-items/header-modal-auth-item";
import HeaderModalSubItem from "./header-modal-items/header-modal-expanded-item";
import HeaderModalGeneralItem from "./header-modal-items/header-modal-general-item";
import HeaderModalMultiItem from "./header-modal-items/header-modal-multi-item";

type HeaderModalProps = {
  onClick: () => void;
};
function HeaderModal({ onClick }: HeaderModalProps) {
  const [showTestOptions, setShowTestOptions] = useState(false);
  return (
    <div
      id="dropdownInformation"
      className="z-21 absolute top-16 z-10 w-44 divide-y     divide-gray-200
            rounded bg-white shadow dark:divide-gray-600 dark:bg-dracula-darker-700 dark:text-dracula-light-50"
    >
      <HeaderModalAuthItem username={"username"} email={"email"} />
      <ul
        className="py-1 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownInformationButton"
      >
        <HeaderModalGeneralItem
          href="#"
          Icon={<HiOutlineHome size={20} />}
          label="Home"
        />
        <HeaderModalGeneralItem
          href="/user/profile"
          label="Profile"
          Icon={<RiUserLine size={20} />}
        />
        {showTestOptions && (
          <HeaderModalSubItem Icon={<HiOutlineHome size={20} />} label="Test" />
        )}

        <HeaderModalMultiItem
          label="Samples"
          onClick={() => setShowTestOptions(!showTestOptions)}
          onMouseOver={() => setShowTestOptions(true)}
          onMouseLeave={() => setShowTestOptions(false)}
          Icon={<TfiVideoCamera size={20} />}
        />

        <HeaderModalGeneralItem
          href="#"
          label="Workout Plans"
          Icon={<HiOutlineHome size={20} />}
        />
        <HeaderModalGeneralItem
          href="#"
          label="Meal Plans"
          Icon={<HiOutlineHome size={20} />}
        />
        <HeaderModalGeneralItem
          href="#"
          label="Macro Calculator"
          Icon={<HiOutlineCalculator size={20} />}
        />
        <HeaderModalGeneralItem
          href="#"
          label="Statistics"
          Icon={<TfiBarChartAlt size={20} />}
        />
        <HeaderModalGeneralItem
          href="#"
          label="Settings"
          Icon={<TfiSettings size={20} />}
        />
      </ul>
      {/* <div>
        <ul className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"></ul>
      </div> */}
      <div className="block  text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
        <ul>
          <li>
            <button
              onClick={onClick}
              className="dropdown-toggle flex w-full items-center justify-start py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <VscSignOut size={20} /> <span className="pl-2">Sign out</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderModal;
