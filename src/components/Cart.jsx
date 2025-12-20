import Empty from "./Empty";
import CartProducts from "./CartProducts";
export default function Cart({ cart }) {
  return (
    <div className="w-[25%] bg-white rounded-2xl p-2.5">
      <header className="text-orange-600 font-bold">Your Cart (0)</header>
      <main>{cart === false ? <CartProducts /> : <Empty />}</main>
    </div>
  );
}
