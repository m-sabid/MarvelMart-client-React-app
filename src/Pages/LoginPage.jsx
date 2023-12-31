import React, { useContext, useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../providers/AuthProvider";
import TopNav from "../components/shared/TopNav";
import Spinner from "../Components/Shared/Spinner";
import Footer from "../components/shared/Footer";
import useDynamicTitle from "../components/shared/useDynamicTitle";

const LoginPage = () => {
  useDynamicTitle("Login Page");
  const { login } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate(from, { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  const handleForm = (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    if (!email || !password) {
      setErrorMessage("Email and password are required.");
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long.");
      setLoading(false);
      return;
    }

    login(email, password, navigate)
      .then(() => {
        setLoading(false);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = "Please enter a valid email and password.";
        setErrorMessage(errorMessage);
        setLoading(false);
        console.log("error", errorMessage);
      });
  };

  return (
    <>
      <TopNav />
      <div className="flex h-screen items-center justify-center mt-[-25px] bg-neutral2">
        <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          {loading ? (
            <div className="flex items-center justify-center">
              <Spinner className="mx-auto" />
            </div>
          ) : null}
          {errorMessage && (
            <p className="text-red-500 text-sm">{errorMessage}</p>
          )}
          <form onSubmit={handleForm}>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <div className="relative flex items-center">
                <span className="absolute flex justify-center items-center h-full w-10 text-center text-gray-400">
                  <AiOutlineMail />
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
                  <AiOutlineLock />
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
              <div className="relative flex items-center">
                <input
                  className="w-full bg-primary hover:bg-secondary text-white font-bold p-3 rounded border border-gray-400 cursor-pointer"
                  type="submit"
                  name="submit"
                  id="submit"
                  value="Login"
                />
              </div>
            </div>
          </form>
          <h4 className="text-center font-bold text-primary border-b-2 mb-3">
            Or login with
          </h4>
          <div className="space-y-4">
            <button
              onClick={signInWithGoogle}
              className="flex items-center justify-center w-full py-3 rounded-md text-white bg-accent1 hover:bg-accent2"
            >
              <FaGoogle className="mr-2" />
              Sign in with Google
            </button>

            <div className="flex items-center justify-center">
              <span className="text-neutral1 text-sm">
                Don't have an account?
              </span>
              <Link
                to="/signup"
                className="ml-1 text-accent1 hover:text-accent2 text-sm font-semibold"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
