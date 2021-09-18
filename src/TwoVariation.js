import React, { useEffect } from "react";

import "./styles.css";

const data = {
  US: {
    header: "US-header",
    body:
      "US-body<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rutrum sed nulla a blandit. Nunc finibus felis ante, nec vestibulum mi volutpat id. Fusce suscipit non velit in ultricies. Etiam fermentum dignissim eros at cursus. Nullam suscipit nunc orci, eget facilisis metus lacinia ut. In hac habitasse platea dictumst. Proin imperdiet sagittis ante. Suspendisse porttitor ipsum vitae posuere vehicula. Praesent magna nibh, luctus et ultricies at, tempor nec neque.",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png",
    supplemental:
      "CA-sup-Suspendisse volutpat, massa in hendrerit condimentum, nibh sapien euismod dolor, venenatis ultricies arcu est a purus. Sed massa ligula, bibendum nec vulputate et, posuere at lectus. Integer ac felis et diam pulvinar accumsan id sed nisl. Morbi vulputate, ex eget blandit rhoncus, ipsum diam finibus nunc, in rhoncus erat enim non eros."
  },
  MX: {
    header: "MX-header",
    image:
      "data:image/png;base64,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",
    body:
      "MX-body- Curabitur id rhoncus velit. Donec vestibulum sed massa a pellentesque. Integer at enim interdum nulla porta convallis. Curabitur nec dolor sed lorem sagittis finibus placerat at arcu. Quisque eget magna imperdiet, tincidunt est pharetra, mattis elit. Vestibulum efficitur ligula sed mauris varius, nec eleifend augue fringilla. Morbi tempus sed velit semper accumsan."
  },
  CA: {
    header: "CA-header",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg",
    body:
      "CA-body-In dapibus justo eget diam bibendum consequat. Mauris venenatis, dolor eget elementum ornare, lacus purus rhoncus velit, in pulvinar odio massa at augue. Suspendisse volutpat, massa in hendrerit condimentum, nibh sapien euismod dolor, venenatis ultricies arcu est a purus. Sed massa ligula, bibendum nec vulputate et, posuere at lectus. Integer ac felis et diam pulvinar accumsan id sed nisl. Morbi vulputate, ex eget blandit rhoncus, ipsum diam finibus nunc, in rhoncus erat enim non eros.",
    supplemental:
      "CA-sup-Suspendisse volutpat, massa in hendrerit condimentum, nibh sapien euismod dolor, venenatis ultricies arcu est a purus. Sed massa ligula, bibendum nec vulputate et, posuere at lectus. Integer ac felis et diam pulvinar accumsan id sed nisl. Morbi vulputate, ex eget blandit rhoncus, ipsum diam finibus nunc, in rhoncus erat enim non eros."
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

export default function TwoVariation() {
  const [marketState, setmarketState] = React.useState("US");
  const activeData = data[marketState];
  const { body, header, supplemental, image } = activeData;

  useEffect(() => {
    if (!marketState) return null;
  }, [marketState]);

  return (
    <div className="App">
      <h1>TwoVariation Component </h1>
      <NavComponent handleClick={setmarketState} />
      {/* useCase -2 */}
      {/* if the component only has two styling variations the below approach is implemented */}
      {/* added tenaries in order to switch classes */}
      {activeData && (
        <div
          className={
            marketState === "CA" ? "canadaOutterContainer" : "outterContainer"
          }
        >
          <div className="imgCont">
            <img src={image} alt={marketState} />
          </div>
          <div
            className={
              marketState === "CA"
                ? "canadaBannerContainer"
                : "defaultBannerContainer"
            }
          >
            <h1>{header}</h1>
            <p>{body} </p>
            <div>{supplemental && <span>{supplemental}</span>} </div>
          </div>
        </div>
      )}
    </div>
  );
}
