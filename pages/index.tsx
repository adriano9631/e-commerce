import { NextPage } from "next";
// import Header from "components/Header";

import dynamic from "next/dynamic";

const Header = dynamic(
  () => {
    return import("components/Header");
  },
  { ssr: false }
);

const Home: NextPage = () => {
  return (
    <>
      <Header />
    </>
  );
};

export default Home;
