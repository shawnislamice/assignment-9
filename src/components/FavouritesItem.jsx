import { CiShoppingCart } from "react-icons/ci";
import { deleteItemFavourites } from "../utilities/script";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const FavouritesItem = ({ item }) => {
  const navigate = useNavigate();
  const currentLocation = useLocation();
  
  const {
    id,
    view_property_button,
    image,
    suitable_for,
    facilities,
    location,
    area,
    status,
    price,
    description,
    segment_name,
    estate_title,
  } = item;
  const handleRemove = (id) => {
    deleteItemFavourites(id);
    window.location.reload();
  };
  const priceString = price.replace(/[^0-9.-]+/g, "");
  const newPrice = parseFloat(priceString);
  return (
    <div>
      <ul
        data-aos="fade-right"
        data-aos-delay="500"
        className="flex flex-col divide-y dark:divide-gray-300"
      >
        <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
          <div className="flex w-full space-x-2 sm:space-x-4">
            <img
              className="flex-shrink-0 object-cover w-20 h-20 dark:border- rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
              src={image}
              alt="Polaroid camera"
            />
            <div className="flex flex-col justify-between w-full pb-4">
              <div className="flex justify-between w-full pb-2 space-x-2">
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                    {estate_title}
                  </h3>
                  <p className="text-sm dark:text-gray-600 capitalize">
                    {status}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold">{price}</p>
                  <p className="text-sm line-through dark:text-gray-400">
                    {newPrice * 0.2}
                  </p>
                </div>
              </div>
              <div className="flex text-sm divide-x">
                <button
                  onClick={() => handleRemove(id)}
                  type="button"
                  className="hover:scale-95 duration-300 flex items-center px-2 py-1 pl-0 space-x-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-4 h-4 fill-current"
                  >
                    <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                    <rect width="32" height="200" x="168" y="216"></rect>
                    <rect width="32" height="200" x="240" y="216"></rect>
                    <rect width="32" height="200" x="312" y="216"></rect>
                    <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                  </svg>
                  <span>Remove</span>
                </button>
                <button
                  onClick={() => {
                    toast.success("Redirecting to Payment Page");
                    navigate(location?.state || '/')
                  }}
                  type="button"
                  className="hover:scale-95 duration-300 flex items-center px-2 py-1 space-x-1"
                >
                  <CiShoppingCart size={20}></CiShoppingCart>
                  <span>Buy Now</span>
                </button>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default FavouritesItem;
