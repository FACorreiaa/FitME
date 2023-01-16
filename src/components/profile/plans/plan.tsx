import React from "react";

import CardPlanItem from "./plan-item";

type CardPlanProps = {
  title: string;
  Icon: React.ReactNode;
};
function CardPlan({ title, Icon }: CardPlanProps): JSX.Element {
  return (
    <div>
      <div className="mb-3 flex items-center space-x-2 font-semibold leading-8 text-gray-900">
        <span className="text-dracula-500">{Icon}</span>
        <span className="tracking-wide">{title}</span>
      </div>
      <ul className="list-inside space-y-2">
        <CardPlanItem
          title="ONE PREVIOUS PLAN"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem"
        />
      </ul>
    </div>
  );
}

export default CardPlan;
