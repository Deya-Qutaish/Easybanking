import React from "react";
import "./Home.css";
import Header from "../../Components/Header/Header";
import Features from "../../Components/Features/Features";
import Articles from "../../Components/Articles/Articles";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home__body">
        <Features />
        <Articles />
      </div>
    </>
  );
};

export default Home;
