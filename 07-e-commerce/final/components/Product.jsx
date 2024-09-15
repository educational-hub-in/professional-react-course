"use client";
import axios from "axios";
import { useState } from "react";
import { AiOutlineHeart, AiOutlineEye } from "react-icons/ai";
import { useUser } from "@clerk/clerk-react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Product({ product }) {
  const [onHover, setOnHover] = useState(false);
  const user = useUser();

  const addToCart = (product) => {
    if (!user.isSignedIn) {
      toast.error("You need to be signed in to add products to cart");
      return;
    }

    if (user.isSignedIn) {
      const addToCartPromise = axios.post("/api/cart/add-to-cart", { product });

      toast.promise(addToCartPromise, {
        pending: "Adding product to cart...",
        success: "Product added to cart 👌",
        error: "Failed to add product to cart 🤯",
      });

      addToCartPromise
        .then(() => {
          console.log("Product added to cart");

          setTimeout(() => {
            window.location.reload();
          }, 1000);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  if (!product) return null;

  return (
    <div
      onMouseLeave={() => setOnHover(false)}
      onMouseEnter={() => setOnHover(true)}
      className="space-y-4 relative w-[300px] bg-white p-4 shadow-md flex flex-col items-center justify-center rounded-xl transition-all duration-300 ease-in-out"
    >
      <img
        src={product.image}
        className={` ${
          onHover ? "brightness-50" : ""
        } h-[300px] w-[300px] object-cover bg-gray-300`}
        alt={product.title}
      />

      <p title={product.title} className="font-bold font-jost">
        {product.title.length > 30
          ? `${product.title.substring(0, 30)}...`
          : product.title}
      </p>

      {/* Price with strike-through for original price */}
      <div className="text-center">
        <span className="font-semibold">${product.price}</span>
        <span className="text-gray-500 line-through ml-2">$100.00</span>
      </div>

      {/* Hover actions */}
      {onHover && (
        <div className="absolute top-0 right-0 flex gap-3 p-2 flex-col items-center justify-center">
          <button className="text-black p-2 bg-white rounded-full">
            <AiOutlineHeart size={24} />
          </button>
          <button className="text-black p-2 bg-white rounded-full">
            <AiOutlineEye size={24} />
          </button>
        </div>
      )}

      {/* Add to Cart button */}
      {onHover && (
        <div className="absolute bottom-14 left-0 w-full flex justify-center">
          <button
            onClick={() => addToCart(product)}
            className="bg-black text-white px-6 py-2 mb-4 rounded-md"
          >
            Add to Cart
          </button>
        </div>
      )}
    </div>
  );
}
