import type { AppProps } from "next/app";

import "@/styles/global.css";
import { Header } from "@/components/header";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className="max-w-[1120px] w-full mx-auto h-full">
      <Header />
      <Component {...pageProps} />
    </div>
  );
};

export default App;
