import React from "react";

type FormHeaderProps = {
  title: string;
  description: string;
  subtitle?: string;
};
function FormHeader({ title, description, subtitle }: FormHeaderProps) {
  return (
    <div className="title">
      <h1 className="font-body py-2 text-5xl text-gray-800">{title}</h1>
      <h3 className="font-body py-2 text-2xl text-gray-600">{subtitle}</h3>

      <p className="mx-auto text-sm  text-gray-400">{description}</p>
    </div>
  );
}

export default FormHeader;
