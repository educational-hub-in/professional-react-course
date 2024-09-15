function Article() {
  return (
    <div className="h-[500px] w-[400px] bg-white rounded-2xl flex flex-col gap-5 p-8 border border-black transition-shadow duration-300 hover:cursor-pointer hover:shadow-[16px_16px_0_rgba(0,0,0)]">
      <div>
        <img
          src="https://placeholder.com/400x300"
          alt="placeholder"
          className="w-[450px] h-[250px] object-cover rounded-2xl"
        />
      </div>
      <div className="my-4">
        <span className="bg-custom-yellow p-4 rounded-xl font-figtree-semibold">
          Topic
        </span>
        <span>Published</span>
      </div>
    </div>
  );
}

export default Article;
