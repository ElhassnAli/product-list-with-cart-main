import Product from "./Product";
export default function MainPage({ data }) {
  return (
    <div className="w-[70%]">
      <header className="text-5xl mb-5 font-serif">Deserts</header>
      <main className="flex flex-wrap gap-5">
        {data.map((d) => (
          <Product data={d} key={d.name} />
        ))}
      </main>
    </div>
  );
}
