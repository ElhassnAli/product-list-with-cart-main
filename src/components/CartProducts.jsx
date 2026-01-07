export default function CartProducts({ productData, onRemove }) {
  return (
    <div className="flex justify-between items-center m-3 p-2 border-b border-gray-300">
      <div>
        <p className="font-bold">{productData.name}</p>
        <p className=" flex gap-5 items-center">
          <span className="text-orange-600 font-bold">
            {productData.quantity}x
          </span>
          <span className="text-sm">${productData.price}</span>
          <strong className="text-sm">
            ${productData.price * productData.quantity}
          </strong>
        </p>
      </div>

      <button
        onClick={onRemove}
        className="ml-2  w-5 h-5 rounded-2xl border-black border flex justify-center items-center cursor-pointer"
      >
        <img src="/assets/images/icon-remove-item.svg" alt="remove" />
      </button>
      
    </div>
  );
}
