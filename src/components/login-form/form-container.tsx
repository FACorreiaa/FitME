import React from "react";

type FormContainerProps = {
  onSubmit: () => void;
  children: JSX.Element | JSX.Element[];
};
function FormContainer({ onSubmit, children }: FormContainerProps) {
  return (
    <form className="mb-2 gap-5 rounded px-4 pt-0 pb-0" onSubmit={onSubmit}>
      {children}
    </form>
  );
}

export default FormContainer;
