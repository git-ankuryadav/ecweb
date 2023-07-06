import React from "react";
import { Card } from "../../components/blog/Card";
import Sidebar from "../../components/sidebar/Sidebar";
import Header2 from "../../components/header2/Header";
export const Home = () => {
  return (
    <>
      {/*  <Slider />*/}
      <Header2 />
      <Card />
      <Sidebar />
    </>
  );
};
