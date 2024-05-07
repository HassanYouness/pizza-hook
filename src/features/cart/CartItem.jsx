/* eslint-disable react/prop-types */
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { useDispatch } from "react-redux";
import { removePizza } from "../cart/cartSlice";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  const dispatch = useDispatch();

  function handleRemovePizza() {
    console.log(pizzaId);
    dispatch(removePizza(pizzaId));
  }

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:m-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold italic ">
          {formatCurrency(totalPrice)}
        </p>
        <Button onClick={handleRemovePizza} type="small">
          Delete
        </Button>
      </div>
    </li>
  );
}

export default CartItem;
