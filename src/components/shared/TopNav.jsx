import React, { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, Navigate } from "react-router-dom";

const TopNav = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then(() => {
        Navigate("/login");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="navbar bg-primary text-white relative">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52"
          >
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/all-toys"}>All Toys</Link>
            </li>
            {user && (
              <React.Fragment>
                <li>
                  <Link to={"/my-toys"}>My Toys</Link>
                </li>
                <li>
                  <Link to={"/add-toy"}>Add A Toy</Link>
                </li>
              </React.Fragment>
            )}
            <li>
              <Link to={"/blog"}>Blogs</Link>
            </li>
            <li>
              {user && (
                <div
                  className="tooltip tooltip-bottom"
                  data-tip={`${user.displayName}`}
                >
                  {user.photoURL ? (
                    <div className="h-10 w-10 rounded-full overflow-hidden">
                      <img
                        src={user.photoURL}
                        alt=""
                        className="h-full w-full"
                      />
                    </div>
                  ) : (
                    <FaUserCircle />
                  )}
                </div>
              )}
            </li>
            <li>
              {user ? (
                <button onClick={handleLogout}>
                  <Link
                    to={"/"}
                    className="text-orange-500 bg-white p-2 rounded font-bold hover:bg-orange-200 hover:text-black"
                  >
                    Logout
                  </Link>
                </button>
              ) : (
                <Link
                  to={"/login"}
                  className="text-orange-500 bg-white p-2 rounded font-bold hover:bg-orange-200 hover:text-black"
                >
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
        <Link
          to={"/"}
          className="ml-10 btn btn-link text-white no-underline hover:no-underline normal-case text-2xl absolute top-0"
        >
          <img
            src="https://i.ibb.co/HGrY9hN/321563816-2370449856443123-4609861830021339838-n-removebg-preview.png"
            alt="Marvel Logo"
            className="h-16"
          />
          MarvelMart
        </Link>
      </div>

      <div className="navbar-end hidden lg:flex lg:justify-center lg:items-center">
        <ul className="font-bold p-2 bg-primary rounded-box lg:flex lg:justify-center lg:items-center gap-4">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/all-toys"}>All Toys</Link>
          </li>
          {user && (
            <React.Fragment>
              <li>
                <Link to={"/my-toys"}>My Toys</Link>
              </li>
              <li>
                <Link to={"/add-toy"}>Add A Toy</Link>
              </li>
            </React.Fragment>
          )}
          <li>
            <Link to={"/blog"}>Blogs</Link>
          </li>
          <li>
            {user && (
              <div
                className="tooltip tooltip-bottom z-50"
                data-tip={`${user.displayName}`}
              >
                {user.photoURL ? (
                  <div className="h-10 w-10 rounded-full overflow-hidden">
                    <img src={user.photoURL} alt="" className="h-full w-full" />
                  </div>
                ) : (
                  <FaUserCircle />
                )}
              </div>
            )}
          </li>
          <li>
            {user ? (
              <button onClick={handleLogout}>
                <Link
                  to={"/"}
                  className="text-orange-500 bg-white p-2 rounded font-bold hover:bg-orange-200 hover:text-black"
                >
                  Logout
                </Link>
              </button>
            ) : (
              <Link
                to={"/login"}
                className="text-orange-500 bg-white p-2 rounded font-bold hover:bg-orange-200 hover:text-black"
              >
                Login
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopNav;
