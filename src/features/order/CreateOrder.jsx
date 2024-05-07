/* eslint-disable react-refresh/only-export-components */
import { useState } from "react";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";
import { useSelector } from "react-redux";
// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

function CreateOrder() {
  const cart = useSelector((state) => state.cart.cart);
  const [withPriority, setWithPriority] = useState(false);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const formErrors = useActionData();
  const username = useSelector((state) => state.user.username);
  return (
    <div className="flex flex-col gap-5 py-4">
      <h2>Ready to order? Let&apos;s go!</h2>

      <Form method="POST" className="flex flex-col gap-7">
        <div className="gap sm:w-full sm:flex-row sm:justify-between">
          <label className="sm:min-w-44">First Name</label>
          <input
            className="input"
            defaultValue={`${username} `}
            type="text"
            name="customer"
            required
          />
        </div>

        <div className="gap sm:w-full sm:flex-row sm:justify-between">
          <label className="sm:min-w-44">Phone number</label>
          <div className="grow">
            <input className="input" type="tel" name="phone" required />
            {formErrors?.phone && (
              <p className="mt-2 rounded-md bg-red-100 p-2 text-[11px] font-semibold text-red-600">
                {formErrors.phone}
              </p>
            )}
          </div>
        </div>

        <div className="gap sm:w-full sm:flex-row sm:justify-between">
          <label className="sm:min-w-44">Address</label>

          <input className="input" type="text" name="address" required />
        </div>

        <div className=" flex flex-row items-center  space-x-2">
          <input
            className="h-6 w-6  accent-yellow-400 focus:ring focus:ring-yellow-400 focus:ring-offset-2"
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          {!withPriority && (
            <input type="hidden" name="priority" value={false} />
          )}
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button
            disabled={isSubmitting}
            type="base"
          >{`${isSubmitting ? "Placing Order..." : "Order now"} `}</Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = { ...data, cart: JSON.parse(data.cart) };
  console.log(order.cart);
  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone =
      "Please give us your correct phone number. We might need it to contact you.";

  if (Object.keys(errors).length > 0) return errors;
  const newOrder = await createOrder(order);
  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
