import React from "react";

import styles from "../../../styles/Form.module.css";

type ConfirmButtonProps = {
  label: string;
};
function ConfirmButton({ label }: ConfirmButtonProps) {
  return (
    <div className={"px-0"}>
      <button className={styles.button} type="submit">
        {label}
      </button>
    </div>
  );
}

export default ConfirmButton;
