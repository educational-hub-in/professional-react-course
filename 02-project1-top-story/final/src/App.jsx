import Article from "./components/Article";
import { useState } from "react";
import axios from "axios";

function App() {
  const [search, setSearch] = useState("");
  const [response, setResponse] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(false);

  const getNews = async (event) => {
    try {
      event.preventDefault();

      if (!search) return alert("Please enter a search term");

      setLoading(true);

      console.log(search);
      console.log(import.meta.env.VITE_APIKEY);
      console.log(import.meta.env.VITE_SOME_KEY);

      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${search}&apiKey=${
          import.meta.env.VITE_APIKEY
        }&language=en`
      );
      const filteredResponse = response.data.articles.filter(
        (article) =>
          article.title !== "[Removed]" &&
          article.desription !== "[Removed]" &&
          article.content !== "[Removed]"
      );

      setLoading(false);
      setResponse(filteredResponse);
      setTotalResults(filteredResponse.length);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="bg-custom-yellow h-screen flex flex-col items-center py-4 md:py-24">
      <div className="w-[95%] xl:w-[70%] h-full flex flex-col">
        <h1 className="font-figtree-extrabold text-6xl border-b-[3px] border-black pb-3">
          Top Story📰🗞️
        </h1>

        <form onSubmit={getNews}>
          <input
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-4 my-4 font-figtree-semibold"
            type="text"
            name="search"
            id="search"
          />
          <button
            type="submit"
            className="bg-black text-white px-3 py-1 font-figtree-semibold"
          >
            Search
          </button>
        </form>

        {totalResults > 0 && (
          <p className="font-figtree-semibold">Total Results {totalResults}</p>
        )}

        <section className="flex-1 w-full my-4 h-full overflow-y-scroll flex flex-col xl:items-start items-center">
          <div className="grid justify-center place-content-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 py-4">
            {loading ? (
              <p>Loading...</p>
            ) : (
              response.map((article, index) => (
                <Article key={index} article={article} />
              ))
            )}
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
