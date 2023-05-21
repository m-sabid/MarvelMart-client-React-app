import { createBrowserRouter, useRoutes, useOutlet } from "react-router-dom";
import App from "../App";
import LoginPage from "../Pages/LoginPage";
import SignupPage from "../Pages/SignupPage";
import AddToyPage from "../Pages/AddToyPage";
import MyToysPage from "../Pages/MyToysPage";
import PrivetRoute from "./PrivetRoute";
import AllToyPage from "../Pages/AllToyPage";
import BlogPage from "../Pages/BlogPage";
import ToyDetailPage from "../Pages/ToyDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [],
  },
  {
    path: "/login",
    element: <LoginPage />,
    children: [],
  },
  {
    path: "/signup",
    element: <SignupPage />,
    children: [],
  },
  {
    path: "/add-toy",
    element: (
      <PrivetRoute>
        <AddToyPage />
      </PrivetRoute>
    ),
    children: [],
  },
  {
    path: "/my-toys",
    element: (
      <PrivetRoute>
        <MyToysPage />
      </PrivetRoute>
    ),
    children: [],
  },
  {
    path: "/all-toys",
    element: <AllToyPage />,
    children: [],
  },
  {
    path: "/blog",
    element: <BlogPage />,
    children: [],
  },
  {
    path: "/toys/:toyId",
    element: (
      <PrivetRoute>
        <ToyDetailPage />
      </PrivetRoute>
    ),
    loader: ({ params }) =>
      fetch(`https://cookpad-server.vercel.app/api/recipes/${params.id}`),
  },
]);
//   {
//     path: "/chef-recipes/:id",
//     element: (
//       <PrivetRoute>
//         <ChefRecipesPage />
//       </PrivetRoute>
//     ),
//     loader: ({ params }) =>
//       fetch(`https://cookpad-server.vercel.app/api/recipes/${params.id}`),
//   },

export default router;
