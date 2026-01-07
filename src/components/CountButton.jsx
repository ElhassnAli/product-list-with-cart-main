export default function CountButton({ data, onIncrement, onDecrement }) {
  return (
    <div className="flex justify-center items-center absolute -bottom-5.5 left-[50%] -translate-x-[50%] border-none rounded-2xl w-[50%] p-2.5 gap-6 bg-orange-600">
      <button
        className="border rounded-2xl border-white w-6 h-6 flex justify-center items-center cursor-pointer"
        onClick={onDecrement}
      >
        <img src="/assets/images/icon-decrement-quantity.svg" alt="decrement" />
      </button>
      <p className="text-white">{data.quantity}</p>
      <button
        className="border rounded-2xl border-white w-6 h-6 flex justify-center items-center cursor-pointer"
        onClick={onIncrement}
      >
        <img src="/assets/images/icon-increment-quantity.svg" alt="increment" />
      </button>
    </div>
  );
}
