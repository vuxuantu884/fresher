import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { NextPage } from 'next';
import { Fragment, ReactElement, ReactNode } from 'react';
import { Provider } from 'react-redux';
import store from '../store';
// import useInitLocale from 'handlers/locale/locale.hooks';

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
  const Layout = (Component as any).Layout || (({ children }: LayoutProps) => <>{children}</>);

  return (
    <Provider store={store}>
      <Root>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Root>
    </Provider>
  );
}

export default appWithTranslation(MyApp);
