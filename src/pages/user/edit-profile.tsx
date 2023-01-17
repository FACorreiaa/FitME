import React from "react";
import Head from "next/head";
import { useSession } from "next-auth/react";

import Guest from "../guest";
import { AuthorizedUser } from "..";

import styles from "../../styles/Index.module.css";

function EditProfile() {
  const { data: session } = useSession();
  //className={styles.container}
  return (
    <div>
      <Head>
        <title>Profile Page</title>
      </Head>

      {session ? (
        <AuthorizedUser session={session}>
          <form className="m-20 w-full max-w-lg">
            <h1 className="not-talic pb-4 text-6xl font-extrabold">
              Edit Profile...
            </h1>

            <div className="-mx-3 mb-6 flex flex-wrap">
              <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
                <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700">
                  First Name
                </label>
                <input
                  className="mb-3 block w-full appearance-none rounded border border-red-500 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:bg-white focus:outline-none"
                  id="grid-first-name"
                  type="text"
                  placeholder="Jane"
                />
                <p className="text-xs italic text-red-500">
                  Please fill out this field.
                </p>
              </div>
              <div className="w-full px-3 md:w-1/2">
                <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700">
                  Last Name
                </label>
                <input
                  className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                  id="grid-last-name"
                  type="text"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div className="-mx-3 mb-6 flex flex-wrap">
              <div className="w-full px-3">
                <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700">
                  Password
                </label>
                <input
                  className="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                  id="grid-password"
                  type="password"
                  placeholder="******************"
                />
                <p className="text-xs italic text-gray-600">
                  Make it as long and as crazy as youd like
                </p>
              </div>
            </div>
            <div className="-mx-3 mb-2 flex flex-wrap">
              <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
                <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700">
                  City
                </label>
                <input
                  className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                  id="grid-city"
                  type="text"
                  placeholder="Albuquerque"
                />
              </div>
              <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
                <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700">
                  State
                </label>
                <div className="relative">
                  <select
                    className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                    id="grid-state"
                  >
                    <option>New Mexico</option>
                    <option>Missouri</option>
                    <option>Texas</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="h-4 w-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
                <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700">
                  Zip
                </label>
                <input
                  className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                  id="grid-zip"
                  type="text"
                  placeholder="90210"
                />
              </div>
            </div>
          </form>
        </AuthorizedUser>
      ) : (
        <Guest />
      )}
    </div>
  );
}

export default EditProfile;
