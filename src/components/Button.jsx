export default function Button({ data, onAddToCart,children }) {
  return (
    <button
      className="flex justify-center items-center absolute -bottom-5.5 left-[50%] -translate-x-[50%] cursor-pointer border border-gray-600 rounded-2xl w-[50%] p-2.5 gap-2 bg-white "
      onClick={() => {
        onAddToCart(data);
      }}
    >
      <img src="/assets/images/icon-add-to-cart.svg" alt={data.name} />
      {children}
    </button>
  );
}
