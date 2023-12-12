import { useState } from "react";

function App() {
  const [kata, setKata] = useState(0);

  function handleCheck(event) {
    const value = event.target.value.split(" ");
    const newVal = value.filter((word) => word !== "");

    setKata(newVal.length);
  }

  return (
    <>
      <h1>Ketik apapun untuk mengetahui ada berapa kata</h1>
      <div className="container">
        <input
          type="text"
          className="input-text"
          placeholder="Ketik sesuatu..."
          onChange={handleCheck}
        />
        <h1>Ada {kata} kata</h1>
      </div>
    </>
  );
}

export default App;
