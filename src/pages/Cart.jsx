import { getItems } from "../utilities/script";
import CartItem from "../components/CartItem";
import { BsCurrencyDollar } from "react-icons/bs";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const Cart = () => {
  const allCartData = getItems();


  const totalPrice = allCartData.reduce((accumulator, element) => {
    const priceString = element.price.replace(/[^0-9.-]+/g, "");

    const priceInt = parseInt(parseFloat(priceString) * 100);

    return accumulator + priceInt;
  }, 0);
  const navigate = useNavigate();
  return (
    <div className="my-5">
      <Helmet>
        <title>Cart</title>
      </Helmet>
      <h2 className="text-xl font-semibold text-center" data-aos="fade-up">
        Your cart
      </h2>
      <div className="flex flex-col mx-auto shadow-xl rounded-xl max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-50 dark:text-gray-800">
        {allCartData.length == 0 && (
          <p
            data-aos="fade-right"
            data-aos-delay="500"
            className="text-center text-red-500 font-semibold"
          >
            Ops! Sorry There has nothing to see
          </p>
        )}
        {allCartData.map((cartItem) => (
          <CartItem
            data-aos="fade-right"
            data-aos-delay="500"
            key={cartItem.id}
            cartItem={cartItem}
            totalPrice={totalPrice}
          ></CartItem>
        ))}
        <div className="space-y-1 text-right">
          <p
            data-aos="fade-left"
            data-aos-delay="600"
            className="flex items-center justify-end"
          >
            Total amount:
            <span className="font-semibold"> {totalPrice} </span>
            <BsCurrencyDollar></BsCurrencyDollar>
          </p>
          <p
            data-aos="fade-left"
            data-aos-delay="700"
            className="text-sm dark:text-gray-600"
          >
            Not including taxes and shipping costs
          </p>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="800"
          data-aos-anchor-placement='top'
          className="flex justify-end space-x-4"
        >
          <Link
            to="/estate"
            type="button"
            className="btn px-6 py-2 border rounded-md dark:border-violet-600"
          >
            Back
            <span className="sr-only sm:not-sr-only">to shop</span>
          </Link>
          <Link
            onClick={() => {
              if (allCartData.length > 2) {
                toast.error("You can't select more than 2 items");
                return;
              }
              toast.success("Redirecting to Payment page");
              navigate("/");
            }}
            type="button"
            className="btn btn-secondary px-6 py-2 border rounded-md dark:bg-violet-600 dark:text-gray-50 dark:border-violet-600"
          >
            <span className="sr-only sm:not-sr-only">Continue to</span>
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
