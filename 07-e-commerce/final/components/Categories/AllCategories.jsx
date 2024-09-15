"use client";

import axios from "axios";
import { useEffect, useState } from "react";

const categoryImages = {
  electronics: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
  jewelery: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
  "men's clothing": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
  "women's clothing": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
};

const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export default function AllCategories() {
  // use this api call https://fakestoreapi.com/products/categories

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        console.log(response.data);
        setCategories(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="grid grid-cols-4 gap-5">
      {categories.map((category, i) => (
        <div
          onClick={() => {
            window.location.href = `/shop/${category}`;
          }}
          key={i}
          className="p-4 rounded-lg text-center flex flex-col justify-between cursor-pointer"
        >
          <div>
            {" "}
            <img
              src={categoryImages[category]}
              alt={category}
              className="mx-auto mb-4 h-[250px] w-32 object-contain"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold">{capitalize(category)}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
