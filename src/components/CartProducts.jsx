export default function CartProducts({ productData, children }) {
  return (
    <>
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
        {children}
      </div>
    </>
  );
}
