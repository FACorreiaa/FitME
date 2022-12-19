import React from "react";

type FormErrorMessage = {
  message: string;
};
function FormErrorMessage({ message }: FormErrorMessage) {
  return (
    <div
      className="mt-4 rounded-full border-2 border-red-500 bg-red-100 p-4 py-2 text-sm text-red-700 dark:bg-red-200 dark:text-red-800"
      role="alert"
    >
      <span className="font-medium">{message}</span>
    </div>
  );
}

export default FormErrorMessage;
