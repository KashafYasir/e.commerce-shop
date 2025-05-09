// pages/_app.tsx
"use client"
import { AppProps } from "next/app";
import "@/styles/globals.css";  // Global styles
import Layout from "@/app/layout";
import ReduxProvider from "@/app/redux/provider";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ReduxProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </ReduxProvider>  );
};

export default App;
