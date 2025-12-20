export default function Button({ setCart, data, setQuantity }) {
  return (
    <button
      className="flex justify-center items-center absolute -bottom-4.5 left-[50%] -translate-x-[50%] cursor-pointer border border-gray-600 rounded-2xl w-[50%] py-1.5 gap-2 bg-white "
      onClick={() => {
        setCart((cart) => [...cart, data]);
        setQuantity(e=>e+1)
      }}
    >
      <img src="/public/assets/images/icon-add-to-cart.svg" alt={data.name} />
      Add To Cart
    </button>
  );
}
