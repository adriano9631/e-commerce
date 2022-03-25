import type { AppProps } from "next/app";
import store from "features/store";
import { Provider } from "react-redux";
import { useRouter } from "next/router";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import Navbar from "components/common/Navbar";
import Footer from "components/common/Footer";
import ConnectedWithProvider from "components/common/ConnectedWithProvider";



function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const router = useRouter();
  let persistor = persistStore(store);

  if (router.pathname === "/") {
    return (
      <SessionProvider session={session}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ConnectedWithProvider />
            <Navbar />
            <Component {...pageProps} />
            <Footer isHomePage />
          </PersistGate>
        </Provider>
      </SessionProvider>
    );
  }
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ConnectedWithProvider />
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </PersistGate>
      </Provider>
    </SessionProvider>
  );
}
export default MyApp;
