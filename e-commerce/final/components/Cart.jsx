"use client";
import { toast, ToastContainer } from "react-toastify";
import { useUser } from "@clerk/nextjs";
import "react-toastify/dist/ReactToastify.css";

export default function Cart({ total }) {
  const user = useUser();
  const cart = user.user?.publicMetadata.cart;

  if (!total) return null;

  return (
    <aside className="rounded-lg p-4 border shadow-xl">
      <div className="border-b pb-2">
        <p className="font-bold flex justify-between">
          Subtotal <span>${total}</span>
        </p>
      </div>
      <div className="mt-4">
        <label>Enter discount code</label>
        <input
          type="text"
          placeholder="Enter your code"
          className="border w-full p-2"
        />
        <button className="bg-black text-white w-full p-2 mt-2">Apply</button>
      </div>
      <p className="font-bold flex justify-between mt-4">
        Grand Total <span>${total}</span>
      </p>
      <button
        onClick={() => {
          console.log(cart);
          toast.success("Order Placed");
        }}
        className="bg-black text-white w-full p-2 mt-2"
      >
        Proceed to Checkout
      </button>
      <ToastContainer />
    </aside>
  );
}
