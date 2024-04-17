import { useContext } from "react";
import { Link, useNavigate, useNavigation, useParams } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { setItem } from "../utilities/script";
import { Helmet } from "react-helmet-async";
import Spinner from "../components/Spinner";
import { MdOutlineVerified } from "react-icons/md";
export const handleSingleData = (id) => {};
const EstateDetails = () => {
  const { id } = useParams();
  const { data } = useContext(AuthContext);
  const singleData = data.find((dataItem) => dataItem.id == id);
  const navigation = useNavigation();
  const navigate = useNavigate();

  const {
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
  } = singleData;
  const handleCart = (cartData) => {
    setItem(cartData);
  };
  return (
    <div className="flex md:flex-row flex-col items-center gap-10  font-work-sans md:my-10 my-5">
      <Helmet>
        <title>Details: {estate_title}</title>
      </Helmet>
      <div
        data-aos="fade-right"
        data-aos-delay="500"
        className="md:w-[48%] w-full py-8 rounded-xl"
      >
        <img
          className=" md:h-full h-[350px] mx-auto object-cover"
          src={image}
          alt=""
        />
      </div>
      <div data-aos="fade-left" data-aos-delay="500" className="md:w-[48%]">
        <h1
          data-aos="fade-down"
          data-aos-delay="600"
          className="text-2xl md:text-4xl font-bold font-playfair"
        >
          {estate_title}
        </h1>

        <p
          data-aos="fade-down"
          data-aos-delay="700"
          className=" text-[#131313CC] font-md py-4"
        >
          Segment: {segment_name}{" "}
        </p>
        <hr data-aos="fade-down" data-aos-delay="800" />
        <p
          data-aos="fade-down"
          data-aos-delay="900"
          className=" text-[#131313CC] font-md py-4"
        >
          Description: {description}
        </p>

        <hr data-aos="fade-down" data-aos-delay="1000" />
        <p
          data-aos="fade-down"
          data-aos-delay="1100"
          className="text-[#131313] opacity-80 text-justify py-6"
        >
          <b>Price: {price} </b>
        </p>
        <div className="flex md:flex-row flex-col md:items-center md:justify-between gap-2">
          <div data-aos="fade-down" data-aos-delay="1200" className="space-x-5">
            <span>
              <b>Facilities:</b>
            </span>
            <ul className="py-2">
              {facilities.map((tag) => (
                <p key={tag} className="flex items-center gap-2">
                  <MdOutlineVerified className="text-green-400"></MdOutlineVerified>{" "}
                  <li>{tag}</li>
                </p>
              ))}
            </ul>
          </div>
          <div
            data-aos="fade-down"
            data-aos-delay="1300"
            className="space-x-5 md:py-6 py-3"
          >
            <span>
              <b>Suitable for:</b>
            </span>
            <ul className="py-2">
              {suitable_for.map((tag) => (
                <p key={tag} className="flex items-center gap-2">
                  <MdOutlineVerified className="text-green-400"></MdOutlineVerified>{" "}
                  <li>{tag}</li>
                </p>
              ))}
            </ul>
          </div>
        </div>
        <hr data-aos="fade-down" data-aos-delay="1400" className="my-8" />
        <div
          data-aos="fade-down"
          data-aos-delay="500"
          data-aos-anchor-placement='top'
          className="flex gap-3 items-center justify-between max-w-[300px] py-2"
        >
          <p>Location: </p>
          <span>
            <b>{location}</b>
          </span>
        </div>
        <div
          data-aos="fade-down"
          data-aos-delay="500"
          data-aos-anchor-placement="center"
          className="flex gap-3  items-center justify-between max-w-[300px] py-2"
        >
          <p>Area: </p>
          <span>
            <b>{area}</b>
          </span>
        </div>

        <div
          data-aos="fade-down"
          data-aos-delay="500"
          data-aos-anchor-placement="top"
          className="flex gap-3 items-center justify-between max-w-[300px] py-2"
        >
          <p>Status: </p>
          <span className="capitalize">
            <b>{status}</b>
          </span>
        </div>
        <div
          data-aos="fade-down"
          data-aos-anchor-placement="top"
          className="space-x-6 md:mt-3"
        >
          <button
            onClick={() => handleCart(singleData)}
            className="btn px-8 bg-white border text-black font-semibold border-[#1313134D]"
          >
            Add To Cart
          </button>
          <Link to="/map">
            <button className="btn px-10 font-semibold bg-[#50B1C9] text-white">
              Show In
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EstateDetails;
