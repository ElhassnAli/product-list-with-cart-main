import Button from "./Button";
import CountButton from "./CountButton";
export default function Product({ data, onSetCart }) {
  return (
    <div className="w-[32%]">
      <div className="relative mb-7">
        <img
          src={data.image.desktop}
          alt={data.name}
          className="rounded-2xl $"
        />
        <Button data={data} onSetCart={onSetCart} />
      </div>
      <p>{data.category}</p>
      <p className="font-bold">{data.name}</p>
      <p className="text-orange-600 font-bold">${data.price}</p>
    </div>
  );
}
// quantity === 1 ? "border border-solid border-orange-600" : "";
