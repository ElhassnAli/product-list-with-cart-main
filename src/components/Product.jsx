export default function Product({ data }) {
  return (
    <div className="w-[32%]">
      <div className="relative mb-7">
        <img src={data.image.desktop} alt={data.name} className="rounded-2xl" />
        <button className="flex justify-center items-center absolute -bottom-4.5 left-[50%] -translate-x-[50%] cursor-pointer border border-gray-600 rounded-2xl w-[50%] py-1.5 gap-2 bg-white ">
          <img
            src="/public/assets/images/icon-add-to-cart.svg"
            alt={data.name}
          />
          Add To Cart
        </button>
      </div>
      <p>{data.category}</p>
      <p className="font-bold">{data.name}</p>
      <p className="text-orange-600 font-bold">${data.price}</p>
    </div>
  );
}
