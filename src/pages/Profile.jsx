import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { MdVerified } from "react-icons/md";
import UpdateProfile from "../components/UpdateProfile";
import avatar from "../assets/avatar.png";
import { Helmet } from "react-helmet-async";

const Profile = () => {
  const { user } = useContext(AuthContext);

  const { displayName, photoURL, emailVerified, uid, metadata, email } = user;
  const { createdAt, lastLoginAt } = metadata;

  return (
    <section className="p-6  text-gray-500">
      <Helmet>
        <title>Your Profile</title>
      </Helmet>
      <h3
        data-aos="fade-down"
        data-aos-delay="400"
        className="text-3xl text-center font-semibold"
      >
        Your Profile
      </h3>
      <form
        noValidate=""
        action=""
        className="container flex flex-col mx-auto space-y-12"
      >
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm ">
          <div className="space-y-2 col-span-full lg:col-span-1 mx-auto md:mx-start">
            <img
              data-aos="zoom-in"
              data-aos-delay="500"
              className="size-40 rounded-full border-primary shadow-lg border  p-2"
              src={photoURL || avatar}
              alt=""
            />
            <div className="flex items-center gap-2">
              <p
                data-aos="fade-right"
                data-aos-delay="500"
                className="font-medium"
              >
                {displayName || "Unknown"}
              </p>
              <span data-aos="fade-right" data-aos-delay="500">
                {emailVerified && (
                  <MdVerified className="text-blue-400"></MdVerified>
                )}
              </span>
            </div>
            <p data-aos="fade-right" data-aos-delay="600" className="text-xs">
              You can update your profile as you need
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
                Your name
              </label>
              <input
                type="text"
                name="firstName"
                placeholder={displayName}
                readOnly
                className="bg-base-300 border-none outline-none input w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
              />
            </div>
            <div
              data-aos="fade-down"
              data-aos-delay="700"
              className="col-span-full sm:col-span-3"
            >
              <label htmlFor="lastname" className="text-sm">
                User ID
              </label>
              <input
                type="text"
                placeholder={uid}
                readOnly
                name={"lastName"}
                className="bg-base-300 border-none outline-none w-full input rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
              />
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
                name="email"
                type="email"
                placeholder={email}
                readOnly
                className="bg-base-300 border-none outline-none input w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
              />
            </div>
            <div
              data-aos="fade-down"
              data-aos-delay="900"
              className="col-span-full"
            >
              <label htmlFor="address" className="text-sm">
                Photo URL
              </label>
              <input
                name="address"
                type="text"
                placeholder={photoURL}
                readOnly
                className="bg-base-300 border-none outline-none input w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
              />
            </div>
            <div
              data-aos="fade-down"
              data-aos-delay="1000"
              className="col-span-full sm:col-span-2"
            >
              <label htmlFor="city" className="text-sm">
                Created At
              </label>
              <input
                name="city"
                type="text"
                placeholder={createdAt}
                readOnly
                className="bg-base-300 border-none outline-none input w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
              />
            </div>
            <div
              data-aos="fade-down"
              data-aos-delay="1100"
              className="col-span-full sm:col-span-2"
            >
              <label htmlFor="state" className="text-sm">
                Last Login At
              </label>
              <input
                name="state"
                type="text"
                placeholder={lastLoginAt}
                readOnly
                className=" bg-base-300 border-none outline-none input w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
              />
            </div>
          </div>
        </fieldset>
      </form>
      <div
        data-aos="fade-down"
        data-aos-delay="1200"
        data-aos-anchor-placement="top"
        className="flex justify-center md:mt-4 mt-3"
      >
        <UpdateProfile></UpdateProfile>
      </div>
    </section>
  );
};

export default Profile;
