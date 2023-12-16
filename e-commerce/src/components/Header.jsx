/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react";

export default function Header({ cart_total, cart_item, total, handleSearch }) {
  const [isClick, setIsClick] = useState(false);
  const [isActive, setIsActive] = useState(false);

  function handleShow() {
    setIsClick(!isClick);
  }

  function handleToggle() {
    setIsActive(!isActive);
  }

  return (
    <>
      <header className="flex justify-between items-center px-5 md:px-10 lg:px-20 py-4 fixed top-0 left-0 right-0 bg-green-700 shadow-md text-white">
        <nav>
          <div className="sm:hidden">
            <button
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-user"
              aria-expanded="false"
              onClick={handleToggle}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`absolute menu top-[100%] left-0 bg-white shadow-md items-center justify-between ${
              isActive ? "clicked" : ""
            } w-full md:flex md:w-auto md:order-1 md:bg-transparent md:shadow-none md:static`}
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 border border-gray-100 rounded-lg  md:space-x-8 md:flex-row md:mt-0 md:border-0">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-black md:text-white hover:bg-slate-400 rounded md:bg-transparent md:hover:text-slate-300 transition duration-150 md:p-0 "
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-black md:text-white rounded hover:bg-slate-400 md:hover:bg-transparent md:hover:text-slate-300 transition duration-150 md:p-0 "
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-black md:text-white rounded hover:bg-slate-400 md:hover:bg-transparent md:hover:text-slate-300 transition duration-150 md:p-0 "
                >
                  Contact
                </a>
              </li>
              <li className="md:hidden">
                <form className="items-center py-2 sm:flex sm:min-w-[250px] lg:min-w-[450px]">
                  <label htmlFor="simple-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg
                        className="w-4 h-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="simple-search"
                      className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  "
                      placeholder="Search fruit name..."
                      onChange={handleSearch}
                    />
                  </div>
                </form>
              </li>
            </ul>
          </div>
        </nav>
        <div className="seach-bar">
          <form className="items-center hidden sm:flex sm:min-w-[250px] lg:min-w-[450px]">
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  "
                placeholder="Search fruit name..."
                onChange={handleSearch}
              />
            </div>
          </form>
        </div>
        <div className="shop-cart flex items-center gap-2 sm:gap-5">
          <button className="flex gap-2 cursor-default">
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
                          className="px-6 py-4 font-medium  whitespace-nowrap"
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
                        className="px-6 py-4 font-medium  whitespace-nowrap"
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
