import { Link } from "react-router-dom";

const Discount = () => {
    return (
      <div data-aos="fade-down" >
        <div className="my-5 md:max-w-6xl md:mx-auto md:my-10 p-6  md:py-12 bg-[#FFBF0F] rounded-lg dark:bg-violet-600 dark:text-gray-50">
          <div className="container mx-auto ">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <h2
                data-aos="zoom-in"
                className="text-center text-3xl md:text-6xl tracking-tighter font-bold"
              >
                Up to
                <br className="sm:hidden" />
                50% Off
              </h2>
              <div
                data-aos="zoom-in"
                data-aos-delay="800"
                className="space-x-2 text-center py-2 lg:py-0"
              >
                <span>Plus free shipping! Use code:</span>
                <span className="font-bold text-lg">PREBON50</span>
              </div>
              <div data-aos="zoom-in">
                <Link
                  to="/estate"
                  className="relative inline-block px-4 py-2 font-medium group"
                >
                  <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                  <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                  <span className="relative text-black group-hover:text-white">
                    Buy Your Home
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Discount;