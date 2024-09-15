function Cart() {
  return (
    <div className="p-8 bg-white rounded-xl sticky top-12">
      <h2 className="font-redhat-bold text-2xl text-custom-red">
        Your Cart (0)
      </h2>

      <div className="flex flex-col font-redhat-semibold justify-center items-center mt-8">
        <img src="assets/images/illustration-empty-cart.svg" alt="empty-cart" />
        <p>Your added items will appear here</p>
      </div>
    </div>
  );
}

export default Cart;
