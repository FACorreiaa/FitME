import Head from "next/head";
import { useSession } from "next-auth/react";

import ProfileCard from "../../components/profile/display-profile/left-column/profile-card";
import { trpc } from "../../utils/trpc";
import Guest from "../guest";
import { AuthorizedUser } from "..";

import styles from "../../styles/Index.module.css";

const Profile = () => {
  const { data: session } = useSession();
  const { data: userData } = trpc.profile.getProfileData.useQuery();
  const { name, createdAt, profile } = userData || {};
  console.log("userData", userData);
  console.log("session", session);
  return (
    <div className={styles.container}>
      <Head>
        <title>Profile Page</title>
      </Head>

      {session ? (
        <AuthorizedUser session={session}>
          <div className="container mx-auto my-5 p-5">
            <div className="no-wrap md:-mx-2 md:flex ">
              {/* <!-- Left Side --> */}
              <div className="w-full md:mx-2 md:w-3/12">
                {/* <!-- Profile Card --> */}
                <ProfileCard
                  name={name as string}
                  createdAt={createdAt?.toLocaleDateString() as string}
                  profession={profile?.profession as string}
                  bio={profile?.about as string}
                  status={!!session}
                />
                {/* <!-- End of profile card --> */}
                <div className="my-4"></div>
                {/* <!-- Friends card --> */}
                <div className="bg-white p-3 hover:shadow">
                  <div className="flex items-center space-x-3 text-xl font-semibold leading-8 text-gray-900">
                    <span className="text-green-500">
                      <svg
                        className="h-5 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </span>
                    <span>Similar Profiles</span>
                  </div>
                  <div className="grid grid-cols-3">
                    <div className="my-2 text-center">
                      {/* <img className="h-16 w-16 rounded-full mx-auto"
                                src="https://cdn.australianageingagenda.com.au/wp-content/uploads/2015/06/28085920/Phil-Beckett-2-e1435107243361.jpg"
                                alt="" /> */}
                      <a href="#" className="text-main-color">
                        Kojstantin
                      </a>
                    </div>
                  </div>
                </div>
                <div className="my-4"></div>
                <div className="bg-white p-3 hover:shadow">
                  <div className="flex items-center space-x-3 text-xl font-semibold leading-8 text-gray-900">
                    <span className="text-green-500">
                      <svg
                        className="h-5 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </span>
                    <span>Similar Profiles</span>
                  </div>
                  <div className="grid grid-cols-3">
                    <div className="my-2 text-center">
                      {/* <img className="h-16 w-16 rounded-full mx-auto"
                                src="https://cdn.australianageingagenda.com.au/wp-content/uploads/2015/06/28085920/Phil-Beckett-2-e1435107243361.jpg"
                                alt="" /> */}
                      <a href="#" className="text-main-color">
                        Kojstantin
                      </a>
                    </div>
                  </div>
                </div>
                {/* <!-- End of friends card --> */}
              </div>
              {/* <!-- Right Side --> */}
              <div className="mx-2 h-64 w-full md:w-9/12">
                {/* <!-- Profile tab --> */}
                {/* <!-- About Section --> */}
                <div className="rounded-sm bg-white p-3 shadow-sm">
                  <div className="flex items-center space-x-2 font-semibold leading-8 text-gray-900">
                    <span className="text-green-500">
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
                    <span className="tracking-wide">About</span>
                  </div>
                  <div className="text-gray-700">
                    <div className="grid text-sm md:grid-cols-2">
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">
                          First Name
                        </div>
                        <div className="px-4 py-2">Jane</div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Last Name</div>
                        <div className="px-4 py-2">Doe</div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Gender</div>
                        <div className="px-4 py-2">Female</div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">
                          Contact No.
                        </div>
                        <div className="px-4 py-2">+11 998001001</div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">
                          Current Address
                        </div>
                        <div className="px-4 py-2">
                          Beech Creek, PA, Pennsylvania
                        </div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">
                          Permanant Address
                        </div>
                        <div className="px-4 py-2">
                          Arlington Heights, IL, Illinois
                        </div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Email.</div>
                        <div className="px-4 py-2">
                          <a
                            className="text-blue-800"
                            href="mailto:jane@example.com"
                          >
                            jane@example.com
                          </a>
                        </div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Birthday</div>
                        <div className="px-4 py-2">Feb 06, 1998</div>
                      </div>
                    </div>
                  </div>
                  <button className="focus:shadow-outline hover:shadow-xs my-4 block w-full rounded-lg p-3 text-sm font-semibold text-blue-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none">
                    Show Full Information
                  </button>
                </div>
                {/* <!-- End of about section --> */}

                <div className="my-4"></div>

                {/* <!-- Experience and education --> */}
                <div className="rounded-sm bg-white p-3 shadow-sm">
                  <div className="grid grid-cols-2">
                    <div>
                      <div className="mb-3 flex items-center space-x-2 font-semibold leading-8 text-gray-900">
                        <span className="text-green-500">
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
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                        </span>
                        <span className="tracking-wide">Experience</span>
                      </div>
                      <ul className="list-inside space-y-2">
                        <li>
                          <div className="text-teal-600">
                            Owner at Her Company Inc.
                          </div>
                          <div className="text-xs text-gray-500">
                            March 2020 - Now
                          </div>
                        </li>
                        <li>
                          <div className="text-teal-600">
                            Owner at Her Company Inc.
                          </div>
                          <div className="text-xs text-gray-500">
                            March 2020 - Now
                          </div>
                        </li>
                        <li>
                          <div className="text-teal-600">
                            Owner at Her Company Inc.
                          </div>
                          <div className="text-xs text-gray-500">
                            March 2020 - Now
                          </div>
                        </li>
                        <li>
                          <div className="text-teal-600">
                            Owner at Her Company Inc.
                          </div>
                          <div className="text-xs text-gray-500">
                            March 2020 - Now
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <div className="mb-3 flex items-center space-x-2 font-semibold leading-8 text-gray-900">
                        <span className="text-green-500">
                          <svg
                            className="h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path
                              fill="#fff"
                              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                            />
                          </svg>
                        </span>
                        <span className="tracking-wide">Education</span>
                      </div>
                      <ul className="list-inside space-y-2">
                        <li>
                          <div className="text-teal-600">
                            Masters Degree in Oxford
                          </div>
                          <div className="text-xs text-gray-500">
                            March 2020 - Now
                          </div>
                        </li>
                        <li>
                          <div className="text-teal-600">
                            Bachelors Degreen in LPU
                          </div>
                          <div className="text-xs text-gray-500">
                            March 2020 - Now
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* <!-- End of Experience and education grid --> */}
                </div>
                {/* <!-- End of profile tab --> */}
              </div>
            </div>
          </div>
        </AuthorizedUser>
      ) : (
        <Guest />
      )}
    </div>
  );
};

export default Profile;
