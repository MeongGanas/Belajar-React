"use client";
import MyCard from "./components/MyCard";
import Filter from "./components/Filter";
import CreateVote from "./components/CreateVote";
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);

  const [showData, setShowData] = useState(data);

  const handleCategory = (val) => {
    const newData = data.filter((item) => item.category === val.toLowerCase());
    val === "All" ? setShowData(data) : setShowData(newData);
  };

  const handleMake = (title, subtitle, selections, category) => {
    const newData = {
      id: data.length,
      title,
      subtitle,
      selections,
      category: category.toLowerCase(),
    };

    const nextData = [...data, newData];
    setData(nextData);
    setShowData(nextData);
  };

  return (
    <div className="flex justify-center h-screen">
      <div className="p-10 min-w-[300px] md:min-w-[500px]">
        <div>
          <h1 className="text-3xl font-bold">Voting-App</h1>
          <div className="mt-5">
            <Filter data={data} handleCategory={handleCategory} />
          </div>
          <div className="mt-2">
            <CreateVote handleMake={handleMake} />
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
