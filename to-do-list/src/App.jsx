import { useState } from "react";

export default function App() {
  const [catatan, setCatatan] = useState(["Belajar"]);

  const [temp, setTemp] = useState("");

  function isiCatatan(event) {
    const value = event.target.value;
    setTemp(value);
  }

  function tambahCatatan() {
    const nextCatatan = catatan.slice();
    if (temp) {
      nextCatatan.push(temp);
      setTemp("");
    }
    setCatatan(nextCatatan);
  }

  function hapusCatatan(event) {
    const idx = event.target.value;
    const nextCatatan = catatan.filter((_, index) => index !== Number(idx));

    setCatatan(nextCatatan);
  }

  return (
    <>
      <div className="container">
        <h1>Buat Catatan mu</h1>
        <div>
          <input type="text" onChange={isiCatatan} />
          <button onClick={tambahCatatan}>Buat</button>
        </div>
        <div>
          <ul>
            {catatan.map((catat, index) => (
              <li key={index}>
                <h1>{catat}</h1>
                <button onClick={hapusCatatan} value={index}>
                  Hapus
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
