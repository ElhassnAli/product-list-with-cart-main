import MainPage from "./MainPage";
import Cart from "./Cart";
import Loader from "./Loader";
import { useEffect, useState } from "react";
export default function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const res = await fetch("/data.json");
      const data = await res.json();

      setData(data);
      setIsLoading(false);
    }
    fetchData();
  }, []);
  console.log(data);
  console.log(cart);
  return (
    <div className="p-12 bg-rose-50 flex justify-between items-start">
      {isLoading && <Loader />}
      <MainPage data={data} setCart={setCart} />
      <Cart cart={cart} />
    </div>
  );
}
