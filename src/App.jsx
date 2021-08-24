import React, { useEffect, useState } from "react";
import ColorfulMessage from "./coomponents/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [stringShowFlag, setStringShowFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setStringShowFlag(!stringShowFlag);
  };

  useEffect(() => {
    if (num % 3 === 0) {
      stringShowFlag || setStringShowFlag(true);
    } else {
      stringShowFlag && setStringShowFlag(false);
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>Hello World</h1>
      <ColorfulMessage color="blue">How are you?</ColorfulMessage>
      <ColorfulMessage color="pink">I'm good. Thank you</ColorfulMessage>
      <button onClick={onClickCountUp}>Count up</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>On/Off</button>
      <p>{num}</p>
      {stringShowFlag && <p>Woooooooooo</p>}
    </>
  );
};

export default App;
