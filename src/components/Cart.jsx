import Empty from "./Empty";
import Total from "./Total";
import CartProducts from "./CartProducts";

export default function Cart({ products, onIncrement, onDecrement, onRemove }) {
  let itemCount = 0;
  products.forEach((element) => {
    itemCount += element.quantity;
  });
  return (
    <div className="w-[25%] bg-white rounded-2xl p-2.5">
      <header className="text-orange-600 font-bold">
        Your Cart ({itemCount})
      </header>
      <main>
        {products.length > 0 ? (
          <>
            {products.map((product) => (
              <CartProducts
                key={product.name}
                productData={product}
                onIncrement={() => onIncrement(product.name)}
                onDecrement={() => onDecrement(product.name)}
                onRemove={() => onRemove(product.name)}
                products={products}
              />
            ))}
            <Total products={products} />
          </>
        ) : (
          <Empty />
        )}
      </main>
    </div>
  );
}
