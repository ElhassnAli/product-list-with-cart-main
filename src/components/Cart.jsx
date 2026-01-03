import Empty from "./Empty";
import CartProducts from "./CartProducts";
export default function Cart() {
  return (
    <div className="w-[25%] bg-white rounded-2xl p-2.5">
      <header className="text-orange-600 font-bold">
        Your Cart 
      </header>
      <main>
         <Empty />
        
      </main>
    </div>
  );
}
