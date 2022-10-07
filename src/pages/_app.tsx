import type { AppProps } from "next/app";

import "@/styles/global.css";
import { Header } from "@/components/header";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
};

export default App;
