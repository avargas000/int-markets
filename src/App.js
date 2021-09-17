import React from "react";

import "./styles.css";

const data = {
  US: {
    header: "US-header",
    body:
      "US-body<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rutrum sed nulla a blandit. Nunc finibus felis ante, nec vestibulum mi volutpat id. Fusce suscipit non velit in ultricies. Etiam fermentum dignissim eros at cursus. Nullam suscipit nunc orci, eget facilisis metus lacinia ut. In hac habitasse platea dictumst. Proin imperdiet sagittis ante. Suspendisse porttitor ipsum vitae posuere vehicula. Praesent magna nibh, luctus et ultricies at, tempor nec neque."
  },
  MX: {
    header: "MX-header",
    body:
      "MX-body-<br> Curabitur id rhoncus velit. Donec vestibulum sed massa a pellentesque. Integer at enim interdum nulla porta convallis. Curabitur nec dolor sed lorem sagittis finibus placerat at arcu. Quisque eget magna imperdiet, tincidunt est pharetra, mattis elit. Vestibulum efficitur ligula sed mauris varius, nec eleifend augue fringilla. Morbi tempus sed velit semper accumsan."
  },
  CA: {
    header: "CA-header",
    body:
      "CA-body-<br>In dapibus justo eget diam bibendum consequat. Mauris venenatis, dolor eget elementum ornare, lacus purus rhoncus velit, in pulvinar odio massa at augue. Suspendisse volutpat, massa in hendrerit condimentum, nibh sapien euismod dolor, venenatis ultricies arcu est a purus. Sed massa ligula, bibendum nec vulputate et, posuere at lectus. Integer ac felis et diam pulvinar accumsan id sed nisl. Morbi vulputate, ex eget blandit rhoncus, ipsum diam finibus nunc, in rhoncus erat enim non eros.",
    supplemental:
      "CA-sup-<br>Suspendisse volutpat, massa in hendrerit condimentum, nibh sapien euismod dolor, venenatis ultricies arcu est a purus. Sed massa ligula, bibendum nec vulputate et, posuere at lectus. Integer ac felis et diam pulvinar accumsan id sed nisl. Morbi vulputate, ex eget blandit rhoncus, ipsum diam finibus nunc, in rhoncus erat enim non eros."
  }
};

const NavComponent = (props) => {
  const { handleClick } = props;
  return (
    <nav>
      <button onClick={() => handleClick("US")}>US</button>
      <button onClick={() => handleClick("MX")}>MX</button>
      <button onClick={() => handleClick("CA")}>CA</button>
    </nav>
  );
};

export default function App() {
  const [marketState, setmarketState] = React.useState("US");
  const activeData = data[marketState];
  console.log("activeData:", activeData);
  console.log("whats data=>", data);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div className="navContainer">
        <NavComponent handleClick={setmarketState} />
        <div className="bannerContainer">
          {activeData && <h1>{activeData.header}</h1>}
        </div>
      </div>
    </div>
  );
}
