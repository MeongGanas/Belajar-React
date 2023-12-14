import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Card from "./components/Card.jsx";

async function getData() {
  try {
    const response = await fetch("/data.json");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default function App() {
  const [cartItems, setcartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const fetchedData = await getData();
      if (fetchedData) {
        setItems(fetchedData);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    const nextTotal = cartItems.reduce(
      (acc, item) => acc + item.total_price,
      0
    );
    setTotal(nextTotal);
  }, [cartItems]);

  function handleCart(id, item_name, count, price, total_price) {
    const newItem = {
      id: id,
      item_name: item_name,
      total: count,
      price: price,
      total_price: total_price,
    };

    const existingItemIndex = cartItems.findIndex((item) => item.id === id);

    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        item.total = count;
        item.total_price = total_price;
      }
      return item;
    });

    if (count > 0) {
      if (existingItemIndex === -1) {
        updatedCart.push(newItem);
      }
    } else {
      const filteredCart = updatedCart.filter((item) => item.id !== id);
      setcartItems(filteredCart);
    }

    setcartItems(updatedCart);
  }

  return (
    <>
      <Header
        cart_total={cartItems.length}
        cart_item={cartItems}
        total={total}
      />

      <div className="px-10 py-20 md:p-20">
        <div>
          <h1 className="text-lg font-semibold text-center">
            Ada {items.length} jenis buah-buahan tersedia
          </h1>
        </div>
        <div className="flex flex-wrap justify-center gap-5">
          {items.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              item_name={item.name}
              image_url={"./src/assets/spinach.jpg"}
              price={item.id > 5 ? 200 * item.id : 8500 * item.id}
              counter={0}
              addToCart={handleCart}
            />
          ))}
        </div>
      </div>
    </>
  );
}
