import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { NextPage } from "next";
import { ThemeProvider } from "styled-components";
import { Fragment, ReactElement, ReactNode } from "react";
import { Provider } from "react-redux";

import store from "../store";
import "../styles/globals.css";
import { GlobalStyles, theme } from "types";
// import useInitLocale from 'handlers/locale/locale.hooks';
import nextI18NextConfig from "../../next-i18next.config.js";

console.log(nextI18NextConfig);

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
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Root>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Root>
      </ThemeProvider>
    </Provider>
  );
}

export default appWithTranslation(MyApp, nextI18NextConfig);
