import { Helmet } from "react-helmet";
import FavouritesItem from "../components/FavouritesItem";

const Favourites = () => {
  const allFavItems = JSON.parse(localStorage.getItem("favourites"));
  
  return (
    <div>
      <div className="my-5">
        <Helmet>
          <title>Favourites</title>
        </Helmet>

        <div className="flex mx-auto shadow-xl flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-50 dark:text-gray-800">
          <h2 className="text-xl font-semibold text-center" data-aos='fade-down'>Your favourites</h2>
          {allFavItems.length == 0 && (
            <p
              data-aos="fade-right"
              data-aos-delay="500"
              className="text-center text-red-500 font-semibold"
            >
              Ops! Sorry There has nothing to see
            </p>
          )}
          <ul className="flex flex-col divide-y dark:divide-gray-300">
            {allFavItems.map((item) => (
              <FavouritesItem item={item} key={item.id}></FavouritesItem>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Favourites;
