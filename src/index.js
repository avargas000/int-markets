import { StrictMode } from "react";
import ReactDOM from "react-dom";

import ThreeVariation from "./ThreeVariation";
import TwoVariation from "./TwoVariation";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    {/* // component with many different style usecases */}
    {/* <ThreeVariation /> */}
    {/* // component with many different style usecase */}
    <TwoVariation />
  </StrictMode>,
  rootElement
);
