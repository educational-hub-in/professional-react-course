function Products() {
  return (
    <div className="max-w-[300px] min-h-52">
      <div className="relative">
        <img
          src="https://placeholder.com/500x500"
          alt="image"
          className="rounded-xl"
        />
        <button className="text-rose-500 absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 bg-white rounded-full font-redhat-semibold text-lg px-4 py-2 border border-rose-900">
          Add to Cart
        </button>
      </div>
      <div className="mt-8">
        <p className="font-redhat-regular text-rose-500">Category</p>
        <p className="font-redhat-semibold text-xl text-rose-900">
          Product Name
        </p>
        <p className="font-redhat-bold text-custom-red">$0.00</p>
      </div>
    </div>
  );
}

export default Products;
