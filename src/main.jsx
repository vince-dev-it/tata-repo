import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root.jsx";
import ErrorPage from "./Errorpage.jsx";
import About from "./About.jsx";
import Education from "./Education.jsx";
import Projects from "./Projects.jsx";
import Skills from "./Skills.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/About",
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Education",
    element: <Education />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Skills",
    element: <Skills />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Projects",
    element: <Projects />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
