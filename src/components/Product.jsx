import { useState } from "react";
import Button from "./Button";
import CountButton from "./CountButton";
export default function Product({ data, setCart }) {
  const [quantity, setQuantity] = useState(0);
  return (
    <div className="w-[32%]">
      <div className="relative mb-7">
        <img src={data.image.desktop} alt={data.name} className="rounded-2xl" />
        {quantity == 0 && (
          <Button setCart={setCart} data={data} setQuantity={setQuantity} />
        )}
        {quantity > 0 && (
          <CountButton quantity={quantity} setQuantity={setQuantity} />
        )}
      </div>
      <p>{data.category}</p>
      <p className="font-bold">{data.name}</p>
      <p className="text-orange-600 font-bold">${data.price}</p>
    </div>
  );
}
