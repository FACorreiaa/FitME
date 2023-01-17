import React from "react";
import Image from "next/image";

import Button from "../../../common/buttons/button";

type ProfileCardProps = {
  name: string;
  profession: string;
  bio: string;
  status: boolean;
  createdAt: string;
};
function ProfileCard({
  name,
  profession,
  bio,
  status,
  createdAt,
}: ProfileCardProps) {
  return (
    <div className="border-t-4 border-dracula-400 bg-white p-3">
      <div className="image overflow-hidden rounded-full">
        <Image
          width={100}
          height={100}
          src="/assets/Me.jpg"
          className="mx-auto h-auto w-full"
          alt="Fittracker Logo Logo"
        />
      </div>

      <div className="grid grid-cols-2 items-center justify-between">
        <h1 className="my-1 text-xl font-bold leading-8 text-gray-900">
          {name}
        </h1>
        <Button label="Edit" variant="noborder" />
      </div>
      <h3 className="font-lg text-semibold leading-6 text-gray-600">
        {profession}
      </h3>
      <p className="text-sm leading-6 text-gray-500 hover:text-gray-600">
        {bio}
      </p>
      <ul className="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
        <li className="flex items-center py-3">
          <span>Status</span>
          <span className="ml-auto">
            <span className="rounded bg-dracula-500 py-1 px-2 text-sm text-white">
              {status ? "Online" : "Offline"}
            </span>
          </span>
        </li>
        <li className="flex items-center py-3">
          <span>Member since</span>
          <span className="ml-auto">{createdAt}</span>
        </li>
      </ul>
    </div>
  );
}

export default ProfileCard;
