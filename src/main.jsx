import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/aboutus",
    element: (
      <div>
        Hello from about us!
        <Link to={`/`}>landing page</Link>
      </div>
    ),
  },
  {
    path: "/contactus",
    element: <div>Hello from contact us!</div>,
  },
  {
    path: "/login",
    element: <div>Hello from login!</div>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>
);
