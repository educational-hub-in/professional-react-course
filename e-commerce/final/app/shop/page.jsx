"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Product from "@/components/Product";

export default function Page() {
  const [result, setResult] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res.data);
        setResult(res.data);
      })
      .catch((err) => {
        console.error(err);
      });

    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      axios
        .get(`https://fakestoreapi.com/products/category/${selectedCategory}`)
        .then((res) => {
          setResult(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [selectedCategory]);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <section className="w-full flex px-24">
      <div className="w-[50%]">
        <aside className="sticky top-24 z-10">
          <h1 className="text-4xl font-bold">Product Categories</h1>
          <form action="" className="pt-4">
            {categories.map((category) => (
              <div className="space-x-3" key={category}>
                <input
                  type="checkbox"
                  name={category}
                  id={category}
                  checked={selectedCategory === category}
                  onChange={() => handleCategoryChange(category)}
                />
                <label htmlFor={category}>
                  {capitalizeFirstLetter(category)}
                </label>
              </div>
            ))}
          </form>
        </aside>
      </div>

      <div className="grid grid-cols-3 gap-7">
        {result.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
