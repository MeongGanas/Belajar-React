/* eslint-disable react/prop-types */
import { useState } from "react";
import Heading from "./components/Heading";
import "./index.css";

function App() {
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <Heading />

      <button onClick={handleClick}>Count ({likes})</button>
    </div>
  );
}

export default App;
