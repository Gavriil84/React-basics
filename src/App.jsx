import React, { useState } from "react";
import ColorfulMessage from "./coomponents/ColorfulMessage";

const App = () => {
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const [num, setNum] = useState(0);
  return (
    <>
      <h1 style={{ color: "red" }}>Hello World</h1>
      <ColorfulMessage color="blue">How are you?</ColorfulMessage>
      <ColorfulMessage color="pink">I'm good. Thank you</ColorfulMessage>
      <button onClick={onClickCountUp}>Count up</button>
      <p>{num}</p>
    </>
  );
};

export default App;
