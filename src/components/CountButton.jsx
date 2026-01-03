export default function CountButton() {
  return (
    <button className="flex justify-center items-center absolute -bottom-4.5 left-[50%] -translate-x-[50%] cursor-pointer border-none rounded-2xl w-[50%] py-1.5 gap-10 bg-orange-600">
      <button className="border rounded-2xl border-white w-4.5 h-4.5 flex justify-center items-center cursor-pointer">
        <img src="/public/assets/images/icon-decrement-quantity.svg" alt="" />
      </button>
      <p className="text-white">hhhhhhh</p>

      <button className="border rounded-2xl border-white w-4.5 h-4.5 flex justify-center items-center cursor-pointer">
        <img src="/public/assets/images/icon-increment-quantity.svg" alt="" />
      </button>
    </button>
  );
}
