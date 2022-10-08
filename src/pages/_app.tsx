import type { AppProps } from "next/app";

import "@/styles/global.css";
import { Header } from "@/components/header";
import { CartContextProvider } from "@/contexts/cart-context";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <CartContextProvider>
      <Header />
      <Component {...pageProps} />
    </CartContextProvider>
  );
};

export default App;
