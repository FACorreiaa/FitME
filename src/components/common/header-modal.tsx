import React, { useRef, useState } from "react";
import { HiOutlineHome } from "react-icons/hi2";

import HeaderModalAuthItem from "./header-modal-items/header-modal-auth-item";
import HeaderModalSubItem from "./header-modal-items/header-modal-expanded-item";
import HeaderModalGeneralItem from "./header-modal-items/header-modal-general-item";
import HeaderModalMultiItem from "./header-modal-items/header-modal-multi-item";

function HeaderModal() {
  const [showTestOptions, setShowTestOptions] = useState(false);
  const modalRef = useRef(null);
  console.log("modalRef", modalRef);
  return (
    <div
      id="dropdownInformation"
      className="z-21 absolute top-16 z-10 w-44 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-500"
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
          Icon={<HiOutlineHome size={20} />}
        />
        {showTestOptions && (
          <HeaderModalSubItem
            Icon={<HiOutlineHome size={20} />}
            label="Test"
            ref={modalRef}
          />
        )}

        <HeaderModalMultiItem
          ref={modalRef}
          label="Workout Videos"
          onClick={() => setShowTestOptions(!showTestOptions)}
          onMouseOver={() => setShowTestOptions(true)}
          onMouseLeave={() => setShowTestOptions(false)}
          Icon={<HiOutlineHome size={20} />}
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
          Icon={<HiOutlineHome size={20} />}
        />
        <HeaderModalGeneralItem
          href="#"
          label="Statistics"
          Icon={<HiOutlineHome size={20} />}
        />
        <HeaderModalGeneralItem
          href="#"
          label="Settings"
          Icon={<HiOutlineHome size={20} />}
        />
      </ul>
      {/* <div>
        <ul className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"></ul>
      </div> */}
      <div className="block  text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
        <ul>
          <HeaderModalGeneralItem
            href="#"
            label="Sign out"
            Icon={<HiOutlineHome size={20} />}
          />
        </ul>
      </div>
    </div>
  );
}

export default HeaderModal;
