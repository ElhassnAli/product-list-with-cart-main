import Button from "./Button";
function Total({ products }) {
  let allTotal = 0;
  products.forEach((ele) => {
    return (allTotal += ele.quantity * ele.price);
  });
  return (
    <div className="">
      <p className="flex justify-between px-4 py-4">
        <span>Order Total</span>
        <strong className="text-3xl">${allTotal}</strong>
      </p>

      <div className="flex mb-5 justify-center text-center  items-center">
        <p className="flex bg-rose-50 w-90 p-4 justify-center rounded-2xl">
          <img
            src="/public/assets/images/icon-carbon-neutral.svg"
            alt="carbon-neutral"
          />
          <p>
            This is a <strong>Carbon-Neutral</strong> delivery
          </p>
        </p>
      </div>
      <div className="flex justify-center">
        <button className="w-90 p-4 rounded-4xl bg-orange-500 text-white cursor-pointer">
          Confirm Order
        </button>
      </div>
    </div>
  );
}

export default Total;
