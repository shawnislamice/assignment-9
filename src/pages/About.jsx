import { Link } from "react-router-dom";
import aboutbannerfirst from "../assets/about1.jpg";
import aboutbannersecond from "../assets/about2.jpg";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
const About = () => {
  const {user}=useContext(AuthContext)
  console.log(user);
  const feedback = JSON.parse(localStorage.getItem("feedback"));
  
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data,e) => {
    
    reset();
    localStorage.setItem('feedback',JSON.stringify(data))
    
    
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Us</title>
      </Helmet>
      <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <h2
            data-aos="fade-up"
            data-aos-delay="900"
            data-aos-anchor="faq-anchor"
            className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl"
          >
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 dark:divide-gray-300">
            <details
              data-aos="fade-up"
              data-aos-delay="800"
              data-aos-anchor="faq-anchor"
            >
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                What types of properties do you specialize in?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  Clients often want to know if your company specializes in
                  residential, commercial, or industrial real estate, or if you
                  handle a variety of property types.
                </p>
              </div>
            </details>
            <details
              open=""
              data-aos="fade-up"
              data-aos-delay="700"
              data-aos-anchor="faq-anchor"
            >
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                How long have you been in the real estate business?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  Clients are interested in the experience and reputation of a
                  real estate company. Knowing how long the company has been in
                  business can provide reassurance of their expertise and
                  stability.
                </p>
              </div>
            </details>
            <details
              data-aos="fade-up"
              data-aos-delay="700"
              data-aos-anchor="faq-anchor"
            >
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                Do you have listings or examples of properties you've sold or
                managed?
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                  Clients typically want to see examples of your past real
                  estate transactions to assess the quality and variety of
                  properties you handle.
                </p>
              </div>
            </details>
            <details
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-anchor="faq-anchor"
            >
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                What areas or neighborhoods do you cover?
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                  Clients want to know if your company operates in the specific
                  geographic area they're interested in. They may ask about your
                  expertise in certain neighborhoods or regions.
                </p>
              </div>
            </details>
            <details
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-anchor="faq-anchor"
            >
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                What services do you offer to buyers and sellers?
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                  Clients want to understand the range of services your company
                  provides, whether it's helping buyers find properties,
                  assisting sellers with marketing and pricing, or managing
                  rental properties.
                </p>
              </div>
            </details>
            <details
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-anchor="faq-anchor"
            >
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                What is your approach to pricing properties?{" "}
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                  Clients may want to know how your company determines the value
                  and pricing of properties, including market analysis,
                  comparable sales data, and any unique factors that may affect
                  pricing.
                </p>
              </div>
            </details>
            <details
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-anchor="faq-anchor"
            >
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                How do you market properties for sale or rent?{" "}
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                  Clients want to know how your company markets properties to
                  attract buyers or tenants, including online listings,
                  advertising, open houses, and networking.
                </p>
              </div>
            </details>
            <details
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-anchor="faq-anchor"
            >
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                What is your commission structure for sales or rentals?{" "}
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                  Clients may ask about your company's commission rates and fees
                  for buying, selling, or renting properties.
                </p>
              </div>
            </details>
            <details
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-anchor="faq-anchor"
            >
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                Do you offer assistance with financing or mortgages?{" "}
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                  Clients may want help navigating the financing process for
                  purchasing a property and may ask if your company offers
                  assistance with mortgages or financing options.
                </p>
              </div>
            </details>
            <details data-aos="fade-up" data-anchor="faq-anchor">
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                How do you handle negotiations and contracts?{" "}
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                  Clients want to know if your company has experience
                  negotiating deals and drafting contracts to protect their
                  interests during real estate transactions.
                </p>
              </div>
            </details>
          </div>
          <div id="faq-anchor"></div>
        </div>
      </section>
      <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div data-aos-anchor="commitment-anchor">
            <h2
              data-aos="fade-down"
              data-aos-anchor-placement="center"
              data-aos-delay="1700"
              className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-900"
            >
              Commitments and Services
            </h2>
            <p
              data-aos="zoom-in"
              data-aos-anchor="commitment-anchor"
              data-aos-delay="1100"
              className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-600"
            >
              Our commitment is our Service
            </p>
          </div>
          <div
            data-aos-anchor="commitment-anchor"
            className="grid lg:gap-8 lg:grid-cols-2 lg:items-center"
          >
            <div
              data-aos="fade-left"
              data-aos-anchor="commitment-anchor"
              data-aos-delay="1500"
              data-aos-duration="1200"
            >
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-900">
                Commitments
              </h3>
              <p className="mt-3 text-lg dark:text-gray-600">
                We are driven by a steadfast commitment to excellence in
                everything we do. Quality assurance is at the core of our
                operations, as we meticulously test and inspect each product to
                ensure it meets our stringent standards. But our dedication
                extends beyond product quality
              </p>
              <div className="mt-12 space-y-12">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div
                    className="ml-4"
                    data-aos="fade-up"
                    data-aos-anchor="commitment-anchor"
                    data-aos-delay="1300"
                  >
                    <h4 className="text-lg font-medium leading-6 dark:text-gray-900">
                      Quality Assurance
                    </h4>
                    <p className="mt-2 dark:text-gray-600">
                      We are committed to delivering products/services of the
                      highest quality, consistently meeting or exceeding
                      industry standards.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div
                    className="ml-4"
                    data-aos="fade-up"
                    data-aos-anchor="commitment-anchor"
                    data-aos-delay="1200"
                  >
                    <h4 className="text-lg font-medium leading-6 dark:text-gray-900">
                      Customer Satisfaction
                    </h4>
                    <p className="mt-2 dark:text-gray-600">
                      Our customers are our top priority. We are dedicated to
                      providing exceptional service, listening to our customers'
                      needs, and exceeding their expectations.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div
                    className="ml-4"
                    data-aos="fade-up"
                    data-aos-anchor="commitment-anchor"
                    data-aos-delay="1100"
                  >
                    <h4 className="text-lg font-medium leading-6 dark:text-gray-900">
                      Transparency
                    </h4>
                    <p className="mt-2 dark:text-gray-600">
                      We believe in transparency in all our interactions. We
                      commit to open communication, honesty, and integrity in
                      our dealings with customers, partners, and employees.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-right"
              data-aos-anchor="commitment-anchor"
              data-aos-delay="1000"
              aria-hidden="true"
              className="mt-10 lg:mt-0"
            >
              <img
                src={aboutbannerfirst}
                alt=""
                className="h-[300px] w-full mx-auto rounded-lg shadow-lg md:h-[500px] md:w-[80%] dark:bg-gray-500"
              />
            </div>
          </div>
          <div>
            <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
              <div
                className="lg:col-start-2"
                data-aos="fade-left"
                data-aos-anchor="commitment-anchor"
                data-aos-delay="1800"
              >
                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-900">
                  Services
                </h3>
                <p className="mt-3 text-lg dark:text-gray-600">
                  Our dedication to service is ingrained in every aspect of our
                  operations. We pride ourselves on providing personalized
                  attention to each client, ensuring that their individual needs
                  are met with precision and care.
                </p>
                <div className="mt-12 space-y-12">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 dark:text-gray-900">
                        Personalized Attention
                      </h4>
                      <p className="mt-2 dark:text-gray-600">
                        We take the time to understand your unique needs and
                        preferences, tailoring our solutions to meet your
                        specific requirements.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 dark:text-gray-900">
                        Timely Responses
                      </h4>
                      <p className="mt-2 dark:text-gray-600">
                        We understand the importance of prompt communication.
                        Whether you have a question, concern, or request, we
                        respond quickly and efficiently.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 dark:text-gray-900">
                        Expert Guidance
                      </h4>
                      <p className="mt-2 dark:text-gray-600">
                        Our team of experienced professionals is here to guide
                        you every step of the way. From product selection to
                        project implementation, we provide expert advice and
                        support.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                <img
                  src={aboutbannersecond}
                  alt=""
                  className=" mx-auto md:h-[500px] md:w-[80%] rounded-lg shadow-lg dark:bg-gray-500"
                />
              </div>
            </div>
          </div>
          <div id="commitment-anchor"></div>
        </div>
      </section>
      <div className="flex flex-col max-w-xl  mx-auto p-8  rounded-xl lg:p-12 dark:bg-gray-50 dark:text-gray-800">
        <div className="flex flex-col items-center w-full">
          <h2 className="text-3xl font-semibold text-center">
            Your opinion matters!
          </h2>
          <div className="flex flex-col items-center py-6 space-y-3">
            <span className="text-center">How was your experience?</span>

            <div className="rating">
              <input
                {...register("rating")}
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />

              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            {errors.rating && (
              <span className="font-semibold text-red-500">
                Field is Required
              </span>
            )}
          </div>
          <div className="flex flex-col w-full">
            <textarea
              {...register("ratingMessage", { required: true })}
              rows="3"
              placeholder="Message..."
              className="p-4 rounded-md resize-none bg-base-200 dark:text-gray-800 dark:bg-gray-50"
            ></textarea>

            {errors.ratingMessage && (
              <span className="font-semibold text-red-500">
                Field is Required
              </span>
            )}
            <button
              onClick={handleSubmit(onSubmit)}
              type="button"
              className="btn btn-primary py-4 my-8 font-semibold rounded-md dark:text-gray-50 dark:bg-violet-600"
            >
              Leave feedback
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Link
            to="/"
            rel="noopener noreferrer"
            href="#"
            className="text-sm dark:text-gray-600"
          >
            Maybe later
          </Link>
        </div>
        <div>
          {user && (
            <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800">
              <div className="flex justify-between p-4">
                <div className="flex space-x-4">
                  <div>
                    <img
                      src={user?.photoURL || "No Photo Found"}
                      alt=""
                      className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">
                      {user?.displayName || "Unknown User"}
                    </h4>
                    <span className="text-xs dark:text-gray-600">
                      2 days ago
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 dark:text-yellow-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                  </svg>
                  <span className="text-xl font-bold">4.5</span>
                </div>
              </div>
              <div className="p-4 space-y-2 text-sm dark:text-gray-600">
                <p>{feedback?.ratingMessage}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
