export default function CartProducts({ cart }) {
  return (
    <div>
      <p>{cart.name}</p>
      <p>{cart.price}</p>
      <button>
        <img src="/public/assets/images/icon-remove-item.svg" alt="" />
      </button>
    </div>
  );
}
