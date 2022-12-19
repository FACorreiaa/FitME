import React from "react";

type SocialMediaButtonProps = {
  children: React.ReactElement;
};
function SocialMediaButton({ children }: SocialMediaButtonProps) {
  return (
    <button
      type="button"
      data-mdb-ripple="true"
      data-mdb-ripple-color="light"
      className="mx-1 inline-block rounded-full bg-gradient-to-r from-sky-300 to-indigo-300 p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
    >
      {children}
    </button>
  );
}

export default SocialMediaButton;
