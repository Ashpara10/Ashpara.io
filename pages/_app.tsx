import "../styles/globals.css";
import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import { ThemeProvider } from "next-themes";
import Layout from "../Components/layout";
import Head from "next/head";
import ContextProvider from "../Components/Context/contextProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <ContextProvider>
        <Layout>
          <Head>
            <title>Ashpara</title>
          </Head>
          <Component {...pageProps} />
        </Layout>
      </ContextProvider>
    </ThemeProvider>
  );
}

export default MyApp;
