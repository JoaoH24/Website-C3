import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/pages/Home";
import Directors from "./components/pages/Directors";
import Roadmap from "./components/pages/Roadmap";
import Catalog from "./components/pages/Catalog";
import Achievements from "./components/pages/Achievements";
import Blog from "./components/pages/Blog";
import AppLayout from "./components/templates/AppLayout";
import NotFound from "./components/pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "directiva", element: <Directors /> },
      { path: "roadmap", element: <Roadmap /> },
      { path: "catalogo", element: <Catalog /> },
      { path: "logros", element: <Achievements /> },
      { path: "blog", element: <Blog /> },
    ],
    errorElement: <NotFound />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
