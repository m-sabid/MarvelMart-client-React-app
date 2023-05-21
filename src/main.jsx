import ReactDOM from "react-dom/client";
import "./index.css";
import "swiper/css";
import AuthProvider from "./providers/AuthProvider.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes";
import 'react-tabs/style/react-tabs.css';


ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
