import MainPage from "./MainPage";
import Cart from "./Cart";
import Loader from "./Loader";
import OrderConfirmed from "./OrderConfirmed";
import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);
  const [isConfirmOrder, setIsConfirmOrder] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const res = await fetch(`${import.meta.env.BASE_URL}data.json`);
      const data = await res.json();
      setData(data);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  const addToCart = (product) => {
    setCartProducts((c) => {
      const existing = c.find((p) => p.name === product.name);
      if (existing) {
        return c.map((p) =>
          p.name === product.name ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...c, { ...product, quantity: 1 }];
    });
  };

  const increment = (name) => {
    setCartProducts((c) =>
      c.map((p) => (p.name === name ? { ...p, quantity: p.quantity + 1 } : p))
    );
  };

  const decrement = (name) => {
    setCartProducts((c) =>
      c
        .map((p) => (p.name === name ? { ...p, quantity: p.quantity - 1 } : p))
        .filter((p) => p.quantity > 0)
    );
  };

  const removeFromCart = (name) => {
    setCartProducts((c) => c.filter((p) => p.name !== name));
  };

  function startDefault() {
    setCartProducts([]);
    setIsConfirmOrder(false);
  }

  return (
    <div className="p-6 md:p-12 bg-rose-50 flex flex-col md:flex-row justify-between items-start gap-6">
      {isLoading && <Loader />}
      <MainPage
        data={data}
        cartProducts={cartProducts}
        onAddToCart={addToCart}
        onIncrement={increment}
        onDecrement={decrement}
        onOrder={isConfirmOrder}
      />
      <Cart
        products={cartProducts}
        onIncrement={increment}
        onDecrement={decrement}
        onRemove={removeFromCart}
        onConfirm={setIsConfirmOrder}
        onOrder={isConfirmOrder}
      />
      {isConfirmOrder && (
        <OrderConfirmed cart={cartProducts} OnstartDefault={startDefault} />
      )}
    </div>
  );
}
