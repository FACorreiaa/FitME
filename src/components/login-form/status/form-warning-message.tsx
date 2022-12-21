import React from "react";
type FormWarningMessageProps = {
  message: string;
};
function FormWarningMessage({ message }: FormWarningMessageProps) {
  return (
    <div
      className="my-4 rounded-full border-2 border-yellow-500 bg-yellow-100 py-0 text-yellow-700 dark:bg-yellow-200 dark:text-yellow-800"
      role="alert"
    >
      <span className="text-xs font-medium">{message}</span>
    </div>
  );
}

export default FormWarningMessage;
