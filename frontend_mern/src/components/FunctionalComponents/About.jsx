import { useState } from "react";

function About() {
  var initialVal = 0;
  var [num, setNum] = useState(initialVal);
  function handleDecrement() {
    setNum(num - 1);
  }
  return (
    <div>
      <h1>Hello</h1>
      <h2>State initial value is {initialVal}</h2>
      <button onClick={handleDecrement}>-</button>
      <h3>Updating state:{num}</h3>
      <button onClick={() => setNum(num+1)}>+</button>
      {/* num++ => num=num+1*/}
      <button onClick={() => setNum(initialVal)}>  Reset</button>
    </div>
  );
}
export default About;
