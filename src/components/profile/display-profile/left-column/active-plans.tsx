import React from "react";
import Image from "next/image";

type ActivePlansProps = {
  Icon: React.ReactNode;
  title: string;
  description: string;
};
function ActivePlan({ Icon, title, description }: ActivePlansProps) {
  return (
    <div className="bg-white p-3 hover:shadow">
      <div className="flex items-center space-x-3 text-xl font-semibold leading-8 text-gray-900">
        <span className="text-dracula-500">{Icon}</span>
        <span>{title}</span>
      </div>
      <div className="grid grid-cols-3">
        <div className="my-2 text-center">
          {/* <img className="h-16 w-16 rounded-full mx-auto"
                src="https://cdn.australianageingagenda.com.au/wp-content/uploads/2015/06/28085920/Phil-Beckett-2-e1435107243361.jpg"
                alt="" /> */}
          <Image
            width={100}
            height={100}
            src="/assets/Me.jpg"
            className="mx-auto h-16 w-16 rounded-full"
            alt="Fittracker Logo Logo"
          />
          <span className="text-main-color">{description}</span>
        </div>
      </div>
    </div>
  );
}

export default ActivePlan;
