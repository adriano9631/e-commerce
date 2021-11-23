import type { AppProps } from "next/app";
import store from "features/store";
import { Provider } from "react-redux";
import { useRouter } from "next/router";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import "../styles/globals.css";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import ConnectedWithProvider from "components/ConnectedWithProvider";
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  let persistor = persistStore(store);

  if (router.pathname === "/") {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ConnectedWithProvider />
          <Navbar />
          <Component {...pageProps} />
          <Footer isHomePage />
        </PersistGate>
      </Provider>
    );
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConnectedWithProvider />
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </PersistGate>
    </Provider>
  );
}
export default MyApp;
