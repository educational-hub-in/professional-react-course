function Cart({ cartItems, setIsOrderOpen }) {
  console.log(cartItems, "CART ITEMS");

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="p-8 bg-white rounded-xl sticky top-0">
      <h2 className="font-redhat-bold text-2xl text-custom-red">
        Your Cart ({cartItems.length})
      </h2>

      {cartItems.length === 0 ? (
        <div className="flex flex-col font-redhat-semibold justify-center items-center mt-8">
          <img
            src="assets/images/illustration-empty-cart.svg"
            alt="empty-cart"
          />
          <p>Your added items will appear here</p>
        </div>
      ) : (
        <div className="mt-8">
          {cartItems.map((item, index) => (
            <div key={index} className="flex justify-between items-center mb-4">
              <div>
                <p className="font-redhat-semibold text-rose-900">
                  {item.name}
                </p>
                <p className="text-sm text-rose-500">
                  {item.quantity} x ${item.price.toFixed(2)}
                </p>
              </div>
              <p className="font-redhat-bold text-custom-red">
                ${(item.quantity * item.price).toFixed(2)}
              </p>
            </div>
          ))}
          <div className="border-t pt-4 mt-4">
            <p className="font-redhat-bold text-xl text-rose-900">
              Total: ${total.toFixed(2)}
            </p>
          </div>
          <button
            onClick={() => setIsOrderOpen(true)}
            className="w-full bg-custom-red font-redhat-bold my-4 py-2 text-white"
          >
            Confirm Order
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
