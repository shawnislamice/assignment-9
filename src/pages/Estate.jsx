import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import EstateCard from "../components/EstateCard";
import banner from '../assets/estatebanner.webp'
import { Helmet } from "react-helmet-async";

const Estate = () => {
  const { data } = useContext(AuthContext);
  return (
    <div>
      
      <Helmet>
        <meta charSet="utf-8" />
        <title>Estate</title>
      </Helmet>
      <a
        data-aos="zoom-in"
        rel="noopener noreferrer"
        href="#"
        className="block max-w-sm gap-3 md:my-5 my-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 "
      >
        <img
          src={banner}
          alt=""
          className="px-4 object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 "
        />
        <div
          data-aos="fade-in"
          className="p-6 space-y-2 lg:col-span-5"
        >
          <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
            Explore Our Luxurious Residences
          </h3>
          <span className="text-xs text-gray-400">February 19, 2021</span>
          <p>
            Step into a world of elegance and sophistication with our range of
            meticulously crafted residences. From spacious apartments to
            charming townhouses, we offer a variety of living spaces designed to
            suit your lifestyle preferences. Each residence features
            contemporary architecture, high-quality finishes, and thoughtful
            layouts, ensuring comfort and style in every corner.
          </p>
        </div>
      </a>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item) => (
          <EstateCard key={item.id} item={item}></EstateCard>
        ))}
      </div>
    </div>
  );
};

export default Estate;
