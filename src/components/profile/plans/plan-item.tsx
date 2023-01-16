import React from "react";

type CardPlanItemProps = {
  title: string;
  description: string;
};

function CardPlanItem({ title, description }: CardPlanItemProps) {
  return (
    <li>
      <div className="text-teal-600">{title}</div>
      <div className="text-xs text-gray-500">{description}</div>
    </li>
  );
}

export default CardPlanItem;
