/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react";

export default function Header({ cart_total, cart_item, total }) {
  const [isClick, setIsClick] = useState(false);

  function handleShow() {
    setIsClick(!isClick);
  }

  return (
    <>
      <header className="flex justify-between items-center px-10 md:px-20 py-4 fixed top-0 left-0 right-0 bg-green-700 shadow-md text-white">
        <nav>
          <div></div>
          <ul className="gap-12 font-semibold text-lg hidden sm:flex">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Items</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="shop-cart flex items-center gap-5">
          <button className="flex gap-3 cursor-default">
            <h1>{cart_total}</h1>
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
              className="feather feather-shopping-cart"
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
          </button>

          <button
            className={`dropdown dropdown-6 ${isClick ? "clicked" : ""}`}
            onClick={handleShow}
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
              className="feather feather-chevron-down"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
            <ul className="dropdown_menu dropdown_menu--animated dropdown_menu-6">
              <li className="dropdown_item-1">
                <h1
                  className="text-xl font-semibold p-5"
                  hidden={cart_item.length != 0}
                >
                  {cart_item.length < 1 ? "No item in cart yet" : ""}
                </h1>
              </li>
              <li className="dropdown_item-2">
                <table hidden={cart_item.length < 1} className="w-full">
                  <thead className="text-xs text-gray-700 uppercase bg-white border-b">
                    <tr>
                      <th scope="col" className="px-6 py-4">
                        Product name
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Total Item
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Price
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Subtotal
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart_item.map((item) => (
                      <tr className="bg-white border-b" key={item.id}>
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                        >
                          {item.item_name}
                        </th>
                        <td className="px-6 py-4">{item.total}</td>
                        <td className="px-6 py-4">Rp. {item.price}</td>
                        <td className="px-6 py-4">Rp. {item.total_price}</td>
                      </tr>
                    ))}
                    <tr>
                      <th
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                        colSpan="3"
                      >
                        Total:
                      </th>
                      <td>Rp. {total}</td>
                    </tr>
                  </tbody>
                </table>
              </li>
            </ul>
          </button>
        </div>
      </header>
    </>
  );
}
