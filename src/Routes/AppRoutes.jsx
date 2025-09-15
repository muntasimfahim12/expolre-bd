// client/src/routes/AppRoutes.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import AllSpots from "../pages/AllSpots";
import Login from "../pages/Login";
import Register from "../pages/Register";
import SpotCard from "../components/SpotCard";
import NotFound404 from "../pages/NotFound404";
import ErrorPage from "../pages/ErrorPage";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UpdateSpot from "../pages/UpdateSpot";
import ViewSpotDetails from "../pages/ViewSpotDetails";
import PrivateRoute from "./PrivateRoute"; // PrivateRoute ইমপোর্ট কর

// Router setup
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
        <Footer />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/spots",
    element: (
      <PrivateRoute>
        <Navbar />
        <AllSpots />
        <Footer />
      </PrivateRoute>
    ),
    loader: async () => {
      const res = await fetch("https://explore-bd-server-phi.vercel.app/users");
      if (!res.ok) {
        throw new Response("Failed to load spots", { status: res.status });
      }
      return res.json();
    },
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: (
      <>
        <Navbar />
        <Login />
        <Footer />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: (
      <>
        <Navbar />
        <Register />
        <Footer />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/add-spot",
    element: (
      <>
        <Navbar />
        <SpotCard />
        <Footer />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/update-spot/:id",
    element: (
      <>
        <Navbar />
        <UpdateSpot />
        <Footer />
      </>
    ),
  },
  {
    path: "/view-spot/:id",
    element: (
      <>
        <Navbar />
        <ViewSpotDetails />
        <Footer />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "*",
    element: (
      <>
        <Navbar />
        <NotFound404 />
        <Footer />
      </>
    ),
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
