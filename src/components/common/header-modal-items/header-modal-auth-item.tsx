import React from "react";

type HeaderModalAuthItemProps = {
  name: string;
  email: string;
};
function HeaderModalAuthItem({ name, email }: HeaderModalAuthItemProps) {
  return (
    <div>
      <div className="py-3 px-4 text-sm font-bold text-gray-900 dark:text-white">
        <div>{name}</div>
        <div className="truncate text-xs font-medium">{email}</div>
      </div>
    </div>
  );
}

export default HeaderModalAuthItem;
