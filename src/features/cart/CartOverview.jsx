import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function CartOverview() {
  const cart = useSelector((state) => state.cart.cart);

  const quantity = cart
    .map((el) => el.quantity)
    .reduce((acc, cur) => +acc + +cur, 0);

  const price = cart
    .map((el) => el.totalPrice)
    .reduce((acc, cur) => +acc + +cur, 0);

  return (
    <div className="flex justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-2  font-semibold text-stone-300 sm:space-x-6">
        <span>
          {quantity === 0 ? "add pizza" : `${quantity} pizzas`}
        </span>
        <span>{quantity != 0 ? `€${price}` : ""}</span>
      </p>
 	<p className="text-xm ">by HY </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
