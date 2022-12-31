import React from "react";
import Image from "next/image";

import FormHeader from "../components/login-form/form-header";

type LayoutProps = {
  children: JSX.Element | JSX.Element[];
};

function Layout({ children }: LayoutProps) {
  return (
    <div className=" flex h-screen dark:bg-dracula-darker-600">
      <div className="m-auto grid	 h-3/4 w-3/5  overflow-hidden rounded-md bg-slate-50 lg:grid-cols-2">
        <div className="mx-auto flex  flex-col justify-evenly gap-5 bg-gradient-to-t from-gray-800 to-slate-500 py-2 text-center">
          <div className="p-6">
            <FormHeader title="Fitness tracker" />

            <Image
              src={"/assets/draw2.webp"}
              className="my-8 w-full"
              alt="Sample image"
              width={400}
              height={400}
            />
            <FormHeader description="Manage your mean plans, plan your workouts, schedule your activities and conquer your objectives!" />
          </div>
        </div>
        <div className="flex flex-col  justify-evenly">
          <div className="py-10 text-center">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
