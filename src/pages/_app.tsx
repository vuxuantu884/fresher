import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';
import { Provider } from 'react-redux';
import store from '../store/store';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

interface LayoutProps {
  children?: ReactNode;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = (Component as any).Layout || (({ children }: LayoutProps) => <>{children}</>);

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
