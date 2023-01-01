import React from "react";

import HeaderModalGeneralItem from "./header-modal-general-item";
type HeaderModalExpandedItemProps = {
  Icon: React.ReactNode;
  label: string;
};
function HeaderModalExpandedItem({
  Icon,
  label,
}: HeaderModalExpandedItemProps) {
  return (
    <div className="flex justify-center">
      <div>
        <div className="dropend relative ">
          <ul
            className="dropdown-menu absolute
    left-20
    z-50
    float-left
    m-0
    mt-1
    min-w-max
    list-none
    divide-y
    divide-gray-500
    rounded-lg
    border-none
    bg-white
    bg-clip-padding
    py-2
    text-left
    text-base
    shadow-lg dark:bg-dracula-darker-700 dark:text-dracula-light-50
  "
            aria-labelledby="dropdownMenuButton1e"
          >
            <HeaderModalGeneralItem Icon={Icon} label={label} href="#" />
            <HeaderModalGeneralItem Icon={Icon} label={label} href="#" />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HeaderModalExpandedItem;
