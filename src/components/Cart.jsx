import Empty from "./Empty";
import CartProducts from "./CartProducts";

export default function Cart({ products, onIncrement, onDecrement, onRemove }) {
  return (
    <div className="w-[25%] bg-white rounded-2xl p-2.5">
      <header className="text-orange-600 font-bold">Your Cart ({products.length})</header>
      <main>
        {products.length > 0 ? (
          products.map((product) => (
            <CartProducts
              key={product.name}
              productData={product}
              onIncrement={() => onIncrement(product.name)}
              onDecrement={() => onDecrement(product.name)}
              onRemove={() => onRemove(product.name)}
            />
          ))
        ) : (
          <Empty />
        )}
      </main>
    </div>
  );
}
