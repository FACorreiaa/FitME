import React from "react";
import Link from "next/link";

type CustomInputProps = {
  customStyle: any;
  getFieldProps: any;
  inputLabel: string;
  inputType: string;
  inputPlaceholder: string;
  required: boolean;
  hasError: string | boolean | undefined;
  errorMessage: string | undefined;
  hasLeftIcon?: boolean;
  hasRightIcon?: boolean;
  LeftIcon?: any;
  RightIcon?: any;
  onPasswordIconClick?: () => void;
  inputPassword?: boolean;
};
function CustomInput({
  customStyle,
  inputLabel,
  inputType,
  inputPlaceholder,
  required,
  hasError,
  errorMessage,
  getFieldProps,
  hasLeftIcon,
  hasRightIcon,
  LeftIcon,
  RightIcon,
  onPasswordIconClick,
  inputPassword,
}: CustomInputProps) {
  return (
    <div className="mb-4">
      <label className="block text-left text-sm font-bold text-gray-700">
        {inputLabel}
      </label>

      <div className={`${customStyle} ${hasError ? "text-rose-700" : ""}`}>
        {hasLeftIcon && (
          <div
            onClick={onPasswordIconClick}
            className="icon absolute inset-y-0 left-0 flex items-center pl-3"
          >
            {LeftIcon}
          </div>
        )}
        <input
          type={inputType}
          placeholder={inputPlaceholder}
          {...getFieldProps}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pl-10 text-sm text-gray-900 focus:border-gray-500 focus:ring-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-gray-500 dark:focus:ring-gray-500"
          required={required}
        />

        {hasRightIcon && (
          <div
            onClick={onPasswordIconClick}
            className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
          >
            {RightIcon}
          </div>
        )}
      </div>
      <div className="flex flex-row items-baseline justify-between">
        {hasError ? (
          <span className="text-left text-xs text-red-700">{errorMessage}</span>
        ) : (
          <></>
        )}
        {inputPassword && (
          <Link
            className="text-xs text-gray-800 underline"
            href={"/login/change-password"}
          >
            Forgot password?
          </Link>
        )}
      </div>
    </div>
  );
}

export default CustomInput;
