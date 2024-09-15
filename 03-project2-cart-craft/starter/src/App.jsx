import Product from "./components/Product";
import Cart from "./components/Cart";

function App() {
  return (
    <main className="p-12 bg-rose-50 min-h-screen">
      <h1 className="font-redhat-bold text-4xl text-rose-900">Desserts</h1>

      <div className="flex xl:flex-row flex-col my-12">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-7 basis-[70%]">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </section>

        <aside className="w-96">
          <Cart />
        </aside>
      </div>
    </main>
  );
}

export default App;
