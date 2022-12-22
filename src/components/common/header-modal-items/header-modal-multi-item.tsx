import React from "react";

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
      className="dropdown-toggle flex w-full items-center justify-between py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
    >
      {Icon} {label}
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
  );
}

export default HeaderModalMultiItem;
