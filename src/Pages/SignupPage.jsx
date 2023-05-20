import { IconContext } from "react-icons";
import { AiOutlineMail, AiOutlineLink, AiOutlineLock } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import TopNav from "../components/shared/TopNav";
import Spinner from "../Components/Shared/Spinner";
import { AuthContext } from "../providers/AuthProvider";
import Footer from "../components/shared/Footer";
import useDynamicTitle from "../components/shared/useDynamicTitle";

const SignupPage = () => {
  useDynamicTitle("Signup");
  const { createUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handelSignUp = async (event) => {
    event.preventDefault();
    setLoading(true);
    const form = event.target;
    const displayName = form.displayName.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photoUrl.value;

    try {
      await createUser(email, password, displayName, photoUrl);
      form.reset();
      setLoading(false);
      // Account created successfully
    } catch (error) {
      console.log(error);
    }
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
          <form onSubmit={handelSignUp}>
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
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                />
              </div>
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
      <Footer />
    </>
  );
};

export default SignupPage;
