import React from "react";
import Link from "next/link";

type FormFooterProps = {
  message: string;
  link: string;
  linkMessage: string;
};
function FormFooter({ message, link, linkMessage }: FormFooterProps) {
  return (
    <p className="text-center text-sm text-gray-400">
      {message}{" "}
      <Link className="text-blue-700" href={link}>
        {linkMessage}
      </Link>
    </p>
  );
}

export default FormFooter;
