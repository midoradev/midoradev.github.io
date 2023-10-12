import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage.jsx";
import App from "./Routes/App.jsx";
import Project from "./Routes/Project.jsx";
import Terms from "./Routes/Terms.jsx";
import Refunds from "./Routes/Refunds.jsx";
import PrivacyWordleBot from "./Routes/PrivacyWordleBot.jsx";
import PrivacyStarsky from "./Routes/PrivacyStarsky.jsx";
import "./Style/index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/project",
    element: <Project />,
  },
  {
    path: "/terms",
    element: <Terms />,
  },
  {
    path: "/refunds",
    element: <Refunds />,
  },
  {
    path: "/privacy/starsky",
    element: <PrivacyStarsky />,
  },
  {
    path: "/privacy/wordlebot",
    element: <PrivacyWordleBot />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
