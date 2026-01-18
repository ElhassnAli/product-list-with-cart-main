import CartProducts from "./CartProducts";
function OrderConfirmed({ cart, OnstartDefault }) {
  let allTotal = 0;
  cart.forEach((c) => {
    return (allTotal += c.quantity * c.price);
  });

  return (
    <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white w-full max-w-sm md:max-w-md p-5 rounded-2xl max-h-[90vh] overflow-y-auto">
        <img
          src="/assets/images/icon-order-confirmed.svg"
          alt="Order confirmed icon"
          className="mb-3"
        />
        <h1 className="text-2xl md:text-4xl mb-3 font-bold">Order Confirmed</h1>
        <p className="mb-5 text-gray-600">We hope you enjoy your food!</p>

        <div className="p-4 md:p-5 bg-rose-50 rounded-2xl mb-5">
          {cart.map((c) => (
            <div
              key={c.name}
              className="flex justify-between items-start gap-3 mb-4 pb-4   "
            >
              <div className="flex gap-3">
                <img
                  src={c.image.thumbnail}
                  alt={c.name}
                  className="w-12 h-12 md:w-16 md:h-16 rounded object-cover"
                />
                <div className="flex-1">
                  <p className="font-semibold text-sm md:text-base">{c.name}</p>
                  <div className="flex gap-3 items-center mt-1">
                    <strong className="text-orange-600 text-sm">
                      {c.quantity}x
                    </strong>
                    <span className="text-xs md:text-sm text-gray-600">
                      @${c.price}
                    </span>
                  </div>
                </div>
              </div>
              <p className="font-semibold text-sm md:text-base whitespace-nowrap">
                ${(c.quantity * c.price).toFixed(2)}
              </p>
            </div>
          ))}

          <p className="flex justify-between pt-4  mt-4">
            <span className="font-semibold">Order Total</span>
            <strong className="text-xl md:text-2xl text-orange-600">
              ${allTotal.toFixed(2)}
            </strong>
          </p>
        </div>

        <button
          className="w-full p-3 md:p-4 rounded-3xl bg-orange-500 text-white font-semibold cursor-pointer hover:bg-orange-600 transition"
          onClick={OnstartDefault}
        >
          Start New Order
        </button>
      </div>
    </div>
  );
}

export default OrderConfirmed;
