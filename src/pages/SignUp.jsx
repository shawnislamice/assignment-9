import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { Helmet } from "react-helmet-async";
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";
const SignUp = () => {
  const [toggle, setToggle] = useState(false);
  const { createUser, logOut } = useContext(AuthContext);
  const [error, setError] = useState("");
  const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    const { name, email, photo, password, confirmPassword } = data;
    if (
      password.length < 6 ||
      !uppercaseRegex.test(password) ||
      !lowercaseRegex.test(password)
    ) {
      setError(
        "Password should be at least 6 character with a uppercase and lowercase letter"
      );
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Password and Confirm Password dont match");
      return;
    }

    createUser(email, password, name, photo)
      .then((result) => {
        console.log(result.user);
        toast.success("User Created Successfully");

        navigate("/");
        window.location.reload();
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        });
        reset();
      })
      .catch((error) => {
        console.error(error.message);
        toast.error(error.message);
      });
  };
  return (
    <div className="flex flex-col shadow-xl mx-auto max-w-md p-6 rounded-lg sm:p-10 dark:bg-gray-50 dark:text-gray-800">
      <Helmet>
        <title>Sign up | Real Estate</title>
      </Helmet>
      <div className="mb-8 text-center">
        <h1
          data-aos="fade-down"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay="500"
          className="my-3 text-4xl font-bold"
        >
          Sign Up Now
        </h1>
        <p
          data-aos="fade-down"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay="600"
          className="text-sm dark:text-gray-600"
        >
          Sign up to access your account
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate=""
        action=""
        className="space-y-12"
      >
        <div className="space-y-4">
          <div
            data-aos="fade-down"
            data-aos-anchor-placement="center-bottom"
            data-aos-delay="700"
          >
            <label htmlFor="email" className="block mb-2 text-sm">
              Your name
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              name="name"
              placeholder="Shawn Islam"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>
          {errors.name && (
            <span className="text-red-500 font-semibold">
              Field is required
            </span>
          )}
          <div
            data-aos="fade-down"
            data-aos-anchor-placement="center-bottom"
            data-aos-delay="800"
          >
            <label htmlFor="email" className="block mb-2 text-sm">
              Photo URL
            </label>
            <input
              {...register("photo",{required:true})}
              type="text"
              name="photo"
              placeholder="Enter your photo URL here"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>
          {errors.photo && (
            <span className="text-red-500 font-semibold">
              Field is required
            </span>
          )}
          <div
            data-aos="fade-down"
            data-aos-anchor-placement="center-bottom"
            data-aos-delay="900"
          >
            <label htmlFor="email" className="block mb-2 text-sm">
              Email address
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              name="email"
              id="email"
              placeholder="leroy@jenkins.com"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
            {errors.email && (
              <span className="text-red-500 font-semibold">
                Field is required
              </span>
            )}
          </div>
          <div
            data-aos="fade-down"
            data-aos-anchor-placement="center-bottom"
            data-aos-delay="1000"
            className="relative"
          >
            <label htmlFor="email" className="block mb-2 text-sm">
              Passowrd
            </label>
            <input
              {...register("password", { required: true })}
              type={toggle ? "text" : "password"}
              name="password"
              placeholder="*************"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
            <p
              onClick={() => {
                setToggle(!toggle);
              }}
              className="absolute right-4 top-10"
            >
              {!toggle ? (
                <IoMdEyeOff size={20}> </IoMdEyeOff>
              ) : (
                <IoEye size={20}></IoEye>
              )}
            </p>
            {errors.password && (
              <span className="text-red-500 font-semibold">
                Field is required
              </span>
            )}
            {error && (
              <span className="text-red-500 font-semibold">{error}</span>
            )}
          </div>
          <div
            data-aos="fade-down"
            data-aos-anchor-placement="center-bottom"
            data-aos-delay="1100"
            className="relative"
          >
            <div className="flex justify-between mb-2">
              <label htmlFor="password" className="text-sm">
                Confirm Password
              </label>
            </div>
            <input
              {...register("confirmPassword", { required: true })}
              type={toggle ? "text" : "password"}
              name="confirmPassword"
              placeholder="*************"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
            <p
              onClick={() => {
                setToggle(!toggle);
              }}
              className="absolute right-4 top-10"
            >
              {!toggle ? (
                <IoMdEyeOff size={20}> </IoMdEyeOff>
              ) : (
                <IoEye size={20}></IoEye>
              )}
            </p>
            {errors.confirmPassword && (
              <span className="text-red-500 font-semibold">
                Field is required
              </span>
            )}
          </div>
        </div>
        <div className="space-y-2">
          <div
            data-aos="fade-down"
            data-aos-anchor-placement="center-bottom"
            data-aos-delay="1200"
          >
            <button
              type="submit"
              className="btn btn-primary w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
            >
              Sign Up
            </button>
          </div>
          <p
            data-aos="fade-down"
            data-aos-anchor-placement="center-bottom"
            data-aos-delay="1300"
            className="px-6 gap-5 text-sm text-center dark:text-gray-600"
          >
            Already have an account ?
            <Link
              to="/signin"
              rel="noopener noreferrer"
              href="#"
              className=" hover:underline dark:text-violet-600"
            >
              Sign in
            </Link>
            .
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
