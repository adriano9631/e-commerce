import type { AppProps } from "next/app";
import "../styles/globals.css";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  if (router.pathname === "/") {
    return (
      <>
        <Navbar />
        <Component {...pageProps} />
        <Footer isHomePage />
      </>
    );
  }

  // return (
  //   <SiteLayout>
  //     <Component {...pageProps}></Component>
  //   </SiteLayout>
  // );

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
export default MyApp;
