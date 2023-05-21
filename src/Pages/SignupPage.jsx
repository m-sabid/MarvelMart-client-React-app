import { IconContext } from "react-icons";
import { AiOutlineMail, AiOutlineLink, AiOutlineLock } from "react-icons/ai";
import { RiEyeFill, RiEyeCloseFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import TopNav from "../components/shared/TopNav";
import Spinner from "../Components/Shared/Spinner";
import { AuthContext } from "../providers/AuthProvider";
import Footer from "../components/shared/Footer";
import useDynamicTitle from "../components/shared/useDynamicTitle";
import { ToastContainer, toast } from "react-toastify";

const SignupPage = () => {
  useDynamicTitle("Signup");
  const { createUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    displayName: "",
    email: "",
    password: "",
    photoUrl: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const validateEmail = (email) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    // Regular expression for password validation (at least 6 characters, with a number and special character)
    const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{6,}$/;
    return passwordRegex.test(password);
  };

  const validatePhotoUrl = (photoUrl) => {
    // Regular expression for URL validation
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlRegex.test(photoUrl);
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    setLoading(true);
    const form = event.target;
    const displayName = form.displayName.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photoUrl.value;

    // Reset errors
    setErrors({
      displayName: "",
      email: "",
      password: "",
      photoUrl: "",
    });

    let hasError = false;

    // Validation
    if (displayName.trim() === "") {
      setErrors((prevState) => ({
        ...prevState,
        displayName: "Name is required",
      }));
      hasError = true;
    }

    if (!validateEmail(email)) {
      setErrors((prevState) => ({
        ...prevState,
        email: "Please enter a valid email address",
      }));
      hasError = true;
    }

    if (!validatePassword(password)) {
      setErrors((prevState) => ({
        ...prevState,
        password:
          "Password must be at least 6 characters and contain a number and a special character",
      }));
      hasError = true;
    }

    if (!validatePhotoUrl(photoUrl)) {
      setErrors((prevState) => ({
        ...prevState,
        photoUrl: "Please enter a valid photo URL",
      }));
      hasError = true;
    }

    if (hasError) {
      setLoading(false);
      return;
    }

    try {
      await createUser(email, password, displayName, photoUrl);
      form.reset();
      setLoading(false);
      toast.success("Account created successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <>
      <TopNav />
      <div className="relative flex h-screen items-center justify-center bg-neutral2">
        <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
          <h2 className="text-2xl font-bold text-primary mb-4">Sign Up</h2>
          {loading ? (
            <div className="flex items-center justify-center">
              <Spinner className="mx-auto" />
            </div>
          ) : (
            ""
          )}
          <form onSubmit={handleSignUp}>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="displayName"
              >
                Name
              </label>
              <input
                className="w-full p-3 rounded border border-gray-400 focus:border-primary"
                type="text"
                name="displayName"
                id="displayName"
                placeholder="Enter your name"
              />
              {errors.displayName && (
                <span className="text-red-500">{errors.displayName}</span>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <div className="relative flex items-center">
                <span className="absolute flex justify-center items-center h-full w-10 text-center text-gray-400">
                  <IconContext.Provider
                    value={{
                      className: "react-icon",
                    }}
                  >
                    <AiOutlineMail />
                  </IconContext.Provider>
                </span>
                <input
                  className="w-full p-3 pl-12 rounded border border-gray-400 focus:border-primary"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email address"
                />
              </div>
              {errors.email && (
                <span className="text-red-500">{errors.email}</span>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative flex items-center">
                <span className="absolute flex justify-center items-center h-full w-10 text-center text-gray-400">
                  <IconContext.Provider
                    value={{
                      className: "react-icon",
                    }}
                  >
                    <AiOutlineLock />
                  </IconContext.Provider>
                </span>
                <input
                  className="w-full p-3 pl-12 rounded border border-gray-400 focus:border-primary"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-0 flex justify-center items-center h-full w-10 text-gray-400"
                >
                  <IconContext.Provider
                    value={{
                      className: "react-icon",
                    }}
                  >
                    {showPassword ? <RiEyeCloseFill /> : <RiEyeFill />}
                  </IconContext.Provider>
                </button>
              </div>
              {errors.password && (
                <span className="text-red-500">{errors.password}</span>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="photoUrl"
              >
                Photo URL
              </label>
              <div className="relative flex items-center">
                <span className="absolute flex justify-center items-center h-full w-10 text-center text-gray-400">
                  <IconContext.Provider
                    value={{
                      className: "react-icon",
                    }}
                  >
                    <AiOutlineLink />
                  </IconContext.Provider>
                </span>
                <input
                  className="w-full p-3 pl-12 rounded border border-gray-400 focus:border-primary"
                  type="url"
                  name="photoUrl"
                  id="photoUrl"
                  placeholder="Add photo URL"
                />
              </div>
              {errors.photoUrl && (
                <span className="text-red-500">{errors.photoUrl}</span>
              )}
            </div>
            <button className="w-full py-3 rounded-md text-white bg-primary hover:bg-accent1">
              Sign Up
            </button>
            <div className="flex items-center justify-center mt-4">
              <span className="text-neutral1 text-sm">
                Already have an account?
              </span>
              <Link
                to="/login"
                className="ml-1 text-accent2 hover:text-accent1 text-sm font-semibold"
              >
                Log in
              </Link>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
      <Footer />
    </>
  );
};

export default SignupPage;
