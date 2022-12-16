import { useEffect, useState } from "react";
import { type AppType } from "next/app";
import Router from "next/router";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import Loader from "../components/common/loader";
import { trpc } from "../utils/trpc";

import "../styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    Router.events.on("routeChangeStart", () => {
      setIsLoading(true);
    });
    Router.events.on("routeChangeComplete", () => {
      setIsLoading(false);
    });

    Router.events.on("routeChangeError", () => {
      setIsLoading(false);
    });
  }, []);

  return (
    <SessionProvider session={session}>
      {isLoading && <Loader />}

      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
