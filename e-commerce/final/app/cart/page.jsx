"use client";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

function calculateCartTotal(cart) {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

export default function Page() {
  const [cartItems, setCartItems] = useState([]);
  const user = useUser();

  const router = useRouter();

  useEffect(() => {
    setCartItems(user.user?.publicMetadata.cart);

    if (!cartItems) return;
    const total = calculateCartTotal(cartItems);
    console.log(`Total cart cost: $${total.toFixed(2)}`);
  }, [user]);

  if (!user)
    return (
      <div>
        <h1>Sign in to view your cart</h1>
        <button onClick={() => router.push("/sign-in")}>Sign in</button>
      </div>
    );

  return (
    <section className="mx-12">
      <aside className="">
        {cartItems && (
          <div>
            <h1 className="text-5xl font-bold my-4 mb-7">Review Your Order</h1>
            <ul className="space-y-8">
              {cartItems.map((item) => (
                <li className="flex gap-4" key={item.id}>
                  <div>
                    <img
                      src={item.image}
                      alt={item.image}
                      className="h-[200px] w-[200px]"
                    />
                  </div>
                  <div className="flex flex-col justify-center gap-2">
                    <p className="text-xl font-bold">{item.title}</p>
                    <p>
                      {" "}
                      {item.quantity} X ${item.price.toFixed(2)}
                    </p>

                    <p className="font-bold">
                      ${(item.quantity * item.price).toFixed(2)}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </aside>
    </section>
  );
}
