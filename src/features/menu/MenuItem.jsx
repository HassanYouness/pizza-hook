/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { useDispatch } from "react-redux";
import { removePizza, addPizza } from "../cart/cartSlice";
import { useSelector } from "react-redux";
function MenuItem({ pizza }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const { name, unitPrice, ingredients, soldOut, imageUrl, id } = pizza;
  const [quantity, setQuantity] = useState(1);

  const newCartItem = {
    pizzaId: id,
    name: name,
    quantity: quantity,
    unitPrice: unitPrice,
    totalPrice: unitPrice * quantity,
  };
  const addedd = cart.map((el) => el.pizzaId).includes(id);
  function handleAddToCart() {
    if (addedd) dispatch(removePizza(id));
    else dispatch(addPizza(newCartItem));
  }
  function handlQuantity(e) {
    setQuantity(e.target.value);
    dispatch(removePizza(id));
  }
  return (
    <li className="flex  gap-2 border-b-2 border-b-slate-200 py-1 sm:py-6">
      <img
        className={`${soldOut ? "opacity-70 grayscale" : ""}  h-28  rounded-full border-2 border-yellow-400 shadow-2xl  sm:h-40`}
        src={imageUrl}
        alt={name}
      />
      <div className="flex grow flex-col">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-lg font-bold ">{name}</p>
            <p className="font-sm text-[0.75rem] capitalize italic text-stone-500">
              {ingredients.join(", ")}
            </p>
          </div>
          {!soldOut && (
            <div>
              <select
                value={quantity}
                onChange={handlQuantity}
                className="rounded-full  bg-yellow-400 px-2 py-1 text-yellow-950 focus:outline-0"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
          )}
        </div>
        <div className=" mt-auto flex  items-center justify-between text-sm">
          {!soldOut ? (
            <p>{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="uppercase ">Sold out</p>
          )}
          {!soldOut && (
            <Button onClick={handleAddToCart} type="small">
              {`${!addedd ? "add to cart" : "remove"}`}
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
