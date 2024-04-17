import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";  
const EstateCard = ({ item }) => {
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
    posted_date,
    due_date
  } = item;

  AOS.init();
  return (
    <Link
      data-aos="fade-in"
      data-aos-delay="700"
      to={`/estate/${id}`}
      className="shadow-xl  rounded-xl"
    >
      <a
        rel="noopener noreferrer"
        href="#"
        className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900"
      >
        <div className="rounded-lg relative ">
          <img
            data-aos="fade-down"
            data-aos-delay="500"
            role="presentation"
            className="p-4 rounded-xl object-cover w-full  h-52 "
            src={image}
          />
          <div
            data-aos="fade-down"
            data-aos-delay="500"
            className={`capitalize top-5 right-5 ${
              status == "sale" ? "bg-[#1DD100]" : "bg-[#F78C9C]"
            } px-6 w-20 py-3 font-semibold absolute`}
          >
            {status}
          </div>
        </div>
        <div className="p-6 space-y-2">
          <h3
            data-aos="fade-down"
            data-aos-delay="600"
            className="text-2xl font-semibold group-hover:underline group-focus:underline"
          >
            {estate_title}
          </h3>
          <div
            data-aos="fade-down"
            data-aos-delay="700"
            className="flex justify-between items-center"
          >
            <span
              data-aos="fade-down"
              data-aos-delay="500"
              className="text-xs text-green-500 font-bold "
            >
              Posted: {posted_date}
            </span>
            <span className="text-xs text-red-400 font-bold">
              Due: {due_date}
            </span>
          </div>
          <p data-aos="fade-down" data-aos-delay="800">
            {description}
          </p>
        </div>
        <div
          data-aos="fade-down"
          data-aos-delay="900"
          className="flex justify-center md:mb-8 mb-4"
        >
          <a className=" relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
            <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
              {view_property_button}
            </span>
          </a>
        </div>
      </a>
    </Link>
  );
};

export default EstateCard;
