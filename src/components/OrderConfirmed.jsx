import CartProducts from "./CartProducts";
function OrderConfirmed({ cart, OnstartDefault }) {
  let allTotal = 0;
  cart.forEach((c) => {
    return (allTotal += c.quantity * c.price);
  });

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-[25%] p-5 rounded-2xl">
      <img
        src="/assets/images/icon-order-confirmed.svg"
        alt="Order confirmed icon"
      />
      <h1 className="text-4xl mb-3">Order Confirmed</h1>
      <p className="mb-5">We hope you enjoy your food!</p>

      <div className="p-5 bg-rose-50 rounded-2xl">
        {cart.map((c) => (
          <div key={c.name} className="flex justify-between items-center mb-3">
            <div className="flex gap-5 ">
              <img src={c.image.thumbnail} alt={c.name} className="w-16 h-16" />
              <div>
                <p>{c.name}</p>
                <div className="flex gap-5 items-center">
                  <strong className=" text-orange-600 text-lg">
                    {c.quantity}x
                  </strong>
                  <span className="text-[14px]">@{c.price}</span>
                </div>
              </div>
            </div>
            <p>{c.quantity * c.price}</p>
          </div>
        ))}

        <p className="flex justify-between pt-10">
          <span>Order Total</span>
          <strong className="text-base">${allTotal}</strong>
        </p>
      </div>
      <div className="flex justify-center">
        <button
          className="w-full p-4 mt-7 rounded-4xl bg-orange-500 text-white cursor-pointer"
          onClick={OnstartDefault}
        >
          Start New Order
        </button>
      </div>
    </div>
  );
}

export default OrderConfirmed;
