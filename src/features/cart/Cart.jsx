import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { useNavigation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeAll } from "./cartSlice";
function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const navigation = useNavigation();
  const username = useSelector((state) => state.user.username);
  const isLoading = navigation.state === "loading";
  const dispatch = useDispatch();

  function handleClearAll() {
    dispatch(removeAll([]));
  }

  return (
    <div className=" flex flex-col px-4 py-3">
      <LinkButton className="h-3" to="/menu">
        &larr; Back to menu
      </LinkButton>

      {cart.length === 0 ? (
        <div
          className={`min-h flex ${isLoading ? "blur-sm" : ""} h-[calc(100vh-153px)] items-center justify-center `}
        >
          <h1 className="-translate-y-[13px]  p-0 text-2xl font-semibold text-yellow-500">
            your cart is empty
          </h1>
        </div>
      ) : (
        <div>
          <h2 className="mb-5 pt-7 text-xl font-semibold">
            Your cart,<span className="uppercase">{username}</span>{" "}
          </h2>
          <ul className=" divide-y divide-stone-200 border-b">
            {cart.map((item) => (
              <CartItem item={item} key={item.pizzaId} />
            ))}
          </ul>
          <div className="mt-6 space-x-2">
            <Button type="base" to="/order/new">
              Order pizzas
            </Button>

            <Button onClick={handleClearAll} type="secondary">
              Clear cart
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
