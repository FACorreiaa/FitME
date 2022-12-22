import React from "react";

type HeaderModalAuthItemProps = {
  username: string;
  email: string;
};
function HeaderModalAuthItem({ username, email }: HeaderModalAuthItemProps) {
  return (
    <div>
      <div className="py-3 px-4 text-sm font-bold text-gray-900 dark:text-white">
        <div>{username}</div>
        <div className="truncate text-xs font-medium">{email}</div>
      </div>
    </div>
  );
}

export default HeaderModalAuthItem;
