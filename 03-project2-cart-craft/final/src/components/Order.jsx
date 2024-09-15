function Order({
  isOrderOpen,
  setIsOrderOpen,
  onClose,
  cartItems,
  handleRemoveFromCart,
  setConfirmOrder,
  setCartItems,
}) {
  console.log(isOrderOpen, "IS ORDER OPEN");
  if (!isOrderOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg w-1/3">
        <h2 className="font-redhat-bold text-2xl text-custom-red">
          Order Summary
        </h2>
        {cartItems.length === 0 ? (
          <>
            <p className="text-center text-rose-500 mt-4">
              Your cart is empty.
            </p>
            <button
              onClick={onClose}
              className="w-full bg-custom-red font-redhat-bold my-4 py-2 text-white"
            >
              Close
            </button>
          </>
        ) : (
          <div className="mt-4">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center mb-4"
              >
                <div>
                  <p className="font-redhat-semibold text-rose-900">
                    {item.name}
                  </p>
                  <p className="text-sm text-rose-500">
                    {item.quantity} x ${item.price.toFixed(2)}
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="font-redhat-bold text-custom-red mr-4">
                    ${(item.quantity * item.price).toFixed(2)}
                  </p>
                  <button
                    onClick={() => handleRemoveFromCart(item)}
                    className=""
                  >
                    <img
                      src="assets/images/icon-remove-item.svg"
                      alt=""
                      className="p-4 border-2 rounded-full border-custom-red object-contain"
                    />
                  </button>
                </div>
              </div>
            ))}
            <div className="border-t pt-4 mt-4">
              <p className="font-redhat-bold text-xl text-rose-900">
                Total: $
                {cartItems
                  .reduce((acc, item) => acc + item.price * item.quantity, 0)
                  .toFixed(2)}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <button
                onClick={onClose}
                className="w-full bg-custom-red font-redhat-bold my-4 py-2 text-white"
              >
                Close
              </button>
              <button
                onClick={() => {
                  console.log("Order confirmed", cartItems);
                  setCartItems([]);
                  setIsOrderOpen(false);
                  setConfirmOrder(true);
                }}
                className="w-full bg-green-600 font-redhat-bold my-4 py-2 text-white"
              >
                Confirm Order
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Order;
