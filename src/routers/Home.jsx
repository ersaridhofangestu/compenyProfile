import React from "react";
import Hero from "../components/Hero";
import Price from "../components/Price";
import Quots from "../components/Quots";
import Contacts from "./Contacts";

const Home = () => {
  return (
    <>
      <Hero />
      <Price />
      <Quots />
      <Contacts />
    </>
  );
};

export default Home;
