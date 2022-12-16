import React from "react";

import styles from "../styles/Layout.module.css";

type LayoutProps = {
  children: JSX.Element | JSX.Element[];
};

function Layout({ children }: LayoutProps) {
  return (
    <div className="flex h-screen bg-gradient-to-t from-orange-100 to-slate-700">
      <div className="m-auto	 grid h-3/4 w-3/5 overflow-hidden rounded-md bg-slate-50 lg:grid-cols-2">
        <div className={styles.imgStyle}>
          <div className={styles.cartoon}></div>
          <div className={styles.cloud_one}></div>
          <div className={styles.cloud_two}></div>
        </div>
        <div className="flex flex-col justify-evenly">
          <div className="py-10 text-center">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
