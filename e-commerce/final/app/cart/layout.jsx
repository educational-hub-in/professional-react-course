"use client";
import Cart from "@/components/Cart";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";

function calculateCartTotal(cart) {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

export default function RootLayout({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const user = useUser();

  useEffect(() => {
    setCartItems(user.user?.publicMetadata.cart);

    if (!cartItems) return;
    const total = calculateCartTotal(cartItems);
    setTotal(total.toFixed(2));
  }, [user, cartItems]);

  return (
    <section className="flex justify-between mx-24">
      {children}
      <div className="w-[20%] h-full sticky top-28 z-10">
        <Cart total={total} cart={cartItems} />
      </div>
    </section>
  );
}
