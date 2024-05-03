// import React from 'react'

import axios from "axios";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { ContextData } from "../../App";

const Home = () => {
  const cartValue = useContext(ContextData);

  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    const apiResponse = async () => {
      const response = await axios.get("https://dummyapi.online/api/products");
      const data = response.data;
      setApiData(data);
      console.log(apiData);
    };
    apiResponse();
  }, []);

  return (
    <div className="flex flex-wrap items-center justify-center">
      {apiData.map((value, i) => {
        return (
          <>
            <div
              key={i}
              className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-5"
            >
              <a href="#">
                <img
                  className="p-8 rounded-t-lg"
                  src={value.featuredImage}
                  alt="product image"
                />
              </a>
              <div className="px-5 pb-5">
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {value.name}
                  </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                  <div>
                    <p className="text-white text-sm">{value.description}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    {`Rs.${value.basePrice}`}
                  </span>
                  <a
                    href="#"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={() => cartValue.setCartValue((count) => count + 1)}
                  >
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Home;
