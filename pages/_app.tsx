import { Provider } from 'next-auth/client';
import '../src/styles/main.scss';
import { AppProps } from 'next/app';
import Layout from '../src/components/layout/Layout';
import { ThemeProvider } from 'next-themes';
import { RecoilRoot } from 'recoil';
import { DefaultSeo } from 'next-seo';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" storageKey="theme" defaultTheme="light">
      <Provider
        options={{
          clientMaxAge: 0,
          keepAlive: 0,
        }}
        session={pageProps.session}
      >
        <RecoilRoot>
          <DefaultSeo
            titleTemplate={`%s | ${process.env.NEXT_PUBLIC_SERVICE_NAME}`}
            defaultTitle={process.env.NEXT_PUBLIC_SERVICE_NAME}
            description="A login boilerplate using Next.js, NexthAuth.js, Prisma and Tailwind"
          />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </RecoilRoot>
      </Provider>
    </ThemeProvider>
  );
}
