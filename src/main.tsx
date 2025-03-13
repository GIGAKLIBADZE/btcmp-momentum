import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./layouts/Header";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [{ path: "/", element: <Home /> }],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
