import { CiLocationOn } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";
import { FiHome } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";
import banner from '../assets/slider4.jpg'

const Hero = () => {
  return (
    <div
      data-aos="fade-up"
      className=" rounded-lg  md:my-10 my-5 md:h-[400px] lg:h-[600px]  md:relative"
    >
      <div className="relative" data-aos='zoom-in'>
        <img className="lg:h-[600px] md:h-[400px] w-full hidden md:block" src={banner} alt="" />
      </div>
      <div className="md:absolute md:top-[15%] flex flex-col-reverse md:flex-row md:justify-around  gap-4 lg:flex-row md:px-10 lg:justify-evenly  lg:items-center">
        <div data-aos="fade-right" data-aos-delay="900" className="lg:w-[48%] ">
          <form action="">
            <div className="bg-white p-10 rounded-lg md:w-[70%] md:space-y-4 space-y-2 md:h-[300px] lg:h-[400px]">
              <h1 className="text-2xl md:text-xl lg:text-3xl lg:font-bold text-center">
                Find Your Home
              </h1>
              <div className=" flex items-center gap-3">
                <CiLocationOn size={20} className=""></CiLocationOn>
                <input
                  type="text"
                  className=" md:h-[30px] lg:h-[50px] placeholder:left-5 input w-full bg-base-200"
                  placeholder="Enter your location here"
                />
              </div>
              <div className="flex items-center gap-3">
                <CiDollar size={20} className=""></CiDollar>
                <input
                  type="text"
                  className="md:h-[30px] lg:h-[50px] placeholder:left-5 input w-full bg-base-200"
                  placeholder="Enter your budget here"
                />
              </div>
              <div className="flex items-center gap-2 ">
                <FiHome size={18}></FiHome>
                <label className="form-control w-full max-w-xs">
                  <div className="label md:hidden">
                    <span className="label-text">
                      Pick the best house as you need
                    </span>
                    <span className="label-text-alt">Categories</span>
                  </div>
                  <select className="select select-bordered">
                    <option disabled selected>
                      Pick one
                    </option>
                    <option>Single Family Homes</option>
                    <option>TownHouses</option>
                    <option>Apartments</option>
                    <option>Student Housing</option>
                    <option>Senior Living Communities</option>
                    <option>Vacation Rentals</option>
                  </select>
                  <div className="label md:hidden">
                    <span className="label-text-alt">Select</span>
                    <span className="label-text-alt">Choose</span>
                  </div>
                </label>
              </div>
              <div className="flex justify-center">
                <a
                  href="#_"
                  className="relative  inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
                >
                  <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                  <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                    <svg
                      className="w-5 h-5 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                  <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                    <svg
                      className="w-5 h-5 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                  <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                    Search Now
                  </span>
                </a>
              </div>
            </div>
          </form>
        </div>
        <div data-aos="fade-left" data-aos-delay="900" className="lg:w-[48%]">
          <h1 className="lg:text-6xl  text-xl md:text-4xl font-bold lg:text-start text-center text-black md:text-white ">
            Find Your <span className="text-[#D72050]">Accomodation</span> With{" "}
            {""}
            <span className="  font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient bg-300%">
              PrebonBuilders {""}
            </span>
            Explore Your Home Now
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
