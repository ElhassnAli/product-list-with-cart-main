import Product from "./Product";

export default function MainPage({
  data,
  cartProducts,
  onAddToCart,
  onIncrement,
  onDecrement,
}) {
  return (
    <div className="w-[70%]">
      <header className="text-5xl mb-5 font-serif">Deserts</header>
      <main className="flex flex-wrap gap-5">
        {data.map((d) => {
          const cartItem = cartProducts.find((p) => p.name === d.name);
          return (
            <Product
              data={d}
              key={d.name}
              cartItem={cartItem}
              onAddToCart={onAddToCart}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
            />
          );
        })}
      </main>
    </div>
  );
}
