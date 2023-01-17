import React from "react";

enum Variant {
  confirm = "text-center rounded-full bg-dracula-500 py-2 px-4 font-bold text-white hover:bg-dracula-700",
  discard = "text-center rounded-full bg-red-500 py-2 px-4 font-bold text-white hover:bg-red-700",
  border = "text-center rounded-full border border-dracula-500 bg-transparent py-2 px-2 font-semibold text-dracula-700 hover:border-transparent hover:bg-dracula-500 hover:text-white",
  noborder = "text-right bg-transparent font-bold text-dracula-900  hover:text-dracula-300 ",
}

type ButtonProps = {
  variant: "confirm" | "discard" | "border" | "noborder";
  label: string;
  onClick: () => void;
};
function Button({ variant, label, onClick }: ButtonProps) {
  const className = Variant[variant];
  return (
    <div onClick={onClick} className={className}>
      {label}
    </div>
  );
}

export default Button;
