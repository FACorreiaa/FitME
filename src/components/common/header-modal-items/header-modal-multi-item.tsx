import React from "react";
import { TbChevronRight } from "react-icons/tb";
type HeaderModalMultiItem = {
  Icon: any;
  label: string;
  onClick: () => void;
  onMouseOver: () => void;
  onMouseLeave: () => void;
  ref: any;
};
function HeaderModalMultiItem({
  onClick,
  onMouseOver,
  onMouseLeave,
  ref,
  Icon,
  label,
}: HeaderModalMultiItem) {
  return (
    <button
      ref={ref}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      id="doubleDropdownButton"
      data-dropdown-toggle="doubleDropdown"
      data-dropdown-placement="right-start"
      type="button"
      className="dropdown-toggle flex w-full flex-row items-center justify-start py-2 pl-4 pr-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
    >
      <div>{Icon}</div>
      <span className="flex-shrink-0 flex-grow pl-2 text-left">{label}</span>
      <div className="justify-end">
        <TbChevronRight size={15} />
      </div>
    </button>
  );
}

export default HeaderModalMultiItem;
