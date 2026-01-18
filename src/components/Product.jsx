import Button from "./Button";
import CountButton from "./CountButton";

export default function Product({
  data,
  cartItem,
  onAddToCart,
  onIncrement,
  onDecrement,
  
}) {
  return (
    <div className="w-[32%]">
      <div className="relative mb-7">
        <img
          src={data.image.desktop}
          alt={data.name}
          className={"rounded-2xl"}
        />
        {cartItem ? (
          <CountButton 
            data={cartItem}
            onIncrement={() => onIncrement(cartItem.name)}
            onDecrement={() => onDecrement(cartItem.name)}
            
          />
        ) : (
          <Button data={data} onAddToCart={onAddToCart}  >
            Add To Cart
          </Button>
        )}
      </div>
      <p>{data.category}</p>
      <p className="font-bold">{data.name}</p>
      <p className="text-orange-600 font-bold">${data.price}</p>
    </div>
  );
}
