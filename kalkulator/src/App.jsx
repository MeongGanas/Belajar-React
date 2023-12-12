/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";

function Button({ value, handleClick }) {
  return (
    <button value={value} onClick={() => handleClick(value)} className="btn">
      {value}
    </button>
  );
}

function Result({ value }) {
  return <h1 className="result">{value ? value : 0}</h1>;
}

function App() {
  const [angka, setAngka] = useState(0);
  const [temp, setTemp] = useState(0);
  const [operator, setOperator] = useState(null);

  function handleClick(value) {
    if (angka !== 0) {
      setAngka(angka + value);
    } else {
      setAngka(value);
    }
  }

  function handleOperator(value) {
    setTemp(parseFloat(angka));
    setAngka(0);
    if (value !== "=") {
      setOperator(value);
    } else {
      let newAngka = parseFloat(angka);
      if (operator === "+") {
        setAngka(newAngka + temp);
      } else if (operator === "-") {
        setAngka(temp - newAngka);
      } else if (operator === "/") {
        setAngka(temp / newAngka);
      } else {
        setAngka(newAngka * temp);
      }
    }
  }

  return (
    <>
      <Result value={angka} />
      <div className="kalkulator">
        <Button value="CE" handleClick={handleOperator} />
        <Button value="+" handleClick={handleOperator} />
        <Button value="-" handleClick={handleOperator} />
        <Button value="x" handleClick={handleOperator} />
        <Button value="1" handleClick={handleClick} />
        <Button value="2" handleClick={handleClick} />
        <Button value="3" handleClick={handleClick} />
        <Button value="/" handleClick={handleOperator} />
        <Button value="4" handleClick={handleClick} />
        <Button value="5" handleClick={handleClick} />
        <Button value="6" handleClick={handleClick} />
        <Button value="=" handleClick={handleOperator} />
        <Button value="7" handleClick={handleClick} />
        <Button value="8" handleClick={handleClick} />
        <Button value="9" handleClick={handleClick} />
        <Button value="0" handleClick={handleClick} />
      </div>
    </>
  );
}

export default App;
