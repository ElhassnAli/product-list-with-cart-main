import Empty from "./Empty";
import Total from "./Total";
import CartProducts from "./CartProducts";

export default function Cart({
  products,
  onIncrement,
  onDecrement,
  onRemove,
  onConfirm,
  onOrder,
}) {
  let itemCount = 0;
  products.forEach((element) => {
    itemCount += element.quantity;
  });
  return (
    <div
      className={`w-[25%] bg-white rounded-2xl p-2.5 ${
        onOrder && "pointer-events-none opacity-50 "
      }`}
    >
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
                products={products}
              >
                <button
                  onClick={() => onRemove(product.name)}
                  className="ml-2  w-5 h-5 rounded-2xl border-black border flex justify-center items-center cursor-pointer"
                >
                  <img src="/assets/images/icon-remove-item.svg" alt="remove" />
                </button>
              </CartProducts>
            ))}
            <Total
              products={products}
              onConfirm={onConfirm}
              
            />
          </>
        ) : (
          <Empty />
        )}
      </main>
    </div>
  );
}
