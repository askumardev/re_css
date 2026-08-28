import Login from "./Login.js";

import Browse from "./Browse.js";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";


const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },

  ]);
  return (
      <RouterProvider router={appRouter}/>
  );
};

export default Body;