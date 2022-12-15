import React from "react";

type FormHeaderProps = {
  title: string;
  description: string;
};
function FormHeader({ title, description }: FormHeaderProps) {
  return (
    <div className="title">
      <h1 className="font-body py-2 text-4xl text-gray-800">{title}</h1>
      <p className="mx-auto text-base text-gray-400">{description}</p>
    </div>
  );
}

export default FormHeader;
