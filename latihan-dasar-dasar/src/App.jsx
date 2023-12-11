/* eslint-disable react/prop-types */
import { useState } from "react";

function Greeting({ name }) {
  return <h1>Selamat datang, di latihan React {name}!</h1>;
}

function Toggle() {
  const [pesan, setPesan] = useState("Hidup");

  function handlePesan() {
    setPesan(pesan === "Hidup" ? "Mati" : "Hidup");
  }

  return <button onClick={handlePesan}>{pesan}</button>;
}

function List({ items }) {
  return (
    <>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </>
  );
}

export default function App() {
  const items = ["Farrel", "Rivaldi", "Devi"];

  return (
    <>
      <Greeting name={"Farrel"} />
      <Toggle />
      <ul>
        <List items={items} />
      </ul>
    </>
  );
}
