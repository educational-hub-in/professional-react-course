import { useEffect, useState } from "react";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Order from "./components/Order";

const data = [
  {
    image: {
      thumbnail: "./assets/images/image-waffle-thumbnail.jpg",
      mobile: "./assets/images/image-waffle-mobile.jpg",
      tablet: "./assets/images/image-waffle-tablet.jpg",
      desktop: "./assets/images/image-waffle-desktop.jpg",
    },
    name: "Waffle with Berries",
    category: "Waffle",
    price: 6.5,
  },
  {
    image: {
      thumbnail: "./assets/images/image-creme-brulee-thumbnail.jpg",
      mobile: "./assets/images/image-creme-brulee-mobile.jpg",
      tablet: "./assets/images/image-creme-brulee-tablet.jpg",
      desktop: "./assets/images/image-creme-brulee-desktop.jpg",
    },
    name: "Vanilla Bean Crème Brûlée",
    category: "Crème Brûlée",
    price: 7.0,
  },
  {
    image: {
      thumbnail: "./assets/images/image-macaron-thumbnail.jpg",
      mobile: "./assets/images/image-macaron-mobile.jpg",
      tablet: "./assets/images/image-macaron-tablet.jpg",
      desktop: "./assets/images/image-macaron-desktop.jpg",
    },
    name: "Macaron Mix of Five",
    category: "Macaron",
    price: 8.0,
  },
  {
    image: {
      thumbnail: "./assets/images/image-tiramisu-thumbnail.jpg",
      mobile: "./assets/images/image-tiramisu-mobile.jpg",
      tablet: "./assets/images/image-tiramisu-tablet.jpg",
      desktop: "./assets/images/image-tiramisu-desktop.jpg",
    },
    name: "Classic Tiramisu",
    category: "Tiramisu",
    price: 5.5,
  },
  {
    image: {
      thumbnail: "./assets/images/image-baklava-thumbnail.jpg",
      mobile: "./assets/images/image-baklava-mobile.jpg",
      tablet: "./assets/images/image-baklava-tablet.jpg",
      desktop: "./assets/images/image-baklava-desktop.jpg",
    },
    name: "Pistachio Baklava",
    category: "Baklava",
    price: 4.0,
  },
  {
    image: {
      thumbnail: "./assets/images/image-meringue-thumbnail.jpg",
      mobile: "./assets/images/image-meringue-mobile.jpg",
      tablet: "./assets/images/image-meringue-tablet.jpg",
      desktop: "./assets/images/image-meringue-desktop.jpg",
    },
    name: "Lemon Meringue Pie",
    category: "Pie",
    price: 5.0,
  },
  {
    image: {
      thumbnail: "./assets/images/image-cake-thumbnail.jpg",
      mobile: "./assets/images/image-cake-mobile.jpg",
      tablet: "./assets/images/image-cake-tablet.jpg",
      desktop: "./assets/images/image-cake-desktop.jpg",
    },
    name: "Red Velvet Cake",
    category: "Cake",
    price: 4.5,
  },
  {
    image: {
      thumbnail: "./assets/images/image-brownie-thumbnail.jpg",
      mobile: "./assets/images/image-brownie-mobile.jpg",
      tablet: "./assets/images/image-brownie-tablet.jpg",
      desktop: "./assets/images/image-brownie-desktop.jpg",
    },
    name: "Salted Caramel Brownie",
    category: "Brownie",
    price: 4.5,
  },
  {
    image: {
      thumbnail: "./assets/images/image-panna-cotta-thumbnail.jpg",
      mobile: "./assets/images/image-panna-cotta-mobile.jpg",
      tablet: "./assets/images/image-panna-cotta-tablet.jpg",
      desktop: "./assets/images/image-panna-cotta-desktop.jpg",
    },
    name: "Vanilla Panna Cotta",
    category: "Panna Cotta",
    price: 6.5,
  },
];

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [confirmOrder, setConfirmOrder] = useState(false);
  const [timer, setTimer] = useState(10);

  const handleAddToCart = (product) => {
    console.log(product, "THIS IS THE PRODUCT");

    const exists = cartItems.find((item) => item.name === product.name);
    if (exists) {
      console.log("Product exists in cart");

      setCartItems(
        cartItems.map((item) => {
          if (item.name === product.name) {
            console.log("Product exists in cart and quantity is increased");

            return { ...exists, quantity: exists.quantity + 1 };
          } else {
            console.log("Product is not on cart");
            console.log(item);
            return item;
          }
        })
      );
    } else {
      console.log("Product does not exist in cart");

      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (product) => {
    const exists = cartItems.find((item) => item.name === product.name);
    if (exists.quantity === 1) {
      console.log("Product quantity is 1");

      console.log(cartItems.filter((item) => item.name !== product.name));
      setCartItems(cartItems.filter((item) => item.name !== product.name));
    } else {
      console.log("Product quantity is greater than 1");
      setCartItems(
        cartItems.map((item) =>
          item.name === product.name
            ? { ...exists, quantity: exists.quantity - 1 }
            : item
        )
      );
    }
  };

  useEffect(() => {
    if (confirmOrder && timer > 0) {
      const intervalId = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);

      return () => clearInterval(intervalId); // Cleanup interval on component unmount or when timer ends
    } else if (timer === 0) {
      alert("Your order has been delivered!");
      setCartItems([]);
      setTimer(10);
      setConfirmOrder(false);
    }
  }, [confirmOrder, timer]);

  return (
    <main className="p-12 bg-rose-50 min-h-screen relative">
      <h1 className="font-redhat-bold text-4xl text-rose-900">Desserts</h1>

      <div className="flex xl:flex-row flex-col my-12">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-7 basis-[70%]">
          {data.map((product, index) => (
            <Product
              key={index}
              product={product}
              onAddToCart={handleAddToCart}
              onRemoveFromCart={handleRemoveFromCart}
              cartItems={cartItems}
            />
          ))}
        </section>

        <aside className="w-96 ">
          <div className={`${confirmOrder ? "block" : "hidden"} `}>
            <p>Time remaining: {timer} seconds</p>
          </div>
          <Cart cartItems={cartItems} setIsOrderOpen={setIsOrderOpen} />
        </aside>
      </div>
      <Order
        isOrderOpen={isOrderOpen}
        onClose={() => setIsOrderOpen(false)}
        cartItems={cartItems}
        handleRemoveFromCart={handleRemoveFromCart}
        setConfirmOrder={setConfirmOrder}
        setCartItems={setCartItems}
        setIsOrderOpen={setIsOrderOpen}
      />
    </main>
  );
}

export default App;
