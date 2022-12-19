import React from "react";

type FormContainerProps = {
  onSubmit: () => void;
  children: JSX.Element | JSX.Element[];
};
function FormContainer({ onSubmit, children }: FormContainerProps) {
  return (
    <form
      className="mb-4 gap-5 rounded px-8 pt-6 pb-8 shadow-md"
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
}

export default FormContainer;
