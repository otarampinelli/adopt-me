import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div id="something-important">
      <h1>Adopt Me!</h1>
      <Pet name="luna" animal="dog" breed="havanease" />
      <Pet name="pepper" animal="bird" breed="cockatiel" />
      <Pet name="doink" animal="cat" breed="mixed" />
    </div>
  );
};

render(React.createElement(App), document.getElementById("root"));
