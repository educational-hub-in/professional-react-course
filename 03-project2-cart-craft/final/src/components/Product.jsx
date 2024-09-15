function Product({ product, onAddToCart, onRemoveFromCart, cartItems }) {
  const cartItem = cartItems.find((item) => item.name === product.name);

  return (
    <div className="max-w-[300px] min-h-52">
      <div className="relative">
        <img
          src={product.image.desktop}
          alt={product.name}
          className="rounded-xl w-full"
        />
        {cartItem ? (
          <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 bg-custom-red rounded-full font-redhat-semibold text-lg px-5 border border-rose-900 w-[80%] flex justify-around p-2">
            <button
              onClick={() => onRemoveFromCart(product)}
              className="p-4 border h-8 rounded-full flex items-center"
            >
              <img
                src="assets/images/icon-decrement-quantity.svg"
                alt="decrement"
              />
            </button>

            <span className="text-white">{cartItem.quantity}</span>

            <button
              onClick={() => onAddToCart(product)}
              className="p-4 border h-8 rounded-full flex items-center"
            >
              <img
                src="assets/images/icon-increment-quantity.svg"
                alt="increment"
              />
            </button>
          </div>
        ) : (
          <button
            onClick={() => onAddToCart(product)}
            className="text-rose-500 absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 bg-white rounded-full font-redhat-semibold text-lg px-4 py-2 border border-rose-900"
          >
            Add to Cart
          </button>
        )}
      </div>
      <div className="mt-8">
        <p className="font-redhat-regular text-rose-500">{product.category}</p>
        <p className="font-redhat-semibold text-xl text-rose-900">
          {product.name}
        </p>
        <p className="font-redhat-bold text-custom-red">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
}

export default Product;
