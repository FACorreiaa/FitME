import React from "react";
import Link from "next/link";

type HeaderModalGeneralItemProps = {
  href: string;
  //label: string;
  Icon: any;
  label: string;
  children?: JSX.Element | JSX.Element[];
};
function HeaderModalGeneralItem({
  href,
  label,
  Icon,
}: HeaderModalGeneralItemProps) {
  return (
    <li>
      <Link
        href={href}
        className="dropdown-toggle flex w-full items-center justify-start py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      >
        {Icon} <span className="pl-2">{label}</span>
      </Link>
    </li>
  );
}

export default HeaderModalGeneralItem;
