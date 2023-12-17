"use client";
import MyCard from "./components/MyCard";
import Filter from "./components/Filter";
import { useState } from "react";

export default function Home() {
  const data = [
    {
      id: 1,
      title: "PEMILU",
      subtitle: "Pemilihan umum presiden dan wakil presiden (2024-2029)",
      selections: ["Anies, Cak Imin", "Prabowo, Gibran", "Ganjar, Mahfud"],
      category: "politic",
    },
    {
      id: 2,
      title: "Game yang Bagus",
      subtitle: "Bantu saya memilih game yang bagus",
      selections: ["MIR4", "Mobile Legend", "GTA V"],
      category: "game",
    },
  ];

  const [showData, setShowData] = useState(data);

  const handleCategory = (val) => {
    const newData = data.filter((item) => item.category === val.toLowerCase());
    val === "All" ? setShowData(data) : setShowData(newData);
  };

  return (
    <div className="flex justify-center h-screen">
      <div className="p-10 min-w-[300px] md:min-w-[500px]">
        <div>
          <h1 className="text-3xl font-bold">Voting-App</h1>
          <div className="mt-5">
            <Filter data={data} handleCategory={handleCategory} />
          </div>
        </div>
        {showData.map((item) => (
          <div key={item.id} className="mt-5">
            <MyCard
              title={item.title}
              subtitle={item.subtitle}
              selections={item.selections}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
