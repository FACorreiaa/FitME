import React from "react";

type FormErrorMessage = {
  message: string;
};
function FormErrorMessage({ message }: FormErrorMessage) {
  return (
    <div
      className="my-4 rounded-full border-2 border-red-500 bg-red-100 py-0 text-red-700 dark:bg-red-200 dark:text-red-800"
      role="alert"
    >
      <span className="text-xs font-medium">{message}</span>
    </div>
  );
}

export default FormErrorMessage;
