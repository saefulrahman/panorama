import React, { useEffect } from "react";
import type { NextPage } from "next";
import { Pannellum } from "@karianpour/pannellum-react";
import dynamic from "next/dynamic";

const Home: NextPage = () => {
  const PannellumReact = dynamic(() => import("./panellum"), { ssr: false });
  return (
    <div style={{ width: "700px", height: "400px" }}>
      <PannellumReact />
    </div>
  );
};

export default Home;
