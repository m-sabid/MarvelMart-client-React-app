import { useContext, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../Components/Shared/Spinner";
import { AuthContext } from "../providers/AuthProvider";

const PrivetRoute = ({ children }) => {
  const { user, loading, setLoginRedirectPath } = useContext(AuthContext);

  const location = useLocation();

  useEffect(() => {
    if (!user && location.pathname !== "/login") {
      setLoginRedirectPath(location.pathname);
    }
  }, [user, location.pathname, setLoginRedirectPath]);

  if (loading) {
    return <Spinner />;
  }

  if (user) {
    return children;
  }

  return <Navigate state={{ from: location }} to="/login" />;
};

export default PrivetRoute;
