import PropTypes from "prop-types";

function Article({ article }) {
  const handleClick = () => {
    console.log("clicked");
    window.open(article.url, "_blank");
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer min-h-[500px] w-[400px] bg-white rounded-2xl flex flex-col gap-5 p-8 border border-black transition-shadow duration-300 hover:shadow-[16px_16px_0_rgba(0,0,0)]"
    >
      <div>
        <img
          src={article.urlToImage}
          alt="placeholder"
          className="w-[450px] h-[250px] object-cover rounded-2xl"
        />
      </div>
      <div className="my-4 flex-col flex justify-between h-full gap-2">
        <span className="text-sm">Published: {article.publishedAt}</span>
        <p className="text-2xl font-figtree-extrabold hover:text-custom-yellow duration-150">
          {article.title}
        </p>
        <p className="text-gray-500 my-2">{article.description}</p>
      </div>
      <span className="text-gray-600">Author - {article.author}</span>
    </div>
  );
}

// PropTypes validation
Article.propTypes = {
  article: PropTypes.shape({
    url: PropTypes.string.isRequired,
    urlToImage: PropTypes.string,
    publishedAt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
};

export default Article;
