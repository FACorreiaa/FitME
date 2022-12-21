import React from "react";
type FormSuccessMessageProps = {
  message: string;
};
function FormSuccessMessage({ message }: FormSuccessMessageProps) {
  return (
    <div
      className="my-4 rounded-full border-2 border-green-500 bg-green-100  py-0  text-green-700 dark:bg-green-200 dark:text-green-800"
      role="alert"
    >
      <span className="text-xs font-medium">{message}</span>
    </div>
  );
}

export default FormSuccessMessage;
