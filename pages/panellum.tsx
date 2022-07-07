import React, { Component } from "react";
import { render } from "react-dom";

import { Pannellum } from "@karianpour/pannellum-react";
import "@karianpour/pannellum-react/es/pannellum/css/video-js.css";
import "@karianpour/pannellum-react/es/pannellum/css/pannellum.css";
import "@karianpour/pannellum-react/es/pannellum/css/style-textInfo.css";

const PannellumReact = () => (
  <React.Fragment>
    <Pannellum width="1000px" height="500px" image="https://cdn.sandals.com/sandals/wallpapers/panorama-test.jpeg" pitch={10} yaw={180} hfov={110} autoLoad />;
  </React.Fragment>
);

export default PannellumReact;
