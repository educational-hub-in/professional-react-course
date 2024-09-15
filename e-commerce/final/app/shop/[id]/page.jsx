"use client";
import { useEffect, useState } from "react";
import Product from "@/components/Product";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Page({ params }) {
  const category = params.id;
  const [prodcuts, setProdcuts] = useState([]);

  // if category is not men's clothing, or electronics navigate to 404

  console.log(category);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .then((response) => {
        console.log(response.data);
        setProdcuts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [category]);

  function formatCategory(category) {
    return category
      .replace(/%20/g, " ") // Replace %20 with spaces
      .toLowerCase() // Convert the entire string to lowercase
      .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize only the first letter of each word
  }

  if (
    category !== "electronics" &&
    category !== "women's%20clothing" &&
    category !== "men's%20clothing" &&
    category !== "jewelery"
  ) {
    return (
      <div className="h-[70vh] text-4xl flex flex-col justify-center items-center">
        <h1>404</h1>
        <h2>Page not found</h2>
        <button
          onClick={() => {
            window.location.href = "/shop";
          }}
          className="p-5 bg-black text-white mt-5"
        >
          Go back to shop
        </button>
      </div>
    );
  }

  return (
    <div className="px-24">
      <h2 className="text-4xl font-bold">{formatCategory(category)}</h2>

      <div className="grid grid-cols-3 gap-7">
        {prodcuts.length > 0 &&
          prodcuts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </div>

      <ToastContainer />
    </div>
  );
}
