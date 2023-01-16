import { useState } from "react";
import { FaDumbbell } from "react-icons/fa";
import { GiMeal } from "react-icons/gi";
import Head from "next/head";
import { useSession } from "next-auth/react";

import AboutSection from "../../components/profile/display-profile/about-section";
import ActivePlan from "../../components/profile/display-profile/left-column/active-plans";
import ProfileCard from "../../components/profile/display-profile/left-column/profile-card";
import CardPlan from "../../components/profile/plans/plan";
import { trpc } from "../../utils/trpc";
import Guest from "../guest";
import { AuthorizedUser } from "..";

import styles from "../../styles/Index.module.css";

const Profile = () => {
  const { data: session } = useSession();
  const { data: userData } = trpc.profile.getProfileData.useQuery();
  const { name, createdAt, profile, email } = userData || {};
  const [showMoreInfo, setShowmoreInfo] = useState(false);
  console.log("userData", userData);
  console.log("session", session);

  const onShowInformationClick = () => {
    setShowmoreInfo(!showMoreInfo);
  };
  const showInformationLabel = showMoreInfo
    ? "Show Less Information"
    : "Show More Information";
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

                <div className="my-4"></div>
                <ActivePlan
                  Icon={<FaDumbbell size={20} />}
                  title="Workout Placeholder"
                  description="TO DO GET ACTIVE WORKOUT"
                />
                <ActivePlan
                  Icon={<GiMeal size={20} />}
                  title="Mealplan Placeholder"
                  description="TO DO GET ACTIVE MEAL PLAN"
                />
                {/* <!-- End of friends card --> */}
              </div>
              {/* <!-- Right Side --> */}
              <div className="mx-2 h-64 w-full md:w-9/12">
                {/* <!-- Profile tab --> */}
                {/* <!-- About Section --> */}
                <AboutSection
                  title="About me"
                  firstname={profile?.firstname as string}
                  lastname={profile?.lastname as string}
                  email={email as string}
                  gender={profile?.gender?.toLowerCase() as string}
                  onShowInformationClick={onShowInformationClick}
                  showInformationLabel={showInformationLabel}
                  showMoreInfo={showMoreInfo}
                  age={profile?.age as number}
                  contact={profile?.contact as string}
                  country={profile?.country as string}
                  address={profile?.address as string}
                  website={profile?.website as string}
                  birthday={profile?.birthday?.toLocaleDateString() as string}
                />
                {/* <!-- End of about section --> */}
                {showMoreInfo && (
                  <div>
                    <div className="my-4"></div>
                    <div className="rounded-sm bg-white p-3 shadow-sm">
                      <div className="grid grid-cols-2">
                        <CardPlan
                          title="Workout plan"
                          Icon={<FaDumbbell size={20} />}
                        />

                        <CardPlan
                          title="Meal plan"
                          Icon={<GiMeal size={20} />}
                        />
                      </div>
                    </div>
                  </div>
                )}

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
