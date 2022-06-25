import { useState } from "react";
import "./App.css";

function App() {
  //state
  const [count, setCount] = useState(10);

  // Event handling
  const onIncreaseHandler = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  const onDescreaseHandler = () => {
    const newCount = count - 1;
    setCount(newCount);
  };

  // let winnerNotification = null;
  // if (count >= 20) {
  //   winnerNotification = <p>You are the champion</p>;
  // }

  return (
    <div className="App">
      <button onClick={onIncreaseHandler}>+</button>
      <p>{count}</p>
      <button onClick={onDescreaseHandler}>-</button>
      {/* {winnerNotification} */}
      {count >= 20 && <p>You are the champion</p>}
    </div>
  );
}

export default App;
