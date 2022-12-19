import React from "react";
type FormSuccessMessageProps = {
  message: string;
};
function FormSuccessMessage({ message }: FormSuccessMessageProps) {
  return (
    <div
      className="mt-4 rounded-full border-2 border-green-500  bg-green-100 py-2 text-sm text-green-700 dark:bg-green-200 dark:text-green-800"
      role="alert"
    >
      <span className="font-medium">{message}</span>
    </div>
  );
}

export default FormSuccessMessage;
