import React from "react";
import Banner from "../Banner/Banner";
import { default as Exparts, default as Services } from "../Services/Services";
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services />
      <Exparts />
    </div>
  );
};

export default Home;
