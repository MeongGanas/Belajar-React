import { useState } from "react";

/* eslint-disable react/prop-types */
export default function Card({ id, item_name, price, image_url, addToCart }) {
  const [counter, setCounter] = useState(0);

  function handleInc() {
    setCounter(counter + 1);
  }
  function handleDec() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  return (
    <>
      <div className="min-w-[230px] mt-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow">
        <a href="#">
          <div className="flex justify-center mt-5">
            <img
              className="rounded-t-lg max-h-[100px]"
              src={image_url}
              alt=""
            />
          </div>
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              {item_name}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Rp. {price} / kg
          </p>
          <div className="flex items-center">
            <button
              onClick={handleDec}
              className="rounded-full transition duration-150 ease-out flex items-center p-2 hover:bg-slate-100 mr-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-minus"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
            <h1>{counter}</h1>
            <button
              onClick={handleInc}
              className="rounded-full flex items-center p-2 duration-150 ease-out hover:bg-slate-100 mx-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-plus"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
            <button
              value={id}
              onClick={() =>
                addToCart(id, item_name, counter, price, price * counter)
              }
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 duration-150 ease-out focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
