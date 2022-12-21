import React from "react";

type FormHeaderProps = {
  title?: string;
  description?: string;
  subtitle?: string;
};
function FormHeader({ title, description, subtitle }: FormHeaderProps) {
  return (
    <div className="title">
      <h1 className="py-2 font-sans text-5xl text-gray-800">{title}</h1>
      <h3 className="py-2 font-sans text-4xl text-gray-600">{subtitle}</h3>

      <p className="mx-auto text-sm  text-gray-400">{description}</p>
    </div>
  );
}

export default FormHeader;
