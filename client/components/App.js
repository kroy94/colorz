import React from "react";

import { ConnectedBlue, ConnectedGreen, ConnectedRed } from "./Colors";

import Banana from "./Background";
import CaptureColor from "./CaptureColor";

const App = () => (
  <div className="app">
    <ConnectedBlue />
    <ConnectedGreen />
    <ConnectedRed />
    <Banana />
    <CaptureColor />
  </div>
);

export default App;
