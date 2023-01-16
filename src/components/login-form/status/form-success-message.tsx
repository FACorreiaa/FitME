import React from "react";
type FormSuccessMessageProps = {
  message: string;
};
function FormSuccessMessage({ message }: FormSuccessMessageProps) {
  return (
    <div
      className="my-4 rounded-full border-2 border-dracula-500 bg-dracula-100  py-0  text-dracula-700 dark:bg-dracula-200 dark:text-dracula-800"
      role="alert"
    >
      <span className="text-xs font-medium">{message}</span>
    </div>
  );
}

export default FormSuccessMessage;
