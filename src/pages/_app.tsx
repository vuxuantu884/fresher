import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { NextPage } from "next";
import { Fragment, ReactElement, ReactNode, useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { persistor, resetApp, store } from "store";
import "../styles/globals.css";
import nextI18NextConfig from "../../next-i18next.config.js";
import "antd/dist/antd.css"; //andt css
import { ComponentResetApp } from "component";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

interface LayoutProps {
  children?: ReactNode;
}

function Root(props: any) {
  // useInitLocale();
  return (
    <Fragment>
      {props.children}
      {/* <ToastContainer /> */}
    </Fragment>
  );
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout =
    (Component as any).Layout ||
    (({ children }: LayoutProps) => <>{children}</>);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ComponentResetApp />
        <Root>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Root>
      </PersistGate>
    </Provider>
  );
}

export default appWithTranslation(MyApp, nextI18NextConfig);
