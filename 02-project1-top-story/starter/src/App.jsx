import Article from "./components/Article";

function App() {
  return (
    <main className="bg-custom-yellow h-screen flex flex-col items-center py-4 md:py-24">
      <div className="w-[95%] xl:w-[70%] h-full flex flex-col">
        <h1 className="font-figtree-extrabold text-6xl border-b-[3px] border-black pb-3">
          Top Story📰🗞️
        </h1>

        <input
          className="w-full p-4 my-4 font-figtree-semibold"
          type="text"
          name="search"
          id="search"
        />
        <button className="bg-black text-white px-3 py-1">Search</button>

        <section className="flex-1 w-full my-4 h-full overflow-y-scroll">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 py-4">
            <Article />
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
