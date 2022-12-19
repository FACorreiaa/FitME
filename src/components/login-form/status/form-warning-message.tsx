import React from "react";
type FormWarningMessageProps = {
  message: string;
};
function FormWarningMessage({ message }: FormWarningMessageProps) {
  return (
    <div
      className="mt-4 rounded-full border-2 border-yellow-500 bg-yellow-100 p-4 py-2 text-sm text-yellow-700 dark:bg-yellow-200 dark:text-yellow-800"
      role="alert"
    >
      <span className="font-medium">{message}</span>
    </div>
  );
}

export default FormWarningMessage;
