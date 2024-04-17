import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
const Contact = () => {
  const [formData, setFormData] = useState({});

  const { firstName, lastName, address, email, zip, city, state } = formData;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    setFormData(data);
   
    console.log(data);
    toast.success("Submitted Successfully");
    reset();
  };
  return (
    <section className="p-6  text-gray-500">
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <h3
        data-aos="fade-down"
        data-aos-delay="400"
        className="text-3xl text-center font-semibold"
      >
        Contact Form
      </h3>
      <form
        noValidate=""
        action=""
        className="container flex flex-col mx-auto space-y-12"
      >
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm ">
          <div className="space-y-2 col-span-full lg:col-span-1">
            <p
              data-aos="fade-right"
              data-aos-delay="500"
              className="font-medium"
            >
              Contact Us
            </p>
            <p data-aos="fade-right" data-aos-delay="600" className="text-xs">
              Fill up the form to connect with us
            </p>
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="500"
            className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3"
          >
            <div
              data-aos="fade-down"
              data-aos-delay="600"
              className="col-span-full sm:col-span-3"
            >
              <label htmlFor="firstname" className="text-sm">
                First name
              </label>
              <input
                {...register("firstName", { required: true })}
                type="text"
                name="firstName"
                placeholder="First name"
                className="bg-base-300 border-none outline-none input w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
              />
              {errors.firstName && (
                <span className="text-red-500">Feild is required</span>
              )}
            </div>
            <div
              data-aos="fade-down"
              data-aos-delay="700"
              className="col-span-full sm:col-span-3"
            >
              <label htmlFor="lastname" className="text-sm">
                Last name
              </label>
              <input
                {...register("lastName", { required: true })}
                type="text"
                placeholder="Last name"
                name="lastName"
                className="bg-base-300 border-none outline-none w-full input rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
              />
              {errors.lastName && (
                <span className="text-red-500">Feild is required</span>
              )}
            </div>
            <div
              data-aos="fade-down"
              data-aos-delay="800"
              className="col-span-full sm:col-span-3"
            >
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <input
                {...register("email", { required: true })}
                name="email"
                type="email"
                placeholder="Email"
                className="bg-base-300 border-none outline-none input w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
              />
              {errors.email && (
                <span className="text-red-500">Feild is required</span>
              )}
            </div>
            <div
              data-aos="fade-down"
              data-aos-delay="900"
              className="col-span-full"
            >
              <label htmlFor="address" className="text-sm">
                Address
              </label>
              <input
                {...register("address")}
                name="address"
                type="text"
                placeholder="Adalot Para, Chandpur-3600, Bangladesh"
                className="bg-base-300 border-none outline-none input w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
              />
            </div>
            <div
              data-aos="fade-down"
              data-aos-delay="1000"
              className="col-span-full sm:col-span-2"
            >
              <label htmlFor="city" className="text-sm">
                City
              </label>
              <input
                {...register("city")}
                name="city"
                type="text"
                placeholder="Chandpur, Bangladesh"
                className="bg-base-300 border-none outline-none input w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
              />
            </div>
            <div
              data-aos="fade-down"
              data-aos-delay="1100"
              className="col-span-full sm:col-span-2"
            >
              <label htmlFor="state" className="text-sm">
                State / Province
              </label>
              <input
                {...register("state")}
                name="state"
                type="text"
                placeholder="Chandpur-3600"
                className="bg-base-300 border-none outline-none input w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
              />
            </div>
            <div
              data-aos="fade-down"
              data-aos-delay="1200"
              className="col-span-full sm:col-span-2"
            >
              <label htmlFor="zip" className="text-sm">
                ZIP / Postal
              </label>
              <input
                {...register("zip")}
                name="zip"
                type="text"
                placeholder="3600"
                className="bg-base-300 border-none outline-none w-full input  rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
              />
            </div>
            <button
              data-aos="fade-down"
              data-aos-delay="1300"
              onClick={handleSubmit(onSubmit)}
              type="submit"
              className="btn btn-primary px-10 md:px-0 md:w-full "
            >
              Submit
            </button>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button
              id="show-contact-details"
              data-aos="fade-down"
              data-aos-delay="1400"
              className="btn px-14 md:px-0  ml-10 md:ml-0 btn-secondary text-sm"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("my_modal_4").showModal();
              }}
            >
              Show Contact Information
            </button>
            <dialog id="my_modal_4" className="modal overflow-hidden">
              <div className="modal-box w-11/12 max-w-5xl">
                <h3 className="font-bold text-lg text-center">
                  Contact Information
                </h3>
                <div className="space-y-2 text-center md:my-3">
                  <p>
                    <b>Your name:</b> {firstName + " " + lastName}
                  </p>
                  <p>
                    <b>Your email:</b> {email}
                  </p>
                  <p>
                    <b>Your address:</b> {address}
                  </p>
                  <p>
                    <b>City:</b> {city}
                  </p>
                  <p>
                    <b>State:</b> {state}
                  </p>
                  <p>
                    <b>Zip:</b> {zip}
                  </p>
                </div>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default Contact;
