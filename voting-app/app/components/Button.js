"use client";

import { useState } from "react";

export default function Button() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick} className="bg-green-700">
      count {count}
    </button>
  );
}
