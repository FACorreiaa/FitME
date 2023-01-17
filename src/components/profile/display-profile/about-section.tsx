import React from "react";

type AboutSectionProps = {
  title: string;
  firstname: string;
  lastname: string;
  gender: string;
  email: string;
  onShowInformationClick: () => void;
  showInformationLabel: string;
  showMoreInfo: boolean;
  age: number;
  contact: string;
  country: string;
  address: string;
  birthday: string;
  website: string;
};

function AboutSection({
  title,
  firstname,
  lastname,
  gender,
  email,
  onShowInformationClick,
  showInformationLabel,
  age,
  contact,
  country,
  address,
  birthday,
  website,
}: AboutSectionProps) {
  return (
    <div className="rounded-sm bg-white p-3 shadow-sm">
      <div className="flex items-center space-x-2 font-semibold leading-8 text-gray-900">
        <span className="text-dracula-500">
          <svg
            className="h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </span>
        <span className="tracking-wide">{title}</span>
      </div>
      <div className="text-gray-700">
        <div className="grid text-sm md:grid-cols-2">
          <div className="grid grid-cols-2">
            <div className="px-2 py-2 font-semibold">First Name</div>
            <div className=" py-2">{firstname}</div>
          </div>
          <div className="grid grid-cols-2">
            <div className="px-2 py-2 font-semibold">Last Name</div>
            <div className=" py-2">{lastname}</div>
          </div>
          <div className="grid grid-cols-2">
            <div className="px-2 py-2 font-semibold">Age</div>
            <div className=" py-2">{age}</div>
          </div>
          <div className="grid grid-cols-2">
            <div className="px-2 py-2 font-semibold">Gender</div>
            <div className=" py-2">{gender}</div>
          </div>
          <div className="grid grid-cols-2">
            <div className="px-2 py-2 font-semibold">Email.</div>
            <div className="py-2">{email}</div>
          </div>
          <div className="grid grid-cols-2">
            <div className="px-2 py-2 font-semibold">Contact</div>
            <div className=" py-2">{contact}</div>
          </div>
          <div className="grid grid-cols-2">
            <div className="px-2 py-2 font-semibold">Country</div>
            <div className=" py-2">{country}</div>
          </div>
          <div className="grid grid-cols-2">
            <div className="px-2 py-2 font-semibold">Address</div>
            <div className=" py-2">{address}</div>
          </div>

          <div className="grid grid-cols-2">
            <div className="px-2 py-2 font-semibold">Birthday</div>
            <div className=" py-2">{birthday}</div>
          </div>
          <div className="grid grid-cols-2">
            <div className="px-2 py-2 font-semibold">Website</div>
            <div className="py-2">{website}</div>
          </div>
        </div>
      </div>
      <button
        onClick={onShowInformationClick}
        className="focus:shadow-outline hover:shadow-xs my-4 block w-full rounded-lg p-3 text-sm font-semibold text-dracula-900 hover:bg-gray-100 hover:text-dracula-300 focus:bg-gray-100 focus:outline-none"
      >
        {showInformationLabel}
      </button>
    </div>
  );
}

export default AboutSection;
