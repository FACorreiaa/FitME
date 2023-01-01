import React from "react";
import type { UseFormRegisterReturn } from "react-hook-form";
import Link from "next/link";

type CustomInputProps = {
  customStyle: string | undefined;
  inputLabel: string;
  inputType: string;
  inputPlaceholder: string;
  required: boolean;
  errorMessage: string | undefined;
  hasLeftIcon?: boolean;
  hasRightIcon?: boolean;
  LeftIcon?: React.ReactNode;
  RightIcon?: React.ReactNode;
  onPasswordIconClick?: () => void;
  inputPassword?: boolean;
  methods: UseFormRegisterReturn<string>;
};
function CustomInput({
  customStyle,
  inputLabel,
  inputType,
  inputPlaceholder,
  required,
  errorMessage,
  hasLeftIcon,
  hasRightIcon,
  LeftIcon,
  RightIcon,
  onPasswordIconClick,
  inputPassword,
  methods,
}: CustomInputProps) {
  return (
    <div className="mb-4">
      <label className="block text-left text-sm font-bold text-gray-700">
        {inputLabel}
      </label>
      <div
        className={`${customStyle} ${!!errorMessage ? "text-rose-700" : ""}`}
      >
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
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pl-10 text-sm text-gray-900 focus:border-gray-500 focus:ring-gray-500 dark:border-gray-600 dark:bg-dracula-darker-100 dark:text-gray-800 dark:placeholder-gray-800 dark:focus:border-gray-800 dark:focus:ring-gray-500"
          required={required}
          {...methods}
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
        {!!errorMessage && (
          <span className="text-left text-xs text-red-700">{errorMessage}</span>
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
