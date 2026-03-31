import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";
import HomePage  from "../../Pages/Homepage/Hompage.tsx";
import MapPage  from "../../Pages/Map/Map.tsx";
import ToursPage from "../../Pages/Homepage/Tours/ToursPage.tsx";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/map", element: <MapPage /> },
      { path: "/tours", element: <ToursPage /> },
    ],
  },
]);
